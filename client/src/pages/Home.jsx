import React from 'react';
import Herosection from '../components/Herosection';
import Welcomesection from '../components/Welcomesection';
import Servicesection from '../components/Servicesection';
import Meetdoctorsection from '../components/Meetdoctorsection';
import FaqTemplate from '../components/faq/FaqTemplate';
// import usePortalContext from '../components/PortalContext';

export default function Home() {
  return (
    <div>
      <div className='home-page-content'>
        {/* <DoctorPage /> */}
        <Herosection/>
        {/* <Graph/> */}
        <Welcomesection/>
        <Servicesection/>
        <Meetdoctorsection/>
        <FaqTemplate />
        {/* <Footer /> */}
      </div>
    </div>
  )
}
