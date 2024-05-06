import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import upcoming from "../../img/upcoming.gif";

const timeSlotsData = {
  '2023-09-28': [
    { id: 'morning1', label: '8:00 AM - 12:00 PM', available: true },
    { id: 'morning2', label: '8:30 AM - 12:30 PM', available: true },
    { id: 'morning3', label: '9:00 AM - 1:00 PM', available: true },
  ],
  '2023-09-29': [
    { id: 'afternoon1', label: '12:00 PM - 2:00 PM', available: true },
    { id: 'afternoon2', label: '12:30 PM - 2:30 PM', available: true },
  ],
  '2023-09-30': [
    { id: 'lateafternoon', label: '2:00 PM - 4:00 PM', available: false },
  ],
  '2023-10-01': [
    { id: 'evening1', label: '4:00 PM - 6:00 PM', available: true },
    { id: 'evening2', label: '4:30 PM - 6:30 PM', available: true },
  ],
  '2023-10-02': [
    { id: 'night1', label: '8:00 PM - 10:00 PM', available: true },
    { id: 'night2', label: '8:30 PM - 10:30 PM', available: true },
  ],
};

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null); // Reset the selected slot when the date changes
  };

  const availableSlots = timeSlotsData[selectedDate.toISOString().split('T')[0]] || [];

  const handleSlotClick = (slotId) => {
    const clickedSlot = availableSlots.find((slot) => slot.id === slotId);

    if (clickedSlot && clickedSlot.available) {
      setSelectedSlot(slotId);
    } else {
      alert('This slot is not available. Please choose another.');
    }
  };

  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!selectedSlot) {
      alert('Please select a time slot.');
    } else {
      setPopupVisible(true);
    }
  };

  return (
    <div className="w-full max-w-screen-md mx-auto my-20 transition-transform duration-300 hover:scale-102">
      <div className="bg-blue-500 border-t-12 border-blue-700 py-5 text-center">
        <h1 className="text-white text-3xl font-bold">APPOINTMENT FORM</h1>
      </div>
      <div className="flex items-center mt-5">
        <img src={upcoming} alt="Upcoming" className="w-16 h-16" />
        <p className="font-bold text-blue-500">Upcoming</p>
      </div>
      <div className="p-5">
        <form>
          <div className="mb-5">
            <label className="block font-bold text-xl text-gray-800">Appointment</label>
            <div className="flex">
              <div className="flex-1 mr-5">
                <div className="border border-gray-300 rounded">
                  <Calendar
                    onChange={handleDateChange}
                    value={selectedDate}
                    calendarType="US"
                    showNavigation={true}
                    minDate={new Date()}
                    tileClassName={({ date }) =>
                      date.toDateString() === selectedDate.toDateString()
                        ? 'custom-tile current-date'
                        : 'custom-tile'
                    }
                  />
                </div>
                <p className="text-blue-500 font-bold mt-3">
                  <span className="bg-blue-300 text-white rounded-full px-2 py-1">
                    Selected Date: {selectedDate.toDateString()}
                  </span>
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {availableSlots.map((slot) => (
                    <button
                      key={slot.id}
                      className={`time-button ${
                        selectedSlot === slot.id ? 'selected' : ''
                      } ${slot.available ? 'available' : 'unavailable'}`}
                      onClick={() => handleSlotClick(slot.id)}
                    >
                      {slot.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mb-5">
            <label className="block font-bold text-xl text-gray-800">Patient Message</label>
            <textarea
              name="patientMessage"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded resize-y"
              placeholder="Add a message for the patient..."
            ></textarea>
          </div>
          <div className="text-center">
            <button
              className="py-2 px-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700"
              type="button"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <p className="text-xl font-semibold text-blue-500">Appointment Scheduled</p>
            <p className="mt-2">Date: {selectedDate.toDateString()}</p>
            <p>Time Slot: {selectedSlot}</p>
            <button
              className="mt-4 py-2 px-4 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-700"
              onClick={() => setPopupVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AppointmentForm;
