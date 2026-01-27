import { useState } from "react";
import { Link } from "react-router-dom";  

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-primary text-white p-4  font-family-body">
        <div className="flex items-center justify-between" >
            <div>
              <img src ="./public/Logo.svg" alt="Logo" className="h-10" />
            </div>
            
            <ul className=" hidden md:flex  flex-1 space-x-6 justify-center">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/marketplace">Marketplace</Link></li>
            </ul>

            <div className="hidden md:block">
              <a href="#login">Login</a>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden focus:outline-none" 
            aria-label="Toggle Menu" >
              {isOpen ? (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  ):
                  (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>)
              }
            </button>
        </div>
              {isOpen && (
                  <div className="md:hidden mt-4 space-y-2">
                    <ul className="flex flex-col items-center space-y-2">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/marketplace">Marketplace</Link></li>
                      <li><Link to="#login">Login</Link></li>
                    </ul>
                  </div>
              )}
    </nav>
  );
}
export default Navbar;