import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart } from '../contexts/CartContext';

export function Navbar() {
  const { user, signOut } = useAuth();
  const { itemCount } = useCart();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-black text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wider">
            KGANYA
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300 transition">
              Home
            </Link>
            <Link to="/shop" className="hover:text-gray-300 transition">
              Shop
            </Link>
            <Link to="/about" className="hover:text-gray-300 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-gray-300 transition">
              Contact
            </Link>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-6">
            {user ? (
              <>
                <Link to="/profile" className="hover:text-gray-300 transition">
                  Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="hover:text-gray-300 transition"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/signin" className="hover:text-gray-300 transition">
                Sign In
              </Link>
            )}
            <Link to="/cart" className="hover:text-gray-300 transition relative">
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
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden px-4 pb-4 space-y-2">
        <Link to="/" className="block hover:text-gray-300 transition">
          Home
        </Link>
        <Link to="/shop" className="block hover:text-gray-300 transition">
          Shop
        </Link>
        <Link to="/about" className="block hover:text-gray-300 transition">
          About
        </Link>
        <Link to="/contact" className="block hover:text-gray-300 transition">
          Contact
        </Link>
      </div>
    </nav>
  );
}
