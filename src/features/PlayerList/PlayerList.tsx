import { CSSProperties, FC } from 'react'
import { observer } from 'mobx-react'
import { PlayerCard } from './PlayerCard.tsx'
import styled from 'styled-components'
import { Button } from '../../shared/ui'
import { Header as TypoHeader } from '../../shared/ui'
import { ColorMap } from '../../shared/utils/ColorMap.ts'
import { creatureService } from '../../entities/creature/creatureService.ts'


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    width: 100%;
    justify-items: center;
    align-items: top;
`

const Header = styled(TypoHeader)`
    grid-area: 1 / 1 / 2 / 4;
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
    height: 157px;
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

const BasePlayerList: FC<Props> = ({ style }) => {
  const playerList = Object.values(creatureService.playersMap)

  const ClickHandler = () => creatureService.addPlayer()

  const changeHandler = (id, entity) => {
    creatureService.updatePlayer(id, entity)
  }

  return (
    <Wrapper style={style}>
      <Header>Игроки</Header>
      { playerList.map((creature) => <PlayerCard key={creature.id} {...creature} onChange={changeHandler}/>) }
      {
        playerList.length < 6 ? (
          <ButtonWrapper>
            <AddButton onClick={ClickHandler}>
              +
            </AddButton>
          </ButtonWrapper>
        ) : null
      }
    </Wrapper>
  )
}

export const PlayerList = observer(BasePlayerList)