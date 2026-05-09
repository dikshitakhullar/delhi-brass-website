import Link from "next/link";

const footerNav = [
  { label: "Lighting", href: "/lighting" },
  { label: "Gates", href: "/gates" },
  { label: "Railings", href: "/railings" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Trade Programme", href: "/trade" },
];

export default function Footer() {
  return (
    <footer className="bg-db-dark border-t border-db-border">
      <div className="max-w-content mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Navigation */}
          <div>
            <h4 className="font-heading text-sm tracking-[4px] text-db-gold mb-6">
              NAVIGATE
            </h4>
            <ul className="space-y-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#888] hover:text-db-gold transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Showrooms */}
          <div>
            <h4 className="font-heading text-sm tracking-[4px] text-db-gold mb-6">
              SHOWROOMS
            </h4>
            <div className="space-y-4 text-sm text-[#888]">
              <div>
                <p className="text-db-ivory mb-1">MG Road, New Delhi</p>
                <p>Two doors apart — walk in anytime</p>
              </div>
              <div>
                <p className="text-db-ivory mb-1">Khan Market, New Delhi</p>
                <p>Book a private viewing</p>
              </div>
              <div>
                <p className="text-db-ivory mb-1">Factory</p>
                <p>Gurgaon, Haryana</p>
              </div>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-heading text-sm tracking-[4px] text-db-gold mb-6">
              CONNECT
            </h4>
            <div className="space-y-3 text-sm text-[#888]">
              <p>
                <a href="mailto:info@delhibrass.com" className="hover:text-db-gold transition-colors">
                  info@delhibrass.com
                </a>
              </p>
              <p>
                <a href="tel:+911234567890" className="hover:text-db-gold transition-colors">
                  +91 123 456 7890
                </a>
              </p>
              <div className="flex gap-6 pt-2">
                <a href="#" className="hover:text-db-gold transition-colors tracking-[2px] text-xs">
                  INSTAGRAM
                </a>
                <a href="#" className="hover:text-db-gold transition-colors tracking-[2px] text-xs">
                  FACEBOOK
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-db-border text-center">
          <p className="text-xs text-db-muted tracking-[3px]">
            &copy; {new Date().getFullYear()} DELHI BRASS &middot; EST. 1947
          </p>
        </div>
      </div>
    </footer>
  );
}
