function WhatWeOffer() {
  const offerings = [
    {
      id: 1,
      title: 'Agriculture Product',
      icon: 'tractor',
      bgImage: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=800',
    },
    {
      id: 2,
      title: 'Fresh Vegetables',
      icon: 'vegetable',
      bgImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800',
    },
    {
      id: 3,
      title: 'Fresh Fruits',
      icon: 'fruit',
      bgImage: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=800',
    },
  ];

  const renderIcon = (iconType) => {
    const iconClass = "w-16 h-16 text-white";

    switch (iconType) {
      case 'tractor':
        return (
          <svg className={iconClass} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            {/* Truck body */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h10v8H3z"/>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 8h4l3 3v3h-3"/>
            {/* Wheels */}
            <circle cx="7" cy="17" r="2" strokeWidth="2"/>
            <circle cx="17" cy="17" r="2" strokeWidth="2"/>
            {/* Connecting line */}
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 17h6"/>
          </svg>
        );
      case 'vegetable':
        return (
          <svg className={iconClass} fill="white" viewBox="0 0 24 24">
            {/* Simplified Carrot */}
            <path d="M15 2c-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4 0 .3.1.6.2.9-.3-.1-.6-.2-.9-.2-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4 0 .3.1.6.2.9-.3-.1-.6-.2-.9-.2-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4v.6L5 12c-.8.8-1 2-1 3.5s.5 3 1.5 4c1 1 2.5 1.5 4 1.5s3-.5 4-1.5S15 17 15 15.5s-.2-2.7-1-3.5l-2.6-2.4v-.6c0-.3.1-.6.2-.9.3.1.6.2.9.2.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4 0-.3-.1-.6-.2-.9.3.1.6.2.9.2.5 0 1-.2 1.4-.6.4-.4.6-.9.6-1.4s-.2-1-.6-1.4c-.4-.4-.9-.6-1.4-.6z"/>
          </svg>
        );
      case 'fruit':
        return (
          <svg className={iconClass} fill="white" viewBox="0 0 24 24">
            {/* Simplified Apple */}
            <path d="M12 2c-.5 0-1 .2-1.4.6-.2.2-.3.4-.4.6-.8-.5-1.7-.7-2.6-.5-1.1.2-2 .9-2.6 1.8-.6.9-.8 2-.6 3.1.2 1.1.9 2 1.8 2.6.3.2.6.3.9.4-1.5 1.2-2.5 3-2.5 5 0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5c0-2-1-3.8-2.5-5 .3-.1.6-.2.9-.4.9-.6 1.6-1.5 1.8-2.6.2-1.1 0-2.2-.6-3.1-.6-.9-1.5-1.6-2.6-1.8-.9-.2-1.8 0-2.6.5-.1-.2-.2-.4-.4-.6C13 2.2 12.5 2 12 2z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="w-full bg-[#C4DDC4] pt-0 pb-20 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        {/* White curved container with negative margin to overlap hero */}
        <div className="bg-white rounded-t-[60px] rounded-b-[60px] py-16 md:py-20 px-6 md:px-12 shadow-xl -mt-20 relative z-10">
          <h2 className="font-heading text-[45px] font-bold text-center text-gray-900 mb-10">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {offerings.map((item) => (
              <div
                key={item.id}
                className="relative h-72 md:h-80 rounded-3xl overflow-hidden shadow-lg group"
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.bgImage}')` }}
                ></div>

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/50"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6">
                  {/* Icon container */}
                  <div className="bg-secondary rounded-2xl p-4 mb-4 shadow-md flex items-center justify-center">
                    {renderIcon(item.icon)}
                  </div>

                  {/* Title */}
                  <div className="bg-white rounded-xl px-5 py-2.5 shadow-md">
                    <h3 className="font-body font-semibold text-gray-900 text-center text-sm whitespace-nowrap">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatWeOffer;
