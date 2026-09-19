import { Menu, X } from "lucide-react";
import { useState } from "react";
import G3 from "../assets/G3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex shrink-0 items-center">
          <img
            src={G3}
            alt="G3"
            className="h-12 w-auto object-contain"
          />
        </a>

        {/* Discount Message - Center */}
        <div className="hidden text-center md:block">
          <p className="text-sm font-semibold text-gray-950 lg:text-base">
            Get the G3 Collection and enjoy{" "}
            <span className="text-[#D84B83]">20% OFF</span>
          </p>
          <p className="mt-1 text-xs text-gray-500">
            Limited-time offer
          </p>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#products"
            className="rounded-full bg-gray-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Get the Collection
          </a>
        </div>

        {/* Mobile Menu Button */}
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
        <div className="border-t border-gray-100 bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-[#FFF8F5] px-4 py-4 text-center">
              <p className="text-sm font-semibold text-gray-950">
                Get the G3 Collection and enjoy{" "}
                <span className="text-[#D84B83]">20% OFF</span>
              </p>

              <p className="mt-1 text-xs text-gray-500">
                Limited-time offer
              </p>
            </div>

            <a
              href="#products"
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