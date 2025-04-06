import React, { useState } from "react";
import styled from "styled-components";
import "./navbar.css";

const StyledWrapper = styled.div`
  button {
   border: none;
   position: relative;
   width: 200px;
   height: 73px;
   z-index: 2;
   -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
   mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='868' width='2500' viewBox='0 0 726 252.17'%3E%3Cpath d='M483.92 0S481.38 24.71 466 40.11c-11.74 11.74-24.09 12.66-40.26 15.07-9.42 1.41-29.7 3.77-34.81-.79-2.37-2.11-3-21-3.22-27.62-.21-6.92-1.36-16.52-2.82-18-.75 3.06-2.49 11.53-3.09 13.61S378.49 34.3 378 36a85.13 85.13 0 0 0-30.09 0c-.46-1.67-3.17-11.48-3.77-13.56s-2.34-10.55-3.09-13.61c-1.45 1.45-2.61 11.05-2.82 18-.21 6.67-.84 25.51-3.22 27.62-5.11 4.56-25.38 2.2-34.8.79-16.16-2.47-28.51-3.39-40.21-15.13C244.57 24.71 242 0 242 0H0s69.52 22.74 97.52 68.59c16.56 27.11 14.14 58.49 9.92 74.73C170 140 221.46 140 273 158.57c69.23 24.93 83.2 76.19 90 93.6 6.77-17.41 20.75-68.67 90-93.6 51.54-18.56 103-18.59 165.56-15.25-4.21-16.24-6.63-47.62 9.93-74.73C656.43 22.74 726 0 726 0z'/%3E%3C/svg%3E") no-repeat 50% 50%;
   -webkit-mask-size: 100%;
   cursor: pointer;
   background-color: transparent;
   transform: translateY(8px)
  }
  @keyframes glow {
    0% { box-shadow: 0px 0px 20px 10px rgba(147, 112, 219, 0.8); }
    50% { box-shadow: 0px 0px 40px 20px rgba(147, 112, 219, 1); }
    100% { box-shadow: 0px 0px 20px 10px rgba(147, 112, 219, 0.8); }
  }

    


  button:after {
   content: '';
   position: absolute;
   left: 0;
   right: 0;
   bottom: 0;
   box-shadow: 0px 0 0 0 white;
   transition: all 2s ease;
  }

  button:hover:after {

  animation: glow 1s infinite alternate;
  animation-delay: 300ms; /* 300ms delay before glow starts */




  }

  button span {
   position: absolute;
   width: 100%;
   font-size: 15px;
   font-weight: 100;
   left: 50%;
   top: 39%;
   letter-spacing: 3px;
   text-align: center;
   transform: translate(-50%,-50%);
   color: white;
   transition: all 2s ease;
  }

  button:hover span {
   color: black;
  }

  button:before {
   content: '';
   position: absolute;
   width: 0;
   height: 100%;
   background-color: white;
   left: 50%;
   top: 50%;
   transform: translate(-50%, -50%);
   transition: all 1s ease;
  }

  button:hover:before {
   width: 100%;
  }`;

const StyledWrapper1 = styled.div`
  .burger {
    position: relative;
    width: 30px;
    height: 20px;
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: white;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 5px;
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-50deg);
    top: 24px;
    left: 5px;
  }
`;

const Navbar = () => {
  const handleScrollDown = (index) => {
    window.scrollBy({
      top: window.innerHeight * index, // Scrolls by one full viewport height
      left: 0,
      behavior: 'smooth', // Smooth scroll animation
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between space-x-6 p-4 mx-auto w-screen text-gray-300">
      <StyledWrapper>
        <button>
          <span className="pointer-events-auto">Taha Naqvi</span>
        </button>
      </StyledWrapper>
      <ul className="flex space-x-6 text-sm pointer-events-auto">
        {["About Me", "Projects", "Contact"].map((item, index) => (
          <li key={index} className="flex items-center space-x-1 hover-underline">
            <button href={`#${item.toLowerCase()}`} onClick={() => handleScrollDown(index + 1)}  className="hidden md:block hover:cursor-pointer hover:text-purple-400 transition">
              {item}
            </button>
          </li>
        ))}
        <a
          href="/Resume1.pdf" download="Resume1.pdf"
          className="hidden md:block border border-purple-400 text-purple-400 px-4 py-2 rounded hover:bg-purple-400 hover:text-[#0a192f] transition duration-300 ease-in-out hover:shadow-[0px_0px_20px_5px_rgba(45,212,191,0.8)]"
        >
          Resume
        </a>

        <StyledWrapper1 className="md:hidden ">
          <label className="burger">
            <input
              type="checkbox"
              id="burger"
              onChange={() => setIsOpen(prev => !prev)}
            />
            <span />
            <span />
            <span />
          </label>
          {isOpen && (
            <div className="absolute top-17 right-0  bg-black text-white border border-gray-200 shadow-md rounded-md p-4 z-50">
              <ul className="space-y-4">
                {["About Me", "Projects", "Contact"].map((item, index) => (
                  <li key={index} className="flex items-center space-x-1 hover-underline">
                    <button onClick={() => handleScrollDown(index + 1)}  href={`#${item.toLowerCase()}`} className="hover:cursor-pointer hover:text-purple-400 transition">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </StyledWrapper1>
      </ul>
    </nav>
  );
};

export default Navbar;

