import { Menu, X } from "lucide-react";
import { useState } from "react";

import G3 from "../assets/G3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

        {/* Logo */}
        <a href="/" className="flex items-center">
          <img
            src={G3}
            alt="G3"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            Home
          </a>

          <a
            href="/books"
            className="text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            Books
          </a>

          <a
            href="/about"
            className="text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            About
          </a>

          <a
            href="/faq"
            className="text-sm font-medium text-gray-700 hover:text-gray-950"
          >
            FAQ
          </a>

          <a
            href="/order"
            className="rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Get the Collection
          </a>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-950 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>

            <a href="/books" onClick={() => setIsOpen(false)}>
              Books
            </a>

            <a href="/about" onClick={() => setIsOpen(false)}>
              About
            </a>

            <a href="/faq" onClick={() => setIsOpen(false)}>
              FAQ
            </a>

            <a
              href="/order"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-gray-950 px-6 py-3 text-center font-semibold text-white"
            >
              Get the Collection
            </a>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;