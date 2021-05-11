const { ethers, Wallet, providers, getDefaultProvider, BigNumber } = require('ethers')
const { HDNode, parseEther, parseUnits, formatUnits, formatEther } = require('ethers/lib/utils')
// account
// const wallet =  Wallet.createRandom()
// console.log(wallet)
// console.log(wallet.address)
// console.log(wallet.mnemonic)
// console.log(wallet.privateKey)
// 0xa553920dF0aA47fEf1f6aFD93BA9f3C1091254f7
// {
//   phrase: 'spice globe knife catalog glue zero pencil exit goat flush success occur',
//   path: "m/44'/60'/0'/0/0",
//   locale: 'en'
// }

const rpcUrl =  'https://http-mainnet-node.defibox.com'//'https://http-mainnet.hecochain.com'
const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
const singer = provider.getSigner()

export const createRandomWallet = () => {
    return Wallet.createRandom()
}

const walletMnemonic = Wallet.fromMnemonic('spice globe knife catalog glue zero pencil exit goat flush success occur')
console.log(walletMnemonic)
console.log(walletMnemonic.privateKey)


export const getAddressBalence = async (address) => {
    try {
        const balance = await provider.getBalance(address)
        return formatEther(balance)
    } catch (error) {
        console.error('error', error)
        return BigNumber.from(0)
    }
}


// const provider = getDefaultProvider('ropsten')


provider.getBalance('0xF475423F481115d1C9B313a285fd9AD0c5A72548').then(res => {
    console.log('0xF475423F481115d1C9B313a285fd9AD0c5A72548 balance: ' + formatEther(res))
})

// Wallet(walletMnemonic.privateKey, provider)
const providerWallet = walletMnemonic.connect(provider)
providerWallet.getBalance().then(res => {
    console.log(formatEther(res))
})

function sendTx() {
    let tx = {
        // nonce: 0,
        // gasLimit: 21000,
        // gasPrice: utils.bigNumberify("20000000000"),
        // chainId: 128,
        to: "0xF475423F481115d1C9B313a285fd9AD0c5A72548",
        value: parseEther('0.01'),
        data: '0x'
    };
    providerWallet.sendTransaction(tx).then(res => {
        console.log(res)
    })
}

// sendTx()

