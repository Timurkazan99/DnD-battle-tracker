export interface Creature {
  id: number,
  name: string,
  STR: number,
  DEX: number,
  CON: number,
  INT: number,
  WIS: number,
  CHA: number,
  AC: number,
  speed: number,
  type: 'monster' | 'player'
}

export type CreatureMap = Record<Creature['id'], Creature>

export type UpdateCreature = (id: Creature['id'], entity: Partial<Creature>) => void