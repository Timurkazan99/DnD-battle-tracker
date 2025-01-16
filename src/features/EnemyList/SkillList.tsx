import { FC, useState } from 'react'
import { Space } from 'antd'
import { Button, Input, Label } from '../../shared/ui'

export const SkillList: FC = () => {
  const [list, setList] = useState<number[]>([])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '50%'  }} >
  {
    list.map((key, id) => (
      <Space key={key} style={{ marginBottom: '4px', justifyContent: 'space-between' }}>
    <Label>{name} {id}</Label>
  <Input style={{width: '50px'}} size="small" />
    </Space>
  ))
  }
  <Button
    onClick={() => setList((prevState) => [...prevState, Date.now()])}
>
  +
    </Button>
  </div>
)
}