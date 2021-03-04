import React, { useEffect, useState } from 'react'
import Joke from '../components/Joke'
import axios from 'axios'

/*
This container is responsible for fetching the data to render
the Joke component. All the logic related to making the get request,
handling the response, and setting the state are handled here.
*/

const DadJoke = () => {
  // React hook for state
  const [joke, setJoke] = useState('')

  // basically just executed the provided function (first parameter) whenever
  // one of the dependencies change (second parameter). If the dependency list is
  // empty, it basically just runs once on render.
  // more: https://reactjs.org/docs/hooks-effect.html
  useEffect(() => {
    const serverURL = `https://icanhazdadjoke.com/`
    const options = {
      headers: {
        Accept: 'application/json',
      },
    }

    axios
      .get(serverURL, options)
      .then((d) => d.data)
      .then((d) => {
        if (d.status === 200) {
          setJoke(d.joke)
        } else {
          setJoke("couldn't fetch joke :((")
        }
      })
  }, [setJoke])

  return <Joke joke={joke} />
}

export default DadJoke
