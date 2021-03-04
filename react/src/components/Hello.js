import React from 'react'
import { Link } from 'react-router-dom'

// I prefer using functional components just because it generally keeps things
// pretty clean
const Hello = () => {
  return (
    // The <> tag is just a shorthand for React.fragment
    // https://reactjs.org/docs/fragments.html
    <>
      <h2>Multi-page example</h2>
      <p>
        The default React app is a single page, but in most cases, you'll want more than one page
        for different views and what-not. This example comes with a page which fetches a random dad
        joke for you. <Link to="/joke">Go to dad joke page.</Link>
      </p>
    </>
  )
}

export default Hello
