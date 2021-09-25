import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | bigint | string

export enum Blockchain {
  ETHEREUM = 1,
  BINANCE_SMART_CHAIN = 2,
  MATIC = 3
}

export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BSC_MAINNET = 56,
  BSC_TESTNET = 97,
  MATIC_MAINNET = 137
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESSES: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.ROPSTEN]: '0x0000000000000000000000000000000000000001',
  [ChainId.RINKEBY]: '0x0000000000000000000000000000000000000001',
  [ChainId.GÖRLI]: '0x0000000000000000000000000000000000000001',
  [ChainId.KOVAN]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC_MAINNET]: '0x0000000000000000000000000000000000000001',
  [ChainId.BSC_TESTNET]: '0xD6D546C6408CD06AC6e86f6e5d03dac41d2f3847',
  [ChainId.MATIC_MAINNET]: '0xb9dC833A87a61ee4590F189d8Fa7282031F4d7fF'
}

export const INIT_CODE_HASH = '0xe5122d0dc492a68a2c0e365f913c6db0fb90cb97f7b0877605b20eada715c335'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
