function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full font-[Roboto]">
      {/* Header Section - Smaller on Mobile */}
      <div className="bg-[#C4DDC4] py-6 md:py-5">
        <h2 className="text-center text-black font-medium text-lg md:text-3xl">
          Stronger Roots, Better Markets!
        </h2>
      </div>

      {/* Main Content Section - Dark Green Background */}
      <div className="bg-[#2F5233] text-white px-6 md:px-16 lg:px-24 pt-12 pb-20 md:py-15 relative">
        <div className="mx-auto max-w-[1200px]">
          {/* gap-8 on mobile moves the Site Map/Legal closer to the description */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-16">
            
            {/* Left Side: Logo & Description */}
            <div className="flex-1 min-w-0 flex flex-col items-center md:items-start text-center md:text-left">
              <div className="mb-8">
                <img
                  src="/marketroots_logo.png"
                  alt="MarketRoots Logo"
                  className="h-[60px] object-contain"
                />
              </div>

              <p className="text-white/90 mb-10 max-w-[420px] leading-relaxed text-sm md:text-base">
                Our capstone project introduces MarketRoots, a platform designed
                to empower local farmers and MSMEs by providing a direct channel
                for fresh produce distribution.
              </p>

              {/* Back to Top Button */}
              <button
                onClick={scrollToTop}
                className="
                  inline-flex items-center justify-center transition-colors duration-200 border border-white/80 text-white hover:bg-white hover:text-[#2f4f35]
                  /* Mobile: Square shape, spaced from bottom/right edges | Desktop: Original rounded-md and padding */
                  absolute bottom-4 right-4 w-10 h-10 rounded-none md:relative md:bottom-auto md:right-auto md:w-auto md:h-auto md:px-7 md:py-3 md:rounded-md md:gap-3
                "
              >
                <span
                  className="text-[18px]"
                  style={{ fontFamily: "FontAwesome" }}
                >
                  &#xf102;
                </span>
                <span className="font-normal tracking-wide hidden md:inline">
                  BACK TO TOP
                </span>
              </button>
            </div>

            {/* Right Side - Navigation Links */}
            {/* gap-8 on mobile moves Legal closer to Site Map */}
            <div className="flex flex-col md:flex-row gap-8 md:gap-24 text-center md:text-left">
              {/* Site Map Column */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-4 md:mb-8">
                  Site Map
                </h4>
                <ul className="space-y-3 md:space-y-5 text-white/90">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Products</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>

              {/* Legal Column */}
              <div>
                <h4 className="text-white font-semibold text-lg mb-4 md:mb-8">Legal</h4>
                <ul className="space-y-3 md:space-y-5 text-white/90">
                  <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section - Copyright */}
      <div className="bg-[#2F5233] border-t border-white/80">
        <div className="mx-auto max-w-[1200px] px-6 md:px-16 lg:px-24 py-5">
          <p className="text-white/90 text-center text-sm md:text-base">
            Copyright © 2025 MarketRoots. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;