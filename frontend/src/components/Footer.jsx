function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full font-body">
      {/* Main Content Section - Dark Green Background */}
      <div className="bg-primary text-white px-6 md:px-16 lg:px-24 py-12 md:py-16">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">

            {/* Left Side: Logo & Description */}
            <div className="flex-1 max-w-md">
              <div className="mb-6">
                <a href="#" className="block">
                  <img
                    src="./Logo.svg"
                    alt="MarketRoots Logo"
                    className="h-[50px] object-contain cursor-pointer"
                  />
                </a>
              </div>

              <p className="text-white/90 mb-8 leading-relaxed text-sm">
                Our capstone project introduces MarketRoots, a platform designed
                to empower local farmers and MSMEs by providing a direct channel
                for fresh produce distribution.
              </p>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-3 px-6 py-3 border-2 border-white text-white hover:bg-white/5 transition-colors duration-200 rounded-md text-sm font-semibold"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                </svg>
                <span className="tracking-wide">BACK TO TOP</span>
              </button>
            </div>

            {/* Right Side - Navigation Links */}
            <div className="flex gap-16 md:gap-24">
              {/* Site Map Column */}
              <div>
                <h4 className="text-white font-semibold text-base mb-4">
                  Site Map
                </h4>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4 className="text-white font-semibold text-base mb-4">Legal</h4>
                <ul className="space-y-2 text-white/90 text-sm">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Copyright */}
      <div className="bg-primary border-t border-white/20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-16 lg:px-24 py-4">
          <p className="text-white/80 text-center text-sm">
            Copyright © 2025 MarketRoots. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;