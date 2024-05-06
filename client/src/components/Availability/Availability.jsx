// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Availability() {
//   const [doctors] = useState([
//     {
//       name: 'Dr. John Doe, MD',
//       specialization: 'Cardiologist',
//       experience: '10 years of experience',
//       contact: 'johndoe@example.com',
//       address: '123 Cardiology Street, City, ZIP',
//       imageSrc: 'https://www.writergirl.com/wp-content/uploads/2014/11/Doctor-790X1024.jpg',
//     },
//     {
//       name: 'Dr. Jane Smith, MD',
//       specialization: 'Cardiologist',
//       experience: '8 years of experience',
//       contact: 'janesmith@example.com',
//       address: '456 Heartbeat Lane, City, ZIP',
//       imageSrc: 'https://painlesshire.com/wp-content/uploads/2017/07/doctor.jpg',
//     },
//     {
//       name: 'Dr. Mark Johnson, MD',
//       specialization: 'Cardiologist',
//       experience: '12 years of experience',
//       contact: 'markjohnson@example.com',
//       address: '789 Heart Health Avenue, City, ZIP',
//       imageSrc: 'https://thumbs.dreamstime.com/b/indian-doctor-mature-male-medical-standing-isolated-white-background-handsome-model-portrait-31871541.jpg',
//     },
//     {
//       name: 'Dr. Jane Smith, MD',
//       specialization: 'Cardiologist',
//       experience: '8 years of experience',
//       contact: 'janesmith@example.com',
//       address: '456 Heartbeat Lane, City, ZIP',
//       imageSrc: 'https://painlesshire.com/wp-content/uploads/2017/07/doctor.jpg',
//     },
//     // ... (other doctors)
//   ]);

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-semibold text-center mb-8">Doctors Specializing in Cardiology</h1>
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {doctors.map((doctor, index) => (
//           <div key={index} className="bg-blue-600 rounded-lg shadow-md p-6 text-white">
//             <div className="flex justify-between items-center">
//               <div className="text-left">
//                 <h2 className="text-xl font-semibold">{doctor.name}</h2>
//                 <p className="text-gray-100">{doctor.specialization}</p>
//               </div>
//               <div className="w-24 h-24 bg-white rounded-full">
//                 <img src={doctor.imageSrc} alt={`Doctor ${index + 1}`} className="w-24 h-24 rounded-full" />
//               </div>
//             </div>
//             <div className="text-center mt-4">
//               <p className="text-gray-100">{doctor.experience}</p>
//               <p className="text-gray-100">Contact: {doctor.contact}</p>
//               <p className="text-gray-100">Address: {doctor.address}</p>
//             </div>
//             <button className="bg-blue-800 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-full mt-4 mx-auto block focus:outline-none">
//               <Link to="/doctorpanel">Book Appointment</Link>
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Availability;




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlotBooking from './SlotBooking';

function Availability() {
  const [doctors] = useState([
    {
      name: 'Dr. John Doe, MD',
      specialization: 'Cardiologist',
      experience: '10 years of experience',
      contact: 'johndoe@example.com',
      address: '123 Cardiology Street, City, ZIP',
      imageSrc: 'https://www.writergirl.com/wp-content/uploads/2014/11/Doctor-790X1024.jpg',
    },
    {
      name: 'Dr. Jane Smith, MD',
      specialization: 'Cardiologist',
      experience: '8 years of experience',
      contact: 'janesmith@example.com',
      address: '456 Heartbeat Lane, City, ZIP',
      imageSrc: 'https://painlesshire.com/wp-content/uploads/2017/07/doctor.jpg',
    },
    {
      name: 'Dr. Mark Johnson, MD',
      specialization: 'Cardiologist',
      experience: '12 years of experience',
      contact: 'markjohnson@example.com',
      address: '789 Heart Health Avenue, City, ZIP',
      imageSrc: 'https://thumbs.dreamstime.com/b/indian-doctor-mature-male-medical-standing-isolated-white-background-handsome-model-portrait-31871541.jpg',
    },
    // ... (other doctors)
  ]);

  return (
    <div className="p-10 overflow-scroll" style={{"marginTop": "2rem"}}>
      <h1 className="text-3xl font-semibold text-center mb-8">Doctors Specializing in Cardiology</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {doctors.map((doctor, index) => (
          <div key={index} className="bg-white border border-white hover:border-yellow-500 rounded-lg shadow-xl p-6 text-black">
            <div className="flex justify-between items-center">
              <div className="text-left">
                <h2 className="text-2xl font-semibold">{doctor.name}</h2>
                <p className="text-yellow-800 text-lg font-style: italic">{doctor.specialization}</p>
              </div>
              <div className="w-24 h-24 bg-white rounded-full">
                <img src={doctor.imageSrc} alt={`Doctor ${index + 1}`} className="w-24 h-24 rounded-full" />
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="text-yellow-800 font-style: italic">{doctor.experience}</p>
              <p className="text-yellow-800 font-style: italic">Contact: {doctor.contact}</p>
              <p className="text-yellow-800 font-style: italic">Address: {doctor.address}</p>
            </div>
            <Link to='/slot-booking' className="bg-yellow-600 hover:bg-yellow-500 text-white font-semibold px-4 py-2 rounded-full mt-4 mx-auto block focus:outline-none">
              Book Appointment
            </Link>
            <Link to='/doctors/01' className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition duration-300">
            View Doctor
            </Link>
          </div>
        ))}
      </div>
    </div> 
  );
}

export default Availability;