import { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { Creature, UpdateCreature } from '../../entities/creature/type.ts'
import { CreatureCard, PramBlock, StatBlock } from '../../widgets/CreatureCard'
import { HealthList } from './HealthList.tsx'
import { SkillList } from './SkillList.tsx'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

interface Props extends Creature{
  onChange: UpdateCreature
}

const BaseEnemyCard: FC<Props> = ({ onChange,  ...creature}) => {
  const [disable, setDisable] = useState(true)

  return (
    <CreatureCard creature={creature} onChange={onChange} disable={disable} setDisable={setDisable}>
      <Wrapper>
        <div style={{ flexBasis: '50%' }}>
          <PramBlock {...creature} disable={disable}/>
          <StatBlock {...creature} disable={disable}/>
          <HealthList name={creature.name}/>
        </div>
        <SkillList/>
      </Wrapper>
    </CreatureCard>
  )
}

export const EnemyCard = observer(BaseEnemyCard)