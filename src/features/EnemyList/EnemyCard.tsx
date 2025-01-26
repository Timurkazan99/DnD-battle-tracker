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
  onDeleteCreature: (id: Creature['id']) => void
}

const BaseEnemyCard: FC<Props> = ({ onChange, onDeleteCreature,  ...creature}) => {
  const [disable, setDisable] = useState(true)

  return (
    <CreatureCard
      creature={creature}
      onChange={onChange}
      onDeleteCreature={onDeleteCreature}
      disable={disable}
      setDisable={setDisable}
    >
      <Wrapper>
        <div style={{ flexBasis: '50%' }}>
          <PramBlock {...creature} disable={disable} onChange={onChange}/>
          <StatBlock {...creature} disable={disable} onChange={onChange} />
          <HealthList name={creature.name} hitFormula={creature.hitFormula}/>
        </div>
        <SkillList/>
      </Wrapper>
    </CreatureCard>
  )
}

export const EnemyCard = observer(BaseEnemyCard)