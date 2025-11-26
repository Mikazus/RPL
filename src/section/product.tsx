interface ProductProps {
  onAddToCart?: (item: { id: number; name: string; price: number; image: string }) => void;
}

export default function Product({ onAddToCart }: ProductProps) {
  const products = [
    {
      id: 1,
      name: 'Premium UI/UX Design System',
      description: 'Comprehensive design system with 200+ components, fully customizable for modern',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      rating: 4.8,
      price: 499000,
      category: 'Digital',
    },
    {
      id: 2,
      name: 'Website Template Bundle',
      description: 'Modern, responsive website templates for business, portfolio, and e-commerce with full',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
      rating: 4.9,
      price: 350000,
      category: 'Digital',
    },
    {
      id: 3,
      name: 'Digital Illustration Pack Pro',
      description: 'Professional illustration pack with 500+ vector illustrations in AI, EPS, and PNG',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop',
      rating: 4.7,
      price: 275000,
      category: 'Digital',
    },
    {
      id: 4,
      name: 'Code Editor Theme Collection',
      description: 'Beautiful, carefully crafted themes for VS Code, Sublime, and other popular',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=300&fit=crop',
      rating: 4.6,
      price: 150000,
      category: 'Digital',
    },
    {
      id: 5,
      name: 'Admin Dashboard UI Kit',
      description: 'Modern dashboard components and layouts with dark mode support and full',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
      rating: 4.9,
      price: 425000,
      category: 'Digital',
    },
    {
      id: 6,
      name: 'Mobile App UI Components',
      description: 'Complete set of mobile UI components for iOS and Android with Figma source files',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
      rating: 4.8,
      price: 385000,
      category: 'Digital',
    },
  ];

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-yellow-600">
            {i < fullStars ? '★' : i === fullStars && hasHalfStar ? '⭐' : '☆'}
          </span>
        ))}
        <span className="text-sm ml-2" style={{ color: '#8B6F47' }}>
          {rating}
        </span>
      </div>
    );
  };

  return (
    <section id="products" className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-12">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn opacity-0" style={{ animationDelay: '0.1s' }}>
          <h2 className="text-4xl font-bold mb-4" style={{ color: '#8B6F47' }}>
            Produk Digital Terpopuler
          </h2>
          <p className="text-gray-600 text-lg">
            Temukan berbagai produk digital berkualitas tinggi dari para kreator terpercaya
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className="bg-white rounded-lg overflow-hidden border border-gray-200 card-hover animate-fadeIn opacity-0"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gray-200 overflow-hidden img-zoom">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-yellow-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {product.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Title */}
                <h3 className="font-semibold text-gray-800 mb-2 text-sm line-clamp-2">
                  {product.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-xs mb-4 line-clamp-2">
                  {product.description}
                </p>

                {/* Rating */}
                <div className="mb-4">
                  {renderStars(product.rating)}
                </div>

                {/* Price and Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Harga</p>
                    <p className="font-bold" style={{ color: '#8B6F47' }}>
                      Rp {product.price.toLocaleString('id-ID')}
                    </p>
                  </div>
                  <button 
                    onClick={() => onAddToCart?.({ 
                      id: product.id, 
                      name: product.name, 
                      price: product.price, 
                      image: product.image 
                    })}
                    className="bg-yellow-700 hover:bg-yellow-800 hover:scale-105 text-white font-semibold px-4 py-2 rounded-lg transition-all duration-300 btn-press flex items-center gap-2"
                  >
                    🛒 Beli
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center animate-fadeIn opacity-0" style={{ animationDelay: '0.8s' }}>
          <button className="border-2 border-gray-300 text-gray-700 font-semibold px-8 py-2 rounded-lg hover:border-yellow-700 hover:text-yellow-700 hover:scale-105 transition-all duration-300 btn-press">
            Lihat Semua Produk
          </button>
        </div>
      </div>
    </section>
  );
}
