const services = [
  {
    title: "Computer Sales",
    desc: "Wide range of desktops, laptops, and peripherals from top brands at competitive prices.",
    icon: "🖥️",
  },
  {
    title: "Repair & Maintenance",
    desc: "Expert hardware and software repairs with quick turnaround and warranty.",
    icon: "🔧",
  },
  {
    title: "Networking Solutions",
    desc: "Complete networking setup for homes and businesses including Wi-Fi and LAN.",
    icon: "🌐",
  },
  {
    title: "Security Services",
    desc: "Antivirus installation, malware removal, and cybersecurity solutions.",
    icon: "🛡️",
  },
  {
    title: "Data Recovery",
    desc: "Professional data recovery from crashed hard drives and storage devices.",
    icon: "💾",
  },
  {
    title: "IT Support",
    desc: "On-site and remote technical support to keep systems running 24/7.",
    icon: "🎧",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full font-semibold mb-4">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Complete IT Solutions for{" "}
            <span className="text-blue-500">Your Needs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From sales to support, we provide end-to-end technology services to
            help your business thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-lg transition"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl text-2xl mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
