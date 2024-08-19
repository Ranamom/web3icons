import { INetworkMetadata } from '../types'

export const networks: INetworkMetadata[] = [
  {
    id: 'kujira',
    name: 'Kujira',
    variants: ['branded', 'mono'],
  },
  {
    id: 'eos',
    name: 'EOS evm',
    chainId: 17777,
    variants: ['branded', 'mono'],
  },
  {
    id: 'aurora',
    name: 'Aurora',
    shortname: 'aurora',
    chainId: 1313161554,
    variants: ['branded', 'mono'],
  },
  {
    id: 'polygon-pos',
    name: 'Polygon',
    shortname: 'MATIC',
    chainId: 137,
    variants: ['branded', 'mono'],
  },
  {
    id: 'cardano',
    name: 'Cardano',
    variants: ['branded', 'mono'],
  },
  {
    id: 'tron',
    name: 'TRON',
    variants: ['branded', 'mono'],
  },
  {
    id: 'polygon-zkevm',
    name: 'Polygon zkEVM',
    chainId: 1101,
    variants: ['branded', 'mono'],
  },
  {
    id: 'telos',
    name: 'Telos',
    chainId: 40,
    variants: ['branded', 'mono'],
  },
  {
    id: 'algorand',
    name: 'Algorand',
    variants: ['mono'],
  },
  {
    id: 'mode',
    name: 'Mode',
    variants: ['branded', 'mono'],
  },
  {
    id: 'neon-evm',
    name: 'Neon EVM',
    chainId: 245022934,
    variants: ['branded', 'mono'],
  },
  {
    id: 'cronos',
    name: 'Cronos',
    shortname: 'CRO',
    chainId: 25,
    variants: ['branded', 'mono'],
  },
  {
    id: 'ethereum',
    name: 'Ethereum',
    shortname: 'Ethereum',
    chainId: 1,
    variants: ['branded', 'mono'],
  },
  {
    id: 'starknet',
    name: 'StarkNet',
    variants: ['branded', 'mono'],
  },
  {
    id: 'kava',
    name: 'Kava',
    chainId: 2222,
    variants: ['branded', 'mono'],
  },
  {
    id: 'linea',
    name: 'Linea',
    chainId: 59144,
    variants: ['branded', 'mono'],
  },
  {
    id: 'filecoin',
    name: 'Filecoin',
    chainId: 314,
    variants: ['branded', 'mono'],
  },
  {
    id: 'zilliqa',
    name: 'Zilliqa',
    chainId: 32769,
    variants: ['branded', 'mono'],
  },
  {
    id: 'cosmos',
    name: 'Cosmos',
    variants: ['branded', 'mono'],
  },
  {
    id: 'stellar',
    name: 'Stellar',
    variants: ['branded', 'mono'],
  },
  {
    id: 'ronin',
    name: 'Ronin',
    shortname: 'ron',
    variants: ['branded', 'mono'],
  },
  {
    id: 'osmosis',
    name: 'Osmosis',
    shortname: 'Osmo',
    variants: ['branded', 'mono'],
  },
  {
    id: 'xai',
    name: 'XAI',
    variants: ['branded', 'mono'],
  },
  {
    id: 'manta-pacific',
    name: 'Manta Pacific',
    chainId: 169,
    variants: ['branded', 'mono'],
  },
  {
    id: 'immutable',
    name: 'Immutable zkEVM',
    chainId: 13371,
    variants: ['branded', 'mono'],
  },
  {
    id: 'zora-network',
    name: 'Zora',
    nativeCoinId: 'weth',
    chainId: 7777777,
    variants: ['branded'],
  },
  {
    id: 'injective',
    name: 'Injective',
    variants: ['branded', 'mono'],
  },
  {
    id: 'solana',
    name: 'Solana',
    shortname: 'Solana',
    variants: ['branded', 'mono'],
  },
  {
    id: 'blast',
    name: 'Blast',
    chainId: 81457,
    variants: ['branded', 'mono'],
  },
  {
    id: 'moonbeam',
    name: 'Moonbeam',
    chainId: 1284,
    variants: ['branded', 'mono'],
  },
  {
    id: 'astar',
    name: 'Astar',
    chainId: 592,
    variants: ['branded', 'mono'],
  },
  {
    id: 'zksync',
    name: 'zkSync era',
    shortname: 'zkSync',
    chainId: 324,
    variants: ['branded', 'mono'],
  },
  {
    id: 'ordinals',
    name: 'Bitcoin',
    shortname: 'Ordinals',
    nativeCoinId: 'bitcoin',
    variants: ['branded', 'mono'],
  },
  {
    id: 'juno',
    name: 'Juno',
    variants: ['branded', 'mono'],
  },
  {
    id: 'polkadot',
    name: 'Polkadot',
    variants: ['branded', 'mono'],
  },
  {
    id: 'beam',
    name: 'Beam',
    chainId: 4337,
    variants: ['branded', 'mono'],
  },
  {
    id: 'boba',
    name: 'Boba Network',
    chainId: 288,
    variants: ['branded', 'mono'],
  },
  {
    id: 'elrond',
    name: 'MultiversX',
    shortname: 'elrond',
    nativeCoinId: 'elrond-erd-2',
    variants: ['branded', 'mono'],
  },
  {
    id: 'celo',
    name: 'Celo',
    shortname: 'celo',
    chainId: 42220,
    variants: ['branded', 'mono'],
  },
  {
    id: 'base',
    name: 'Base',
    chainId: 8453,
    variants: ['branded', 'mono'],
  },
  {
    id: 'binance-smart-chain',
    name: 'BNB Smart Chain',
    shortname: 'BSC',
    chainId: 56,
    variants: ['branded', 'mono'],
  },
  {
    id: 'loopring',
    name: 'Loopring',
    variants: ['branded', 'mono'],
  },
  {
    id: 'fantom',
    name: 'Fantom',
    chainId: 250,
    variants: ['branded', 'mono'],
  },
  {
    id: 'avalanche',
    name: 'Avalanche',
    shortname: 'AVAX',
    chainId: 43114,
    variants: ['branded', 'mono'],
  },
  {
    id: 'optimistic-ethereum',
    name: 'Optimism',
    shortname: 'Optimism',
    nativeCoinId: 'ethereum',
    chainId: 10,
    variants: ['branded', 'mono'],
  },
  {
    id: 'scroll',
    name: 'Scroll',
    variants: ['branded', 'mono'],
  },
  {
    id: 'aptos',
    name: 'Aptos',
    variants: ['branded', 'mono'],
  },
  {
    id: 'sui',
    name: 'Sui',
    variants: ['branded', 'mono'],
  },
  {
    id: 'chiliz',
    name: 'Chiliz',
    chainId: 88888,
    variants: ['branded', 'mono'],
  },
  {
    id: 'x-layer',
    name: 'X Layer',
    variants: ['branded', 'mono'],
  },
  {
    id: 'etherlink',
    name: 'etherlink',
    shortname: 'etherlink',
    chainId: 42793,
    variants: ['branded', 'mono'],
  },
  {
    id: 'arbitrum-one',
    name: 'Arbitrum One',
    shortname: 'Arbitrum',
    nativeCoinId: 'ethereum',
    chainId: 42161,
    variants: ['branded', 'mono'],
  },
  {
    id: 'xrp',
    name: 'XRP Ledger',
    shortname: 'xrp',
    nativeCoinId: 'ripple',
    variants: ['mono'],
  },
  {
    id: 'cosmos-hub',
    name: 'Cosmos Hub',
    nativeCoinId: 'cosmos',
    variants: ['branded', 'mono'],
  },
  {
    id: 'metis-andromeda',
    name: 'Metis Andromeda',
    nativeCoinId: 'metis-token',
    chainId: 1088,
    variants: ['branded', 'mono'],
  },
  {
    id: 'moonriver',
    name: 'Moonriver',
    shortname: 'moonriver',
    nativeCoinId: 'moonriver',
    chainId: 1285,
    variants: ['branded', 'mono'],
  },
  {
    id: 'sei-network',
    name: 'Sei Network',
    nativeCoinId: 'sei-network',
    variants: ['branded', 'mono'],
  },
  {
    id: 'litecoin',
    name: 'Litecoin',
    nativeCoinId: 'litecoin',
    variants: ['branded', 'mono'],
  },
  {
    id: 'wemix',
    name: 'Wemix',
    nativeCoinId: 'wemix',
    variants: ['branded', 'mono'],
  },
  {
    id: 'gnosis',
    name: 'Gnosis Chain',
    nativeCoinId: 'xDai',
    chainId: 100,
    variants: ['branded', 'mono'],
  },
  {
    id: 'near-protocol',
    name: 'Near Protocol',
    shortname: 'near-protocol',
    nativeCoinId: 'near',
    variants: ['branded', 'mono'],
  },
  {
    id: 'hedera-hashgraph',
    name: 'Hedera Hashgraph',
    shortname: 'hedera',
    nativeCoinId: 'hedera-hashgraph',
    chainId: 295,
    variants: ['branded', 'mono'],
  },
  {
    id: 'rari',
    name: 'Rari',
    nativeCoinId: 'rari',
    variants: ['branded', 'mono'],
  },
  {
    id: 'bitcoin',
    name: 'Bitcoin',
    shortname: 'bitcoin',
    nativeCoinId: 'bitcoin',
    variants: ['branded', 'mono'],
  },
  {
    id: 'zetachain',
    name: 'Zeta Chain',
    nativeCoinId: 'zetachain',
    chainId: 7000,
    variants: ['branded', 'mono'],
  },
  {
    id: 'fio',
    name: 'FIO Protocol',
    shortname: 'fio',
    nativeCoinId: 'FIO',
    variants: ['branded', 'mono'],
  },
  {
    id: 'stargaze',
    name: 'Stargaze',
    nativeCoinId: 'stargaze',
    variants: ['branded', 'mono'],
  },
  {
    id: 'iotex',
    name: 'IoTeX',
    shortname: 'iotex',
    nativeCoinId: 'iotex',
    chainId: 4689,
    variants: ['branded', 'mono'],
  },
  {
    id: 'clover',
    name: 'Clover',
    nativeCoinId: 'clover-finance',
    variants: ['branded', 'mono'],
  },
  {
    id: 'gravity',
    name: 'gravity-network',
    variants: ['branded', 'mono'],
  },
  {
    id: 'lava-network',
    name: 'lava-network',
    variants: ['branded', 'mono'],
  },
  {
    id: 'neo-x',
    name: 'neo-x',
    variants: ['branded', 'mono'],
  },
  {
    id: 'abstract',
    name: 'abstract',
    variants: ['branded', 'mono'],
  },
  {
    id: 'acala',
    name: 'Acala',
    nativeCoinId: 'acala',
    variants: ['branded', 'mono'],
  },
  {
    id: 'apex-layer',
    name: 'apex layer',
    variants: ['branded', 'mono'],
  },
  {
    id: 'arbitrum-nova',
    name: 'Arbitrum Nova',
    nativeCoinId: 'ethereum',
    chainId: 42170,
    variants: ['branded', 'mono'],
  },
  {
    id: 'bitkub-chain',
    name: 'Bitkub Chain',
    nativeCoinId: 'bitkub-coin',
    chainId: 96,
    variants: ['branded', 'mono'],
  },
  {
    id: 'coinex-smart-chain',
    name: 'CoinEx Smart Chain',
    shortname: 'CSC',
    nativeCoinId: 'coinex-token',
    chainId: 52,
    variants: ['branded', 'mono'],
  },
  {
    id: 'conflux',
    name: 'Conflux',
    shortname: 'conflux',
    nativeCoinId: 'conflux-token',
    chainId: 1030,
    variants: ['branded', 'mono'],
  },
  {
    id: 'cronos-zkevm',
    name: 'Cronos zkEVM',
    nativeCoinId: 'cronos-zkevm-cro',
    chainId: 388,
    variants: ['branded', 'mono'],
  },
  {
    id: 'elastos',
    name: 'Elastos Smart Contract Chain',
    shortname: 'Elastos',
    nativeCoinId: 'elastos',
    chainId: 20,
    variants: ['branded', 'mono'],
  },
  {
    id: 'energy-web',
    name: 'energy web',
    shortname: 'energy',
    chainId: 246,
    variants: ['branded', 'mono'],
  },
  {
    id: 'enuls',
    name: 'enuls',
    shortname: 'enuls',
    chainId: 119,
    variants: ['branded', 'mono'],
  },
  {
    id: 'ethereum-classic',
    name: 'Ethereum Classic',
    nativeCoinId: 'ethereum-classic',
    chainId: 61,
    variants: ['branded', 'mono'],
  },
  {
    id: 'flare',
    name: 'flare',
    shortname: 'flare',
    chainId: 14,
    variants: ['branded', 'mono'],
  },
  {
    id: 'fraxtal',
    name: 'Fraxtal',
    nativeCoinId: 'fraxtal',
    chainId: 252,
    variants: ['branded', 'mono'],
  },
  {
    id: 'fuse',
    name: 'Fuse',
    nativeCoinId: 'fuse-network-token',
    chainId: 122,
    variants: ['branded', 'mono'],
  },
  {
    id: 'kardia',
    name: 'kardia chain',
    shortname: 'kardia',
    chainId: 24,
    variants: ['branded', 'mono'],
  },
  {
    id: 'lukso',
    name: 'Lukso',
    nativeCoinId: 'lukso-token-2',
    chainId: 42,
    variants: ['branded', 'mono'],
  },
  {
    id: 'lyra',
    name: 'lyra chain',
    shortname: 'lyra',
    chainId: 957,
    variants: ['branded', 'mono'],
  },
  {
    id: 'meter',
    name: 'Meter',
    nativeCoinId: 'meter',
    chainId: 82,
    variants: ['branded', 'mono'],
  },
  {
    id: 'oasys',
    name: 'Oasys',
    nativeCoinId: 'oasys',
    chainId: 248,
    variants: ['branded', 'mono'],
  },
  {
    id: 'okex-chain',
    name: 'OKT Chain',
    shortname: 'OKEx',
    nativeCoinId: 'oec-token',
    chainId: 66,
    variants: ['branded', 'mono'],
  },
  {
    id: 'rollux',
    name: 'Rollux',
    nativeCoinId: 'syscoin',
    chainId: 570,
    variants: ['branded', 'mono'],
  },
  {
    id: 'rootstock',
    name: 'Rootstock RSK',
    nativeCoinId: 'rootstock',
    chainId: 30,
    variants: ['branded', 'mono'],
  },
  {
    id: 'shiden',
    name: 'shiden',
    shortname: 'shiden',
    chainId: 336,
    variants: ['branded', 'mono'],
  },
  {
    id: 'shimmer-evm',
    name: 'shimmer evm',
    shortname: 'shimmer',
    chainId: 148,
    variants: ['branded', 'mono'],
  },
  {
    id: 'songbird',
    name: 'Songbird',
    nativeCoinId: 'songbird',
    chainId: 19,
    variants: ['branded', 'mono'],
  },
  {
    id: 'step',
    name: 'step',
    shortname: 'step',
    chainId: 1234,
    variants: ['branded', 'mono'],
  },
  {
    id: 'sys',
    name: 'syscoin',
    shortname: 'sys',
    chainId: 57,
    variants: ['branded', 'mono'],
  },
  {
    id: 'theta',
    name: 'Theta',
    nativeCoinId: 'theta-token',
    chainId: 361,
    variants: ['branded', 'mono'],
  },
  {
    id: 'thundercore',
    name: 'ThunderCore',
    nativeCoinId: 'thunder-token',
    chainId: 108,
    variants: ['branded', 'mono'],
  },
  {
    id: 'ubiq',
    name: 'ubiq',
    shortname: 'ubiq',
    chainId: 8,
    variants: ['branded', 'mono'],
  },
  {
    id: 'ultron',
    name: 'Ultron',
    nativeCoinId: 'ultron',
    chainId: 1231,
    variants: ['branded', 'mono'],
  },
  {
    id: 'velas',
    name: 'Velas',
    shortname: 'velas',
    nativeCoinId: 'velas',
    chainId: 106,
    variants: ['branded', 'mono'],
  },
  {
    id: 'tomochain',
    name: 'Viction',
    nativeCoinId: 'tomochain',
    chainId: 88,
    variants: ['branded', 'mono'],
  },
  {
    id: 'xdc',
    name: 'xdc network',
    shortname: 'xdc',
    chainId: 50,
    variants: ['branded', 'mono'],
  },
  {
    id: 'zyx',
    name: 'zyx',
    shortname: 'zyx',
    chainId: 55,
    variants: ['branded', 'mono'],
  },
  {
    id: 'kuchain',
    name: 'kuchain',
    shortname: 'kuchain',
    chainId: 321,
    variants: ['branded', 'mono'],
  },
  {
    id: 'dogechain',
    name: 'Dogechain',
    chainId: 2000,
    variants: ['branded'],
  },
  {
    id: 'hubblenet',
    name: 'hubble exchange',
    shortname: 'hubble',
    chainId: '1992',
    variants: ['branded', 'mono'],
  },
  {
    id: 'milkomeda-a1',
    name: 'milkomeda A1',
    shortname: 'milkomeda',
    chainId: '2002',
    variants: ['branded', 'mono'],
  },
  {
    id: 'milkomeda-c1',
    name: 'milkomeda C1',
    shortname: 'milkomeda',
    chainId: '2001',
    variants: ['branded', 'mono'],
  },
  {
    id: 'reya',
    name: 'reya',
    shortname: 'reya',
    chainId: '1729',
    variants: ['branded', 'mono'],
  },
  {
    id: 'tenet',
    name: 'Tenet',
    chainId: 1559,
    variants: ['branded', 'mono'],
  },
  {
    id: 'bouncebit',
    name: 'BounceBit',
    chainId: 6001,
    variants: ['branded', 'mono'],
  },
  {
    id: 'mantle',
    name: 'Mantle',
    chainId: 5000,
    variants: ['branded', 'mono'],
  },
  {
    id: 'nahmii',
    name: 'Nahmii',
    shortname: 'nahmii',
    chainId: 4061,
    variants: ['branded', 'mono'],
  },
  {
    id: 'tombchain',
    name: 'Tombchain',
    shortname: 'tomb',
    chainId: '6969',
    variants: ['branded'],
  },
]
