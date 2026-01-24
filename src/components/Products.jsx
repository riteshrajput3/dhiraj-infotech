const products = [
  {
    title: "Laptops",
    desc: "Business, gaming, and everyday laptops from HP, Dell, Lenovo, and more.",
    badge: "50+ Models",
    icon: "💻",
  },
  {
    title: "Desktops",
    desc: "Custom-built and branded desktops for home, office, and enterprise use.",
    badge: "30+ Options",
    icon: "🖥️",
  },
  {
    title: "Components",
    desc: "Processors, RAM, graphics cards, motherboards, and upgrade components.",
    badge: "100+ Parts",
    icon: "⚙️",
  },
  {
    title: "Printers",
    desc: "Inkjet, laser, and multifunction printers for home and office use.",
    badge: "25+ Models",
    icon: "🖨️",
  },
  {
    title: "Storage",
    desc: "SSDs, HDDs, external drives, and NAS storage solutions.",
    badge: "40+ Options",
    icon: "💾",
  },
  {
    title: "Accessories",
    desc: "Keyboards, mice, headsets, cables, UPS, and networking accessories.",
    badge: "200+ Items",
    icon: "🎧",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Quality Technology at{" "}
            <span className="text-blue-500">Best Prices</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of computers, components, and accessories
            from leading brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="border rounded-2xl p-8 hover:shadow-lg transition"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl text-2xl">
                  {p.icon}
                </div>
                <span className="text-sm bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full font-semibold">
                  {p.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-3">{p.title}</h3>
              <p className="text-gray-600 mb-4">{p.desc}</p>

              <a
                href="#"
                className="text-blue-600 font-semibold hover:underline"
              >
                Browse Category →
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow">
            View All Products →
          </button>
        </div>
      </div>
    </section>
  );
}
