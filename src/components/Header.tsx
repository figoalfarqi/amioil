"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaArrowRight } from "react-icons/fa";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [operationsOpen, setOperationsOpen] = useState(false);
  const [partnershipsOpen, setPartnershipsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const opsDropdownRef = useRef<HTMLDivElement>(null);
  const partnerDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on route change or click outside
  useEffect(() => {
    setMobileOpen(false);
    setOperationsOpen(false);
    setPartnershipsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        opsDropdownRef.current &&
        !opsDropdownRef.current.contains(event.target as Node)
      ) {
        setOperationsOpen(false);
      }
      if (
        partnerDropdownRef.current &&
        !partnerDropdownRef.current.contains(event.target as Node)
      ) {
        setPartnershipsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isOpsActive = ["/operations", "/sourcing", "/quality"].some((p) =>
    pathname.startsWith(p)
  );
  const isPartnerActive = ["/rfq", "/supplier"].some((p) =>
    pathname.startsWith(p)
  );

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md py-3" : "border-b border-[#dce4e8] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <Link
          href="/"
          className="flex items-center gap-3.5 group focus:outline-none"
          aria-label="PT Ami Mandiri Sejahtera home"
        >
          <div className="relative w-12 h-14 sm:w-14 sm:h-16 flex items-center justify-center">
            {/* Logo image from public/ams-logo.png */}
            <img
              src="/ams-logo.png"
              alt="AMS Logo"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="hidden sm:flex flex-col border-l border-[#dce4e8] pl-3.5">
            <span className="font-extrabold text-[12px] sm:text-[13px] tracking-wider text-[#092b3c] leading-tight">
              PT AMI MANDIRI SEJAHTERA
            </span>
            <span className="text-[10px] tracking-widest text-[#bb964e] font-bold">
              ENERGY & COMMODITIES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-[14px] font-semibold text-[#102f3e]">
          {/* Home */}
          <Link
            href="/"
            className={`transition-colors duration-200 hover:text-[#bb964e] ${
              pathname === "/" ? "text-[#bb964e]" : ""
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`transition-colors duration-200 hover:text-[#bb964e] ${
              pathname === "/about" ? "text-[#bb964e]" : ""
            }`}
          >
            About AMS
          </Link>

          {/* Commodities */}
          <Link
            href="/products"
            className={`transition-colors duration-200 hover:text-[#bb964e] ${
              pathname.startsWith("/products") ? "text-[#bb964e]" : ""
            }`}
          >
            Commodities
          </Link>

          {/* Operations & Sourcing (Grouped Dropdown) */}
          <div className="relative" ref={opsDropdownRef}>
            <button
              onClick={() => {
                setOperationsOpen(!operationsOpen);
                setPartnershipsOpen(false);
              }}
              className={`flex items-center gap-1.5 transition-colors duration-200 hover:text-[#bb964e] focus:outline-none ${
                isOpsActive ? "text-[#bb964e]" : ""
              }`}
              aria-expanded={operationsOpen}
            >
              <span>Operations</span>
              <FaChevronDown
                className={`text-[10px] transition-transform duration-200 ${
                  operationsOpen ? "rotate-180 text-[#bb964e]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {operationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-3 w-64 bg-white border border-[#dce4e8] shadow-xl py-2 rounded-sm z-50"
                >
                  <Link
                    href="/operations"
                    className="flex flex-col px-4 py-2.5 hover:bg-[#f2f6f7] transition-colors"
                  >
                    <span className="font-semibold text-[#092b3c] text-[13px]">
                      Trading & Logistics
                    </span>
                    <span className="text-[12px] text-[#60717b]">
                      Commercial terms & cargo coordination
                    </span>
                  </Link>
                  <Link
                    href="/sourcing"
                    className="flex flex-col px-4 py-2.5 hover:bg-[#f2f6f7] transition-colors"
                  >
                    <span className="font-semibold text-[#092b3c] text-[13px]">
                      Global Sourcing
                    </span>
                    <span className="text-[12px] text-[#60717b]">
                      Refinery & producer network
                    </span>
                  </Link>
                  <Link
                    href="/quality"
                    className="flex flex-col px-4 py-2.5 hover:bg-[#f2f6f7] transition-colors"
                  >
                    <span className="font-semibold text-[#092b3c] text-[13px]">
                      Quality & Compliance
                    </span>
                    <span className="text-[12px] text-[#60717b]">
                      Testing, verification & sanctions due diligence
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Commercial & RFQ (Grouped Dropdown) */}
          <div className="relative" ref={partnerDropdownRef}>
            <button
              onClick={() => {
                setPartnershipsOpen(!partnershipsOpen);
                setOperationsOpen(false);
              }}
              className={`flex items-center gap-1.5 transition-colors duration-200 hover:text-[#bb964e] focus:outline-none ${
                isPartnerActive ? "text-[#bb964e]" : ""
              }`}
              aria-expanded={partnershipsOpen}
            >
              <span>Commercial</span>
              <FaChevronDown
                className={`text-[10px] transition-transform duration-200 ${
                  partnershipsOpen ? "rotate-180 text-[#bb964e]" : ""
                }`}
              />
            </button>

            <AnimatePresence>
              {partnershipsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  className="absolute left-0 mt-3 w-64 bg-white border border-[#dce4e8] shadow-xl py-2 rounded-sm z-50"
                >
                  <Link
                    href="/rfq"
                    className="flex flex-col px-4 py-2.5 hover:bg-[#f2f6f7] transition-colors"
                  >
                    <span className="font-semibold text-[#092b3c] text-[13px]">
                      Request Supply (RFQ)
                    </span>
                    <span className="text-[12px] text-[#60717b]">
                      Submit buyer cargo requirements
                    </span>
                  </Link>
                  <Link
                    href="/supplier"
                    className="flex flex-col px-4 py-2.5 hover:bg-[#f2f6f7] transition-colors"
                  >
                    <span className="font-semibold text-[#092b3c] text-[13px]">
                      Become a Supplier
                    </span>
                    <span className="text-[12px] text-[#60717b]">
                      Introduce export volume & sources
                    </span>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="ml-2 inline-flex items-center gap-2 bg-[#092b3c] hover:bg-[#123d53] text-white text-[13px] font-semibold px-4 py-2.5 transition-all shadow-sm hover:shadow"
          >
            <span>Contact Us</span>
            <FaArrowRight className="text-[11px]" />
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="lg:hidden p-2 text-[#092b3c] border border-[#dce4e8] rounded hover:bg-[#f2f6f7] transition focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden border-t border-[#dce4e8] bg-white px-5 py-6 shadow-xl"
          >
            <div className="flex flex-col gap-4 text-[15px] font-medium text-[#102f3e]">
              <Link
                href="/"
                className="py-1 hover:text-[#bb964e]"
                onClick={() => setMobileOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-1 hover:text-[#bb964e]"
                onClick={() => setMobileOpen(false)}
              >
                About AMS
              </Link>
              <Link
                href="/products"
                className="py-1 hover:text-[#bb964e]"
                onClick={() => setMobileOpen(false)}
              >
                Our Commodities (10 Products)
              </Link>

              <div className="pt-2 border-t border-[#dce4e8]">
                <span className="text-[11px] font-bold text-[#bb964e] tracking-wider uppercase">
                  Operations & Sourcing
                </span>
                <div className="flex flex-col gap-2 mt-2 pl-3">
                  <Link
                    href="/operations"
                    className="text-[14px] hover:text-[#bb964e]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Trading & Logistics
                  </Link>
                  <Link
                    href="/sourcing"
                    className="text-[14px] hover:text-[#bb964e]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Global Sourcing
                  </Link>
                  <Link
                    href="/quality"
                    className="text-[14px] hover:text-[#bb964e]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Quality & Compliance
                  </Link>
                </div>
              </div>

              <div className="pt-2 border-t border-[#dce4e8]">
                <span className="text-[11px] font-bold text-[#bb964e] tracking-wider uppercase">
                  Commercial Opportunities
                </span>
                <div className="flex flex-col gap-2 mt-2 pl-3">
                  <Link
                    href="/rfq"
                    className="text-[14px] hover:text-[#bb964e]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Request Supply (RFQ)
                  </Link>
                  <Link
                    href="/supplier"
                    className="text-[14px] hover:text-[#bb964e]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Become a Supplier
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-[14px] hover:text-[#bb964e]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Privacy & Enquiry Info
                  </Link>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-[#092b3c] text-white py-3 font-semibold text-[14px]"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Contact Us</span>
                  <FaArrowRight size={12} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}