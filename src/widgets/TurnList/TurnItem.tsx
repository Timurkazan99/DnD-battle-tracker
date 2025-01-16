import { FC, RefObject, useEffect, useRef, useState } from 'react'
import { ThunderboltOutlined } from '@ant-design/icons'
import { observer } from 'mobx-react'
import { useDebounce } from "@uidotdev/usehooks";
import { InitiativeItem } from '../../entities/turn/type.ts'
import { turnService } from '../../entities/turn/turnService.ts'
import { Button, Input } from '../../shared/ui'
import { ItemWrapper } from './elements.ts'



const BaseTurnItem: FC<InitiativeItem> = ({ creatureId, name, value}) => {
  const itemRef = useRef<HTMLDivElement>()

  const [initiative, setInitiative] = useState(value)
  const debouncedInitiative = useDebounce(initiative, 1000);

  useEffect(() => {
    turnService.setInitiative(creatureId, debouncedInitiative)
  }, [creatureId, debouncedInitiative])

  console.log(value)

  useEffect(() => {
    if (turnService.activeCreature === creatureId && itemRef.current) {
      console.log(itemRef?.current)
      itemRef?.current?.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }, [creatureId])

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
          value={initiative}
          onChange={(e) => {
            setInitiative(Number(e.target.value))
          }}
        />
      </ItemWrapper>
    </div>
  )
}

export const TurnItem = observer(BaseTurnItem)
