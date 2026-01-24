export default function Hero() {
  return (
    <section
      id="home"
      className="pt-24 min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white"
    >
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-block mb-4 px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 font-semibold">
            Your Trusted IT Partner
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Premium Computer Sales <br />
            & <span className="text-cyan-400">IT Services</span>
          </h1>

          <p className="text-blue-100 mb-8">
            From cutting-edge laptops and desktops to expert repairs and
            networking solutions, Dhiraj Infotech delivers technology that
            powers your success.
          </p>

          <div className="flex gap-4 mb-8">
            <button className="bg-cyan-400 text-blue-900 px-6 py-3 rounded-xl font-bold">
              Explore Products →
            </button>
            <button className="border border-white/40 px-6 py-3 rounded-xl">
              Our Services
            </button>
          </div>

          <div className="flex flex-wrap gap-6 text-cyan-300 font-semibold">
            <span>✔ Expert Computer Sales</span>
            <span>✔ IT Services</span>
            <span>✔ 24/7 Support</span>
          </div>
        </div>

        <div className="hidden md:block opacity-80">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Tech setup"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
