import { Creature, Status } from './type.ts'

export const defCreature: Omit<Creature, 'id' | 'type' | 'name'> = {
  STR: 0,
  DEX: 0,
  CON: 0,
  INT: 0,
  WIS: 0,
  CHA: 0,
  AC: 10,
  speed: 30,
  status: Status.LIVE
}