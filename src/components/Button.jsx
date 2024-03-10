/* eslint-disable react/prop-types */
import {} from 'react'

const Button = ({
    children,
    type='button',
    bgColor="bg-blue-600",
    textColor='text-white',
    className='',
    ...props
}) => {
  return (
    <button
     className={`${className} ${textColor} ${bgColor}`}
     type={type}
     {...props}
    >{children}</button>
  )
}

export default Button