import React from 'react';
import Logo from './Logo';

const Header = () => {
  return (
    <header className="bg-white px-4 py-3 flex justify-between"> 
      <Logo />
      <nav className="flex gap-4 items-center">
        <a href="/products" className="text-lg font-semibold hover:text-gray-600 border-b-4 border-transparent hover:border-black hover:rounded-b-lg">Products</a>
        <a href="/wishlist" className="text-lg font-semibold hover:text-gray-600 border-b-4 border-transparent hover:border-black hover:rounded-b-lg">Wishlist</a>
        <a href="/cart" className="text-lg font-semibold hover:text-gray-600 border-b-4 border-transparent hover:border-black hover:rounded-b-lg">🛒 Cart</a>
      </nav>
    </header>
  );
};

export default Header;
