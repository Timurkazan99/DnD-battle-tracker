import { FC, useState } from 'react'
import { Divider, Space } from 'antd'
import { Button, Input, Label, TextArea } from '../../shared/ui'
import { DeleteOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons'

interface Props {
  onDelete: () => void
}

export const SkillItem: FC<Props> = ({ onDelete }) => {
  const [disabled, setDisabled] = useState(false)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  if (disabled) {
    return (
      <Space.Compact direction="vertical">
        <Space.Compact style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Label>
            {title}
          </Label>
          <Button
            onClick={() => setDisabled(false)}
            style={{ borderRadius: '6px' }}
          >
            <EditOutlined />
          </Button>
        </Space.Compact>
        <Label style={{ whiteSpace: 'wrap' }}>
          {description}
        </Label>
      </Space.Compact>
    )
  }

  return (
    <Space.Compact direction="vertical">
      <Space.Compact style={{ paddingRight: '1px'}}>
        <Input
          disabled={disabled}
          value={title}
          style={{
            borderRadius: '6px 0 0 0'
          }}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button
          onClick={onDelete}
        >
          <DeleteOutlined />
        </Button>
        <Button
          onClick={() => setDisabled(true)}
          style={{borderRadius: '0 6px 0 0'}}
        >
          <SaveOutlined />
        </Button>
      </Space.Compact>
      <TextArea
        rows={3}
        disabled={disabled}
        value={description}
        style={{
          borderRadius: '0 0 6px 6px',
          marginTop: '-1px',
          marginRight: '-1px'
        }}
        onChange={(e) => setDescription(e.target.value)}
      />
    </Space.Compact>
  )
}