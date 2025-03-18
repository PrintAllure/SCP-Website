import React, { useState } from 'react';

const ContactForm = () => {
  const [contactMethod, setContactMethod] = useState('');
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white text-gray-800 rounded-lg shadow-md border border-gray-300 p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">Get In Touch</h2>
        
        <form className='text-left'>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="name">
              Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="email">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium" htmlFor="phone">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium" htmlFor="message">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 min-h-24"
              required
            ></textarea>
          </div>
          
          <div className="mb-4">
            <p className="mb-2 text-sm">You want us to contact you via</p>
            <div className="flex gap-6">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="phone-option"
                  name="contact-method"
                  value="phone"
                  className="mr-2 h-4 w-4 text-blue-600"
                  onChange={() => setContactMethod('phone')}
                />
                <label htmlFor="phone-option" className="text-sm">Phone</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="email-option"
                  name="contact-method"
                  value="email"
                  className="mr-2 h-4 w-4 text-blue-600"
                  onChange={() => setContactMethod('email')}
                />
                <label htmlFor="email-option" className="text-sm">Email</label>
              </div>
            </div>
          </div>
          
          {contactMethod === 'phone' && (
            <div className="mb-4">
              <label className="block mb-2 text-sm font-medium" htmlFor="best-time">
                Best hours to contact you
              </label>
              <input
                type="text"
                id="best-time"
                className="w-full p-3 bg-gray-50 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          )}
          
          <div className="flex items-start mb-6">
            <input
              type="checkbox"
              id="marketing-consent"
              className="mt-1 mr-2 h-4 w-4 text-blue-600 rounded"
            />
            <p className="text-xs text-gray-600">
              I allow to show my feedback on home page and for other marketing purposes.
            </p>
          </div>
          
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;