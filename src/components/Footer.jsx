export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">
            💻 Dhiraj Infotech
          </h3>
          <p className="text-slate-400">
            Your trusted partner for premium computer sales and professional IT
            services. Delivering technology solutions since 2014.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>Home</li>
            <li>Services</li>
            <li>Products</li>
            <li>About</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold text-white mb-4">Our Services</h4>
          <ul className="space-y-2">
            <li>Computer Sales</li>
            <li>Laptop Repair</li>
            <li>Networking</li>
            <li>Data Recovery</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold text-white mb-4">Stay Updated</h4>
          <p className="text-slate-400 mb-4">
            Subscribe to get updates on latest offers and tech news.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-l-xl w-full focus:outline-none text-black"
            />
            <button className="bg-cyan-400 px-4 rounded-r-xl text-slate-900 font-bold">
              →
            </button>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-500 mt-12">
        © {new Date().getFullYear()} Dhiraj Infotech. All rights reserved.
      </div>
    </footer>
  );
}
