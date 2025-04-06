import React from "react";
import styled from 'styled-components';


const StyledWrapper = styled.div`
  button {
    width: 13rem;
    position: relative;
    height: 12rem;
    border: 3px ridge #149CEA;
    outline: none;
    background-color: transparent;
    color: white;
    transition: 1s;
    border-radius: 0.3em;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }

  button::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: black;
    transition: 0.5s;
    transform-origin: center;
  }

  button::before {
    content: "";
    transform-origin: center;
    position: absolute;
    top: 80%;
    left: 3%;
    width: 95%;
    height: 40%;
    background-color: black;
    transition: 0.5s;
  }

  button:hover::before, button:hover::after {
    transform: scale(0)
  }

  button:hover {
      box-shadow: 0px 0px 20px 5px #1479EA; 

  }`;

const AboutMe = () => {
  return (
    <section className="flex flex-col md:flex-row items-center gap-8 p-8 max-w-4xl mx-auto">
      <div className="flex-1 text-white">
        <div className="flex items-center gap-4">
        {/* <h2 className="text-lg font-bold text-gray-300">
            <span className="text-green-400">01.</span> Abousadsadasdt Me
        </h2> */}

        <div className="flex-1 border-t border-gray-500 opacity-50" />
        </div>

        <p className="text-gray-300 mt-2">
        Hey! I am Taha, a{" "}
            <span className="text-green-300 font-medium">Computer Systems Engineering{" "}</span>
            student at NED University who loves building web applications from the ground up. What started as simple frontend experiments has grown into full-stack projects where I get to work on both the visual interface and the backend logic. Currently, I'm diving deeper into backend development - 
          <span className="text-blue-400 font-medium">designing APIs,</span>{" "}
          <span className="text-yellow-400 font-medium">working with databases,</span>{" "}
            and making sure everything runs smoothly behind the scenes.
        </p>
        <p className="text-gray-400 mt-3">
        At the same time, I'm still creating interactive UIs with React. Some of my recent projects include a real-time crypto tracker and a movie database app, and I'm always working on new{" "}
        <span className="text-orange-400 font-medium">full-stack ideas</span>. If you're into building web apps too, I'd love to connect and exchange knowledge!{" "}
        </p>
      </div>

      {/* Right Side - Profile Image */}
      <div className="relative">
        <StyledWrapper>
          <button className="w-48 h-48">
            Hover me
          </button>
        </StyledWrapper>    

        {/* <img
          src="/path-to-your-image.png"
          alt="Brittany"
          className="w-48 h-48 object-cover rounded-lg shadow-lg border-2 border-green-400"
        />     */}
      </div>
    </section>    
  );
};  

export default AboutMe;


