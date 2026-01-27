import React, { useState } from 'react';

function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    let currentErrors = { ...errors };

    if (name === 'phone') {
      if (value && (!/^\d*$/.test(value) || value.length > 11)) {
        return; 
      }
    }

    if (name === 'email') {
      const emailRegex = /\S+@\S+\.\S+/;
      if (value.trim() === '') {
        currentErrors.email = 'Email is required';
      } else if (!emailRegex.test(value)) {
        currentErrors.email = 'Please enter a valid email address';
      } else {
        delete currentErrors.email;
      }
    } else {
      if (value.trim() !== '') {
        delete currentErrors[name];
      }
    }

    setFormData({
      ...formData,
      [name]: value
    });
    
    setErrors(currentErrors);
  };

  const validateForm = () => {
    let newErrors = {};
    let isValid = true;

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First Name is required';
      isValid = false;
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last Name is required';
      isValid = false;
    }

    // Re-check email format on submit
    const emailRegex = /\S+@\S+\.\S+/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required';
      isValid = false;
    } else if (formData.phone.length !== 11) {
      newErrors.phone = 'Phone number must be exactly 11 digits';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Submitted Successfully:', formData);
      alert('Message Sent!');
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      });
      setErrors({});
    } else {
      console.log('Form has errors');
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-[url('/contactpage_bg.png')] bg-cover bg-[position:70%_center] md:bg-center font-[Roboto]">
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      <div className="relative z-10 min-h-screen flex items-start md:items-center py-8 md:py-12">
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 lg:gap-12">

            {/* LEFT SIDE - Info */}
            <div className="block w-full md:w-[40%] lg:w-[35%] text-white text-center md:text-left mb-6 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-bold leading-[1.1] mb-4 md:mb-8 font-[Merriweather]">
                Let’s Stay <br className="hidden md:block" /> Connected
              </h1>

              <p className="max-w-md text-base md:text-lg lg:text-lg xl:text-xl text-white/90 mb-6 md:mb-12 leading-relaxed mx-auto md:mx-0">
                Whether you’re a farmer, a buyer, or simply curious, our team is
                ready to connect with you
              </p>

              <ul className="space-y-7 md:space-y-6 inline-block text-left">
                <li className="flex items-center gap-4 text-sm md:text-base">
                  <span className="text-white w-6 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                  </span>
                  <span>Email: hello@yourplatform.com</span>
                </li>

                <li className="flex items-center gap-4 text-sm md:text-base">
                  <span className="text-white w-6 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Phone: +63 912 345 6789</span>
                </li>

                <li className="flex items-center gap-4 text-sm md:text-base">
                  <span className="text-white w-6 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Address: 123 Agri Lane, Angeles City</span>
                </li>

                <li className="flex items-center gap-4 text-sm md:text-base">
                  <span className="text-white w-6 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span>Hours: Mon–Fri, 9:00 AM – 6:00 PM</span>
                </li>
              </ul>
            </div>

            {/* RIGHT SIDE - FORM CARD */}
            <div className="w-full md:w-[60%] lg:w-[55%] flex justify-center md:justify-end">
              <div className="w-full max-w-[750px] lg:max-w-[600px] xl:max-w-[700px] bg-[#F1F1F1] rounded-[30px] md:rounded-[40px] p-5 md:p-8 lg:p-10 shadow-2xl">
                <h2 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-center text-black mb-1 md:mb-2">
                  Get in Touch With Us
                </h2>
                <p className="text-center text-black/70 italic mb-4 md:mb-8 lg:mb-10 text-sm md:text-base">
                  You can reach us anytime
                </p>

                <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 lg:space-y-5">
                  <div className="flex flex-col lg:flex-row gap-3 md:gap-4">
                    <div className="w-full lg:flex-1">
                      <input 
                        type="text" 
                        name="firstName"
                        placeholder="First Name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 md:py-4 rounded-full border bg-transparent text-black placeholder:text-black/40 outline-none transition-all text-sm md:text-base ${
                          errors.firstName ? 'border-red-500 focus:border-red-600' : 'border-black/20 focus:border-[#2F5233]'
                        }`} 
                      />
                      {errors.firstName && <p className="text-red-500 text-xs ml-4 mt-1">{errors.firstName}</p>}
                    </div>

                    <div className="w-full lg:flex-1">
                      <input 
                        type="text" 
                        name="lastName"
                        placeholder="Last Name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`w-full px-5 py-3 md:py-4 rounded-full border bg-transparent text-black placeholder:text-black/40 outline-none transition-all text-sm md:text-base ${
                          errors.lastName ? 'border-red-500 focus:border-red-600' : 'border-black/20 focus:border-[#2F5233]'
                        }`} 
                      />
                      {errors.lastName && <p className="text-red-500 text-xs ml-4 mt-1">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Juan@gmail.com" 
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 md:py-4 rounded-full border bg-transparent text-black placeholder:text-black/40 outline-none transition-all text-sm md:text-base ${
                        errors.email ? 'border-red-500 focus:border-red-600' : 'border-black/20 focus:border-[#2F5233]'
                      }`} 
                    />
                    {errors.email && <p className="text-red-500 text-xs ml-4 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <input 
                      type="text" 
                      name="phone"
                      placeholder="e.g 0912-345-6789" 
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 md:py-4 rounded-full border bg-transparent text-black placeholder:text-black/40 outline-none transition-all text-sm md:text-base ${
                        errors.phone ? 'border-red-500 focus:border-red-600' : 'border-black/20 focus:border-[#2F5233]'
                      }`} 
                    />
                    {errors.phone && <p className="text-red-500 text-xs ml-4 mt-1">{errors.phone}</p>}
                  </div>

                  <div>
                    <textarea 
                      name="message"
                      placeholder="How can we help?" 
                      rows="4" 
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-5 py-3 md:py-4 rounded-[20px] md:rounded-[25px] border bg-transparent text-black placeholder:text-black/40 outline-none transition-all resize-none text-sm md:text-base ${
                        errors.message ? 'border-red-500 focus:border-red-600' : 'border-black/20 focus:border-[#2F5233]'
                      }`}
                    ></textarea>
                    {errors.message && <p className="text-red-500 text-xs ml-4 mt-1">{errors.message}</p>}
                  </div>

                  <button 
                    type="submit" 
                    className="w-full mt-1 md:mt-4 py-3 md:py-4 rounded-full bg-[#2F5233] hover:bg-[#233d26] text-white font-semibold text-base md:text-lg shadow-lg transition-transform active:scale-95"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPage;
