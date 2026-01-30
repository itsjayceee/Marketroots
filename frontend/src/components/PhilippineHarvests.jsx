function PhilippineHarvests() {
  const products = [
    {
      id: 1,
      name: 'Fresh Fruits',
      description: 'The heart of every Filipino meal, locally harvested fresh and ready for your table.',
      image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=600',
    },
    {
      id: 2,
      name: 'Fresh Vegetables',
      description: 'The heart of every Filipino meal, locally harvested fresh and ready for your table.',
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=600',
    },
    {
      id: 3,
      name: 'Fresh Produce',
      description: 'The heart of every Filipino meal, locally harvested fresh and ready for your table.',
      image: 'https://images.unsplash.com/photo-1603569283847-aa295f0d016a?q=80&w=600',
    },
    {
      id: 4,
      name: 'Farm Fresh',
      description: 'The heart of every Filipino meal, locally harvested fresh and ready for your table.',
      image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?q=80&w=600',
    },
  ];

  return (
    <section className="w-full bg-primary py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="font-heading text-[45px] font-bold text-white mb-4">
          Philippine Harvests,
        </h2>
        <h3 className="font-heading text-[45px] font-bold text-white mb-12">
          Proudly Grown
        </h3>

        {/* Products Grid - 8 cards in aligned grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div key={product.id} className="border-2 border-white/30 rounded-lg p-6 flex flex-col">
              <div className="bg-white rounded-lg p-4 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded"
                />
              </div>
              <h4 className="font-body font-bold text-white mb-2">{product.name}</h4>
              <p className="font-body text-sm text-white/90">{product.description}</p>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="bg-secondary hover:bg-secondary/90 text-primary font-body font-semibold px-8 py-3 rounded-full transition-colors duration-200">
            Explore Our Harvest
          </button>
        </div>
      </div>
    </section>
  );
}

export default PhilippineHarvests;
