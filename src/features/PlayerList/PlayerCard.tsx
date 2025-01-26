import { FC, useState } from 'react'
import { observer } from 'mobx-react'
import { Creature, UpdateCreature } from '../../entities/creature/type.ts'
import { CreatureCard, PramBlock, StatBlock } from '../../widgets/CreatureCard'

interface Props extends Creature{
  onChange: UpdateCreature
  onDeleteCreature: (id: Creature['id']) => void
}

const BasePlayerCard: FC<Props> = ({ onChange, onDeleteCreature,  ...creature}) => {
  const [disable, setDisable] = useState(true)

  return (
    <CreatureCard
      creature={creature}
      onChange={onChange}
      disable={disable}
      setDisable={setDisable}
      onDeleteCreature={onDeleteCreature}
    >
      <PramBlock {...creature} disable={disable}/>
      <StatBlock {...creature} disable={disable}/>
    </CreatureCard>
  )
}

export const PlayerCard = observer(BasePlayerCard)