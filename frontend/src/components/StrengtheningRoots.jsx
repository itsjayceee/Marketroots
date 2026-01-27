function StrengtheningRoots() {
  return (
    <section className="w-full bg-[#E8E8E8] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="font-heading text-[45px] font-bold text-center text-gray-900 mb-12">
          Strengthening Roots,
          <br />
          Securing the Future
        </h2>

        {/* Content with Image and Stats */}
        <div className="relative max-w-4xl mx-auto px-4 md:px-8">
          {/* Main Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1400"
              alt="Farmers in field"
              className="w-full h-auto rounded-[24px] shadow-lg"
            />
          </div>

          {/* Stat Box 1 - Bottom Left (100%) with curve */}
          <div className="absolute bottom-8 left-0 md:bottom-12 md:left-4 bg-[#E5E5DC] rounded-[35px] shadow-xl p-6 md:p-7 max-w-[240px] md:max-w-[260px]">
            <div className="text-gray-900 font-bold text-4xl md:text-5xl mb-2">100%</div>
            <p className="font-body text-[11px] md:text-xs text-gray-900 leading-relaxed">
              of our products are sourced locally, strengthening our communities and significantly reducing food waste.
            </p>
          </div>

          {/* Stat Box 2 - Top Right (300+) with curve */}
          <div className="absolute top-8 right-0 md:top-12 md:right-4 bg-[#E5E5DC] rounded-[35px] shadow-xl p-6 md:p-7 max-w-[240px] md:max-w-[260px]">
            <div className="text-gray-900 font-bold text-4xl md:text-5xl mb-2">300+</div>
            <p className="font-body text-[11px] md:text-xs text-gray-900 leading-relaxed">
              active users are building a sustainable market that benefits both producers and consumers, paving the way for a more resilient food system.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StrengtheningRoots;
