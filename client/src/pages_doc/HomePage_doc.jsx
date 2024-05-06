import React from 'react'
import FrontView from '../components_doctor/landingPage/FrontView'
import Dashboard from '../components_doctor/landingPage/Dashboard'
import SliderPage from '../components_doctor/landingPage/SliderPage'
import AppointmentRequest from '../components_doctor/dashboard/AppointmentRequest'
import Footer from '../components_doctor/footer/Footer'

function HomePage_doc() {
  return (
    <div>
      {/* <Section2/> */}
      <FrontView/>
      <Dashboard/>
      <AppointmentRequest/>
      <SliderPage />
      <Footer/>
    </div>
  )
}

export default HomePage_doc;