import { FC, useState } from 'react'
import { Button } from '../../shared/ui'
import { SkillItem } from './SkillItem.tsx'

export const SkillList: FC = () => {
  const [list, setList] = useState<number[]>([])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', flexBasis: '50%', gap: '4px' }} >
  {
    list.map((key) => (
      <SkillItem key={key} onDelete={() => {setList((prev) => prev.filter((id) => id !== key ))}} />
    ))
  }
  <Button
    onClick={() => setList((prevState) => [...prevState, Date.now()])}
  >
  +
    </Button>
  </div>
)
}