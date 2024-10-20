import { FC } from 'react'
import { Space, Tooltip } from 'antd'
import { observer } from 'mobx-react'
import { Creature } from '../../entities/creature/type.ts'
import { creatureService } from '../../entities/creature/creatureService.ts'
import { Input } from '../../shared/ui'

interface Props extends Creature {
  disable: boolean
}

export const _PramBlock: FC<Props> = ({ type, id, disable, ...creature }) => (
  <Space style={{ marginBottom: '4px' }}>
    <Tooltip title="Класс брони">
      <Input
        size="small"
        onChange={(e) => {
          creatureService[type === 'monster' ? 'updateEnemy' : 'updatePlayer'](id, { AC: Number(e.target.value) })
        }}
        value={creature.AC}
        disabled={disable}
      />
    </Tooltip>
    <Tooltip title="Скорость">
      <Input
        size="small"
        onChange={(e) => {
          creatureService[type === 'monster' ? 'updateEnemy' : 'updatePlayer'](id, { speed: Number(e.target.value) })
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