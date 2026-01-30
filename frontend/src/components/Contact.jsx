function Contact() {
  return (
    <>
      {/* Contact Section */}
      <section
        className="relative w-full bg-cover bg-center py-16 md:py-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-primary/70"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left side - Contact Info */}
            <div className="text-white">
              <h2 className="font-heading text-[64px] font-bold mb-4">
                Let's Stay
                <br />
                Connected
              </h2>
              <p className="font-body text-white/90 mb-8 leading-relaxed text-sm">
                Whether you're a farmer, a buyer, or simply curious, our team is ready to connect with you.
              </p>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm">Email: hello@yourplatform.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm">Phone: +63 912 345 6789</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm">Address: 123 Agri Lane, Angeles City, Pampanga</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-body text-sm">Hours: Mon–Fri, 9:00 AM – 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Contact Form */}
            <div className="bg-white/95 backdrop-blur rounded-2xl p-8 shadow-xl">
              <h3 className="font-heading text-xl font-bold text-center text-gray-900 mb-2">
                Get in Touch With Us
              </h3>
              <p className="font-body text-xs text-center text-gray-600 mb-6">
                You can reach us anytime
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 font-body text-sm"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 font-body text-sm"
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 font-body text-sm"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 font-body text-sm"
                />

                <textarea
                  placeholder="How can we help?"
                  rows="4"
                  className="w-full px-4 py-2.5 rounded-lg bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/30 font-body text-sm resize-none"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-body font-semibold py-3 rounded-lg transition-colors duration-200"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stronger Roots Section */}
      <div className="w-full bg-[#C4DDC4] py-6">
        <h2 className="text-center text-gray-900 font-body font-bold text-xl md:text-2xl">
          Stronger Roots, Better Markets!
        </h2>
      </div>
    </>
  );
}

export default Contact;
