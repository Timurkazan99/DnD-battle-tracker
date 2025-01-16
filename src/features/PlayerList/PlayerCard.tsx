import { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { Creature, UpdateCreature } from '../../entities/creature/type.ts'
import { CreatureCard, PramBlock, StatBlock } from '../../widgets/CreatureCard'

interface Props extends Creature{
  onChange: UpdateCreature
}

const BasePlayerCard: FC<Props> = ({ onChange,  ...creature}) => {
  const [disable, setDisable] = useState(true)

  return (
    <CreatureCard creature={creature} onChange={onChange} disable={disable} setDisable={setDisable}>
      <PramBlock {...creature} disable={disable}/>
      <StatBlock {...creature} disable={disable}/>
    </CreatureCard>
  )
}

export const PlayerCard = observer(BasePlayerCard)