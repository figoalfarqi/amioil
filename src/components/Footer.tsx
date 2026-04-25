export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 px-6">
        {/* Location */}
        <div>
          <h3 className="font-bold text-xl mb-4">Our Location</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d995.8074257060372!2d117.5882706!3d3.2931992!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32138af0f40c2d9b%3A0x2719988c6261db8e!2sJl.%20Yos%20Sudarso%20No.2%2C%20Lingkas%20Ujung%2C%20Kec.%20Tarakan%20Tim.%2C%20Kota%20Tarakan%2C%20Kalimantan%20Utara!5e0!3m2!1sid!2sid!4v1773546276896!5m2!1sid!2sid"
            className="w-full h-60 rounded-lg"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <p className="mt-4 text-gray-300">
            Tarakan <br />
            Jl. Yos Sudarso No.02, Tarakan, Kalimantan Utara
          </p>
        </div>

        {/* Office */}
        <div>
          <h3 className="font-bold text-xl mb-4">Office</h3>

          <p>Main Office : Tarakan</p>

          <p className="mt-2">
            Branch Office : Batam <br />
            Ruko Puri Legenda Blok D3 No.17A
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-bold text-xl mb-4">Contact</h3>

          <p>Email</p>
          <p className="text-yellow-400">contact@virtualgate.id</p>
          <p className="text-yellow-400">sales@virtualgate.id</p>
        </div>
      </div>
    </footer>
  );
}

