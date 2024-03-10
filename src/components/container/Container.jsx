import  { Fragment } from 'react'

const Container = ({children}) => {
  return (
    <Fragment>
        <div className='w-full max-w-full mx-auto px-4' >
          {children}
        </div>
    </Fragment>
  )
}

export default Container