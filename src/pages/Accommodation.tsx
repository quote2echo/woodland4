import React from 'react';
import { Wifi, Car, Coffee, Users, Bath, Bed } from 'lucide-react';

export default function Accommodation() {
  const rooms = [
    {
      name: 'Garden View Suite',
      image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg',
      price: '€120',
      capacity: 2,
      amenities: ['King Bed', 'Garden View', 'Private Bathroom', 'Balcony', 'Free WiFi', 'Room Service'],
      description: 'Spacious suite overlooking our beautifully landscaped gardens with modern amenities and elegant furnishing.'
    },
    {
      name: 'Pool View Deluxe',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      price: '€150',
      capacity: 3,
      amenities: ['Pool View', 'Sofa Bed', 'Mini Bar', 'Air Conditioning', 'Free WiFi', 'Balcony'],
      description: 'Premium room with stunning pool views and additional living space, perfect for longer stays.'
    },
    {
      name: 'Family Villa',
      image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg',
      price: '€250',
      capacity: 6,
      amenities: ['2 Bedrooms', 'Kitchen', 'Living Room', 'Private Terrace', 'Free WiFi', 'Parking'],
      description: 'Spacious villa with separate bedrooms and living areas, ideal for families and group stays.'
    },
    {
      name: 'Presidential Suite',
      image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
      price: '€350',
      capacity: 4,
      amenities: ['Master Bedroom', 'Jacuzzi', 'Private Balcony', 'Butler Service', 'Premium Amenities', 'Concierge'],
      description: 'Our most luxurious accommodation featuring premium amenities and personalized service.'
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative h-80 bg-cover bg-center" 
               style={{backgroundImage: 'url(https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg)'}}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-5xl font-bold mb-4">Accommodation</h1>
            <p className="text-xl">Luxury rooms and suites for your perfect stay</p>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Choose Your Perfect Room</h2>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Each room is thoughtfully designed to provide the utmost comfort and luxury during your stay.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="relative h-64">
                  <img src={room.image} alt={room.name} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white px-3 py-1 rounded-lg font-semibold">
                    {room.price}/night
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-stone-900">{room.name}</h3>
                    <div className="flex items-center text-stone-600">
                      <Users className="h-5 w-5 mr-1" />
                      <span>{room.capacity} guests</span>
                    </div>
                  </div>
                  <p className="text-stone-600 mb-6">{room.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {room.amenities.map((amenity, idx) => (
                      <div key={idx} className="flex items-center text-sm text-stone-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        {amenity}
                      </div>
                    ))}
                  </div>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-6">Resort Amenities</h2>
            <p className="text-xl text-stone-600">Enjoy world-class facilities during your stay</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {[
              { icon: Wifi, label: 'Free WiFi' },
              { icon: Car, label: 'Free Parking' },
              { icon: Coffee, label: 'Room Service' },
              { icon: Bath, label: 'Spa Services' },
              { icon: Bed, label: 'Premium Bedding' },
              { icon: Users, label: '24/7 Concierge' }
            ].map((amenity, index) => (
              <div key={index} className="text-center">
                <amenity.icon className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <div className="font-medium text-stone-900">{amenity.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}