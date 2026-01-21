import React, { useState } from 'react';

// --- IMAGE IMPORT ---
// Make sure 'profile.png' exists in 'src/assets'
import myPic from './assets/profile.png'; 

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // --- NEW: MENU STATE ---
  // Ye check kare ga k mobile menu khula hai ya band
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Message Sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-bg text-white min-h-screen font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 left-0 w-full p-6 bg-bg flex justify-between items-center z-50 shadow-lg">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wider text-main cursor-pointer">Portfolio.</h1>

        {/* Desktop Menu (Hidden on Mobile) */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <li key={item} className="hover:text-main transition hover:shadow-[0_0_10px_#0ef] cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        {/* --- NEW: MOBILE MENU BUTTON (Hamburger) --- */}
        <div className="md:hidden text-3xl cursor-pointer text-main" onClick={() => setMenuOpen(!menuOpen)}>
          {/* Agar menu khula hai to 'X' dikhao, warna '☰' dikhao */}
          {menuOpen ? '✕' : '☰'}
        </div>
      </nav>

      {/* --- NEW: MOBILE DROPDOWN MENU --- */}
      {/* Ye sirf tab nazar aaye ga jab menuOpen true hoga */}
      {menuOpen && (
        <div className="fixed top-20 left-0 w-full bg-secondBg z-40 p-6 shadow-lg md:hidden border-b-2 border-main">
          <ul className="flex flex-col space-y-4 text-center text-xl font-medium">
            {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
              <li key={item} className="hover:text-main transition" onClick={() => setMenuOpen(false)}>
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* --- HERO SECTION --- */}
      <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-10 pt-20">
        <div className="md:w-1/2 space-y-4">
          <h3 className="text-3xl font-bold opacity-0 animate-[slideRight_1s_ease_forwards]">Hello, It's Me</h3>
          <h1 className="text-5xl font-extrabold text-white">Muhammad Salman</h1>
          <h3 className="text-3xl font-bold">And I'm a <span className="text-main glow-text">Frontend Developer</span></h3>
          <p className="text-gray-300 mt-4 leading-relaxed max-w-md">
            I specialize in building responsive web applications using ReactJS. I am passionate about creating modern and interactive user interfaces.
          </p>
          <div className="flex space-x-4 mt-6">
            {['FB', 'IG', 'LN', 'GH'].map((icon) => (
              <div key={icon} className="w-10 h-10 border-2 border-main rounded-full flex items-center justify-center text-main font-bold hover:bg-main hover:text-bg hover:glow-box transition cursor-pointer">
                {icon}
              </div>
            ))}
          </div>
          <button className="mt-8 px-8 py-3 bg-main text-bg font-bold rounded-full glow-box hover:shadow-none transition transform hover:scale-105">
            Download CV
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <div className="w-80 h-80 rounded-full border-4 border-main glow-box overflow-hidden relative shadow-[0_0_2rem_#0ef]">
            <img src={myPic} alt="Muhammad Salman" className="w-full h-full object-cover"/>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section id="about" className="bg-secondBg py-20 px-10 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3 flex justify-center">
           <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-main shadow-[0_0_1rem_#0ef]">
             <img src={myPic} alt="About" className="w-full h-full object-cover" />
           </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-main">Me</span></h2>
          <h3 className="text-2xl font-bold mb-4">Frontend Developer</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I am a passionate developer focusing on creating clean, user-friendly, and responsive websites. I have built my own portfolio from scratch using React and Tailwind CSS.
          </p>
          <button className="px-6 py-2 bg-main text-bg rounded-full font-bold shadow-[0_0_10px_#0ef]">Read More</button>
        </div>
      </section>

      {/* --- PORTFOLIO PROJECT --- */}
      <section id="portfolio" className="bg-bg py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-12">Latest <span className="text-main">Project</span></h2>
        <div className="flex justify-center container mx-auto">
          <div className="bg-secondBg p-8 rounded-2xl hover:border-main border-2 border-transparent transition shadow-lg group max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 group-hover:text-main">Personal Portfolio</h3>
            <p className="text-gray-400 text-sm mb-6">
              This is my official portfolio website. I designed and developed it using **React, Vite, and Tailwind CSS**. It features a responsive layout, neon dark theme, and interactive UI components.
            </p>
            <div className="flex justify-center gap-2 mb-6">
                 <span className="bg-bg text-main px-3 py-1 rounded-full text-xs border border-main">React</span>
                 <span className="bg-bg text-main px-3 py-1 rounded-full text-xs border border-main">Tailwind</span>
            </div>
            <button className="px-6 py-2 bg-main text-dark rounded-full font-bold text-sm hover:shadow-[0_0_10px_#0ef] transition">
              View Source Code
            </button>
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="contact" className="py-20 px-10 container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Contact <span className="text-main">Me!</span></h2>
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e)=>setFormData({...formData, name:e.target.value})} className="p-4 bg-secondBg rounded-lg text-white outline-none focus:border-2 focus:border-main" />
          <input type="email" placeholder="Email Address" required className="p-4 bg-secondBg rounded-lg text-white outline-none focus:border-2 focus:border-main" />
          <input type="number" placeholder="Mobile Number" className="p-4 bg-secondBg rounded-lg text-white outline-none focus:border-2 focus:border-main" />
          <input type="text" placeholder="Email Subject" className="p-4 bg-secondBg rounded-lg text-white outline-none focus:border-2 focus:border-main" />
          <textarea rows="6" placeholder="Your Message" required className="md:col-span-2 p-4 bg-secondBg rounded-lg text-white outline-none focus:border-2 focus:border-main"></textarea>
          <button className="md:col-span-2 py-3 bg-main text-bg font-bold rounded-lg glow-box hover:shadow-none transition transform hover:scale-105">Send Message</button>
        </form>
      </section>

      <footer className="bg-secondBg py-6 text-center text-sm">
        <p>Copyright &copy; 2026 by Muhammad Salman | All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;