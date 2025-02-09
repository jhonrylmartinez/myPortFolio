import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
  
    emailjs.sendForm(
      'service_hs3oi1g',  // Your Service ID
      'template_j1d2x8h', // Your Template ID
      e.target,
      'tMGgEnhh8LvHNmDfu' // Your Public Key
    ).then(
      (result) => {
        alert('✅ Message sent successfully!');
        closeModal();
      },
      (error) => {
        console.error('EmailJS Error:', error);
        alert('❌ Failed to send message. Please try again.');
      }
    ).finally(() => {
      setIsSending(false);
      e.target.reset(); // Reset form after submission
    });
  };
  

  return (
    <div>
      <section id="contact" className="py-8">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Contact Me</h2>
        <p className="mt-4 text-lg text-center text-gray-700">
          I would love to hear from you. Whether you have a question, a project in mind, or just want to connect, feel free to reach out.
        </p>

        <div className="mt-6 text-center">
          <button
            onClick={openModal}
            className="mt-4 py-2 px-6 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            Contact Me
          </button>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
          <div
            className="bg-white p-6 rounded-lg shadow-lg max-w-[90%] sm:max-w-[50rem] mx-auto relative w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-700 text-2xl">&times;</button>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Form</h3>

            <form onSubmit={sendEmail}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-lg text-gray-800">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-lg text-gray-800">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-lg text-gray-800">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                disabled={isSending}
              >
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSection;
