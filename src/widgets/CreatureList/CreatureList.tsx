import { CSSProperties, FC } from 'react'
import { observer } from 'mobx-react'
import { CreatureCard } from './CreatureCard.tsx'
import styled from 'styled-components'
import { Creature, CreatureMap } from '../../entities/creature/type.ts'
import { Button } from '../../shared/ui/Button.ts'
import { Header as TypoHeader } from '../../shared/ui'
import { ColorMap } from '../../shared/utils/ColorMap.ts'


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    width: 100%;
    justify-items: center;
    align-items: top;
`

const Header = styled(TypoHeader)`
    grid-area: 1 / 1 / 2 / 5;
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
    height: ${({ type }) => type === 'monster' ? '197px' : '157px'};
    justify-content: center;
    align-items: center;
`

const AddButton = styled(Button)`
    width: 150px;
    height: 50px;
    border-style: dashed;
`

interface Props {
  creatureMap: CreatureMap,
  title: string
  onAdd: () => void
  style?: CSSProperties
  type: Creature['type']
}

const _CreatureList: FC<Props> = ({ creatureMap, title, onAdd, style, type }) => (
  <Wrapper style={style}>
    <Header>{title}</Header>
    { Object.values(creatureMap).map((creature) => <CreatureCard key={creature.id} {...creature}/>) }
    <ButtonWrapper type={type}>
      <AddButton onClick={onAdd}>
        +
      </AddButton>
    </ButtonWrapper>
  </Wrapper>
)

export const CreatureList = observer(_CreatureList)