import { useState, useEffect, useRef, useCallback } from 'react';

// Komponen untuk stat item dengan count up
function CountUpStat({ value, label, suffix, delay }: { value: number; label: string; suffix: string; delay: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Callback untuk intersection observer
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !hasStarted) {
      setHasStarted(true);
    }
  }, [hasStarted]);

  // Observer untuk detect saat element visible
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });
    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleIntersection]);

  // Animasi count up
  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / 2000, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [value, hasStarted]);

  return (
    <div 
      ref={ref}
      className="text-center animate-fadeIn opacity-0 hover:scale-105 transition-transform duration-300"
      style={{ animationDelay: `${delay}s` }}
    >
      <p className="text-4xl font-bold mb-2" style={{ color: '#8B6F47' }}>
        {count.toLocaleString('id-ID')}{suffix}
      </p>
      <p className="text-gray-600">
        {label}
      </p>
    </div>
  );
}

export default function AboutUs() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Distribusi Otomatis',
      description: 'Produk digital dikirim langsung ke email Anda dalam hitungan detik setelah pembayaran',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Lisensi Terverifikasi',
      description: 'Semua produk dilengkapi dengan lisensi resmi dan sertifikat keaslian',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
      title: 'Download Tanpa Batas',
      description: 'Akses selamanya ke produk yang Anda beli dengan download tanpa batas',
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: 'Dukungan 24/7',
      description: 'Tim support kami siap membantu Anda kapan saja melalui chat dan email',
    },
  ];

  const stats = [
    { value: 10000, label: 'Produk Terjual', suffix: '+' },
    { value: 5000, label: 'Pengguna Aktif', suffix: '+' },
    { value: 98, label: 'Kepuasan Pelanggan', suffix: '%' },
  ];

  return (
    <section id="about-us" className="w-full py-16" style={{ backgroundColor: '#f5f0e8' }}>
      <div className="max-w-6xl mx-auto px-12">
        {/* Badge */}
        <div className="flex justify-center mb-6 animate-fadeIn opacity-0" style={{ animationDelay: '0.1s' }}>
          <div className="bg-[#8B6F471A] px-6 py-2 rounded-full border border-gray-300 hover:shadow-md transition-shadow duration-300">
            <p className="text-sm text-gray-600 font-medium">Kenapa Memilih Ruby4?</p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-3xl font-bold mb-4" style={{ color: '#8B6F47' }}>
            Transaksi Aman & Terpercaya
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Kami berkomitmen untuk memberikan pengalaman terbaik dalam setiap transaksi digital Anda
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-6 text-center shadow-sm card-hover animate-fadeIn opacity-0"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110" style={{ backgroundColor: '#f5f0e8', color: '#8B6F47' }}>
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="font-semibold mb-2" style={{ color: '#8B6F47' }}>
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section with Count Up Animation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <CountUpStat
              key={index}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={0.7 + index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
