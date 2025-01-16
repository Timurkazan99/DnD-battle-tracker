import {
  Dispatch,
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
} from 'react'
import { Creature, UpdateCreature } from '../../entities/creature/type.ts'
import { Input, Card } from '../../shared/ui'
import { turnService } from '../../entities/turn/turnService.ts'
import { observer } from 'mobx-react'
import { CardExtra } from './CardExtra.tsx'
import { Space } from 'antd'

interface Props {
  creature: Creature
  onChange: UpdateCreature
  disable: boolean
  setDisable: Dispatch<boolean>
}

const BaseCreatureCard: FC<PropsWithChildren<Props>> = ({children, onChange, creature, disable, setDisable}) => {
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
              onChange(creature.id, { name: e.target.value })
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
      {children}
    </Card>
  )
}

export const CreatureCard = observer(BaseCreatureCard)