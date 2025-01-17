import { createFileRoute } from '@tanstack/react-router'
import { MonkPhrasesPage } from '../pages/MonkPhrases.tsx'

export const Route = createFileRoute('/monk-phrases')({
  component: MonkPhrasesPage,
})
