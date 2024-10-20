import { action, makeObservable, observable } from 'mobx'
import { throwDice } from './throwDice.ts'
import { ThrowItem, TypeThrow } from './type.ts'

class ThrowService {
  constructor () {
    makeObservable(this, {
      throwLog: observable,
      throwDice: action,
    })
  }

  public throwLog: ThrowItem[] = []

  public throwDice(count: number, dice: number, modify: number, typeThrow: TypeThrow)
  throwDice(request: string, type: TypeThrow)
  throwDice(countOrRequest: number | string, diceOrType: number | TypeThrow, modify?: number, typeThrow?: TypeThrow)
  {
    if (typeof countOrRequest === 'number') {
      const throwValue = this.getThrowWithType(countOrRequest, diceOrType as number, modify as number, typeThrow as TypeThrow)
      throwValue.request = `${countOrRequest}d${diceOrType} + ${modify}`
      this.throwLog.push(throwValue)
      return throwValue
    }

    const throwList = [...countOrRequest.matchAll(/\d*d\d+/g)].map((str) => {
      const [count, dice] = str[0].split('d')

      return this.getThrowWithType(Number(count || 1), Number(dice), 0, diceOrType as TypeThrow)
    })
    const modifyTotal = Number(countOrRequest.match(/[+-]\d+$/)?.[0] ?? 0)

    const result = this.aggregateThrowList(throwList, modifyTotal)
    result.request = countOrRequest
    this.throwLog.push(result)
    return result
  }

  private getThrowWithType (count: number, dice: number, modify: number, typeThrow: TypeThrow ): ThrowItem {
    let throwValue: ThrowItem;
    if(typeThrow === 'common') {
      throwValue = throwDice(count, dice, modify)
    }

    if(typeThrow === 'advantage') {
      const throw1 = throwDice(count, dice, modify)
      const throw2 = throwDice(count, dice, modify)
      throwValue =  throw1.total > throw2.total ? throw1 : throw2
    }

    if(typeThrow === 'disadvantage') {
      const throw1 = throwDice(count, dice, modify)
      const throw2 = throwDice(count, dice, modify)
      throwValue =  throw1.total < throw2.total ? throw1 : throw2
    }

    return throwValue
  }

  private aggregateThrowList(list: ThrowItem[], modify: number) {
    const type: ThrowItem['type'] = list.some(({ type }) => type === 'common') ? 'common' :
      list.some(({ type }) => type === 'success') ? 'success' : 'fail'

    return list.reduce<ThrowItem>((acc, item) => {
      acc.value += item.value
      acc.total += item.total
      return acc
    }, { modify: modify, type, total: modify, value: 0 })
  }
}

export const throwService = new ThrowService()