

// PRODUCT
const configurations = {
    'HT/USDTmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x590837F6b9135C67c9108902BDC66C242E53D0ea',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'HBTC/USDTmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x35c9EC691BF71Bae6C37385154e0EaFeb77111eC',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'ETH/USDTmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x4193EE8b47cC6C55Fa6FaFaA57E32de5EE9aA54d',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'FEI/MDXmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xF51ee4d19FBF44015907dD91101246E664e2FFFB',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'HT/HUSDmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x4Ea889De4c92971F67ec10149047d9bf950eaace',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'HT/MDXmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x6D53e754336e82d3D7647992b6E034D587855628',
        rateAbi: require('./rate.json'),
        rateAddress: '0xe46eDd6df4Cf4ffBA27a4097490cDd1369F5271D'
    },
    'ETH/HBTCmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x42cE4B20A800A6dC9193Aca57877148D4a7e59D7',
        rateAbi: require('./rate.json'),
        rateAddress: '0xe46eDd6df4Cf4ffBA27a4097490cDd1369F5271D'
    },
    'TPT/HUSDpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x39Be0ec3e79fBc9a9ff2824e5D58Ec95437832dd',
        rateAbi: require('./rate.json'),
        rateAddress: '0x1e3c67cB91A88603781F19681543Ef62d3B9d5D6'
    },
    'HT/MDXpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x0bfc9841EEdB386Da27B3c30D7C7D5fc07975133',
        rateAbi: require('./rate.json'),
        rateAddress: '0xb80354C78A922310Eea9Bd6bA62baff4DB4BF809'
    },
    'USDT/HUSDpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x4bbd475745b0065a377407E6D7bB2f4B57c78517',
        rateAbi: require('./rate.json'),
        rateAddress: '0xb80354C78A922310Eea9Bd6bA62baff4DB4BF809'
    },
    'HT/HBTCpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x6Be6dAf7d74fBF22771b9Dc5ef8cDFC2A2F9ED5e',
        rateAbi: require('./rate.json'),
        rateAddress: '0xb80354C78A922310Eea9Bd6bA62baff4DB4BF809'
    },
    'HT/ETHpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x51277373A27e27e255F030290377B1eFE2b0E5bF',
        rateAbi: require('./rate.json'),
        rateAddress: '0xb80354C78A922310Eea9Bd6bA62baff4DB4BF809'
    },
    'IDT/HTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x4f72c9d41FD2622eb72ce977D5c33c8b775084B4',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'IDT/USDTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x3b2FB91CD1b5C14889D724f31479d66517a0079e',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'ibHTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x546e1B3C087753c3A0Be89743E0309c38F70e548',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'ibHBTCCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xB8BE78Ee2197AaD7A5bdB0E97551961A8Cc6edC2',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'ibETHCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x532e7b22b79849cd13D3167b3315b1a5810Fcd5B',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'ibUSDTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xaAcDc174a3c0ADc7C2194628E276F31aAC6B356c',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'ibFEICashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xaC0c256a07eFa38F7640421cE438C44D32B9cDb4',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'ibMDXCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xF14978ec4C9D54835B8F6817e2095eaD665Fe6ff',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'ibTPTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xb30cE78CC149dF4FFccbB2d193C900384724b4C3',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'ibHUSDCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xc681860B816B466eaeD94712619AfFD66267D1D7',
        rateAbi: require('./rate.json'),
        rateAddress: '0x55413F0Cfce24132bB446c069D7C04D4bc9eA511'
    },
    'HT': {
        address: '0x0000000000000000000000000000000000000000'
    },
    'USDT': {
        address: '0xa71edc38d189767582c38a3145b5873052c3e47a'
    },
    'HUSD': {
        address: '0x0298c2b32eae4da002a15f36fdf7615bea3da047'
    },
    'ETH': {
        address: '0x64ff637fb478863b7468bc97d30a5bf3a428a1fd'
    },
    'HBTC': {
        address: '0x66a79d23e58475d2738179ca52cd0b41d73f0bea'
    },
    'IDT': {
        address: '0x950bfdda329d120f6763d3c7bedb35d2880bf7bf'
    },
    'FEI': {
        address: '0x485cdbff08a4f91a16689e73893a11ae8b76af6d'
    },
    'MDX': {
        address: '0x25d2e80cb6b86881fd7e07dd263fb79f4abe033c'
    },
    'TPT': {
        address: '0x9ef1918a9beE17054B35108bD3E2665e2Af1Bb1b'
    },
    'PIPI': {
        address: '0xaaae746b5e55d14398879312660e9fde07fbc1dc'
    },
    'IDT/USDT': {
        address: '0x85324513943D1698C4a3dC5F356EcCFFC4Ccf35e'
    },
    'IDT/HT': {
        address: '0x30bD3Ee0B323E6FD82C86a4e43d34BB2A61b4833'
    },
    'ibHT': {
        address: '0x6fD0876195C83D2448b2502c1bDafA6BCdd4096e'
    },
    'ibHBTC': {
        address: '0x9146557EA57b05b2bF0e3F7d3E7fdF7BB02815Fd'
    },
    'ibETH': {
        address: '0x8103943feF76057152dA7AB6F875A3B1a194Ad99'
    },
    'ibUSDT': {
        address: '0xd01c8Ea78f68a864C62893a5254f64bbbbBA7CFB'
    },
    'ibFEI': {
        address: '0xf0a2067E688c8716105b0E977AD6F1fdaa994d56'
    },
    'ibMDX': {
        address: '0x6867d53b9Fd282A930964d206dD0b6aCA220BDf7'
    },
    'ibTPT': {
        address: '0x91519a876111645CC4a6fA76202Cd84DCCc295fB'
    },
    'ibHUSD': {
        address: '0xE1A8F716AFB6b91BA6fc7E2bEEB7c688Ee58b579'
    },
    'HT/USDTMDEX': {
        address: '0x499B6E03749B4bAF95F9E70EeD5355b138EA6C31'
    },
    'HBTC/USDTMDEX': {
        address: '0xFBe7b74623e4be82279027a286fa3A5b5280F77c'
    },
    'ETH/USDTMDEX': {
        address: '0x78C90d3f8A64474982417cDB490E840c01E516D4'
    },
    'FEI/MDXMDEX': {
        address: '0x27f1bEA6fc230D5162Bb42B2C97CAe896cc397db'
    },
    'HT/HUSDMDEX': {
        address: '0x3375afF2CAcF683b8FC34807B9443EB32e7Afff6'
    },
    'HT/MDXMDEX': {
        address: '0x6Dd2993B50b365c707718b0807fC4e344c072eC2'
    },
    'ETH/HBTCMDEX': {
        address: '0x793c2a814e23EE38aB46412Be65E94Fe47D4B397'
    },
    'TPT/HUSDPIPPI': {
        address: '0x38F658896533AFaffE7c2d93E3De8e7241116173'
    },
    'HT/MDXPIPPI': {
        address: '0x122a5E4ec0e9b92FE7A0527FF2Ab47070c13c0cF'
    },
    'USDT/HUSDPIPPI': {
        address: '0x5B359f3f1939Fcf9E192acC1a7015Bc62538AD55'
    },
    'HT/HBTCPIPPI': {
        address: '0x8cA29aAa7F053C5676539C98f636E0fC1679c5ab'
    },
    'HT/ETHPIPPI': {
        address: '0xAeb25E9039a5C0692208C057d68b407f6f2602eE'
    },
  }
  
export default configurations