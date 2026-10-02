"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import PageIntro from "@/components/PageIntro";
import { PRODUCTS } from "@/data/products";
import { FaCopy, FaCheck, FaPaperPlane } from "react-icons/fa";

export default function RFQContainer() {
  const searchParams = useSearchParams();
  const productParam = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    Name: "",
    Company: "",
    Email: "",
    Country: "",
    Commodity: "",
    Quantity: "",
    Location: "",
    "Delivery window": "",
    "Delivery terms": "To be discussed",
    Phone: "",
    Requirements: "",
    consent: false,
  });

  const [draftBody, setDraftBody] = useState("");
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (productParam) {
      const match = PRODUCTS.find(
        (p) => p.slug.toLowerCase() === productParam.toLowerCase()
      );
      if (match) {
        setFormData((prev) => ({ ...prev, Commodity: match.title }));
      }
    }
  }, [productParam]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please acknowledge the enquiry information consent checkbox.");
      return;
    }

    const entries = [
      ["Full Name", formData.Name],
      ["Company", formData.Company],
      ["Business Email", formData.Email],
      ["Country", formData.Country],
      ["Commodity", formData.Commodity],
      ["Quantity & Unit", formData.Quantity],
      ["Destination / Discharge Port", formData.Location],
      ["Delivery Window", formData["Delivery window"] || "Not specified"],
      ["Commercial Terms", formData["Delivery terms"]],
      ["Contact Phone", formData.Phone || "Not provided"],
      ["Requirements & Specifications", formData.Requirements],
    ];

    const subject = `AMS Supply enquiry — ${formData.Commodity || "General"}`;
    const body =
      "Dear AMS Commercial Team,\n\n" +
      entries.map(([k, v]) => `${k}: ${v}`).join("\n") +
      "\n\nPlease contact me to discuss this opportunity.\n";

    setDraftBody(body);
    setSubmitted(true);

    const mailtoUrl = `mailto:sales@amioil.id?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(draftBody);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      // Fallback
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Page Intro */}
      <PageIntro
        eyebrow="BUYER ENQUIRIES"
        title="Tell us what you need."
        description="Share the essentials. Prepare an email enquiry to our commercial team and review it before sending."
      />

      <section className="py-16 sm:py-24 bg-white border-b border-[#dce4e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Aside Commercial Desk */}
            <aside className="lg:col-span-4">
              <div className="bg-[#f8fafb] border border-[#dce4e8] p-8 space-y-5 sticky top-28">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#bb964e] block">
                  DIRECT CHANNEL
                </span>
                <h3 className="text-2xl font-bold text-[#092b3c]">
                  Commercial desk
                </h3>
                <a
                  href="mailto:sales@amioil.id"
                  className="inline-block font-semibold text-[#092b3c] hover:text-[#bb964e] border-b border-[#bb964e] pb-1 text-base transition-colors"
                >
                  sales@amioil.id
                </a>
                <p className="text-sm text-[#60717b] leading-relaxed">
                  Include your product, specifications, volume, destination or origin, and intended delivery timing.
                </p>
                <div className="pt-4 border-t border-[#dce4e8] text-xs text-[#82939c] leading-relaxed">
                  No enquiry is submitted or stored on this website. The form prepares an email in your email application.
                </div>
              </div>
            </aside>

            {/* Form */}
            <div className="lg:col-span-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="Name"
                      required
                      value={formData.Name}
                      onChange={handleChange}
                      placeholder="e.g. Budi Santoso"
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] focus:outline-none focus:border-[#bb964e] transition"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Company <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="Company"
                      required
                      value={formData.Company}
                      onChange={handleChange}
                      placeholder="e.g. PT Mitra Energi Nusantara"
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] focus:outline-none focus:border-[#bb964e] transition"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Business email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      value={formData.Email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] focus:outline-none focus:border-[#bb964e] transition"
                    />
                  </div>

                  {/* Country */}
                  <div>
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="Country"
                      required
                      value={formData.Country}
                      onChange={handleChange}
                      placeholder="e.g. Indonesia"
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] focus:outline-none focus:border-[#bb964e] transition"
                    />
                  </div>

                  {/* Commodity Select */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Commodity <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="Commodity"
                      required
                      value={formData.Commodity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] bg-white focus:outline-none focus:border-[#bb964e] transition"
                    >
                      <option value="">Select a commodity</option>
                      {PRODUCTS.map((p) => (
                        <option key={p.slug} value={p.title}>
                          {p.title} ({p.category})
                        </option>
                      ))}
                      <option value="Other commodity">Other commodity</option>
                    </select>
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Quantity & unit <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="Quantity"
                      required
                      value={formData.Quantity}
                      onChange={handleChange}
                      placeholder="e.g. 30,000 MT or 50,000 BBL"
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] focus:outline-none focus:border-[#bb964e] transition"
                    />
                  </div>

                  {/* Destination / Discharge Port */}
                  <div>
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Destination / discharge port <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="Location"
                      required
                      value={formData.Location}
                      onChange={handleChange}
                      placeholder="e.g. Tanjung Priok / Cigading, Indonesia"
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] focus:outline-none focus:border-[#bb964e] transition"
                    />
                  </div>

                  {/* Delivery window */}
                  <div>
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Delivery window
                    </label>
                    <input
                      name="Delivery window"
                      value={formData["Delivery window"]}
                      onChange={handleChange}
                      placeholder="Month / year (e.g. Q3 2026)"
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] focus:outline-none focus:border-[#bb964e] transition"
                    />
                  </div>

                  {/* Commercial terms */}
                  <div>
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Commercial terms
                    </label>
                    <select
                      name="Delivery terms"
                      value={formData["Delivery terms"]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] bg-white focus:outline-none focus:border-[#bb964e] transition"
                    >
                      <option value="To be discussed">To be discussed</option>
                      <option value="FOB">FOB (Free on Board)</option>
                      <option value="CFR">CFR (Cost & Freight)</option>
                      <option value="CIF">CIF (Cost, Insurance & Freight)</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Contact phone */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Contact phone (optional)
                    </label>
                    <input
                      name="Phone"
                      type="tel"
                      value={formData.Phone}
                      onChange={handleChange}
                      placeholder="+62 812..."
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] focus:outline-none focus:border-[#bb964e] transition"
                    />
                  </div>

                  {/* Specification & Additional requirements */}
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-semibold text-[#102f3e] mb-1.5">
                      Specification & additional requirements <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="Requirements"
                      rows={5}
                      required
                      value={formData.Requirements}
                      onChange={handleChange}
                      placeholder="Product specifications, packing, inspection (e.g. SGS / Saybolt), payment preferences (LC / TT / SKBDN) and other details"
                      className="w-full px-4 py-3 border border-[#bbcbd2] text-[#102f3e] focus:outline-none focus:border-[#bb964e] transition resize-y"
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="pt-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      required
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-[#092b3c] focus:ring-[#bb964e] border-gray-300 rounded"
                    />
                    <span className="text-sm text-[#60717b]">
                      I have read the{" "}
                      <Link
                        href="/privacy"
                        className="text-[#092b3c] font-semibold underline hover:text-[#bb964e]"
                      >
                        enquiry information
                      </Link>{" "}
                      and understand this opens an email draft to sales@amioil.id.
                    </span>
                  </label>
                </div>

                {/* Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2.5 bg-[#092b3c] hover:bg-[#123d53] text-white px-8 py-4 font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    <FaPaperPlane size={13} />
                    <span>Prepare email enquiry</span>
                  </button>
                </div>
              </form>

              {/* Draft Box Output */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-10 p-6 bg-[#f2f6f7] border border-[#dce4e8] space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-bold text-[#092b3c]">
                        Your enquiry draft
                      </h4>
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="inline-flex items-center gap-2 bg-white text-[#092b3c] border border-[#dce4e8] hover:border-[#bb964e] px-4 py-2 text-xs font-semibold shadow-sm transition"
                      >
                        {copied ? (
                          <>
                            <FaCheck className="text-green-600" />
                            <span>Copied to Clipboard</span>
                          </>
                        ) : (
                          <>
                            <FaCopy />
                            <span>Copy draft</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-xs text-[#60717b]">
                      Your enquiry draft is ready. Review and send it in your email application. If it did not open automatically, copy the text below and send it to{" "}
                      <a
                        href="mailto:sales@amioil.id"
                        className="underline text-[#092b3c] font-semibold"
                      >
                        sales@amioil.id
                      </a>.
                    </p>

                    <textarea
                      readOnly
                      rows={10}
                      value={draftBody}
                      className="w-full p-4 bg-white border border-[#bbcbd2] text-xs font-mono text-[#102f3e] focus:outline-none"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
