import { ThrowItem } from './type.ts'

export const throwDice = (count, dice, modify): ThrowItem => {
  const max = count * dice
  const value = Math.floor(Math.random() * (max - count + 1) + count);
  return {
    value,
    modify,
    total: value + modify,
    type: value === max ? 'success' : value === 1 ? 'fail' : 'common',
  }
}