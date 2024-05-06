import React from 'react'
import Availability from './Availability'
import Footer from '../footer/Footer'

const AvailMain = () => {
  const availStyle =  {
    marginTop: '80px',
  }

  return (-
    <div style={availStyle}>
        <Availability></Availability>
        <Footer/>
    </div>
  )
}

export default AvailMain