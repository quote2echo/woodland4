import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    eventType: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" 
               style={{backgroundImage: 'url(https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl">Get in touch to plan your perfect stay or event</p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-8">Get in Touch</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Address</h3>
                    <p className="text-stone-600">
                      <a 
                        href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-green-600 transition-colors"
                      >
                        Woodland Resort<br />
                        Kragujevac, Serbia<br />
                        34000
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Phone</h3>
                    <p className="text-stone-600">+381 34 123-456</p>
                    <p className="text-stone-600">+381 34 123-457 (Events)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Email</h3>
                    <p className="text-stone-600">info@woodlandresort.rs</p>
                    <p className="text-stone-600">events@woodlandresort.rs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-stone-900 mb-1">Reception Hours</h3>
                    <p className="text-stone-600">24 hours daily</p>
                    <p className="text-stone-600">Concierge: 7:00 - 23:00</p>
                  </div>
                </div>
              </div>

              {/* Quick Booking */}
              <div className="bg-green-600 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Quick Booking</h3>
                <p className="mb-6">Ready to book? Call us directly for immediate assistance.</p>
                <button className="bg-white text-green-600 hover:bg-stone-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200 mr-4">
                  Call Now
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-6 py-3 rounded-lg transition-all duration-200">
                  Book Online
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-stone-900 mb-6">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                        placeholder="+381..."
                      />
                    </div>
                    <div>
                      <label htmlFor="eventType" className="block text-sm font-medium text-stone-700 mb-2">
                        Inquiry Type
                      </label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select an option</option>
                        <option value="accommodation">Room Booking</option>
                        <option value="dining">Dining Reservation</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="private">Private Celebration</option>
                        <option value="general">General Inquiry</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                      placeholder="Brief subject line"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Please provide details about your inquiry, preferred dates, number of guests, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="h-5 w-5" />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Find Us</h2>
            <p className="text-xl text-stone-600 mb-4">Located in the beautiful city of Kragujevac</p>
            <a 
              href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Open in Google Maps
            </a>
          </div>
          <div className="bg-stone-200 rounded-2xl h-96 flex items-center justify-center relative overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-200 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-stone-900 mb-4">Woodland Resort</h3>
                <p className="text-stone-600 mb-6">Kragujevac, Serbia</p>
                <a 
                  href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
                >
                  <MapPin className="h-5 w-5 mr-2" />
                  Open in Google Maps
                </a>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
              <a 
                href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-semibold text-sm flex items-center"
              >
                <MapPin className="h-4 w-4 mr-1" />
                View Larger Map
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}