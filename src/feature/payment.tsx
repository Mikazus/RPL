import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Payment() {
  const location = useLocation();
  const cartItems: CartItem[] = location.state?.cartItems || [];
  
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const adminFee = 0;
  const ppn = Math.round(subtotal * 0.11); // PPN 11%
  const total = subtotal + adminFee + ppn;

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f0e8' }}>
      {/* Header */}
      <div className="bg-gray-800 text-white py-3 px-6 animate-fadeIn">
        <span className="text-sm">Payment Gateway</span>
      </div>

      {/* Back Link */}
      <div className="bg-white py-4 px-6 border-b border-gray-200 animate-fadeIn">
        <Link to="/" className="text-gray-700 hover:text-yellow-700 transition-all duration-300 flex items-center gap-2 hover:gap-3">
          <span>←</span>
          <span>Kembali</span>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-8 animate-fadeIn opacity-0" style={{ animationDelay: '0.1s' }}>Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Form */}
          <div className="flex-1">
            {/* Informasi Pembeli */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200 animate-fadeIn opacity-0" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Informasi Pembeli</h2>

              {/* Email */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="nama@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Nama Lengkap */}
              <div>
                <label className="block text-gray-700 text-sm font-medium mb-2">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Masukkan nama lengkap"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent transition-all duration-300"
                />
              </div>
            </div>

            {/* Metode Pembayaran */}
            <div className="bg-white rounded-lg p-6 mb-6 border border-gray-200 animate-fadeIn opacity-0" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Metode Pembayaran</h2>

              {/* Payment Options */}
              <div className="space-y-3 mb-6">
                {/* Kartu Kredit/Debit */}
                <label
                  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.01] ${
                    paymentMethod === 'credit-card'
                      ? 'border-yellow-700 bg-yellow-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="credit-card"
                    checked={paymentMethod === 'credit-card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-yellow-700"
                  />
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                  <span className="text-gray-700 font-medium">Kartu Kredit/Debit</span>
                </label>

                {/* Transfer Bank */}
                <label
                  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.01] ${
                    paymentMethod === 'bank-transfer'
                      ? 'border-yellow-700 bg-yellow-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="bank-transfer"
                    checked={paymentMethod === 'bank-transfer'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-yellow-700"
                  />
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <span className="text-gray-700 font-medium">Transfer Bank</span>
                </label>

                {/* E-Wallet */}
                <label
                  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-all duration-300 hover:scale-[1.01] ${
                    paymentMethod === 'e-wallet'
                      ? 'border-yellow-700 bg-yellow-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="e-wallet"
                    checked={paymentMethod === 'e-wallet'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-4 h-4 text-yellow-700"
                  />
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700 font-medium">E-Wallet (GoPay, OVO, Dana)</span>
                </label>
              </div>

              {/* Credit Card Fields */}
              {paymentMethod === 'credit-card' && (
                <div className="space-y-4 animate-fadeIn">
                  {/* Nomor Kartu */}
                  <div>
                    <label className="block text-gray-700 text-sm font-medium mb-2">
                      Nomor Kartu
                    </label>
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      placeholder="1234 5678 9012 3456"
                      maxLength={19}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent transition-all duration-300"
                    />
                  </div>

                  {/* Masa Berlaku & CVV */}
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Masa Berlaku
                      </label>
                      <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YY"
                        maxLength={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                        maxLength={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Pay Button */}
            <button
              className="w-full py-4 rounded-lg text-white font-semibold transition-all duration-300 hover:opacity-90 hover:scale-[1.02] btn-press animate-fadeIn opacity-0"
              style={{ backgroundColor: '#8B6F47', animationDelay: '0.4s' }}
            >
              Bayar Rp {subtotal.toLocaleString('id-ID')}
            </button>
          </div>

          {/* Right Column - Order Summary */}
          <div className="lg:w-80">
            <div className="bg-white rounded-lg p-6 border border-gray-200 sticky top-24 animate-fadeInRight opacity-0" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Ringkasan Pesanan</h2>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.length === 0 ? (
                  <p className="text-gray-500 text-sm">Tidak ada item</p>
                ) : (
                  cartItems.map((item, index) => (
                    <div key={item.id} className="flex gap-3 animate-fadeIn opacity-0" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                      <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0 img-zoom">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-800">{item.name}</h3>
                        <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                        <p className="text-sm font-semibold" style={{ color: '#8B6F47' }}>
                          Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-800">Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Biaya Admin</span>
                  <span className="text-gray-800">Gratis</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">PPN (11%)</span>
                  <span className="text-gray-800">Rp {ppn.toLocaleString('id-ID')}</span>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-200 my-4"></div>

              {/* Total */}
              <div className="flex justify-between mb-6">
                <span className="text-gray-800 font-semibold">Total</span>
                <span className="text-xl font-bold" style={{ color: '#8B6F47' }}>
                  Rp {total.toLocaleString('id-ID')}
                </span>
              </div>

              {/* Terms */}
              <div className="p-3 rounded-lg" style={{ backgroundColor: '#f5f0e8' }}>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 mt-1 text-yellow-700 border-gray-300 rounded focus:ring-yellow-700 transition-all duration-200"
                  />
                  <span className="text-xs text-gray-600">
                    Dengan melakukan pembayaran, Anda menyetujui{' '}
                    <a href="#" className="underline hover:no-underline transition-all duration-200" style={{ color: '#8B6F47' }}>
                      Syarat & Ketentuan
                    </a>
                    {' '}kami.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
