import { FC } from 'react'
import { Button } from '../../shared/ui'
import {
  Creature,
  Status,
  UpdateCreature,
} from '../../entities/creature/type.ts'
import {
  DeleteOutlined,
  EditOutlined,
  MoneyCollectOutlined,
  SaveOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { observer } from 'mobx-react'

interface Props {
  id: Creature['id']
  onEdit: () => void
  onEditCreature: UpdateCreature
  onDeleteCreature: (id: Creature['id']) => void
  disable: boolean
  status: Creature['status']
}

export const _CardExtra: FC<Props> = ({ id,  onEdit, onEditCreature, onDeleteCreature, status, disable }) => {
  return (
    <Space.Compact>
      {!disable && (
        <Button
          style={{
            borderRadius: 0,
            marginRight: '-1px'
        }}
          onClick={() => onDeleteCreature(id)}
        >
          <DeleteOutlined />
        </Button>
      )}
      {
        disable && (
          <Button
            onClick={() => onEditCreature(id, { status: status === Status.DEAD ? Status.LIVE : Status.DEAD })}
            style={{
              borderRadius: disable ? '6px 0 0 6px' : ''
            }}
          >
            <MoneyCollectOutlined />
          </Button>
        )
      }
      <Button
        onClick={onEdit}
        style={{
          borderRadius: disable ? '0 6px 6px 0' : ''
        }}
      >
        {
          disable ? <EditOutlined /> : <SaveOutlined />
        }
      </Button>
    </Space.Compact>
  )
}

export const CardExtra = observer(_CardExtra)