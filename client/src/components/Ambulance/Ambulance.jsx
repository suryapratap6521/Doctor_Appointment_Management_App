import React, { useState } from 'react';

function AmbulanceService() {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [selectedAmbulanceType, setSelectedAmbulanceType] = useState("");
  const [selectedExtraService, setSelectedExtraService] = useState("");

  const bookAmbulance = (ambulanceType) => {
    setSelectedAmbulanceType(ambulanceType);
    setShowBookingModal(true);
  };

  const cancelBooking = () => {
    setShowBookingModal(false);
    setSelectedAmbulanceType("");
  };

  const confirmBooking = () => {
    // Implement your booking logic here
    alert(`Booking for ${selectedAmbulanceType} with Extra Service: ${selectedExtraService} is in progress.`);
    setShowBookingModal(false);
    setSelectedAmbulanceType("");
    setSelectedExtraService("");
  };
  
  const pageStyle = {
    marginTop: '100px',
  }


  return (
    <div className="p-6 bg-gray-100" style={pageStyle}>
      <h1 className="text-3xl font-bold text-center my-8 relative">
        Ambulance Service's
        <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 border-b-2 border-black"></span>
      </h1>

      <div className="flex flex-wrap justify-center -mx-4 ">
        {/* Card for Private Ambulance */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div className="rounded-lg p-4 shadow-2xl flex flex-col h-full">
            <img src="https://cdn.pixabay.com/photo/2014/11/27/18/37/doctor-on-call-548023_1280.jpg" alt="Private Ambulance" className="w-full h-auto rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Private Hospital Ambulance</h2>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <button onClick={() => bookAmbulance('Private Hospital Ambulance')} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 mt-auto">
              Book Ambulance
            </button>
          </div>
        </div>

        {/* Card for Government Ambulance */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4 mb-8">
          <div className="rounded-lg p-4 shadow-2xl flex flex-col h-full">
            <img src="https://media.istockphoto.com/id/1310709685/photo/ambulance-car-isolated-on-white.jpg?s=1024x1024&w=is&k=20&c=CQXQo_gEm2G408vPU6xImbm-1MpHopNB5G-y8mjquN0=" alt="Government Ambulance" className="w-full h-auto rounded mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Government Hospital Ambulance</h2>
            <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. in </p>
            <button onClick={() => bookAmbulance('Government Hospital Ambulance')} className="bg-red-500 text-white font-semibold px-4 py-2 rounded hover:bg-red-600 mt-auto">
              Book Ambulance
            </button>
          </div>
        </div>
      </div>

      <select value={selectedExtraService} onChange={(e) => setSelectedExtraService(e.target.value)} className="bg-white border rounded px-4 py-2 mb-2">
        <option value="">persnol service</option>
      </select>

      {/* Modal for booking confirmation */}
      {showBookingModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-white p-4 rounded-lg shadow-md z-10">
            <h2 className="text-xl font-semibold mb-4">Confirm Booking</h2>
            <p className="text-gray-600 mb-4">Do you want to book this ambulance?</p>
            <div className="flex justify-end">
              <button onClick={cancelBooking} className="bg-gray-400 text-white font-semibold px-4 py-2 rounded mr-4 hover:bg-gray-500">Cancel</button>
              <button onClick={confirmBooking} className="bg-blue-500 text-white font-semibold px-4 py-2 rounded hover:bg-blue-600">Book</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AmbulanceService;
