function Navbar() {
  return (
    <nav className="w-full bg-primary text-white p-4 font-body">
      <div className="relative flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo - Left */}
        <div className="z-10">
          <a href="#" className="block">
            <img src="./Logo.svg" alt="Logo" className="h-10 cursor-pointer" />
          </a>
        </div>

        {/* Navigation - Absolutely centered */}
        <ul className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
          <li><a href="#home" className="hover:text-secondary transition">Home</a></li>
          <li><a href="#about" className="hover:text-secondary transition">About</a></li>
          <li><a href="#contact" className="hover:text-secondary transition">Contact</a></li>
        </ul>

        {/* Login - Right */}
        <div className="z-10">
          <a href="#login" className="hover:text-secondary transition">Login</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;