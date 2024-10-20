import { FC, RefObject, useEffect, useRef } from 'react'
import { InitiativeItem } from '../../entities/turn/type.ts'
import { turnService } from '../../entities/turn/turnService.ts'
import { observer } from 'mobx-react'
import { Button, Input } from '../../shared/ui'
import { ItemWrapper } from './elements.ts'
import { ThunderboltOutlined } from '@ant-design/icons'



const _TurnItem: FC<InitiativeItem> = ({ creatureId, name, value, containerRef}) => {
  const itemRef = useRef<HTMLDivElement>()

  useEffect(() => {
    if(turnService.activeCreature === creatureId) {
      if(itemRef.current) {
        console.log(itemRef?.current)
        itemRef?.current?.scrollIntoView({
          behavior: 'smooth',
        })
      }
    }
  }, [turnService.activeCreature])

  return (
    <div style={{ width: '100%' }} ref={itemRef}>
      <ItemWrapper
        active={turnService.activeCreature === creatureId}
      >
        <Input value={name} disabled />
        <Button
          style={{ width: '42px' }}
          type="button"
          onClick={() => turnService.throwInitiative(creatureId)}
        >
          <ThunderboltOutlined />
        </Button>
        <Input
          style={{ width: '42px' }}
          size="small"
          pattern="[0-9]*"
          value={value}
          onChange={(e) => turnService.setInitiative(creatureId, Number(e.target.value))}
        />
      </ItemWrapper>
    </div>
  )
}

export const TurnItem = observer(_TurnItem)
