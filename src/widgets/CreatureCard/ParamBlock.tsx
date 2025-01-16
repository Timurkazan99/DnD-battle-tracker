import { FC } from 'react'
import { Space, Tooltip } from 'antd'
import { observer } from 'mobx-react'
import { Creature, UpdateCreature } from '../../entities/creature/type.ts'
import { Input } from '../../shared/ui'

interface Props extends Creature {
  disable: boolean
  onChange: UpdateCreature
}

export const _PramBlock: FC<Props> = ({  onChange, id, disable, ...creature }) => (
  <Space style={{ marginBottom: '4px' }}>
    <Tooltip title="Класс брони">
      <Input
        size="small"
        onChange={(e) => {
          onChange(id, { AC: Number(e.target.value) })
        }}
        value={creature.AC}
        disabled={disable}
      />
    </Tooltip>
    <Tooltip title="Скорость">
      <Input
        size="small"
        onChange={(e) => {
          onChange(id, { speed: Number(e.target.value) })
        }}
        value={creature.speed}
        disabled={disable}
      />
    </Tooltip>
    <Tooltip title="Пассивная внимательность">
      <Input
        size="small"
        disabled={disable}
      />
    </Tooltip>
  </Space>
)

export const PramBlock = observer(_PramBlock)