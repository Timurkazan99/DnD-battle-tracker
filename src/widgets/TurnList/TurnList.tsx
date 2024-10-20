import { FC, useRef } from 'react'
import { observer } from 'mobx-react';
import { TurnItem } from './TurnItem.tsx'
import { ScrollList, Wrapper } from './elements.ts'
import { turnService } from '../../entities/turn/turnService.ts'
import { RoundCounter } from './RoundCounter.tsx'

const _TurnList: FC = () => {

  return (
    <div style={{ padding: '16px 0 16px 16px' }} >
      <Wrapper>
        <RoundCounter />
        <ScrollList>
          {
            turnService.initiativeList
            .map((item) => <TurnItem {...item} />)
          }
        </ScrollList>
      </Wrapper>
    </div>
  )
}

export const TurnList = observer(_TurnList);