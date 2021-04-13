import { BigNumber, Contract, ethers, Overrides } from 'ethers';
import cfg from './abiConfig'
import { formatEther, parseEther } from 'ethers/lib/utils';

class poolCash {
    constructor() {
        const rpcUrl =  'https://http-mainnet-node.defibox.com'
        const newProvider = new ethers.providers.JsonRpcProvider(rpcUrl);
        this.provider = newProvider
        this.signer = newProvider.getSigner();
    }
    // 池子解锁时间
    async getUnlockTime(poolName) {
        const poolContract = new Contract(cfg[poolName].address, cfg[poolName].abi, this.provider);
        let unlockTime = await poolContract.unlockTime()
        return unlockTime.toNumber()*1000
    }
    // 池子日产量
    async getRewardRate(poolName) {
        const poolContract = new Contract(cfg[poolName].address, cfg[poolName].abi, this.provider);
        let rewardRate = await poolContract.rewardRate()
        return formatEther(rewardRate) * 24 * 3600
    }
    
}

export default poolCash
