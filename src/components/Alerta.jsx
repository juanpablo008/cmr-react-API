import React from 'react'

const Alerta = ({children}) => {
  return (
    <div className='bg-red-600 font-bold text-white text-center my-4 p-3 uppercase'>
      {children}
    </div>
  )
}

export default Alerta