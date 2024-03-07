import  { Fragment } from 'react'

const App = () => {
  console.log(import.meta.env.VITE_APP_APPWRITE_URL)
  return (
    <Fragment>
      <h1>Hello World</h1>
    </Fragment>
  )
}

export default App