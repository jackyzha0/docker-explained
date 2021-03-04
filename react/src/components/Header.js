import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  font-family: Roboto Mono;
`

const Header = () => {
  return (
    <header>
      <Title>Template &mdash; React</Title>
      <p>
        For when <code>create-react-app</code> just doesn't give you what you want.
      </p>
    </header>
  )
}

export default Header
