export default function Hero() {
  // Fungsi untuk smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center mt-16"
      style={{
        backgroundImage: `url('/images/back.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Fade to White Overlay */}
      <div
        className="absolute inset-0 z-5"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 60%, rgba(255,255,255,1) 85%)`,
          pointerEvents: 'none',
        }}
      ></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start px-12 h-full max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-8 bg-yellow-100/80 px-4 py-2 rounded-full w-fit animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
          <p className="text-sm text-yellow-700 font-medium">Marketplace Terpercaya</p>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fadeIn opacity-0" style={{ color: '#8B6F47', animationDelay: '0.4s' }}>
          Transaksi Digital yang <br /> Aman & Otomatis
        </h1>

        {/* Description */}
        <p className="text-lg mb-8 max-w-2xl leading-relaxed animate-fadeIn opacity-0" style={{ color: '#8B6F47', animationDelay: '0.6s' }}>
          Beli dan jual produk digital dengan sistem distribusi otomatis. <br />
          Lisensi terverifikasi, pembayaran aman, dan pengiriman instan.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 animate-fadeIn opacity-0" style={{ animationDelay: '0.8s' }}>
          <button 
            onClick={() => scrollToSection('products')}
            className="bg-yellow-700 hover:bg-yellow-800 hover:scale-105 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 btn-press"
          >
            Jelajahi Produk
          </button>
          <button 
            onClick={() => scrollToSection('about-us')}
            className="bg-white hover:bg-gray-100 hover:scale-105 text-gray-900 font-semibold px-8 py-3 rounded-lg border border-gray-300 transition-all duration-300 btn-press"
          >
            Pelajari Lebih Lanjut
          </button>
        </div>
      </div>
    </section>
  );
}
