import React from 'react';
import './index.css';
import Dropdown from './Dropdown';
import Cards from '../Cards/Cards'; // Import the Cards component

function FaqTemplate() {
  return (
    <div className="faq-container">
      <div className="faq-content">
        <div className="faq-left">
          <h2>Frequent Asked Questions</h2>
          <h1>Value We Give to You</h1>
          <p>We are always ready to help by providing the best services for you.</p>
          <Dropdown
            des="We understand that unexpected delays can occur. Please contact our office as soon as possible if you're running late. We'll do our best to accommodate you or reschedule your appointment if needed."
            t="What happens if I'm running late for my appointment?"
          />
          <Dropdown
            des="We value your feedback. You can provide feedback through our website or by contacting our customer support team. Your input helps us improve our services."
            t="How can I provide feedback about my appointment experience?"
          />
          <Dropdown
            des="You can book an appointment with a doctor through our online booking system. Simply visit our website, select your preferred doctor, choose an available time slot, and follow the steps to confirm your appointment."
            t="How can I book an appointment with a doctor?"
          />
        </div>
        <div className="faq-right">
          <div className="cards-container">
            <Cards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqTemplate;
