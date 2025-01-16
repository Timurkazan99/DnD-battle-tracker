import { FC } from 'react'
import { TurnList } from '../widgets/TurnList'
import styled from 'styled-components'
import { ThrowList } from '../widgets/ThrowList/ThrowList.tsx'
import { ColorMap } from '../shared/utils/ColorMap.ts'
import { PlayerList } from '../features/PlayerList/PlayerList.tsx'
import { EnemyList } from '../features/EnemyList/EnemyList.tsx'

const Wrapper = styled.div`
    display: flex;
    gap: 16px;
    background: ${ColorMap.primary};
    height: 100vh;
`

const CreatureWrapper = styled.div`
    width: 60%;
    overflow-y: auto;
    padding-top: 16px;

    &::-webkit-scrollbar {
        display: none;
    }
`

export const BattleTracker: FC = () => {
  return (
    <Wrapper>
      <TurnList />
      <CreatureWrapper>
        <PlayerList />
        <EnemyList style={{ marginTop: '16px' }} />
      </CreatureWrapper>
      <ThrowList />
    </Wrapper>
  )
}