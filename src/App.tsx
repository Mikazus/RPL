import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Hero from './section/hero'
import Navbar from './section/navbar'
import Product from './section/product'
import AboutUs from './section/AboutUs'
import Footer from './section/Footer'
import Login from './feature/login'
import Register from './feature/register'
import Payment from './feature/payment'
import Cart from './feature/cart'
import type { CartItem } from './feature/cart'
import './style/global.css'

function HomePage({ 
  cartItems, 
  onAddToCart, 
  isCartOpen, 
  setIsCartOpen,
  onRemoveItem,
  onUpdateQuantity
}: {
  cartItems: CartItem[];
  onAddToCart: (item: Omit<CartItem, 'quantity'>) => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
}) {
  return (
    <>
      <Navbar cartItemCount={cartItems.length} onCartClick={() => setIsCartOpen(true)} />
      <Hero />
      <Product onAddToCart={onAddToCart} />
      <AboutUs />
      <Footer />
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cartItems}
        onRemoveItem={onRemoveItem}
        onUpdateQuantity={onUpdateQuantity}
      />
    </>
  )
}

function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (item: Omit<CartItem, 'quantity'>) => {
    setCartItems(prev => {
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        return prev.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          element={
            <HomePage 
              cartItems={cartItems}
              onAddToCart={handleAddToCart}
              isCartOpen={isCartOpen}
              setIsCartOpen={setIsCartOpen}
              onRemoveItem={handleRemoveItem}
              onUpdateQuantity={handleUpdateQuantity}
            />
          } 
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
