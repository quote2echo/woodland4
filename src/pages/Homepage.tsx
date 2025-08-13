import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Bed, Utensils, Waves, Calendar, Star, Crown, Sparkles, Award, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function Homepage() {
  return (
    <>
      <HeroSection />
      <WelcomeSection />
      <HighlightCards />
      <TestimonialSlider />
      <LocationSection />
    </>
  );
}

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat overflow-hidden" 
             style={{backgroundImage: 'url(/assets/img_2598-scaled.jpg)'}}>
      {/* Elegant overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      
      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1A06E' fill-opacity='0.3'%3E%3Cpath d='M50 50c13.807 0 25-11.193 25-25S63.807 0 50 0 25 11.193 25 25s11.193 25 25 25zm0 25c13.807 0 25-11.193 25-25S63.807 50 50 50s-25 11.193-25 25 11.193 25 25 25z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }}></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full text-center text-resort-white px-4">
        <div className="max-w-6xl mx-auto">
          {/* Crown decoration */}
          <div className="mb-8">
            <Crown className="h-20 w-20 text-resort-gold mx-auto mb-4 drop-shadow-lg" />
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <Sparkles className="h-6 w-6 text-resort-gold" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-wide">
            <span className="block text-resort-white font-serif italic text-2xl md:text-3xl mb-2" style={{fontFamily: 'Georgia, serif'}}>
              {t('hero.welcomeTo')}
            </span>
            <span className="block text-resort-gold font-serif text-4xl md:text-6xl mt-2" style={{
              fontFamily: 'Georgia, serif',
              textShadow: '0 4px 20px rgba(177, 160, 110, 0.5)'
            }}>
              {t('hero.woodlandResort')}
            </span>
          </h1>
          
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-6 mb-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-resort-gold to-transparent"></div>
              <div className="text-resort-gold font-serif italic text-lg tracking-widest">{t('hero.location')}</div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent via-resort-gold to-transparent"></div>
            </div>
          </div>

          <p className="text-base md:text-lg mb-8 text-resort-cream max-w-3xl mx-auto leading-relaxed font-light">
            {t('hero.description')}
          </p>

          <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
            <button className="group relative w-full sm:w-auto bg-gradient-to-r from-resort-gold to-yellow-600 hover:from-yellow-600 hover:to-resort-gold text-resort-white font-bold px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-resort-gold/25 border border-resort-gold/30">
              <span className="relative z-10 flex items-center justify-center">
                <Crown className="h-5 w-5 mr-2" />
                {t('hero.reserveExperience')}
              </span>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <a 
              href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group w-full sm:w-auto border-2 border-resort-white text-resort-white hover:bg-resort-white hover:text-resort-forest font-bold px-8 py-3 rounded-full text-base transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm bg-white/10"
            >
              <MapPin className="h-5 w-5 mr-2" />
              {t('hero.discoverLocation')}
            </a>
          </div>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute bottom-10 left-10 opacity-30">
        <div className="w-32 h-32 border border-resort-gold/30 rounded-full flex items-center justify-center">
          <div className="w-20 h-20 border border-resort-gold/50 rounded-full flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-resort-gold" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-20 right-16 opacity-20">
        <div className="w-24 h-24 border border-resort-gold/40 rounded-full"></div>
      </div>
    </section>
  );
}

function WelcomeSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-resort-white to-resort-cream relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23364826' fill-opacity='0.4'%3E%3Cpath d='M0 0h80v80H0V0zm20 20v40h40V20H20zm20 35a15 15 0 1 1 0-30 15 15 0 0 1 0 30z' fill-rule='nonzero'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="mb-8">
            <Award className="h-16 w-16 text-resort-gold mx-auto mb-6" />
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <div className="text-resort-gold text-sm tracking-[0.3em] font-medium">{t('welcome.luxuryRedefined')}</div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-resort-forest mb-6 leading-tight">
            <span className="font-serif italic text-2xl md:text-4xl" style={{fontFamily: 'Georgia, serif'}}>
              {t('welcome.everyMoment')}
            </span>
            <br />
            <span className="text-resort-gold font-serif text-3xl md:text-5xl" style={{fontFamily: 'Georgia, serif'}}>
              {t('welcome.becomesMemory')}
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg text-resort-gray leading-relaxed font-light mb-6">
              {t('welcome.description')}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-resort-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Crown className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-resort-forest rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-resort-gold" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-resort-forest mb-2 font-serif">{t('welcome.premiumService')}</h3>
                <p className="text-resort-gray leading-relaxed text-sm">
                  {t('welcome.premiumServiceDesc')}
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-resort-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Award className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-resort-forest rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-resort-gold" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-resort-forest mb-2 font-serif">{t('welcome.awardWinning')}</h3>
                <p className="text-resort-gray leading-relaxed text-sm">
                  {t('welcome.awardWinningDesc')}
                </p>
              </div>
              
              <div className="text-center group">
                <div className="relative mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-resort-gold to-yellow-600 rounded-full flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-resort-forest rounded-full flex items-center justify-center">
                    <Sparkles className="h-3 w-3 text-resort-gold" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-resort-forest mb-2 font-serif">{t('welcome.uniqueExperience')}</h3>
                <p className="text-resort-gray leading-relaxed text-sm">
                  {t('welcome.uniqueExperienceDesc')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HighlightCards() {
  const { t } = useLanguage();

  const highlights = [
    {
      title: t('highlights.accommodation.title'),
      subtitle: t('highlights.accommodation.subtitle'),
      description: t('highlights.accommodation.desc'),
      image: '/assets/soba-6-scaled.jpg',
      icon: Bed,
      link: '/accommodation',
      decorativeIcon: Crown
    },
    {
      title: t('highlights.dining.title'),
      subtitle: t('highlights.dining.subtitle'),
      description: t('highlights.dining.desc'),
      image: 'https://images.pexels.com/photos/696218/pexels-photo-696218.jpeg',
      icon: Utensils,
      link: '/dining',
      decorativeIcon: Award
    },
    {
      title: t('highlights.wellness.title'),
      subtitle: t('highlights.wellness.subtitle'),
      description: t('highlights.wellness.desc'),
      image: '/assets/pool-garten.jpg',
      icon: Waves,
      link: '/contact',
      decorativeIcon: Sparkles
    },
    {
      title: t('highlights.events.title'),
      subtitle: t('highlights.events.subtitle'),
      description: t('highlights.events.desc'),
      image: '/assets/weeding-graffiti.jpg',
      icon: Calendar,
      link: '/events',
      decorativeIcon: Crown
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-resort-cream to-resort-white relative">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <div className="w-40 h-40 border-2 border-resort-gold rounded-full"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <div className="w-32 h-32 border border-resort-forest rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <div className="text-resort-gold text-sm tracking-[0.3em] font-medium">{t('highlights.discoverExcellence')}</div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-resort-forest mb-6 leading-tight">
            <span className="font-serif italic text-2xl md:text-4xl" style={{fontFamily: 'Georgia, serif'}}>
              {t('highlights.exceptional')}
            </span>
            <br />
            <span className="text-resort-gold font-serif text-3xl md:text-5xl" style={{fontFamily: 'Georgia, serif'}}>
              {t('highlights.experiences')}
            </span>
          </h2>
          
          <p className="text-base text-resort-gray max-w-3xl mx-auto leading-relaxed font-light">
            {t('highlights.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} className="group relative bg-resort-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-resort-gold/10">
              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 z-20">
                <highlight.decorativeIcon className="h-6 w-6 text-resort-gold opacity-60" />
              </div>
              
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={highlight.image} 
                  alt={highlight.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Floating icon */}
                <div className="absolute bottom-4 left-4 z-10">
                  <div className="w-12 h-12 bg-resort-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                    <highlight.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>
              
              <div className="p-6 relative">
                {/* Decorative line */}
                <div className="w-12 h-px bg-resort-gold mb-4"></div>
                
                <div className="mb-3">
                  <div className="text-sm text-resort-gold font-medium tracking-widest uppercase mb-2">
                    {highlight.subtitle}
                  </div>
                  <h3 className="text-xl font-bold text-resort-forest mb-3 font-serif leading-tight">
                    {highlight.title}
                  </h3>
                </div>
                
                <p className="text-resort-gray mb-6 leading-relaxed text-sm font-light">
                  {highlight.description}
                </p>
                
                <Link 
                  to={highlight.link}
                  className="group/link inline-flex items-center text-resort-gold font-bold hover:text-resort-forest transition-all duration-300 text-base"
                >
                  <span className="border-b-2 border-resort-gold group-hover/link:border-resort-forest transition-colors duration-300">
                    {t('highlights.exploreMore')}
                  </span>
                  <ChevronRight className="ml-2 h-5 w-5 group-hover/link:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialSlider() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: 'Ana Petrović',
      location: 'Belgrade, Serbia',
      title: 'Wedding Celebration',
      rating: 5,
      text: 'Woodland Resort transformed our wedding dreams into reality. Every detail was executed with perfection, from the breathtaking ceremony venue to the exquisite reception. The staff\'s dedication and the resort\'s elegance created an absolutely magical experience that our guests still talk about.'
    },
    {
      name: 'Marco Rossi',
      location: 'Milan, Italy',
      title: 'Luxury Getaway',
      rating: 5,
      text: 'An extraordinary escape from the ordinary. The attention to detail, from the sumptuous accommodations to the world-class dining, exceeded every expectation. The serene natural setting combined with impeccable service created the perfect sanctuary for relaxation and rejuvenation.'
    },
    {
      name: 'Stefan Nikolić',
      location: 'Novi Sad, Serbia',
      title: 'Corporate Retreat',
      rating: 5,
      text: 'Our executive retreat at Woodland Resort was phenomenally successful. The sophisticated meeting facilities, combined with exceptional hospitality and inspiring surroundings, created the perfect environment for productive discussions and team building. Truly a world-class venue.'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-resort-forest to-stone-900 relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B1A06E' fill-opacity='0.3'%3E%3Cpath d='M60 60c16.569 0 30-13.431 30-30S76.569 0 60 0 30 13.431 30 30s13.431 30 30 30zm0 30c16.569 0 30-13.431 30-30S76.569 60 60 60s-30 13.431-30 30 13.431 30 30 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '120px 120px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-20 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <div className="text-resort-gold text-sm tracking-[0.3em] font-medium">{t('testimonials.guestTestimonials')}</div>
              <div className="w-20 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-resort-white mb-6 leading-tight">
            <span className="font-serif italic text-2xl md:text-4xl" style={{fontFamily: 'Georgia, serif'}}>
              {t('testimonials.storiesOf')}
            </span>
            <br />
            <span className="text-resort-gold font-serif text-3xl md:text-5xl" style={{fontFamily: 'Georgia, serif'}}>
              {t('testimonials.excellence')}
            </span>
          </h2>
          
          <p className="text-base text-resort-cream max-w-3xl mx-auto font-light">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-resort-white to-resort-cream rounded-2xl shadow-2xl p-8 md:p-10 border border-resort-gold/20">
            {/* Decorative quote marks */}
            <div className="absolute -top-4 left-8">
              <div className="w-8 h-8 bg-resort-gold rounded-full flex items-center justify-center shadow-xl">
                <span className="text-lg text-white font-serif">"</span>
              </div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-resort-gold fill-current mx-1" />
                ))}
              </div>
              
              <blockquote className="text-lg md:text-xl text-resort-gray mb-8 leading-relaxed font-light italic">
                "{testimonials[currentSlide].text}"
              </blockquote>
              
              <div className="relative">
                <div className="w-16 h-px bg-resort-gold mx-auto mb-4"></div>
                <div className="font-bold text-xl text-resort-forest mb-2 font-serif">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-resort-gray text-base mb-1">
                  {testimonials[currentSlide].location}
                </div>
                <div className="text-resort-gold font-medium tracking-wide text-sm uppercase">
                  {testimonials[currentSlide].title}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-resort-gold hover:bg-yellow-600 rounded-full p-3 shadow-xl hover:shadow-resort-gold/25 transition-all duration-300 text-white group"
          >
            <ChevronLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-resort-gold hover:bg-yellow-600 rounded-full p-3 shadow-xl hover:shadow-resort-gold/25 transition-all duration-300 text-white group"
          >
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-resort-gold shadow-lg scale-125' 
                    : 'bg-resort-gold/30 hover:bg-resort-gold/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-resort-white to-resort-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23364826' fill-opacity='0.4'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm0 0c0 11.046 8.954 20 20 20s20-8.954 20-20-8.954-20-20-20-20 8.954-20 20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="mb-6">
            <MapPin className="h-12 w-12 text-resort-gold mx-auto mb-4" />
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-resort-gold"></div>
              <div className="text-resort-gold text-sm tracking-[0.3em] font-medium">{t('location.discoverLocation')}</div>
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-resort-gold"></div>
            </div>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold text-resort-forest mb-6 leading-tight">
            <span className="font-serif italic text-2xl md:text-4xl" style={{fontFamily: 'Georgia, serif'}}>
              {t('location.findYour')}
            </span>
            <br />
            <span className="text-resort-gold font-serif text-3xl md:text-5xl" style={{fontFamily: 'Georgia, serif'}}>
              {t('location.sanctuary')}
            </span>
          </h2>
          
          <p className="text-base text-resort-gray max-w-3xl mx-auto leading-relaxed font-light mb-8">
            {t('location.description')}
          </p>

          <a 
            href="https://www.google.com/maps/place/Woodland+Resort/@44.0325788,20.8742334,13z/data=!4m9!3m8!1s0x47572155400bb7b9:0x720f0e82bab8e50d!5m2!4m1!1i2!8m2!3d44.0325788!4d20.8742334!16s%2Fg%2F11b6j021pb?entry=ttu&g_ep=EgoyMDI1MDgxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center bg-gradient-to-r from-resort-gold to-yellow-600 hover:from-yellow-600 hover:to-resort-gold text-white font-bold px-8 py-3 rounded-full text-base transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-resort-gold/25"
          >
            <MapPin className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
            <span>{t('location.exploreLocation')}</span>
            <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}