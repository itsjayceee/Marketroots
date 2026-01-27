function AboutUs() {
  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left side - Green card with text and button */}
          <div className="relative mb-16 md:mb-0">
            <div className="bg-secondary rounded-[50px] p-8 md:p-12 pt-10 md:pt-12 pb-32 md:pb-36 relative overflow-visible">
              <div>
                <h2 className="font-heading text-[45px] font-bold text-gray-900 mb-8">
                  About Us
                </h2>
                <p className="font-body text-gray-900 leading-relaxed text-base">
                  At MarketRoots, we believe agriculture works best when everyone gets a fair deal. Our digital marketplace simplifies business transactions and eliminates middlemen—so farmers and buyers can connect with trust and transparency.
                </p>
              </div>

              {/* Learn More Button with arrow - positioned at bottom left */}
              <div className="absolute -bottom-6 left-6 md:left-8 flex items-center">
                <button className="bg-primary hover:bg-primary/90 text-white font-body font-bold px-10 md:px-12 py-4 md:py-5 rounded-full transition-colors duration-200 shadow-xl z-10 relative">
                  <span className="text-base md:text-lg">Learn More</span>
                </button>

                {/* Arrow circle */}
                <div className="ml-[-24px] bg-secondary rounded-full w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-xl z-20 border-4 border-white">
                  <svg
                    className="w-10 h-10 md:w-12 md:h-12 text-gray-900"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={3}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="mt-0">
            <div className="rounded-[50px] overflow-hidden h-full">
              <img
                src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200"
                alt="Team of farmers in greenhouse"
                className="w-full h-full object-cover min-h-[400px] md:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
