import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'it' | 'es' | 'ru' | 'de' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.accommodation': 'Accommodation',
    'nav.dining': 'Dining',
    'nav.events': 'Events & Weddings',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Hero Section
    'hero.welcomeTo': 'Welcome to',
    'hero.woodlandResort': 'Woodland Resort',
    'hero.location': 'KRAGUJEVAC',
    'hero.description': 'Immerse yourself in unparalleled luxury where timeless elegance meets modern sophistication. Experience world-class hospitality, exquisite cuisine, and breathtaking natural beauty in Serbia\'s most distinguished resort destination.',
    'hero.reserveExperience': 'Reserve Your Experience',
    'hero.discoverLocation': 'Discover Our Location',
    
    // Welcome Section
    'welcome.luxuryRedefined': 'LUXURY REDEFINED',
    'welcome.everyMoment': 'Where Every Moment',
    'welcome.becomesMemory': 'Becomes a Memory',
    'welcome.description': 'Nestled in the heart of Kragujevac, Woodland Resort stands as a testament to refined hospitality and architectural elegance. Our commitment to excellence ensures that every guest experiences the pinnacle of luxury and comfort.',
    'welcome.premiumService': 'Premium Service',
    'welcome.premiumServiceDesc': '24/7 concierge service and personalized attention to every detail of your stay.',
    'welcome.awardWinning': 'Award Winning',
    'welcome.awardWinningDesc': 'Recognized for excellence in hospitality and commitment to sustainable luxury.',
    'welcome.uniqueExperience': 'Unique Experience',
    'welcome.uniqueExperienceDesc': 'Curated experiences that blend Serbian heritage with contemporary luxury.',
    
    // Highlights
    'highlights.discoverExcellence': 'DISCOVER EXCELLENCE',
    'highlights.exceptional': 'Exceptional',
    'highlights.experiences': 'Experiences',
    'highlights.description': 'Immerse yourself in a world of refined luxury where every detail has been carefully crafted to exceed your expectations and create lasting memories.',
    'highlights.accommodation.title': 'Luxury Accommodation',
    'highlights.accommodation.subtitle': 'Suites & Villas',
    'highlights.accommodation.desc': 'Indulge in our meticulously designed rooms and suites, each featuring premium amenities, elegant furnishings, and breathtaking views of our pristine grounds.',
    'highlights.dining.title': 'Gourmet Dining',
    'highlights.dining.subtitle': 'Culinary Excellence',
    'highlights.dining.desc': 'Embark on a gastronomic journey with our award-winning chefs who masterfully blend traditional Serbian flavors with international culinary artistry.',
    'highlights.wellness.title': 'Wellness & Recreation',
    'highlights.wellness.subtitle': 'Pool & Gardens',
    'highlights.wellness.desc': 'Rejuvenate your senses in our tranquil oasis featuring a pristine infinity pool, therapeutic spa services, and beautifully manicured botanical gardens.',
    'highlights.events.title': 'Exclusive Events',
    'highlights.events.subtitle': 'Weddings & Celebrations',
    'highlights.events.desc': 'Create unforgettable memories with our bespoke event planning services, featuring elegant venues and personalized attention to every detail.',
    'highlights.exploreMore': 'Explore More',
    
    // Testimonials
    'testimonials.guestTestimonials': 'GUEST TESTIMONIALS',
    'testimonials.storiesOf': 'Stories of',
    'testimonials.excellence': 'Excellence',
    'testimonials.description': 'Discover why discerning guests from around the world choose Woodland Resort for their most important celebrations and memorable escapes.',
    
    // Location
    'location.discoverLocation': 'DISCOVER OUR LOCATION',
    'location.findYour': 'Find Your',
    'location.sanctuary': 'Sanctuary',
    'location.description': 'Perfectly positioned in the cultural heart of Kragujevac, our resort offers easy access to the city\'s attractions while providing a tranquil escape from the everyday world.',
    'location.exploreLocation': 'Explore Our Location',
  },
  
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.accommodation': 'Alloggio',
    'nav.dining': 'Ristorazione',
    'nav.events': 'Eventi e Matrimoni',
    'nav.contact': 'Contatti',
    'nav.bookNow': 'Prenota Ora',
    
    // Hero Section
    'hero.welcomeTo': 'Benvenuti al',
    'hero.woodlandResort': 'Woodland Resort',
    'hero.location': 'KRAGUJEVAC',
    'hero.description': 'Immergiti in un lusso senza pari dove l\'eleganza senza tempo incontra la sofisticazione moderna. Vivi un\'ospitalità di classe mondiale, una cucina squisita e una bellezza naturale mozzafiato nella destinazione resort più distinta della Serbia.',
    'hero.reserveExperience': 'Prenota la Tua Esperienza',
    'hero.discoverLocation': 'Scopri la Nostra Posizione',
    
    // Welcome Section
    'welcome.luxuryRedefined': 'LUSSO RIDEFINITO',
    'welcome.everyMoment': 'Dove Ogni Momento',
    'welcome.becomesMemory': 'Diventa un Ricordo',
    'welcome.description': 'Immerso nel cuore di Kragujevac, il Woodland Resort è testimonianza di ospitalità raffinata ed eleganza architettonica. Il nostro impegno per l\'eccellenza garantisce che ogni ospite viva l\'apice del lusso e del comfort.',
    'welcome.premiumService': 'Servizio Premium',
    'welcome.premiumServiceDesc': 'Servizio concierge 24/7 e attenzione personalizzata ad ogni dettaglio del vostro soggiorno.',
    'welcome.awardWinning': 'Premiato',
    'welcome.awardWinningDesc': 'Riconosciuto per l\'eccellenza nell\'ospitalità e l\'impegno per il lusso sostenibile.',
    'welcome.uniqueExperience': 'Esperienza Unica',
    'welcome.uniqueExperienceDesc': 'Esperienze curate che fondono il patrimonio serbo con il lusso contemporaneo.',
    
    // Highlights
    'highlights.discoverExcellence': 'SCOPRI L\'ECCELLENZA',
    'highlights.exceptional': 'Esperienze',
    'highlights.experiences': 'Eccezionali',
    'highlights.description': 'Immergiti in un mondo di lusso raffinato dove ogni dettaglio è stato accuratamente realizzato per superare le tue aspettative e creare ricordi duraturi.',
    'highlights.accommodation.title': 'Alloggio di Lusso',
    'highlights.accommodation.subtitle': 'Suite e Ville',
    'highlights.accommodation.desc': 'Concediti le nostre camere e suite meticolosamente progettate, ognuna dotata di servizi premium, arredi eleganti e viste mozzafiato sui nostri terreni incontaminati.',
    'highlights.dining.title': 'Ristorazione Gourmet',
    'highlights.dining.subtitle': 'Eccellenza Culinaria',
    'highlights.dining.desc': 'Intraprendi un viaggio gastronomico con i nostri chef pluripremiati che fondono magistralmente i sapori tradizionali serbi con l\'arte culinaria internazionale.',
    'highlights.wellness.title': 'Benessere e Ricreazione',
    'highlights.wellness.subtitle': 'Piscina e Giardini',
    'highlights.wellness.desc': 'Rigenera i tuoi sensi nella nostra oasi tranquilla con una piscina a sfioro incontaminata, servizi spa terapeutici e giardini botanici splendidamente curati.',
    'highlights.events.title': 'Eventi Esclusivi',
    'highlights.events.subtitle': 'Matrimoni e Celebrazioni',
    'highlights.events.desc': 'Crea ricordi indimenticabili con i nostri servizi di pianificazione eventi su misura, con location eleganti e attenzione personalizzata ad ogni dettaglio.',
    'highlights.exploreMore': 'Scopri di Più',
    
    // Testimonials
    'testimonials.guestTestimonials': 'TESTIMONIANZE DEGLI OSPITI',
    'testimonials.storiesOf': 'Storie di',
    'testimonials.excellence': 'Eccellenza',
    'testimonials.description': 'Scopri perché ospiti esigenti da tutto il mondo scelgono il Woodland Resort per le loro celebrazioni più importanti e fughe memorabili.',
    
    // Location
    'location.discoverLocation': 'SCOPRI LA NOSTRA POSIZIONE',
    'location.findYour': 'Trova il Tuo',
    'location.sanctuary': 'Santuario',
    'location.description': 'Perfettamente posizionato nel cuore culturale di Kragujevac, il nostro resort offre facile accesso alle attrazioni della città fornendo al contempo una fuga tranquilla dal mondo quotidiano.',
    'location.exploreLocation': 'Esplora la Nostra Posizione',
  },
  
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.accommodation': 'Alojamiento',
    'nav.dining': 'Restaurante',
    'nav.events': 'Eventos y Bodas',
    'nav.contact': 'Contacto',
    'nav.bookNow': 'Reservar Ahora',
    
    // Hero Section
    'hero.welcomeTo': 'Bienvenidos al',
    'hero.woodlandResort': 'Woodland Resort',
    'hero.location': 'KRAGUJEVAC',
    'hero.description': 'Sumérgete en un lujo sin igual donde la elegancia atemporal se encuentra con la sofisticación moderna. Experimenta hospitalidad de clase mundial, cocina exquisita y belleza natural impresionante en el destino resort más distinguido de Serbia.',
    'hero.reserveExperience': 'Reserva Tu Experiencia',
    'hero.discoverLocation': 'Descubre Nuestra Ubicación',
    
    // Welcome Section
    'welcome.luxuryRedefined': 'LUJO REDEFINIDO',
    'welcome.everyMoment': 'Donde Cada Momento',
    'welcome.becomesMemory': 'Se Convierte en Memoria',
    'welcome.description': 'Ubicado en el corazón de Kragujevac, Woodland Resort es testimonio de hospitalidad refinada y elegancia arquitectónica. Nuestro compromiso con la excelencia asegura que cada huésped experimente el pináculo del lujo y comodidad.',
    'welcome.premiumService': 'Servicio Premium',
    'welcome.premiumServiceDesc': 'Servicio de conserjería 24/7 y atención personalizada a cada detalle de su estadía.',
    'welcome.awardWinning': 'Galardonado',
    'welcome.awardWinningDesc': 'Reconocido por la excelencia en hospitalidad y compromiso con el lujo sostenible.',
    'welcome.uniqueExperience': 'Experiencia Única',
    'welcome.uniqueExperienceDesc': 'Experiencias curadas que combinan el patrimonio serbio con el lujo contemporáneo.',
    
    // Highlights
    'highlights.discoverExcellence': 'DESCUBRE LA EXCELENCIA',
    'highlights.exceptional': 'Experiencias',
    'highlights.experiences': 'Excepcionales',
    'highlights.description': 'Sumérgete en un mundo de lujo refinado donde cada detalle ha sido cuidadosamente elaborado para superar tus expectativas y crear recuerdos duraderos.',
    'highlights.accommodation.title': 'Alojamiento de Lujo',
    'highlights.accommodation.subtitle': 'Suites y Villas',
    'highlights.accommodation.desc': 'Disfruta de nuestras habitaciones y suites meticulosamente diseñadas, cada una con amenidades premium, mobiliario elegante y vistas impresionantes de nuestros terrenos prístinos.',
    'highlights.dining.title': 'Gastronomía Gourmet',
    'highlights.dining.subtitle': 'Excelencia Culinaria',
    'highlights.dining.desc': 'Embárcate en un viaje gastronómico con nuestros chefs galardonados que combinan magistralmente los sabores tradicionales serbios con el arte culinario internacional.',
    'highlights.wellness.title': 'Bienestar y Recreación',
    'highlights.wellness.subtitle': 'Piscina y Jardines',
    'highlights.wellness.desc': 'Rejuvenece tus sentidos en nuestro oasis tranquilo con una piscina infinita prístina, servicios de spa terapéuticos y jardines botánicos bellamente cuidados.',
    'highlights.events.title': 'Eventos Exclusivos',
    'highlights.events.subtitle': 'Bodas y Celebraciones',
    'highlights.events.desc': 'Crea recuerdos inolvidables con nuestros servicios de planificación de eventos a medida, con lugares elegantes y atención personalizada a cada detalle.',
    'highlights.exploreMore': 'Explorar Más',
    
    // Testimonials
    'testimonials.guestTestimonials': 'TESTIMONIOS DE HUÉSPEDES',
    'testimonials.storiesOf': 'Historias de',
    'testimonials.excellence': 'Excelencia',
    'testimonials.description': 'Descubre por qué huéspedes exigentes de todo el mundo eligen Woodland Resort para sus celebraciones más importantes y escapadas memorables.',
    
    // Location
    'location.discoverLocation': 'DESCUBRE NUESTRA UBICACIÓN',
    'location.findYour': 'Encuentra Tu',
    'location.sanctuary': 'Santuario',
    'location.description': 'Perfectamente ubicado en el corazón cultural de Kragujevac, nuestro resort ofrece fácil acceso a las atracciones de la ciudad mientras proporciona un escape tranquilo del mundo cotidiano.',
    'location.exploreLocation': 'Explorar Nuestra Ubicación',
  },
  
  ru: {
    // Navigation
    'nav.home': 'Главная',
    'nav.accommodation': 'Размещение',
    'nav.dining': 'Ресторан',
    'nav.events': 'События и Свадьбы',
    'nav.contact': 'Контакты',
    'nav.bookNow': 'Забронировать',
    
    // Hero Section
    'hero.welcomeTo': 'Добро пожаловать в',
    'hero.woodlandResort': 'Woodland Resort',
    'hero.location': 'КРАГУЕВАЦ',
    'hero.description': 'Погрузитесь в непревзойденную роскошь, где вечная элегантность встречается с современной изысканностью. Испытайте гостеприимство мирового класса, изысканную кухню и захватывающую природную красоту в самом престижном курорте Сербии.',
    'hero.reserveExperience': 'Забронировать Впечатления',
    'hero.discoverLocation': 'Узнать Наше Местоположение',
    
    // Welcome Section
    'welcome.luxuryRedefined': 'РОСКОШЬ ПЕРЕОСМЫСЛЕНА',
    'welcome.everyMoment': 'Где Каждый Момент',
    'welcome.becomesMemory': 'Становится Воспоминанием',
    'welcome.description': 'Расположенный в самом сердце Крагуеваца, Woodland Resort является свидетельством изысканного гостеприимства и архитектурной элегантности. Наша приверженность совершенству гарантирует, что каждый гость испытает вершину роскоши и комфорта.',
    'welcome.premiumService': 'Премиум Сервис',
    'welcome.premiumServiceDesc': 'Круглосуточная служба консьержа и персональное внимание к каждой детали вашего пребывания.',
    'welcome.awardWinning': 'Награжденный',
    'welcome.awardWinningDesc': 'Признан за превосходство в гостеприимстве и приверженность устойчивой роскоши.',
    'welcome.uniqueExperience': 'Уникальный Опыт',
    'welcome.uniqueExperienceDesc': 'Кураторские впечатления, которые сочетают сербское наследие с современной роскошью.',
    
    // Highlights
    'highlights.discoverExcellence': 'ОТКРОЙТЕ СОВЕРШЕНСТВО',
    'highlights.exceptional': 'Исключительные',
    'highlights.experiences': 'Впечатления',
    'highlights.description': 'Погрузитесь в мир изысканной роскоши, где каждая деталь была тщательно продумана, чтобы превзойти ваши ожидания и создать незабываемые воспоминания.',
    'highlights.accommodation.title': 'Роскошное Размещение',
    'highlights.accommodation.subtitle': 'Люксы и Виллы',
    'highlights.accommodation.desc': 'Насладитесь нашими тщательно спроектированными номерами и люксами, каждый из которых оснащен премиальными удобствами, элегантной мебелью и захватывающими видами на наши нетронутые территории.',
    'highlights.dining.title': 'Изысканная Кухня',
    'highlights.dining.subtitle': 'Кулинарное Совершенство',
    'highlights.dining.desc': 'Отправьтесь в гастрономическое путешествие с нашими отмеченными наградами шеф-поварами, которые мастерски сочетают традиционные сербские вкусы с международным кулинарным искусством.',
    'highlights.wellness.title': 'Велнес и Отдых',
    'highlights.wellness.subtitle': 'Бассейн и Сады',
    'highlights.wellness.desc': 'Восстановите свои чувства в нашем спокойном оазисе с нетронутым бассейном-инфинити, терапевтическими спа-услугами и красиво ухоженными ботаническими садами.',
    'highlights.events.title': 'Эксклюзивные События',
    'highlights.events.subtitle': 'Свадьбы и Торжества',
    'highlights.events.desc': 'Создайте незабываемые воспоминания с нашими индивидуальными услугами планирования мероприятий, включающими элегантные площадки и персональное внимание к каждой детали.',
    'highlights.exploreMore': 'Узнать Больше',
    
    // Testimonials
    'testimonials.guestTestimonials': 'ОТЗЫВЫ ГОСТЕЙ',
    'testimonials.storiesOf': 'Истории',
    'testimonials.excellence': 'Совершенства',
    'testimonials.description': 'Узнайте, почему взыскательные гости со всего мира выбирают Woodland Resort для своих самых важных торжеств и незабываемых побегов.',
    
    // Location
    'location.discoverLocation': 'ОТКРОЙТЕ НАШЕ МЕСТОПОЛОЖЕНИЕ',
    'location.findYour': 'Найдите Ваш',
    'location.sanctuary': 'Убежище',
    'location.description': 'Идеально расположенный в культурном сердце Крагуеваца, наш курорт предлагает легкий доступ к достопримечательностям города, обеспечивая при этом спокойный побег от повседневного мира.',
    'location.exploreLocation': 'Исследовать Наше Местоположение',
  },
  
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.accommodation': 'Unterkunft',
    'nav.dining': 'Restaurant',
    'nav.events': 'Events & Hochzeiten',
    'nav.contact': 'Kontakt',
    'nav.bookNow': 'Jetzt Buchen',
    
    // Hero Section
    'hero.welcomeTo': 'Willkommen im',
    'hero.woodlandResort': 'Woodland Resort',
    'hero.location': 'KRAGUJEVAC',
    'hero.description': 'Tauchen Sie ein in unvergleichlichen Luxus, wo zeitlose Eleganz auf moderne Raffinesse trifft. Erleben Sie Weltklasse-Gastfreundschaft, exquisite Küche und atemberaubende natürliche Schönheit in Serbiens distinguiertestem Resort-Ziel.',
    'hero.reserveExperience': 'Ihr Erlebnis Reservieren',
    'hero.discoverLocation': 'Unseren Standort Entdecken',
    
    // Welcome Section
    'welcome.luxuryRedefined': 'LUXUS NEU DEFINIERT',
    'welcome.everyMoment': 'Wo Jeder Moment',
    'welcome.becomesMemory': 'Zur Erinnerung Wird',
    'welcome.description': 'Im Herzen von Kragujevac gelegen, steht das Woodland Resort als Zeugnis für raffinierte Gastfreundschaft und architektonische Eleganz. Unser Engagement für Exzellenz stellt sicher, dass jeder Gast den Gipfel von Luxus und Komfort erlebt.',
    'welcome.premiumService': 'Premium Service',
    'welcome.premiumServiceDesc': '24/7 Concierge-Service und persönliche Aufmerksamkeit für jedes Detail Ihres Aufenthalts.',
    'welcome.awardWinning': 'Preisgekrönt',
    'welcome.awardWinningDesc': 'Anerkannt für Exzellenz in der Gastfreundschaft und Engagement für nachhaltigen Luxus.',
    'welcome.uniqueExperience': 'Einzigartige Erfahrung',
    'welcome.uniqueExperienceDesc': 'Kuratierte Erlebnisse, die serbisches Erbe mit zeitgenössischem Luxus verbinden.',
    
    // Highlights
    'highlights.discoverExcellence': 'ENTDECKEN SIE EXZELLENZ',
    'highlights.exceptional': 'Außergewöhnliche',
    'highlights.experiences': 'Erlebnisse',
    'highlights.description': 'Tauchen Sie ein in eine Welt des raffinierten Luxus, wo jedes Detail sorgfältig gestaltet wurde, um Ihre Erwartungen zu übertreffen und bleibende Erinnerungen zu schaffen.',
    'highlights.accommodation.title': 'Luxus Unterkunft',
    'highlights.accommodation.subtitle': 'Suiten & Villen',
    'highlights.accommodation.desc': 'Genießen Sie unsere sorgfältig gestalteten Zimmer und Suiten, jede mit Premium-Annehmlichkeiten, eleganter Einrichtung und atemberaubenden Ausblicken auf unser makelloses Gelände.',
    'highlights.dining.title': 'Gourmet Dining',
    'highlights.dining.subtitle': 'Kulinarische Exzellenz',
    'highlights.dining.desc': 'Begeben Sie sich auf eine gastronomische Reise mit unseren preisgekrönten Köchen, die meisterhaft traditionelle serbische Aromen mit internationaler Kochkunst verbinden.',
    'highlights.wellness.title': 'Wellness & Erholung',
    'highlights.wellness.subtitle': 'Pool & Gärten',
    'highlights.wellness.desc': 'Verjüngen Sie Ihre Sinne in unserer ruhigen Oase mit einem makellosen Infinity-Pool, therapeutischen Spa-Services und wunderschön gepflegten botanischen Gärten.',
    'highlights.events.title': 'Exklusive Events',
    'highlights.events.subtitle': 'Hochzeiten & Feiern',
    'highlights.events.desc': 'Schaffen Sie unvergessliche Erinnerungen mit unseren maßgeschneiderten Event-Planungsservices, mit eleganten Veranstaltungsorten und persönlicher Aufmerksamkeit für jedes Detail.',
    'highlights.exploreMore': 'Mehr Entdecken',
    
    // Testimonials
    'testimonials.guestTestimonials': 'GÄSTE-TESTIMONIALS',
    'testimonials.storiesOf': 'Geschichten von',
    'testimonials.excellence': 'Exzellenz',
    'testimonials.description': 'Entdecken Sie, warum anspruchsvolle Gäste aus aller Welt das Woodland Resort für ihre wichtigsten Feiern und unvergesslichen Auszeiten wählen.',
    
    // Location
    'location.discoverLocation': 'ENTDECKEN SIE UNSEREN STANDORT',
    'location.findYour': 'Finden Sie Ihr',
    'location.sanctuary': 'Refugium',
    'location.description': 'Perfekt im kulturellen Herzen von Kragujevac gelegen, bietet unser Resort einfachen Zugang zu den Attraktionen der Stadt und gleichzeitig eine ruhige Flucht aus der alltäglichen Welt.',
    'location.exploreLocation': 'Unseren Standort Erkunden',
  },
  
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.accommodation': 'Hébergement',
    'nav.dining': 'Restaurant',
    'nav.events': 'Événements et Mariages',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Réserver Maintenant',
    
    // Hero Section
    'hero.welcomeTo': 'Bienvenue au',
    'hero.woodlandResort': 'Woodland Resort',
    'hero.location': 'KRAGUJEVAC',
    'hero.description': 'Plongez dans un luxe inégalé où l\'élégance intemporelle rencontre la sophistication moderne. Découvrez une hospitalité de classe mondiale, une cuisine exquise et une beauté naturelle à couper le souffle dans la destination resort la plus distinguée de Serbie.',
    'hero.reserveExperience': 'Réservez Votre Expérience',
    'hero.discoverLocation': 'Découvrir Notre Emplacement',
    
    // Welcome Section
    'welcome.luxuryRedefined': 'LUXE REDÉFINI',
    'welcome.everyMoment': 'Où Chaque Moment',
    'welcome.becomesMemory': 'Devient un Souvenir',
    'welcome.description': 'Niché au cœur de Kragujevac, le Woodland Resort témoigne d\'une hospitalité raffinée et d\'une élégance architecturale. Notre engagement envers l\'excellence garantit que chaque invité vit l\'apogée du luxe et du confort.',
    'welcome.premiumService': 'Service Premium',
    'welcome.premiumServiceDesc': 'Service de conciergerie 24h/24 et 7j/7 et attention personnalisée à chaque détail de votre séjour.',
    'welcome.awardWinning': 'Primé',
    'welcome.awardWinningDesc': 'Reconnu pour l\'excellence dans l\'hospitalité et l\'engagement envers le luxe durable.',
    'welcome.uniqueExperience': 'Expérience Unique',
    'welcome.uniqueExperienceDesc': 'Expériences curées qui mélangent le patrimoine serbe avec le luxe contemporain.',
    
    // Highlights
    'highlights.discoverExcellence': 'DÉCOUVREZ L\'EXCELLENCE',
    'highlights.exceptional': 'Expériences',
    'highlights.experiences': 'Exceptionnelles',
    'highlights.description': 'Plongez dans un monde de luxe raffiné où chaque détail a été soigneusement conçu pour dépasser vos attentes et créer des souvenirs durables.',
    'highlights.accommodation.title': 'Hébergement de Luxe',
    'highlights.accommodation.subtitle': 'Suites et Villas',
    'highlights.accommodation.desc': 'Savourez nos chambres et suites méticuleusement conçues, chacune dotée d\'équipements premium, d\'un mobilier élégant et de vues à couper le souffle sur nos terrains immaculés.',
    'highlights.dining.title': 'Gastronomie Gourmet',
    'highlights.dining.subtitle': 'Excellence Culinaire',
    'highlights.dining.desc': 'Embarquez pour un voyage gastronomique avec nos chefs primés qui mélangent magistralement les saveurs traditionnelles serbes avec l\'art culinaire international.',
    'highlights.wellness.title': 'Bien-être et Loisirs',
    'highlights.wellness.subtitle': 'Piscine et Jardins',
    'highlights.wellness.desc': 'Rajeunissez vos sens dans notre oasis tranquille avec une piscine à débordement immaculée, des services de spa thérapeutiques et des jardins botaniques magnifiquement entretenus.',
    'highlights.events.title': 'Événements Exclusifs',
    'highlights.events.subtitle': 'Mariages et Célébrations',
    'highlights.events.desc': 'Créez des souvenirs inoubliables avec nos services de planification d\'événements sur mesure, avec des lieux élégants et une attention personnalisée à chaque détail.',
    'highlights.exploreMore': 'Explorer Plus',
    
    // Testimonials
    'testimonials.guestTestimonials': 'TÉMOIGNAGES D\'INVITÉS',
    'testimonials.storiesOf': 'Histoires d\'',
    'testimonials.excellence': 'Excellence',
    'testimonials.description': 'Découvrez pourquoi des invités exigeants du monde entier choisissent le Woodland Resort pour leurs célébrations les plus importantes et leurs escapades mémorables.',
    
    // Location
    'location.discoverLocation': 'DÉCOUVREZ NOTRE EMPLACEMENT',
    'location.findYour': 'Trouvez Votre',
    'location.sanctuary': 'Sanctuaire',
    'location.description': 'Parfaitement situé dans le cœur culturel de Kragujevac, notre resort offre un accès facile aux attractions de la ville tout en fournissant une évasion tranquille du monde quotidien.',
    'location.exploreLocation': 'Explorer Notre Emplacement',
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}