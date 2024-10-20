export interface ThrowItem {
  value: number,
  modify: number,
  total: number,
  type: 'success' | 'fail' | 'common'
  request?: string
}

export type TypeThrow = 'advantage' | 'common' | 'disadvantage'