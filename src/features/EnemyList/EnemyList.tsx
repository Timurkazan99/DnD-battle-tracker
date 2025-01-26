import styled from 'styled-components'
import { Button, Header as TypoHeader } from '../../shared/ui'
import { creatureService } from '../../entities/creature/creatureService.ts'
import { observer } from 'mobx-react'
import { ColorMap } from '../../shared/utils/ColorMap.ts'
import { CSSProperties, FC } from 'react'
import { EnemyCard } from './EnemyCard.tsx'

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    width: 100%;
    justify-items: center;
    align-items: top;
`

const Header = styled(TypoHeader)`
    grid-area: 1 / 1 / 2 / 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    
    &:before, &:after {
        content: "";
        display: block;
        height: 2px;
        flex: 1;
        background: ${ColorMap.text};
    }
`

const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    height: 197px;
    justify-content: center;
    align-items: center;
`

const AddButton = styled(Button)`
    width: 150px;
    height: 50px;
    border-style: dashed;
`

interface Props {
  style?: CSSProperties
}

const BaseEnemyList: FC<Props> = ({ style }) => {
  const enemyList = Object.values(creatureService.enemyMap)

  const ClickHandler = () => creatureService.addEnemy()

  const changeHandler = (id, entity) => {
    creatureService.updateEnemy(id, entity)
  }

  const deleteHandler = (id) => {
    creatureService.deleteEnemy(id)
  }

  return (
    <Wrapper style={style}>
      <Header>Монстры</Header>
      { enemyList.map((creature) => <EnemyCard key={creature.id} {...creature} onChange={changeHandler} onDeleteCreature={deleteHandler}/>) }
      <ButtonWrapper>
        <AddButton onClick={ClickHandler}>
          +
        </AddButton>
      </ButtonWrapper>
    </Wrapper>
  )
}

export const EnemyList = observer(BaseEnemyList)