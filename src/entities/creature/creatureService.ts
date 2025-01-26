import {
  action,
  makeObservable,
  observable,
} from 'mobx'
import { Creature, CreatureMap } from './type.ts'
import { turnService } from '../turn/turnService.ts'
import { defCreature } from './constants.ts'
import { makePersistable } from 'mobx-persist-store'

class CreatureService {
  constructor () {
    makeObservable(this, {
      playersMap: observable,
      enemyMap: observable,
      addPlayer: action,
      addEnemy: action,
      deleteEnemy: action,
      deletePlayer: action,
      updatePlayer: action,
      updateEnemy: action
    })

    makePersistable(this, { name: 'CreatureService', properties: ['playersMap', 'enemyMap'], storage: window.localStorage})
  }

  public playersMap: CreatureMap = {}

  public enemyMap: CreatureMap = {}

  public addPlayer() {
    const id = Date.now()

    const player: Creature = {
      ...defCreature,
      id,
      type: 'player',
      name: 'Игорёк',
    }

    this.playersMap[id] = player
    turnService.addInitiativeItem(player)
  }

  public addEnemy() {
    const id = Date.now()

    const enemy: Creature = {
      ...defCreature,
      id,
      type: 'monster',
      name: 'Монстыр',
    }

    this.enemyMap[id] = enemy
    turnService.addInitiativeItem(enemy)
  }

  public deleteEnemy(id: number) {
    delete this.enemyMap[id]
    turnService.deleteInitiativeItem(id)
  }

  public deletePlayer(id: number) {
    delete this.playersMap[id]
    turnService.deleteInitiativeItem(id)
  }

  public updatePlayer(id: number, newValue: Partial<Creature>) {
    this.playersMap[id] = { ...this.playersMap[id], ...newValue }
    turnService.updateItem(this.playersMap[id])
  }

  public updateEnemy(id: number, newValue: Partial<Creature>) {
    this.enemyMap[id] = { ...this.enemyMap[id], ...newValue }
    turnService.updateItem(this.enemyMap[id])
  }
}

export const creatureService = new CreatureService()