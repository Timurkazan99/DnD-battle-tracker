import { FC, useEffect, useRef } from 'react'
import { observer } from 'mobx-react';
import { LogWrapper, Wrapper } from './elements.ts'
import { throwService } from '../../entities/throw/throwService.ts'
import { DiceButtons } from './DiceButtons.tsx'
import { ThrowItem } from './ThrowItem.tsx'

const _ThrowList: FC = () => {
  const logRef = useRef<HTMLDivElement>()

  useEffect(() => {
    logRef.current?.scrollTo({
      left: 0, top: logRef.current?.scrollHeight, behavior: "smooth"
    })
  }, [throwService.throwLog.length])

  return (
    <div style={{ padding: '16px 16px 16px 0' }}>
      <Wrapper>
        <LogWrapper ref={logRef}>
          {
            throwService.throwLog
            .map((item) => <ThrowItem {...item} />)
          }
        </LogWrapper>
        <DiceButtons />
      </Wrapper>
    </div>
  )
}

export const ThrowList = observer(_ThrowList);