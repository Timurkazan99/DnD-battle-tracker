import { FC, useState } from 'react'
import { Button, Header } from '../../shared/ui'
import { phrases } from './const.ts'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    button {
        margin-top: 16px;
        width: 300px;
    }
`

export const MonkPhrases: FC = () => {
  const [phrase, setPhrase] = useState('')

  const clickHandler = () => {
    setPhrase(phrases[Math.floor(Math.random() * phrases.length)])
  }

  return (
    <Wrapper>
      <Header>{phrase}</Header>
      <Button  onClick={clickHandler}>Мудрость</Button>
    </Wrapper>
  )
}