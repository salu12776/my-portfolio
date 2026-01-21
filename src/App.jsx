import React, { useState } from 'react';
import myPic from './assets/profile.png';

function App() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Message Sent.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-bg text-white min-h-screen font-sans">
      
      <nav className="fixed top-0 left-0 w-full p-6 bg-bg flex justify-between items-center z-50 shadow-lg">
        <h1 className="text-2xl font-bold tracking-wider text-main cursor-pointer">Portfolio.</h1>

        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {['Home', 'About', 'Portfolio', 'Contact'].map((item) => (
            <li key={item} className="hover:text-main transition hover:shadow-[0_0_10px_#0ef] cursor-pointer">
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden text-3xl cursor-pointer text-main" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? '✕' : '☰'}
        </div>
      </nav>

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

      <section id="about" className="bg-secondBg py-20 px-10 flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/3 flex justify-center">
           <div className="w-64 h-64 rounded-full overflow-hidden border-2 border-main shadow-[0_0_1rem_#0ef]">
             <img src={myPic} alt="About" className="w-full h-full object-cover" />
           </div>
        </div>
        <div className="md:w-2/3">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-main">Me</span></h2>
          <h3 className="text-2xl font-bold mb-4">CS Student & <span className="text-main">Web Developer</span></h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I am a final year Computer Science student with a passion for building modern web applications. My expertise includes React.js, Tailwind CSS, and Artificial Intelligence (Deep Learning). I love solving complex problems and creating user-friendly digital experiences.
          </p>
          <button className="px-6 py-2 bg-main text-bg rounded-full font-bold shadow-[0_0_10px_#0ef] hover:shadow-none transition transform hover:scale-105">
            Read More
          </button>
        </div>
      </section>

      <section id="portfolio" className="bg-bg py-20 px-10 text-center">
        <h2 className="text-4xl font-bold mb-12">Latest <span className="text-main">Project</span></h2>
        
        <div className="flex justify-center container mx-auto">
          <div className="bg-secondBg p-6 rounded-2xl hover:border-main border-2 border-transparent transition shadow-lg group max-w-md w-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-main">Personal Portfolio</h3>
              <p className="text-gray-400 text-sm mb-4">
                The website you are looking at! Designed with a Neon Dark theme using Tailwind CSS and React Vite.
              </p>
              <div className="flex justify-center gap-2 mb-4">
                 <span className="bg-bg text-main px-2 py-1 rounded text-xs border border-main">React</span>
                 <span className="bg-bg text-main px-2 py-1 rounded text-xs border border-main">Tailwind</span>
              </div>
            </div>
            
            <a 
              href="https://github.com/salu12776/my-portfolio" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-main text-dark rounded-full font-bold text-sm hover:shadow-[0_0_10px_#0ef] transition"
            >
              View Source Code
            </a>
          </div>
        </div>
      </section>

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