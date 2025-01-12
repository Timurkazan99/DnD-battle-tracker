import { action, computed, makeObservable, observable } from 'mobx'
import { Creature } from '../creature/type.ts'
import { InitiativeItem } from './type.ts'
import { throwService } from '../throw/throwService.ts'

class TurnService {
  constructor () {
    makeObservable(this, {
      round: observable,
      activeCreature: computed,
      turn: observable,
      nextTurn: action,
      prevTurn: action,
      initiativeList: observable,
      setInitiative: action,
      throwInitiative: action,
      addInitiativeItem: action
    })
  }

  public round: number = 1
  public turn: number = 0
  public initiativeList: InitiativeItem[] = []

  public get activeCreature() {
    return this.initiativeList?.[this.turn]?.creatureId
  }

  public nextTurn () {
    const newTurn = this.turn + 1

    if (this.initiativeList.length === newTurn) {
      this.turn = 0
      this.round += 1
    } else {
      this.turn = newTurn
    }
  }

  public prevTurn () {
    const newTurn = this.turn - 1

    if (-1 === newTurn) {
      this.turn = this.initiativeList.length - 1
      this.round -= 1
    } else {
      this.turn = newTurn
    }
  }

  public setInitiative(id, initiative) {
    this.initiativeList.find((item) => item.creatureId === id).value = initiative
    this.sort()
  }

  public throwInitiative(id) {
    const active = this.initiativeList.find((item) => item.creatureId === id)
    active.value = throwService.throwDice(1, 20, active.modify, 'common').total
    this.sort()
  }

  public addInitiativeItem(item: Creature) {
    this.initiativeList = [...this.initiativeList, {
      creatureId: item.id,
      name: item.name,
      modify: item.DEX,
      value: 0
    }]
    this.sort()
  }

  public updateItem(item: Creature) {
    const entity = this.initiativeList.find(({ creatureId }) => creatureId === item.id)
    if (item) {
      entity.modify = item.DEX
      entity.name = item.name
    }
  }

  public deleteInitiativeItem(id: number) {
    this.initiativeList = this.initiativeList.filter((item) => item.creatureId !== id)
    this.turn = 0
    this.round = 0
    this.sort()
  }

  private sort() {
    this.initiativeList.sort((a, b) => b.value - a.value)
  }
}

export const turnService = new TurnService()