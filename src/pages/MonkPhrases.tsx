import { FC } from 'react'
import { MonkPhrases } from '../features/MonkPhrases'
import styled from 'styled-components'
import { ColorMap } from '../shared/utils/ColorMap.ts'

const Wrapper = styled.div`
    display: flex;
    gap: 16px;
    background: ${ColorMap.primary};
    height: 100vh;
    justify-content: center;
    align-items: center;
    padding: 16px;
`


export const MonkPhrasesPage: FC = () => {
  return (
    <Wrapper>
      <MonkPhrases />
    </Wrapper>
  )
}