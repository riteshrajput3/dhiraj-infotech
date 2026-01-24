const stats = [
  { value: "500+", label: "Satisfied Clients" },
  { value: "10+", label: "Years in Business" },
  { value: "98%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const features = [
  {
    title: "Certified Experts",
    desc: "Our team of certified technicians brings years of experience to every project.",
    icon: "🎓",
  },
  {
    title: "Quick Turnaround",
    desc: "Fast service delivery without compromising on quality and reliability.",
    icon: "⚡",
  },
  {
    title: "Customer First",
    desc: "We prioritize your needs with personalized solutions and dedicated support.",
    icon: "🤝",
  },
  {
    title: "Quality Assured",
    desc: "Premium products and services backed by comprehensive warranties.",
    icon: "✅",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-950 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        {/* Left */}
        <div>
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold mb-6">
            Your Success is Our{" "}
            <span className="text-cyan-400">Priority</span>
          </h2>

          <p className="text-blue-100 mb-10">
            With over a decade of experience in the IT industry, Dhiraj Infotech
            has built a reputation for excellence. We combine technical
            expertise with exceptional customer service to deliver solutions
            that exceed expectations.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-extrabold text-cyan-400">
                  {s.value}
                </div>
                <div className="text-blue-100 mt-2">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white/10 rounded-2xl p-8"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-cyan-400 text-blue-900 rounded-xl text-2xl mb-4">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{f.title}</h3>
              <p className="text-blue-100">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
