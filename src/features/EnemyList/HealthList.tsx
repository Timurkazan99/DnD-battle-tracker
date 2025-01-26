import { FC, useState } from 'react'
import { Space } from 'antd'
import { Input, Label } from '../../shared/ui'
import { Button } from '../../shared/ui'
import { throwService } from '../../entities/throw/throwService.ts'

interface Props {
 name: string
 hitFormula: string
}

interface Health {
  id: number,
  health: number
}

export const HealthList: FC<Props> = ({ name, hitFormula }) => {
  const [list, setList] = useState<Health[]>([])

  return (
    <div style={{ marginTop: '4px', display: 'flex', flexDirection: 'column' }} >
      {
        list.map(({ id, health }, index) => (
          <Space key={id} style={{ marginBottom: '4px', justifyContent: 'space-between' }}>
            <Label>{name} {index}</Label>
            <Input style={{width: '50px'}} size="small" defaultValue={health}  />
          </Space>
        ))
      }
      <Button
        onClick={() => setList((prevState) => [...prevState, {
          id: Date.now(),
          health: throwService.throwDice(hitFormula, 'common').total || 10
        }])}
      >
        +
      </Button>
    </div>
  )
}