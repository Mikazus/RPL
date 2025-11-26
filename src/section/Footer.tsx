export default function Footer() {
  const footerLinks = {
    produk: [
      { name: 'UI/UX Design', href: '#' },
      { name: 'Website Templates', href: '#' },
      { name: 'Illustrations', href: '#' },
      { name: 'Software Tools', href: '#' },
    ],
    perusahaan: [
      { name: 'Tentang Kami', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Karir', href: '#' },
      { name: 'Kontak', href: '#' },
    ],
    dukungan: [
      { name: 'Pusat Bantuan', href: '#' },
      { name: 'Syarat & Ketentuan', href: '#' },
      { name: 'Kebijakan Privasi', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-xl font-bold mb-4" style={{ color: '#8B6F47' }}>
              Team8
            </h3>
            <p className="text-gray-600 text-sm mb-6">
              Marketplace digital terpercaya untuk produk berkualitas tinggi dengan sistem distribusi otomatis.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Facebook */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-yellow-700 hover:text-yellow-700 hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-yellow-700 hover:text-yellow-700 hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-yellow-700 hover:text-yellow-700 hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              {/* Email */}
              <a href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:border-yellow-700 hover:text-yellow-700 hover:scale-110 transition-all duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Produk Links */}
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4" style={{ color: '#8B6F47' }}>
              Produk
            </h4>
            <ul className="space-y-3">
              {footerLinks.produk.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 text-sm hover:text-yellow-700 hover:pl-1 transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan Links */}
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold mb-4" style={{ color: '#8B6F47' }}>
              Perusahaan
            </h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 text-sm hover:text-yellow-700 hover:pl-1 transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Dukungan Links */}
          <div className="animate-fadeIn opacity-0" style={{ animationDelay: '0.4s' }}>
            <h4 className="font-semibold mb-4" style={{ color: '#8B6F47' }}>
              Dukungan
            </h4>
            <ul className="space-y-3">
              {footerLinks.dukungan.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 text-sm hover:text-yellow-700 hover:pl-1 transition-all duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-12 py-4 flex flex-col md:flex-row justify-between items-center animate-fadeIn opacity-0" style={{ animationDelay: '0.5s' }}>
          <p className="text-gray-600 text-sm">
            © 2025 Team8. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 text-sm hover:text-yellow-700 transition-all duration-300">
              Kebijakan Cookie
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-yellow-700 transition-all duration-300">
              Lisensi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
