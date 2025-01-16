import { FC, Fragment } from 'react'
import { Button } from '../../shared/ui'
import { creatureService } from '../../entities/creature/creatureService.ts'
import { Creature } from '../../entities/creature/type.ts'
import { DeleteOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons'

interface Props {
  id: Creature['id']
  type: Creature['type']
  onEdit: () => void
  disable: boolean
}

export const CardExtra: FC<Props> = ({ id, type, onEdit, disable }) => {
  return (
    <>
      {!disable && (
        <Button
          style={{
            borderRadius: 0,
            marginRight: '-1px'
        }}
          onClick={() => creatureService[type === 'monster' ? 'deleteEnemy' : 'deletePlayer'](id)}
        >
          <DeleteOutlined />
        </Button>
      )}
      <Button
        onClick={onEdit}
        style={{
          borderRadius: disable ? '6px' : ''
        }}
      >
        {
          disable ? <EditOutlined /> : <SaveOutlined />
        }
      </Button>
    </>
  )
}