import { FC, useState } from 'react'
import { Space } from 'antd'
import { Input, Label } from '../../shared/ui'
import { Button } from '../../shared/ui'

export const HealthList: FC<{ name: string }> = ({ name }) => {
  const [list, setList] = useState<number[]>([])

  return (
    <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column' }} >
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