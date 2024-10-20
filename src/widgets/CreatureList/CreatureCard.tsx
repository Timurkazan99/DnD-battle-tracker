import { FC, useEffect, useRef, useState } from 'react'
import { Creature } from '../../entities/creature/type.ts'
import { StatBlock } from './StatBlock.tsx'
import { creatureService } from '../../entities/creature/creatureService.ts'
import { PramBlock } from './ParamBlock.tsx'
import { HealthList } from './HealthList.tsx'
import { Input, Button, Card } from '../../shared/ui'
import { turnService } from '../../entities/turn/turnService.ts'
import { observer } from 'mobx-react'
import { CardExtra } from './CardExtra.tsx'
import { Space } from 'antd'

const _CreatureCard: FC<Creature> = (creature) => {
  const [disable, setDisable] = useState(true)
  const cardRef = useRef<HTMLDivElement>()
  const id = `${creature.id}-card`

  useEffect(() => {
    cardRef.current = (document.getElementById(id) as HTMLDivElement)
  }, [])

  useEffect(() => {
    if(turnService.activeCreature === creature.id) {
      if(cardRef.current) {
        console.log(cardRef?.current)
        cardRef?.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center'
        })
      }
    }
  }, [turnService.activeCreature])

  return (
    <Card
      id={id}
      title={<Space.Compact style={{ justifyContent: 'space-between', width: '100%' }}>
        {disable ? creature.name : (
          <Input
            onChange={(e) => {
              creatureService[creature.type === 'monster'
                ? 'updateEnemy'
                : 'updatePlayer'](creature.id, { name: e.target.value })
            }}
            value={creature.name}
            disabled={disable}
          />
        )}
        <CardExtra
          type={creature.type}
          id={creature.id}
          onEdit={() => setDisable((prev) => !prev)}
          disable={disable}
        />
      </Space.Compact>}
      active={creature.id === turnService.activeCreature}
    >
      <PramBlock {...creature} disable={disable} />
      <StatBlock {...creature} disable={disable} />
      {
        creature.type === 'monster' && (
          <HealthList name={creature.name} />
        )
      }
    </Card>
  )
}

export const CreatureCard = observer(_CreatureCard)