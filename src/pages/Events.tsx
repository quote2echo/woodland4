import React from 'react';
import { Heart, Users, Calendar, Camera, Music, Flower2 } from 'lucide-react';

export default function Events() {
  const eventTypes = [
    {
      title: 'Weddings',
      description: 'Create your perfect wedding day with our comprehensive wedding packages and stunning venues.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg',
      features: ['Ceremony & Reception Venues', 'Bridal Suite', 'Wedding Planning', 'Catering Services']
    },
    {
      title: 'Corporate Events',
      description: 'Professional meeting spaces and team-building activities for successful corporate gatherings.',
      image: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      features: ['Conference Rooms', 'Audio/Visual Equipment', 'Catering Options', 'Team Building Activities']
    },
    {
      title: 'Private Celebrations',
      description: 'Birthdays, anniversaries, and special occasions deserve extraordinary venues and service.',
      image: 'https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg',
      features: ['Private Dining Rooms', 'Custom Menus', 'Entertainment Options', 'Decoration Services']
    }
  ];

  const weddingPackages = [
    {
      name: 'Garden Romance',
      price: '€2,500',
      capacity: '50 guests',
      features: [
        'Garden ceremony venue',
        '4-hour reception',
        'Bridal suite for preparation',
        'Basic floral arrangements',
        'Wedding cake for 50',
        'Photography session (2 hours)'
      ]
    },
    {
      name: 'Woodland Elegance',
      price: '€4,500',
      capacity: '100 guests',
      features: [
        'Premium ceremony & reception venues',
        '6-hour celebration',
        'Luxury bridal suite',
        'Premium floral & decor package',
        'Multi-tier wedding cake',
        'Professional photography (full day)',
        'Live music entertainment'
      ]
    },
    {
      name: 'Presidential Dream',
      price: '€7,500',
      capacity: '150 guests',
      features: [
        'Exclusive venue access',
        'Full day celebration',
        'Presidential suite for wedding party',
        'Luxury floral & lighting design',
        'Gourmet multi-course dinner',
        'Premium bar service',
        'Live band & DJ',
        'Professional videography',
        'Wedding coordinator'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" 
               style={{backgroundImage: 'url(/assets/svadbe7.jpg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Events & Weddings</h1>
            <p className="text-xl">Unforgettable celebrations in spectacular settings</p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">
              Perfect Venues for Every <span className="text-green-600">Occasion</span>
            </h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, our versatile spaces and expert planning 
              team ensure every event is memorable and flawlessly executed.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {eventTypes.map((eventType, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-48">
                  <img src={eventType.image} alt={eventType.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4">{eventType.title}</h3>
                  <p className="text-stone-600 mb-6">{eventType.description}</p>
                  <ul className="space-y-2 mb-6">
                    {eventType.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-stone-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
                    Request Quote
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wedding Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Heart className="h-16 w-16 text-rose-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Wedding Packages</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Choose from our carefully crafted wedding packages, each designed to make your special day perfect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {weddingPackages.map((pkg, index) => (
              <div key={index} className={`rounded-2xl p-8 ${index === 1 ? 'bg-green-50 border-2 border-green-200 transform scale-105' : 'bg-stone-50'} hover:shadow-lg transition-all duration-300`}>
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-stone-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-amber-500 mb-2">{pkg.price}</div>
                  <div className="text-stone-600">{pkg.capacity}</div>
                  {index === 1 && (
                    <div className="bg-green-600 text-white text-sm font-semibold px-3 py-1 rounded-full mt-2 inline-block">
                      Most Popular
                    </div>
                  )}
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-stone-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full font-semibold py-3 rounded-lg transition-colors duration-200 ${
                  index === 1 
                    ? 'bg-green-600 hover:bg-green-700 text-white' 
                    : 'bg-amber-500 hover:bg-amber-600 text-white'
                }`}>
                  Select Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Event Services</h2>
            <p className="text-xl text-stone-600">
              Comprehensive services to make your event extraordinary
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Calendar, label: 'Event Planning' },
              { icon: Camera, label: 'Photography' },
              { icon: Music, label: 'Entertainment' },
              { icon: Flower2, label: 'Floral Design' },
              { icon: Users, label: 'Catering' },
              { icon: Heart, label: 'Wedding Coordination' }
            ].map((service, index) => (
              <div key={index} className="text-center">
                <service.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="font-medium text-stone-900">{service.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Plan Your Event?</h2>
          <p className="text-xl text-green-100 mb-8 leading-relaxed">
            Let our experienced event planning team help you create an unforgettable celebration. 
            Contact us today for a personalized consultation and quote.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-white text-green-600 hover:bg-stone-100 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200">
              Schedule Consultation
            </button>
            <button className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-200">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}