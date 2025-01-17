import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.jsx'
import Footer from './components/Footer.jsx';
import Aboutus from './pages/Aboutus.jsx'
import Services from "./pages/Services.jsx";
import Doctor from "./pages/Doctor.jsx";
import Contact from "./pages/Contact";
import Navbar from './components/navbar/Navbar';
import AppointmentForm from '../src/components/AppointmentForm/AppointmentForm.jsx'
import SideBar from "./components/sidebar/SideBar";
import ProfilePage from "./components/Profile/Profile";
import SomeComponent from "./components/Profile/ProfileMain";
import Availability from "./components/Availability/Availability";
import AvailMain from "./components/Availability/AvailMain";
import Speciality from "./components/DoctorsSpecial/DoctorSpeciality";
import AmbulanceService from "./components/Ambulance/Ambulance";
import PersonalService from "./components/Ambulance/PersonalAmbulance";
import DoctorPage from "./components/inbox/DoctorPage";
import AuthProvider from "./Contexts/AuthProvider";
import Login from './pages/Login.jsx'
import ProtectedRoutes from './ProtectedRoutes.jsx'
import SingleServiceDetail from "./components/SingleServiceDetail.jsx";
import SingleDoctorDetail from './components/SingleDoctorDetail.jsx';
import SignUp from './pages/SignUp.jsx'
import ScrollToTop from "./hooks/ScrollToTop";
import DoctorPanel from './components/DoctorPanel.jsx';
import Chatbot from "./components/chatbot/Chatbot";
import AppointmentFormNew from "./components/form/AppointmentFormNew";
import HomePage_doc from "./pages_doc/HomePage_doc";
import PatientPage from "./components_doctor/inbox/PatientPage";
import ProfilePageDoc from "./pages_doc/ProfilePage_doc";
import ChatApp from "./components/chat-app/ChatApp";
import SlotBooking from "./components/Availability/SlotBooking";
import Payment from "./components/Availability/Payment";
import Notification from "./components/notifications/Notification";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop>
          <div className="patient flex">
            <Navbar />
            <SideBar />
            <div className="main-content flex-1">

            <Routes>
              {/* <Route path="/" element={< />} /> */}
              <Route path="/" element={<Home />} />
              <Route path="/aboutus" element={<Aboutus />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/doctors" element={<Doctor />} />
                <Route path="/doctors/:id" element={<SingleDoctorDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/:id" element={<SingleServiceDetail />} />
                <Route path='/AppointmentForm' element={<AppointmentFormNew />} />
                <Route path="/profile" element={<SomeComponent />} />
                <Route path="/list/availability" element={<AvailMain />} />
                <Route path="/list" element={<Speciality />} />
                <Route path="/ambulance" element={<AmbulanceService />} />
                <Route path="/personalamb" element={<PersonalService />} />
                <Route path="/inbox" element={<DoctorPage/>} />
                <Route path="/doctorpanel" element={<DoctorPanel/>} />
                <Route path="/chatApp" element={<ChatApp/>}></Route>
                <Route path="/slot-booking" element={<SlotBooking/>}></Route>
                <Route path="/notification" element={<Notification/>}></Route>


                <Route path="/homeDoc" element={<HomePage_doc/>} />
                <Route path="homeDoc/inbox" element={<PatientPage/>} />
                <Route path="homeDoc/profile" element={<ProfilePageDoc/>} />
                <Route path="/payment" element={<Payment/>}/>
        
               
              </Route>
                
                

            
            </Routes>
            </div>
          </div>
        </ScrollToTop>
        {/* <Footer /> */}
      </BrowserRouter>
      <Chatbot />
      {/* <Payment/> */}
    </AuthProvider>

  );
}