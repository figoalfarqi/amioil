import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#061f2d] text-white pt-16 pb-8 border-t border-[#18394a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#2c414d]">
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 flex flex-col items-start gap-4">
            <Link
              href="/"
              className="inline-flex bg-white p-2.5 rounded-sm shadow-md group"
              aria-label="PT Ami Mandiri Sejahtera home"
            >
              <img
                src="/ams-logo.png"
                alt="PT Ami Mandiri Sejahtera"
                className="w-16 h-20 object-contain transition-transform group-hover:scale-105"
              />
            </Link>
            <div>
              <h3 className="text-lg font-bold tracking-tight text-white">
                PT Ami Mandiri Sejahtera
              </h3>
              <p className="text-[#a4b7c1] text-sm mt-1 max-w-md">
                International Energy & Commodity Trading. Connecting global energy and industrial commodities with the needs of Indonesia’s growing markets.
              </p>
            </div>
            <div className="text-xs text-[#7e97a3] flex flex-wrap gap-4 mt-2">
              <span>Jakarta · Indonesia</span>
              <span>·</span>
              <a
                href="https://amioil.id"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#bb964e] transition-colors underline"
              >
                amioil.id
              </a>
            </div>
          </div>

          {/* Column 2: Commercial Enquiries */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold tracking-widest text-[#bb964e] uppercase">
              Commercial Enquiries
            </h4>
            <div className="flex flex-col gap-2 text-sm text-[#bacbd3]">
              <div>
                <span className="block text-xs text-[#7e97a3]">Sales & Cargo Requests:</span>
                <a
                  href="mailto:sales@amioil.id"
                  className="hover:text-[#bb964e] transition-colors font-medium text-white"
                >
                  sales@amioil.id
                </a>
              </div>
              <div className="mt-2">
                <span className="block text-xs text-[#7e97a3]">General & Corporate:</span>
                <a
                  href="mailto:office@amioil.id"
                  className="hover:text-[#bb964e] transition-colors font-medium text-white"
                >
                  office@amioil.id
                </a>
              </div>
            </div>
          </div>

          {/* Column 3: Explore & Partnerships */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-bold tracking-widest text-[#bb964e] uppercase">
              Navigation & Explore
            </h4>
            <ul className="flex flex-col gap-2 text-sm text-[#bacbd3]">
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#bb964e] transition-colors"
                >
                  About AMS
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#bb964e] transition-colors"
                >
                  Our Commodities
                </Link>
              </li>
              <li>
                <Link
                  href="/sourcing"
                  className="hover:text-[#bb964e] transition-colors"
                >
                  Global Sourcing
                </Link>
              </li>
              <li>
                <Link
                  href="/operations"
                  className="hover:text-[#bb964e] transition-colors"
                >
                  Trading & Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="/quality"
                  className="hover:text-[#bb964e] transition-colors"
                >
                  Quality & Compliance
                </Link>
              </li>
              <li>
                <Link
                  href="/rfq"
                  className="hover:text-[#bb964e] transition-colors"
                >
                  Request Supply (RFQ)
                </Link>
              </li>
              <li>
                <Link
                  href="/supplier"
                  className="hover:text-[#bb964e] transition-colors"
                >
                  Become a Supplier
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a4b7c1]">
          <span>© 2026 PT Ami Mandiri Sejahtera · Indonesia</span>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#bb964e] transition-colors underline"
            >
              Privacy & Enquiry Information
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#bb964e] transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
