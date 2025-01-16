import { FC } from 'react'
import { Space, Tooltip } from 'antd'
import { observer } from 'mobx-react'
import { Creature, UpdateCreature } from '../../entities/creature/type.ts'
import { creatureService } from '../../entities/creature/creatureService.ts'
import { Input } from '../../shared/ui'

interface Props extends Creature {
  disable: boolean
  onChange: UpdateCreature
}

export const _StatBlock: FC<Props> = ({ onChange, id, disable, ...creature }) => (
  <Space>
    <Tooltip title="Сила">
      <Input
        size="small"
        onChange={(e) => {
          onChange(id, { STR: Number(e.target.value) })
        }}
        value={creature.STR}
        disabled={disable}
      />
    </Tooltip>
    <Tooltip title="Ловкость">
      <Input
        size="small"
        onChange={(e) => {
          onChange(id, { DEX: Number(e.target.value) })
        }}
        value={creature.DEX}
        disabled={disable}
      />
    </Tooltip>
    <Tooltip title="Телесложение">
      <Input
        size="small"
        onChange={(e) => {
          onChange(id, { CON: Number(e.target.value) })
        }}
        value={creature.CON}
        disabled={disable}
      />
    </Tooltip>
    <Tooltip title="Интеллект">
      <Input
        size="small"
        onChange={(e) => {
          onChange(id, { INT: Number(e.target.value) })
        }}
        value={creature.INT}
        disabled={disable}
      />
    </Tooltip>
    <Tooltip title="Мудрость">
      <Input
        size="small"
        onChange={(e) => {
          onChange(id, { WIS: Number(e.target.value) })
        }}
        value={creature.WIS}
        disabled={disable}
      />
    </Tooltip>
    <Tooltip title="Харизма">
      <Input
        size="small"
        onChange={(e) => {
          onChange(id, { CHA: Number(e.target.value) })
        }}
        value={creature.CHA}
        disabled={disable}
      />
    </Tooltip>
  </Space>
)

export const StatBlock = observer(_StatBlock)