import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-linear-to-br from-primary to-secondary rounded-lg" />
            <span className="text-xl font-bold">Notify</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary transition"
            >
              Home
            </Link>
            <Link
              to="/privacy"
              className="text-gray-700 hover:text-primary transition"
            >
              Privacy
            </Link>
            <Link
              to="/terms"
              className="text-gray-700 hover:text-primary transition"
            >
              Terms
            </Link>
            <Link
              to="/support"
              className="text-gray-700 hover:text-primary transition"
            >
              Support
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link
              to="/"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/privacy"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Privacy
            </Link>
            <Link
              to="/support"
              className="block text-gray-700 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Support
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
