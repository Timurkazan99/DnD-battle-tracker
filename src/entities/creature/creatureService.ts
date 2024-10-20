import {
  action,
  computed,
  makeObservable,
  observable,
} from 'mobx'
import { Creature, CreatureMap } from './type.ts'
import { turnService } from '../turn/turnService.ts'
import { defCreature } from './constants.ts'

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
  }

  public playersMap: CreatureMap = {}

  public enemyMap: CreatureMap = {}

  public addPlayer() {
    const id = Date.now()

    const player: Creature = {
      ...defCreature,
      id,
      type: 'player',
      name: 'Игорёк'
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
      name: 'Монстыр'
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
  }

  public updateEnemy(id: number, newValue: Partial<Creature>) {
    this.enemyMap[id] = { ...this.enemyMap[id], ...newValue }
  }
}

export const creatureService = new CreatureService()