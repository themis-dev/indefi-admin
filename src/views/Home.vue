<template>
  <div class="home">
    <!-- <div class="conncet" @click="connect">连接钱包</div> -->
    <div class="home-content">
      <div class="content-item">
        <h1>TVL数据 </h1>
        <div>
          <a-statistic title="总览总存款" :precision="2" :value="tvl.tvl" style="margin-bottom: 20px" prefix='$'/>
          <a-statistic title="无损矿池TVL" :precision="2" :value="tvl.nonPrincipalTvl" style="margin-bottom: 20px" prefix='$'/>
          <a-statistic title="生态矿池TVL" :precision="2" :value="tvl.ecologicalTvl" style="margin-bottom: 20px"  prefix='$'/>
          <a-statistic title="MdexTVL" :precision="2" :value="tvl.liquidityMdxTvl" style="margin-bottom: 20px" prefix='$' />
          <a-statistic title="PippiTVL" :precision="2" :value="tvl.liquidityPippiTvl" style="margin-bottom: 20px"  prefix='$'/>
        </div>
      </div>
       <div class="content-item">
        <h1>所有池子剩余IDT数量，解锁时间, 日产量</h1>
        <div style="margin-bottom: 10px">钱包地址： {{account}}</div>
        <a-table :columns="columns" :data-source="data" :pagination='false' bordered>
          <a slot="name" slot-scope="text" v-if="text !== 'Total'">{{text.includes('mdex') ? text.substring(0, text.length -12) + ' (MDEX)' : text.includes('pippi') ? text.substring(0, text.length -13) + ' (PIPPI)': text.substring(0, text.length -8)}}</a>
          <a slot="name" slot-scope="text" v-else>{{text}}</a>
          <span slot="action" slot-scope="text, record" v-if="record.name !== 'Total'">
            <a @click="() => openVisible(record.name)">转入IDT</a>
            <a-divider type="vertical" />
            <a @click="() => openRateVisible(record.name, record.name.includes('mdex') ? record.name.substring(0, record.name.length -12) + 'MDEX' : record.name.includes('pippi') ? record.name.substring(0, record.name.length -13) + 'PIPPI': record.name.substring(0, record.name.length -8))">调整池子日产量</a>
          </span>
        </a-table>
        <div>
        </div>
      </div>
      <div class="content-item">
        <h1>杠杆池子实时MDX， PIPI收益</h1>
        <a-table :columns="columns1" :data-source="data1" :pagination='false' bordered class="columns1-table">
          <a slot="name" slot-scope="text" v-if="text !== 'Total'">{{text.includes('mdex') ? text.substring(0, text.length -12)+ ' (MDEX)' : text.substring(0, text.length -13) + ' (PIPPI)'}}</a>
          <a slot="name" slot-scope="text" v-else>{{text}}</a>
          <span slot="mdx" slot-scope="text">{{text === '0.0' ? '--' : text}}</span>
           <span slot="pippi" slot-scope="text">{{text === '0.0' ? '--' : text}}</span>
        </a-table>
        <div>
        </div>
      </div>
    </div>
    <a-modal
      v-model="visible" :title="poolName + ' 转入IDT'"
    >
      <template slot="footer">
        <!-- <a-button key="back" type="primary" @click="approve" v-if="allowanceAmount === 0">
          授权
        </a-button> -->
        <a-button key="submit" type="primary" @click="handleOk" >
          转账
        </a-button>
      </template>
      <a-input placeholder="输入IDT数量" v-model="faNum"/>
    </a-modal>
    <a-modal
      v-model="rateVisible" :title="ratePoolName + ' 调整池子日产量'"
    >
      <template slot="footer">
        <a-button key="submit" type="primary" @click="submit" >
          提交
        </a-button>
      </template>
      <a-input placeholder="输入调整数量" v-model="rateNum"/>
    </a-modal>
  </div>
</template>

<script>
// @ is an alias to /src
// import { createRandomWallet, getAddressBalence } from '@/eth/wallet.js'
import { BigNumber, ethers } from 'ethers';
import { MetaMaskClientConnect } from '@/eth/metamask.js'
import { commify, formatEther, parseEther, parseUnits} from 'ethers/lib/utils';
import { getWolfGlobal } from '@/api'
import ERC20 from '@/eth/erc20';
import poolCash from '@/eth/contract';
import cfg from '@/eth/abiConfig';
import { parseTime } from '@/utils/index'

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
      allowanceAmount: 0,
      account: '',
      visible: false,
      faNum: '',
      rateNum: '',
      rateVisible: false,
      rateName: '',
      tvl: {},
      poolName: '',
      ratePoolName: '',
      columns:[
        {
          title: '池子名称',
          dataIndex: 'name',
          key: 'name',
           scopedSlots: { customRender: 'name' },
        },
        {
          title: '剩余IDT数量',
          dataIndex: 'num',
          key: 'num',
        },
        {
          title: '解锁时间',
          dataIndex: 'unlockTime',
          key: 'unlockTime',
        },
        {
          title: '日产量(IDT)',
          dataIndex: 'idtDaily',
          key: 'idtDaily',
        },
         {
          title: '操作',
          dataIndex: 'action',
          key: 'action',
          scopedSlots: { customRender: 'action' },
        },
      ],
      data: [
        {
          key: '1',
          name: 'HT/USDTmdexCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '2',
          name: 'HBTC/USDTmdexCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0,
        },
        {
          key: '3',
          name: 'ETH/USDTmdexCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '4',
          name: 'FEI/MDXmdexCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '5',
          name: 'HT/HUSDmdexCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '6',
          name: 'HT/MDXmdexCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '7',
          name: 'ETH/HBTCmdexCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '8',
          name: 'TPT/HUSDpippiCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '9',
          name: 'HT/MDXpippiCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '10',
          name: 'USDT/HUSDpippiCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '11',
          name: 'HT/HBTCpippiCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '12',
          name: 'HT/ETHpippiCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '13',
          name: 'IDT/HTCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '122',
          name: 'IDT/USDTCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '14',
          name: 'ibHTCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '15',
          name: 'ibHBTCCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '16',
          name: 'ibETHCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '17',
          name: 'ibUSDTCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '18',
          name: 'ibFEICashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '19',
          name: 'ibMDXCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '20',
          name: 'ibTPTCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '21',
          name: 'ibHUSDCashPool',
          num: 0,
          unlockTime: 0,
          idtDaily: 0
        },
        {
          key: '22',
          name: 'Total',
          num: 0,
          unlockTime: '',
          idtDaily: 0
        },
      ],
      columns1:[
        {
          title: '池子名称',
          dataIndex: 'name',
          key: 'name',
          scopedSlots: { customRender: 'name' },
        },
        {
          title: 'MDX收益(MDX)',
          dataIndex: 'mdx',
          key: 'mdx',
          scopedSlots: { customRender: 'mdx' },
        },
        {
          title: 'PIPPI收益(PIPI)',
          dataIndex: 'pippi',
          key: 'pippi',
          scopedSlots: { customRender: 'pippi' },
        },
      ],
      data1: [
        {
          key: '1',
          name: 'HT/USDTmdexCashPool',
          mdx: 0,
          pippi: 0
        },
        {
          key: '2',
          name: 'HBTC/USDTmdexCashPool',
          mdx: 0,
          pippi: 0
        },
        {
          key: '3',
          name: 'ETH/USDTmdexCashPool',
          mdx: 0,
          pippi: 0
        },
        {
          key: '4',
          name: 'FEI/MDXmdexCashPool',
          mdx: 0,
          pippi: 0
        },
        {
          key: '5',
          name: 'HT/HUSDmdexCashPool',
           mdx: 0,
          pippi: 0
        },
        {
          key: '6',
          name: 'HT/MDXmdexCashPool',
           mdx: 0,
          pippi: 0
        },
        {
          key: '7',
          name: 'ETH/HBTCmdexCashPool',
          mdx: 0,
          pippi: 0
        },
        {
          key: '8',
          name: 'TPT/HUSDpippiCashPool',
           mdx: 0,
          pippi: 0
        },
        {
          key: '9',
          name: 'HT/MDXpippiCashPool',
           mdx: 0,
          pippi: 0
        },
        {
          key: '10',
          name: 'USDT/HUSDpippiCashPool',
          mdx: 0,
          pippi: 0
        },
        {
          key: '11',
          name: 'HT/HBTCpippiCashPool',
           mdx: 0,
          pippi: 0
        },
        {
          key: '12',
          name: 'HT/ETHpippiCashPool',
           mdx: 0,
          pippi: 0
        },
        {
          key: '13',
          name: 'Total',
          mdx: 0,
          pippi: 0
        },
      ]
    }
  },
  async mounted() {
    // this.getWallet()
    // this.getBalance()
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    this.account = accounts[0]
    this.getTVLData()
    this.combinationData()
    this.combinationProfitData()
  },
  methods: {
    async openVisible(poolName) {
      this.visible = true
      this.faNum = ''
      this.poolName = poolName
      const tokenErc = new ERC20(cfg['IDT'].address)
      let  allowanceAmount = await tokenErc.allowance(this.account, cfg[this.poolName].address)
      console.log(allowanceAmount)
      this.allowanceAmount = Number(allowanceAmount)
    },
    async handleOk() {
      console.log(cfg[this.poolName].address)
      console.log(parseEther(this.faNum))
      const tokenErc = new ERC20(cfg['IDT'].address)
      await tokenErc.transfer(cfg[this.poolName].address, parseEther(this.faNum))
    },
    async approve() {
        const APPROVE_AMOUNT = ethers.constants.MaxUint256;
        const erc20 = new ERC20(cfg['IDT'].address)
        try {
            const result = await erc20.approve(cfg[this.poolName].address, APPROVE_AMOUNT)
            this.$message.success('发送交易中，请稍后');
        } catch (error) {
            console.log(error)
        }
    },
    async openRateVisible(poolName, name) {
      this.rateVisible = true
      console.log(name)
      this.ratePoolName = poolName
      this.rateName = name
    },
    async submit() {
      const pool = new poolCash()
      console.log(parseEther(this.rateNum))
      await pool.updateRewardRate(this.ratePoolName, cfg[this.rateName].address, parseEther(this.rateNum).div(24*3600))
    },
    getTVLData() {
      getWolfGlobal().then(res => {
        console.log(res)
        this.tvl = res.data
      })
    },
    async getPoolIDTBalance(poolName) {
        const tokenErc = new ERC20(cfg['IDT'].address)
        const IDTBalance = await tokenErc.balanceOf(cfg[poolName].address)
        return Number(formatEther(IDTBalance)).toFixed(2) //commify(Number(formatEther(IDTBalance)).toFixed(2))
    },
    combinationData() {
      const pool = new poolCash()
      this.idtNumTotal = 0
      this.idtDailyTotal = 0
      this.data.map(async v => {
          const idtNum = await this.getPoolIDTBalance(v.name)
          const unlockTime = await pool.getUnlockTime(v.name)
          const idtDaily = await pool.getRewardRate(v.name)
          v.num = commify(idtNum)
          v.unlockTime = parseTime(unlockTime)
          v.idtDaily = commify((idtDaily).toFixed(0))
          this.idtNumTotal += Number(idtNum)
          this.idtDailyTotal += Number(idtDaily)
          this.data[this.data.length-1].num = commify(this.idtNumTotal.toFixed(2))
          this.data[this.data.length-1].idtDaily = commify(this.idtDailyTotal.toFixed(2))
      })
    },
    combinationProfitData() {
      const MDXtokenErc = new ERC20(cfg['MDX'].address)
      const PIPItokenErc = new ERC20(cfg['PIPI'].address)
      this.balanceTotal = 0
      this.PIPIbalanceTotal = 0
      this.data1.map(async v => {
        if (v.name !== 'Total') {
          const balance = await MDXtokenErc.balanceOf(cfg[v.name].address)
          const PIPIbalance = await PIPItokenErc.balanceOf(cfg[v.name].address)
          v.mdx = commify(Number(formatEther(balance)).toFixed(2))
          v.pippi = commify(Number(formatEther(PIPIbalance)).toFixed(2))
          this.balanceTotal += Number(formatEther(balance))
          this.PIPIbalanceTotal += Number(formatEther(PIPIbalance))
        }
        this.data1[this.data1.length-1].mdx = this.balanceTotal.toFixed(2)
        this.data1[this.data1.length-1].pippi = this.PIPIbalanceTotal.toFixed(2)
      })
    },
    connect() {
      MetaMaskClientConnect()
    },
    // getWallet() {
    //   const wallet = createRandomWallet()
    //   console.log(wallet)
    // },
    // async getBalance() {
    //   const addr = '0xF475423F481115d1C9B313a285fd9AD0c5A72548'
    //   const balance = await getAddressBalence(addr)
    //   console.log(balance)
    // }
  }
}
</script>
<style lang="scss" scoped>
.home {
  padding: 50px 80px;
  @media (max-width: 959.95px){
    padding: 20px;
  }
  .conncet {
    width: 136px;
    height: 30px;
    background: linear-gradient(142deg, #2392F8 0%, #544AED 100%);
    border-radius: 17px;
    color: #fff;
    line-height: 30px;
    font-size: 14px;
    cursor: pointer;
    text-align: center;
  }
  .home-content {
    display: flex;
    justify-content: space-around;
     @media (max-width: 959.95px){

       flex-direction: column;
       .content-item {
         width: 80%;
         margin-top: 40px;
         h1 {
           font-size: 17px;
           margin-bottom: 20px;
         }
         .columns1-table {
           width: 100%;
         }
       }
    }
  }
}
</style>
