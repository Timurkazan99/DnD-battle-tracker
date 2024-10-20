import { FC } from 'react'
import { Space } from 'antd'
import { turnService } from '../../entities/turn/turnService.ts'
import { observer } from 'mobx-react'
import { Button, Header } from '../../shared/ui'

const _RoundCounter: FC = () => {
  return (
    <Space style={{ justifyContent: 'space-between', padding: '16px 16px 0 16px' }} align="center">
      <Button
        onClick={() => turnService.prevTurn()}
      >
        {'<'}
      </Button>
      <Header>{`Раунд: ${turnService.round}`}</Header>
      <Button
        onClick={() => turnService.nextTurn()}
      >
        {'>'}
      </Button>
    </Space>
  )
}

export const RoundCounter = observer(_RoundCounter)