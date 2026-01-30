import { useState, useEffect } from 'react';

function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Your direct source for farm-fresh produce.';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Typing speed in milliseconds

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section
      className="relative w-full flex items-center justify-center bg-cover bg-center py-32 md:py-40"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2000')",
      }}
    >
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <h1 className="font-heading text-[45px] font-bold mb-4">
          MarketRoots
        </h1>
        <p className="font-body text-lg md:text-xl mb-8 text-white/90 min-h-[2rem]">
          {displayedText}
          <span className="animate-pulse">|</span>
        </p>
        <button
          onClick={scrollToNextSection}
          className="bg-secondary hover:bg-secondary/90 text-primary font-body font-semibold px-8 py-3 rounded-md transition-colors duration-200"
        >
          Get Started
        </button>
      </div>
    </section>
  );
}

export default Hero;
