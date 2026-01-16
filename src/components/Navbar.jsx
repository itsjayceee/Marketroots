import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-primary text-white p-4  font-family-body">
      <div className="flex items-center justify-between" >
        <div>
          <img src="./public/Logo.svg" alt="Logo" className="h-10" />
        </div>
        
        <ul className=" hidden md:flex  flex-1 space-x-6 justify-center">

          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="hidden md:block">
          <a href="#login">Login</a>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;