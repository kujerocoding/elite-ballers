import React from 'react'

type Props = {
    children: string
}

const HText = ({children}: Props) => {
  return (
    
      <h1 className='uppercase text-3xl font-bold mb-4 text-primary-black'>
        {children}
      </h1>
      
    
  )
}

export default HText