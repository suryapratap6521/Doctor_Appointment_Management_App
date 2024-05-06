import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import HomePage_doc from './pages_doc/HomePage_doc'
import PatientPage from './components_doctor/inbox/PatientPage'
import NavbarDoc from './components_doctor/navbar_doc/NavbarDoc'
import SideBarDoc from './components_doctor/SideBar_Doc/SideBarDoc'

function App2() {
  return (
    <div>
        <BrowserRouter>
            <div className='flex'>
                <NavbarDoc/>
                <SideBarDoc/>
                <div className="flex-1">
                    <Routes>
                        {/* <Route path="/homeDoc" element={<HomePage_doc/>} />
                        <Route path="homeDoc/inbox" element={<PatientPage/>} /> */}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    </div>
  )
}

export default App2