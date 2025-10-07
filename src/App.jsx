import React, { useState } from 'react';
import { Phone, MapPin, Clock, Instagram, ChevronRight, Star, Send, Menu as MenuIcon, X } from 'lucide-react';

const App = () => {
  const menuItems = [
    {
      id: 1,
      name: "Bakso Urat Jumbo",
      price: "Rp 25.000",
      description: "Bakso urat sapi jumbo dengan tekstur kenyal",
      image: "https://placehold.co/300x200/ff6b6b/ffffff?text=Bakso+Urat"
    },
    {
      id: 2,
      name: "Bakso Telur",
      price: "Rp 20.000",
      description: "Bakso isi telur puyuh yang lezat",
      image: "https://placehold.co/300x200/ffa500/ffffff?text=Bakso+Telur"
    },
    {
      id: 3,
      name: "Bakso Campur",
      price: "Rp 22.000",
      description: "Kombinasi berbagai jenis bakso favorit",
      image: "https://placehold.co/300x200/ff8c00/ffffff?text=Bakso+Campur"
    },
    {
      id: 4,
      name: "Bakso Pedas Level 1–5",
      price: "Rp 23.000",
      description: "Tantang pedas sesuai level keberanianmu",
      image: "https://placehold.co/300x200/ff4444/ffffff?text=Bakso+Pedas"
    },
    {
      id: 5,
      name: "Mie Bakso Komplit",
      price: "Rp 28.000",
      description: "Mie bakso lengkap dengan sayur dan pangsit",
      image: "https://placehold.co/300x200/ff6b35/ffffff?text=Mie+Bakso"
    },
    {
      id: 6,
      name: "Es Teh Manis",
      price: "Rp 5.000",
      description: "Segarnya es teh manis khas Indonesia",
      image: "https://placehold.co/300x200/4ade80/ffffff?text=Es+Teh"
    },
    {
      id: 7,
      name: "Es Jeruk",
      price: "Rp 6.000",
      description: "Es jeruk segar penghilang dahaga",
      image: "https://placehold.co/300x200/f97316/ffffff?text=Es+Jeruk"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Ahmad Rizki",
      rating: 5,
      comment: "Baksonya juara! Kuahnya gurih banget, bikin ketagihan.",
      avatar: "https://placehold.co/60x60/ff6b6b/ffffff?text=AR"
    },
    {
      id: 2,
      name: "Siti Nurhaliza",
      rating: 5,
      comment: "Pelayanannya cepat dan ramah. Bakso urat jumbonya mantap!",
      avatar: "https://placehold.co/60x60/ffa500/ffffff?text=SN"
    },
    {
      id: 3,
      name: "Budi Santoso",
      rating: 5,
      comment: "Rasa otentik seperti bakso kampung. Langganan sejak 2010!",
      avatar: "https://placehold.co/60x60/ff8c00/ffffff?text=BS"
    }
  ];

  const whatsappNumber = "6281234567890";
  const [selectedItems, setSelectedItems] = useState([]);
  const [customRequest, setCustomRequest] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleItemSelection = (item) => {
    setSelectedItems(prev => {
      const isSelected = prev.find(selected => selected.id === item.id);
      if (isSelected) {
        return prev.filter(selected => selected.id !== item.id);
      } else {
        return [...prev, item];
      }
    });
  };

  const openWhatsApp = () => {
    if (selectedItems.length === 0) {
      // If no items selected, scroll to menu section
      const menuElement = document.getElementById('menu');
      if (menuElement) {
        menuElement.scrollIntoView({ behavior: 'smooth' });
        // Show a helpful message
        alert("Silakan pilih menu terlebih dahulu di bagian Menu & Harga!");
      }
      return;
    }

    let message = "Halo Bakso Mas Cecep! Saya mau pesan bakso nih 🍜\n\n";
    
    // Add selected items
    selectedItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.price}\n`;
    });
    
    // Add custom request if exists
    if (customRequest.trim()) {
      message += `\nCatatan khusus: ${customRequest}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      {/* Custom CSS for steam animation */}
      <style>{`
        @keyframes steam1 {
          0%, 100% { transform: translateX(-50%) translateY(0px) scale(1); opacity: 0.3; }
          50% { transform: translateX(-50%) translateY(-20px) scale(1.2); opacity: 0.6; }
        }
        @keyframes steam2 {
          0%, 100% { transform: translateX(-50%) translateY(0px) scale(1); opacity: 0.2; }
          50% { transform: translateX(-50%) translateY(-15px) scale(1.1); opacity: 0.4; }
        }
        @keyframes steam3 {
          0%, 100% { transform: translateX(-50%) translateY(0px) scale(1); opacity: 0.25; }
          50% { transform: translateX(-50%) translateY(-18px) scale(1.15); opacity: 0.5; }
        }
        .steam-animation {
          position: absolute;
          top: -16px;
          left: 50%;
          transform: translateX(-50%);
          width: 64px;
          height: 64px;
        }
        .steam-line {
          position: absolute;
          border-radius: 9999px;
          background-color: rgba(255, 255, 255, 0.3);
        }
        .steam1 {
          width: 4px;
          height: 32px;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          animation: steam1 3s ease-in-out infinite;
        }
        .steam2 {
          width: 4px;
          height: 24px;
          left: 40%;
          top: 0;
          transform: translateX(-50%);
          animation: steam2 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .steam3 {
          width: 4px;
          height: 28px;
          left: 60%;
          top: 0;
          transform: translateX(-50%);
          animation: steam3 3s ease-in-out infinite;
          animation-delay: 1s;
        }
      `}</style>

      {/* Header/Navbar */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl md:text-2xl font-bold text-red-600">Bakso Mas Cecep 🍜</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm md:text-base"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('menu')}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm md:text-base"
              >
                Menu
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-700 hover:text-red-600 font-medium transition-colors text-sm md:text-base"
              >
                Tentang Kami
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-red-600 text-white px-4 py-2 md:px-6 md:py-2 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center space-x-1 md:space-x-2 text-sm md:text-base"
              >
                <span>Pesan</span>
                <ChevronRight className="w-3 h-3 md:w-4 md:h-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 hover:text-red-600"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </nav>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                >
                  Menu
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                >
                  Tentang Kami
                </button>
                <button 
                  onClick={openWhatsApp}
                  className="bg-red-600 text-white px-4 py-3 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 mt-2"
                >
                  <span>Pesan Sekarang</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-orange-500/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
              Bakso Mas Cecep — <span className="text-red-600">Gurihnya Bikin Nagih!</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-8 leading-relaxed px-2">
              Bakso daging sapi asli, kuah kaldu melimpah, dan rasa otentik khas kampung.
            </p>
            <button 
              onClick={openWhatsApp}
              className="bg-red-600 text-white text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg mx-auto block"
            >
              Pesan Sekarang
            </button>
            
            {/* Steam animation */}
            <div className="mt-8 md:mt-12 relative">
              <img 
                src="https://placehold.co/600x400/ff6b6b/ffffff?text=Bakso+Panas+Berkuah" 
                alt="Bakso Mas Cecep" 
                className="mx-auto rounded-xl md:rounded-2xl shadow-xl md:shadow-2xl border-2 md:border-4 border-white w-full max-w-md md:max-w-full"
              />
              <div className="steam-animation">
                <div className="steam-line steam1"></div>
                <div className="steam-line steam2"></div>
                <div className="steam-line steam3"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Menu & Harga</h2>
            <p className="text-gray-600 text-base md:text-lg">Pilih menu favoritmu dengan klik pada card!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {menuItems.map((item) => (
              <div 
                key={item.id} 
                onClick={() => toggleItemSelection(item)}
                className={`bg-gradient-to-br rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all cursor-pointer transform hover:scale-102 ${
                  selectedItems.find(selected => selected.id === item.id) 
                    ? 'from-red-200 to-orange-200 border-2 border-red-500' 
                    : 'from-red-50 to-orange-50'
                }`}
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-40 md:h-48 object-cover"
                />
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-3 md:mb-4 text-sm md:text-base">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg md:text-2xl font-bold text-red-600">{item.price}</span>
                    {selectedItems.find(selected => selected.id === item.id) && (
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-red-600 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Custom Request Section */}
          <div className="mt-12 md:mt-16 max-w-2xl mx-auto bg-gradient-to-r from-red-50 to-orange-50 rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 md:mb-4 text-center">Catatan Khusus?</h3>
            <p className="text-gray-600 mb-3 md:mb-4 text-center text-sm md:text-base">
              Punya permintaan khusus? Tulis di sini!
            </p>
            <div className="mb-4">
              <textarea
                value={customRequest}
                onChange={(e) => setCustomRequest(e.target.value)}
                placeholder="Contoh: Pedes banget bang! Level 5 dong..."
                className="w-full p-3 md:p-4 rounded-lg border-2 border-red-200 focus:border-red-500 focus:outline-none resize-none text-sm md:text-base"
                rows="2"
                style={{ minHeight: '80px' }}
              />
            </div>
            <div className="text-center mb-4">
              <p className="text-xs md:text-sm text-gray-500 italic">
                Contoh request: "Pedes banget bang! Level 5 dong..." atau "Tambahkan mie ekstra ya..."
              </p>
            </div>
            <div className="text-center">
              <button 
                onClick={openWhatsApp}
                className="bg-red-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold hover:bg-red-700 transition-colors flex items-center justify-center space-x-2 mx-auto w-full max-w-xs"
              >
                <Send className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-sm md:text-base">Kirim Pesanan</span>
              </button>
              {selectedItems.length > 0 && (
                <p className="text-xs md:text-sm text-green-600 mt-2">
                  {selectedItems.length} menu dipilih
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-gradient-to-r from-red-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">Tentang Kami</h2>
            <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6">
                Bakso Mas Cecep hadir sejak 2005, membawa cita rasa bakso tradisional dengan bahan pilihan dan kuah kaldu sapi asli. Dibuat dengan sepenuh hati, tanpa pengawet.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-6 text-sm md:text-base text-gray-500">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Jl. Raya Sukamaju No. 12, Bandung</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-red-600" />
                  <span>10.00 – 22.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Testimoni Pelanggan</h2>
            <p className="text-gray-600 text-base md:text-lg">Apa kata pelanggan setia kami?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl md:rounded-2xl p-5 md:p-6 shadow-lg">
                <div className="flex items-center mb-3 md:mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3 md:mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800 text-sm md:text-base">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic text-sm md:text-base">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-red-400">Bakso Mas Cecep 🍜</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-6 mb-6 md:mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                <span className="text-sm md:text-base">Jl. Raya Sukamaju No. 12, Bandung</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                <span className="text-sm md:text-base">10.00 – 22.00</span>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-4 md:space-x-6 mb-6 md:mb-8">
              <button 
                onClick={openWhatsApp}
                className="bg-green-500 hover:bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold transition-colors flex items-center space-x-1 md:space-x-2 text-sm md:text-base"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>WhatsApp</span>
              </button>
              <a 
                href="https://instagram.com/baksomascecep" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full font-bold transition-all flex items-center space-x-1 md:space-x-2 text-sm md:text-base"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                <span>Instagram</span>
              </a>
            </div>
            
            <p className="text-gray-400 text-xs md:text-sm">
              © 2024 Bakso Mas Cecep. Semua hak dilindungi. Dibuat dengan ❤️ untuk pecinta bakso!
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;