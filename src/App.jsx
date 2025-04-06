import React, { useEffect } from "react";
import './App.css';
import MatterScene from "./MatterScene";
import Navbar from './Navbar';
import HeroSection from './middle/HeroSection';
import HeroSection2 from './middle/HeroSection2';
import Downbutton from './middle/Downbutton';
import Upbutton from './middle/Upbutton';
import MyProjects from './middlenew/MyProjects';
import Contact from './lastsection/Contact';
import P1 from './newaboutme/P1';
import Store from './assets/Store';
// import React, { useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const { message } = Store();
  useEffect(() => {
    if (message) {
      toast.success('Message sent!', {
        autoClose: 5000, // ✅ disables auto close
      });
    }
  }, [message]);
  
  return (
    
    <div className="relative">

      {/* Top Section only */}
      <div className="relative h-screen overflow-hidden">
        {/* MatterScene ONLY visible in top section */}
        <div className="fixed inset-0 z-0">
          <MatterScene />
        </div>

        {/* Content layered above MatterScene */}
        <div className="relative z-10 pointer-events-none flex flex-col justify-between h-full">
          <div>
            <Navbar className="sticky pointer-events-auto" />
            <div className="space-y-3 px-8">
              <HeroSection />
              <HeroSection2 />
            </div>
          </div>

          {/* Downbutton placed at the bottom */}
          <div className="flex justify-center mb-10 pointer-events-auto">
            <Downbutton />
          </div>
        </div>
      </div>

      {/* Other scrollable content — MatterScene not visible here */}
      <div className="relative z-10 bg-black">

        <div className='flex justify-center'>
          <Upbutton />
        </div>
        <P1 />
        <MyProjects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
