import {
  Mail,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-950 text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-3xl font-black tracking-tight"
            >
              G<span className="text-[#D84B83]">3</span>
            </a>

            <p className="mt-5 max-w-sm leading-7 text-gray-400">
              Empowering girls with the knowledge, confidence and
              guidance they need to navigate life and grow into
              purposeful young women.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {/* Facebook */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-gray-300 transition hover:bg-[#D84B83] hover:text-white"
              >
                f
              </a>

              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-gray-300 transition hover:bg-[#D84B83] hover:text-white"
              >
                ig
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition hover:bg-[#D84B83] hover:text-white"
              >
                <MessageCircle size={18} />
              </a>

              {/* Email */}
              <a
                href="mailto:hello@g3initiative.com"
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition hover:bg-[#D84B83] hover:text-white"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="#products"
                  className="text-gray-400 transition hover:text-white"
                >
                  Our Collections
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-gray-400 transition hover:text-white"
                >
                  2-in-1 Collection
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-gray-400 transition hover:text-white"
                >
                  4-in-1 Collection
                </a>
              </li>

              <li>
                <a
                  href="#products"
                  className="text-gray-400 transition hover:text-white"
                >
                  6-in-1 Collection
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href="#products"
                  className="text-gray-400 transition hover:text-white"
                >
                  Shop Now
                </a>
              </li>

              <li>
                <a
                  href="#order"
                  className="text-gray-400 transition hover:text-white"
                >
                  Place an Order
                </a>
              </li>

              <li>
                <a
                  href="#faq"
                  className="text-gray-400 transition hover:text-white"
                >
                  FAQs
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-400 transition hover:text-white"
                >
                  About G3
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:hello@g3initiative.com"
                className="flex items-start gap-3 text-gray-400 transition hover:text-white"
              >
                <Mail
                  size={19}
                  className="mt-1 shrink-0"
                />

                <span>
                  hello@g3initiative.com
                </span>
              </a>

              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-gray-400 transition hover:text-white"
              >
                <MessageCircle
                  size={19}
                  className="mt-1 shrink-0"
                />

                <span>
                  Chat with us on WhatsApp
                </span>
              </a>
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm font-semibold text-white">
                Need help with your order?
              </p>

              <p className="mt-2 text-sm leading-6 text-gray-400">
                Our support team is available to help with your
                order and payment questions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} G3 Initiative. All rights
            reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5 sm:gap-6">
            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-sm text-gray-500 transition hover:text-white"
            >
              Terms & Conditions
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gray-300 transition hover:bg-[#D84B83] hover:text-white"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;