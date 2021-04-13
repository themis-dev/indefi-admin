

// PRODUCT
const configurations = {
    'HT/USDTmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x590837F6b9135C67c9108902BDC66C242E53D0ea'
    },
    'HBTC/USDTmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x35c9EC691BF71Bae6C37385154e0EaFeb77111eC'
    },
    'ETH/USDTmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x4193EE8b47cC6C55Fa6FaFaA57E32de5EE9aA54d'
    },
    'FEI/MDXmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xF51ee4d19FBF44015907dD91101246E664e2FFFB'
    },
    'HT/HUSDmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x4Ea889De4c92971F67ec10149047d9bf950eaace'
    },
    'HT/MDXmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x6D53e754336e82d3D7647992b6E034D587855628'
    },
    'ETH/HBTCmdexCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x42cE4B20A800A6dC9193Aca57877148D4a7e59D7'
    },
    'TPT/HUSDpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x39Be0ec3e79fBc9a9ff2824e5D58Ec95437832dd'
    },
    'HT/MDXpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x0bfc9841EEdB386Da27B3c30D7C7D5fc07975133'
    },
    'USDT/HUSDpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x4bbd475745b0065a377407E6D7bB2f4B57c78517'
    },
    'HT/HBTCpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x6Be6dAf7d74fBF22771b9Dc5ef8cDFC2A2F9ED5e'
    },
    'HT/ETHpippiCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x51277373A27e27e255F030290377B1eFE2b0E5bF'
    },
    'IDT/HTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x4f72c9d41FD2622eb72ce977D5c33c8b775084B4'
    },
    'IDT/USDTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x3b2FB91CD1b5C14889D724f31479d66517a0079e'
    },
    'ibHTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x546e1B3C087753c3A0Be89743E0309c38F70e548'
    },
    'ibHBTCCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xB8BE78Ee2197AaD7A5bdB0E97551961A8Cc6edC2'
    },
    'ibETHCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0x532e7b22b79849cd13D3167b3315b1a5810Fcd5B'
    },
    'ibUSDTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xaAcDc174a3c0ADc7C2194628E276F31aAC6B356c'
    },
    'ibFEICashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xaC0c256a07eFa38F7640421cE438C44D32B9cDb4'
    },
    'ibMDXCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xF14978ec4C9D54835B8F6817e2095eaD665Fe6ff'
    },
    'ibTPTCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xb30cE78CC149dF4FFccbB2d193C900384724b4C3'
    },
    'ibHUSDCashPool': {
        abi: require('./wolfxPool.json'),
        address: '0xc681860B816B466eaeD94712619AfFD66267D1D7'
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
  }
  
export default configurations