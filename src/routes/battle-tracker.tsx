import { createFileRoute } from '@tanstack/react-router'
import { BattleTracker } from '../pages'

export const Route = createFileRoute('/battle-tracker')({
  component: BattleTracker,
})
