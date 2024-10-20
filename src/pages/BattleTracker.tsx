import { FC } from 'react'
import { TurnList } from '../widgets/TurnList'
import { creatureService } from '../entities/creature/creatureService.ts'
import { CreatureList } from '../widgets/CreatureList'
import styled from 'styled-components'
import { ThrowList } from '../widgets/ThrowList/ThrowList.tsx'
import { ColorMap } from '../shared/utils/ColorMap.ts'

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
        <CreatureList
          creatureMap={creatureService.playersMap}
          title="Игроки"
          onAdd={() => creatureService.addPlayer()}
          type="player"
        />
        <CreatureList
          style={{ marginTop: '16px' }}
          creatureMap={creatureService.enemyMap}
          title="Враги"
          type="monster"
          onAdd={() => creatureService.addEnemy()}
        />
      </CreatureWrapper>
      <ThrowList />
    </Wrapper>
  )
}