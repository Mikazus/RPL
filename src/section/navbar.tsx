import { Link } from 'react-router-dom';

interface NavbarProps {
  cartItemCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ cartItemCount = 0, onCartClick }: NavbarProps) {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-700 hover:scale-105 transition-transform duration-300">Team8</Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-8 max-w-md">
          <input
            type="text"
            placeholder="Cari produk digital..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 transition-all duration-300"
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          {/* Cart Icon */}
          <button 
            onClick={onCartClick}
            className="text-gray-700 hover:text-yellow-700 hover:scale-110 transition-all duration-300 relative"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center badge-pop">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Login Button */}
          <Link to="/login" className="text-gray-700 hover:text-yellow-700 font-semibold transition-all duration-300 link-underline">
            Login
          </Link>

          {/* Register Button */}
          <Link to="/register" className="bg-yellow-700 hover:bg-yellow-800 hover:scale-105 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-300 btn-press">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
