function WhyChooseUs() {
  return (
    <section className="w-full bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=1200"
              alt="Farmers with fresh produce"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="font-heading text-[45px] font-bold text-gray-900 mb-6">
              Why Choose Us
            </h2>
            <p className="font-body text-gray-700 mb-8 leading-relaxed">
              At Marketroots, we cut out the middlemen so you can connect directly with farmers and cooperatives. By going straight to the source, you get the freshest fruits and vegetables at fair prices, while farmers receive the income they deserve without unfair cuts. It's a win-win connection that supports local communities and gives you the assurance of quality straight from the roots.
            </p>

            {/* Stats/Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* 100% Guaranteed Organic */}
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center">
                <div className="text-primary font-bold text-3xl mb-2">100%</div>
                <div className="font-body text-sm text-gray-700 font-semibold">
                  Guaranteed Organic
                </div>
              </div>

              {/* Farm to You */}
              <div className="bg-secondary rounded-lg p-6">
                <h3 className="font-body font-bold text-primary mb-2">Farm to You</h3>
                <p className="font-body text-sm text-primary">
                  Supporting local farmers and serving you food you can trust.
                </p>
              </div>

              {/* Harvested with Care */}
              <div className="bg-primary rounded-lg p-6 col-span-2 md:col-span-1">
                <h3 className="font-body font-bold text-white mb-2">Harvested with Care</h3>
                <p className="font-body text-sm text-white/90">
                  Only safe, fresh, and high-quality produce straight from the farm
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
