import React from 'react';
import { Clock, Star, Wine, Utensils, Leaf, Crown, Award } from 'lucide-react';

export default function Dining() {
  const menuHighlights = [
    {
      name: 'Jagnje sa Roštilja',
      nameEn: 'Heritage Roasted Lamb',
      description: 'Slow-roasted lamb with mountain herbs, traditional kajmak, and house-made ajvar served on handcrafted ceramic',
      price: '€38',
      category: 'Signature Dishes',
      origin: 'Traditional Serbian'
    },
    {
      name: 'Dunavska Riba',
      nameEn: 'Danube River Fish',
      description: 'Fresh carp with walnut crust, served with heritage grains and seasonal vegetables from local farms',
      price: '€34',
      category: 'From Our Waters',
      origin: 'Vojvodina Tradition'
    },
    {
      name: 'Šumadijski Čvarci',
      nameEn: 'Forest Mushroom Medley',
      description: 'Wild mushrooms from Šumadija forests, truffle oil, aged cheese, and traditional cornbread',
      price: '€28',
      category: 'Vegetarian Heritage',
      origin: 'Šumadija Region'
    },
    {
      name: 'Baklava Reimagined',
      nameEn: 'Modern Baklava',
      description: 'Deconstructed baklava with pistachio ice cream, honey foam, and rose petals',
      price: '€16',
      category: 'Sweet Traditions',
      origin: 'Balkan Inspired'
    }
  ];

  const wineSelection = [
    { name: 'Prokupac Reserve', region: 'Župa', year: '2019', price: '€45' },
    { name: 'Tamjanika Premium', region: 'Fruška Gora', year: '2021', price: '€38' },
    { name: 'Cabernet Sauvignon', region: 'Vršac', year: '2018', price: '€52' }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Hero Section with Etno Pattern Overlay */}
      <section className="relative h-96 bg-cover bg-center overflow-hidden" 
               style={{backgroundImage: 'url(https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg)'}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        
        {/* Etno Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1A06E' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
          <div className="max-w-4xl">
            <div className="mb-6">
              <Crown className="h-16 w-16 text-resort-gold mx-auto mb-4" />
            </div>
            <h1 className="text-6xl font-bold mb-4 tracking-wide">
              <span className="text-resort-gold">Etno</span> Gastronomy
            </h1>
            <p className="text-xl mb-2 font-light tracking-wide">Where Heritage Meets Innovation</p>
            <div className="w-24 h-0.5 bg-resort-gold mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Restaurant Philosophy */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg" 
                  alt="Restaurant Interior" 
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-resort-gold rounded-full flex items-center justify-center shadow-xl">
                  <Award className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <Leaf className="h-12 w-12 text-resort-gold mb-6" />
                <h2 className="text-5xl font-bold text-stone-900 mb-8 leading-tight">
                  Culinary <span className="text-resort-gold italic">Heritage</span>
                </h2>
              </div>
              <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
                <p>
                  Our kitchen celebrates the rich gastronomic traditions of Serbia, reimagined through 
                  contemporary culinary artistry. Each dish tells a story of our land, our people, 
                  and our ancestral wisdom.
                </p>
                <p>
                  From the fertile plains of Vojvodina to the mountainous regions of Šumadija, 
                  we source the finest ingredients to create an authentic yet innovative dining experience 
                  that honors our cultural heritage.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="text-center p-6 bg-stone-50 rounded-2xl">
                  <Clock className="h-8 w-8 text-resort-gold mx-auto mb-3" />
                  <div className="font-bold text-stone-900 text-lg">Dinner Service</div>
                  <div className="text-stone-600">18:00 - 23:30</div>
                </div>
                <div className="text-center p-6 bg-stone-50 rounded-2xl">
                  <Wine className="h-8 w-8 text-resort-gold mx-auto mb-3" />
                  <div className="font-bold text-stone-900 text-lg">Wine Cellar</div>
                  <div className="text-stone-600">16:00 - 01:00</div>
                </div>
              </div>
              
              <button className="mt-10 bg-resort-gold hover:bg-resort-gold/90 text-white font-semibold px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
                Reserve Your Table
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu */}
      <section className="py-24 bg-gradient-to-b from-stone-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <Utensils className="h-16 w-16 text-resort-gold mx-auto mb-8" />
            <h2 className="text-5xl font-bold text-stone-900 mb-6">
              Signature <span className="text-resort-gold italic">Creations</span>
            </h2>
            <div className="w-32 h-0.5 bg-resort-gold mx-auto mb-8"></div>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
              A curated selection of dishes that embody our philosophy of honoring tradition 
              while embracing culinary innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {menuHighlights.map((dish, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-stone-100">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="w-2 h-2 bg-resort-gold rounded-full mr-3"></div>
                      <span className="text-sm text-resort-gold font-medium tracking-wide uppercase">
                        {dish.origin}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">{dish.nameEn}</h3>
                    <h4 className="text-lg text-resort-gold italic mb-4 font-medium">{dish.name}</h4>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-resort-gold">{dish.price}</span>
                  </div>
                </div>
                <p className="text-stone-600 leading-relaxed mb-6 text-lg">{dish.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-stone-500 bg-stone-50 px-4 py-2 rounded-full">
                    {dish.category}
                  </span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-resort-gold fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wine Selection */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23B1A06E' fill-opacity='0.3'%3E%3Cpath d='M50 50c13.807 0 25-11.193 25-25S63.807 0 50 0 25 11.193 25 25s11.193 25 25 25zm0 25c13.807 0 25-11.193 25-25S63.807 50 50 50s-25 11.193-25 25 11.193 25 25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '100px 100px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Wine className="h-16 w-16 text-resort-gold mx-auto mb-8" />
            <h2 className="text-5xl font-bold mb-6">
              Serbian <span className="text-resort-gold italic">Terroir</span>
            </h2>
            <div className="w-32 h-0.5 bg-resort-gold mx-auto mb-8"></div>
            <p className="text-xl text-stone-300 max-w-3xl mx-auto">
              Discover exceptional wines from Serbia's most prestigious vineyards, 
              carefully selected to complement our culinary heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wineSelection.map((wine, index) => (
              <div key={index} className="bg-stone-800/50 backdrop-blur-sm rounded-2xl p-8 text-center border border-stone-700 hover:border-resort-gold transition-all duration-300">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-resort-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Wine className="h-8 w-8 text-resort-gold" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{wine.name}</h3>
                  <p className="text-resort-gold font-medium">{wine.region} • {wine.year}</p>
                </div>
                <div className="text-3xl font-bold text-resort-gold mb-4">{wine.price}</div>
                <button className="text-white border border-resort-gold hover:bg-resort-gold hover:text-stone-900 px-6 py-2 rounded-full transition-all duration-300 font-medium">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef's Experience */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-resort-gold to-yellow-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Crown className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Chef's Table</h3>
              <p className="text-stone-600 leading-relaxed">
                An intimate 8-course journey through Serbian culinary traditions, 
                personally crafted and presented by our executive chef.
              </p>
              <button className="mt-6 text-resort-gold font-semibold hover:text-resort-gold/80 transition-colors">
                Reserve Experience →
              </button>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-resort-gold to-yellow-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Wine className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Wine Pairing</h3>
              <p className="text-stone-600 leading-relaxed">
                Discover the perfect harmony between our signature dishes and 
                carefully selected Serbian wines with our sommelier.
              </p>
              <button className="mt-6 text-resort-gold font-semibold hover:text-resort-gold/80 transition-colors">
                Book Tasting →
              </button>
            </div>
            
            <div className="text-center group">
              <div className="bg-gradient-to-br from-resort-gold to-yellow-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-4">Farm to Table</h3>
              <p className="text-stone-600 leading-relaxed">
                Experience the journey from local farms to your plate with 
                seasonal menus featuring the finest regional ingredients.
              </p>
              <button className="mt-6 text-resort-gold font-semibold hover:text-resort-gold/80 transition-colors">
                Seasonal Menu →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation CTA */}
      <section className="py-20 bg-gradient-to-r from-resort-forest to-stone-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1A06E' fill-opacity='0.4'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='nonzero'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-white mb-8">
            Begin Your <span className="text-resort-gold italic">Culinary Journey</span>
          </h2>
          <p className="text-xl text-stone-200 mb-12 leading-relaxed max-w-2xl mx-auto">
            Reserve your table for an unforgettable evening where Serbian heritage 
            meets contemporary gastronomy in perfect harmony.
          </p>
          <div className="space-y-6 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <button className="w-full sm:w-auto bg-resort-gold hover:bg-resort-gold/90 text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
              Make Reservation
            </button>
            <button className="w-full sm:w-auto border-2 border-resort-gold text-resort-gold hover:bg-resort-gold hover:text-white font-bold px-10 py-4 rounded-full text-lg transition-all duration-300">
              View Full Menu
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}