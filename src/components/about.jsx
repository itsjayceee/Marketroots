export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white font-[Roboto]">
      {/* HERO SECTION */}
      <div
        className="h-[260px] md:h-[320px] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: "url('/images/farm.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative mx-auto max-w-[900px] px-5 sm:px-6 text-white text-center space-y-4">
          <h1 className="font-[Merriweather] text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
            Rooted in Community,
            <br />
            Growing for the Future
          </h1>

          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            MarketRoots is a digital marketplace built to bridge farmers and
            <span className="hidden md:inline">
              <br />
            </span>
            buyers through trust, transparency, and technology
          </p>
        </div>
      </div>

      {/* CONTENT SECTION (FULL WIDTH ON DESKTOP) */}
      <div className="w-full px-5 sm:px-6 md:px-12 lg:px-16 xl:px-24 py-10 space-y-16">
        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="mx-auto w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] h-[200px] sm:h-[220px] md:h-[260px] overflow-hidden rounded-[0_180px_0_180px] shadow-md">
            <img
              src="/images/farmer3.jpg"
              alt="Farmers"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-black sm:text-sm md:text-lg text-center md:text-left">
            MarketRoots was born out of a simple belief: farmers and local
            producers deserve fair access to market, and communities deserve
            fresh, quality products.
          </p>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <p className="text-black sm:text-sm md:text-lg order-2 md:order-1 text-center md:text-left">
            We are a digital marketplace that bridges the gap between farmers,
            MSMEs, and buyers through transparency, trust, and innovation. By
            empowering producers and simplifying the buying process, we aim to
            strengthen local economies.
          </p>

          <div className="mx-auto w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] h-[200px] sm:h-[220px] md:h-[260px] overflow-hidden rounded-[180px_0_180px_0] shadow-md order-1 md:order-2">
            <img
              src="/images/farmer2.jpg"
              alt="Community"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* SECTION 3 */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="mx-auto w-full max-w-[420px] sm:max-w-[480px] md:max-w-[520px] h-[200px] sm:h-[220px] md:h-[260px] overflow-hidden rounded-[0_180px_0_180px] shadow-md">
            <img
              src="/images/farmer4.jpg"
              alt="Harvest"
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-black sm:text-sm md:text-lg text-center md:text-left">
            At MarketRoots, we’re not just connecting products—we’re building
            opportunities, fostering sustainability, and planting the seeds for a
            stronger future.
          </p>
        </div>
      </div>

      {/* TAGLINE */}
      <div className="bg-green-100 py-4 text-center">
        <p className="font-[Merriweather] font-semibold text-sm text-black">
          Stronger Roots, Better Markets!
        </p>
      </div>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white py-10">
        <div className="mx-auto max-w-[1100px] px-5 sm:px-6 grid gap-8 text-sm md:grid-cols-4 text-center md:text-left">
          <div>
            <h3 className="font-[Merriweather] font-bold mb-2">MarketRoots</h3>
            <p className="text-xs opacity-80">
              Empowering farmers and connecting communities through technology.
            </p>
          </div>

          <div>
            <h4 className="font-[Merriweather] font-semibold mb-2">Site Map</h4>
            <ul className="space-y-1 text-xs">
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-[Merriweather] font-semibold mb-2">Legal</h4>
            <ul className="space-y-1 text-xs">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          <div>
            <h4 className="font-[Merriweather] font-semibold mb-2">Support</h4>
            <ul className="space-y-1 text-xs">
              <li>Help Center</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>

        <p className="text-center text-xs opacity-60 mt-8">
          © 2026 MarketRoots. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
