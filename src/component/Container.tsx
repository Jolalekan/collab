import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-7xl mx-auto md:px-10 px-4'>
        {children}
    </div>
  )
}

export default Container