export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-slate-200/90 backdrop-blur border-b z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg">
          <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center text-white">
            💻
          </div>
          Dhiraj <span className="text-blue-500">Infotech</span>
        </div>

        <nav className="hidden md:flex gap-8 text-gray-600 font-medium">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="flex items-center gap-4">
          <span className="hidden md:flex items-center gap-1 text-gray-600">
            📞 Call Us
          </span>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-xl font-semibold shadow">
            Get Quote
          </button>
        </div>
      </div>
    </header>
  );
}
