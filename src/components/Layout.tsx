import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="bg-blue-600 text-white p-4">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/tenants" className="hover:underline">Tenants</Link></li>
          <li><Link to="/landlords" className="hover:underline">Landlords</Link></li>
          <li><Link to="/properties" className="hover:underline">Properties</Link></li>
        </ul>
      </nav>

      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>

      <footer className="bg-gray-200 p-4 text-center">
        <p>&copy; 2024 RINGBELT REAL ESTATE AGENTS</p>
      </footer>
    </div>
  );
};

export default Layout;