import React from 'react'
import { Link } from 'react-router-dom'

/*
Generally, it's a pretty bad idea to mix data with application behaviour.
Components should be pure, meaning they need to receive data to render it,
but they shouldn’t know where the data came from, how it changes, or how to create it.
Containers provide a means for developers to wrangle data and pass it onto a component
to actually do the rendering. This component should be populated via the `DadJoke` container
found in `containers/DadJoke`
*/

const Joke = ({ joke }) => {
  return (
    <>
      <h2>A dad joke for your viewing pleasure</h2>
      <p>{joke}</p>
      <Link to="/">Back home.</Link>
    </>
  )
}

export default Joke
