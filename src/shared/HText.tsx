import React from 'react'

type Props = {
    children: string
}

const HText = ({children}: Props) => {
  return (
    <h1 className='basis-3/5 uppercase text-3xl font-bold mb-4'>
        {children}
    </h1>
  )
}

export default HText