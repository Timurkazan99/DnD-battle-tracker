import { Creature, Status } from '../creature/type.ts'

export interface InitiativeItem {
  creatureId: Creature['id']
  name: Creature['name']
  modify: Creature['DEX']
  value: number
  status: Status
}