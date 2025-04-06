import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
// import './cardstyle.css'
import Store from "../assets/Store";

const colors = ["#4f46e5","#10B981", "#ed8936",'red']; 
const colors1 = [
  {
      cardname:1,
      title: "CryptoGlobe", 
      heading: "Your Gateway to Global Crypto & Travel",
      description: "CryptoGlobe is a dynamic cryptocurrency tracking platform providing real-time price updates, a crypto legality map, and trip planning for crypto-friendly destinations worldwide.",
      linkgithub: "https://github.com/tahanaqvi14/cryptotracker",
      colorname: "#10B981"
      

  },
  {
      cardname:2,
      title: "Movie Explorer",
      heading: "Your Ultimate Movie Database",
      description: "A sleek and interactive movie database that lets users explore movies, genres, and ratings in real-time. It integrates TMDb API for fetching movie details dynamically. Movie discovery made easy.",
      linkgithub: "https://github.com/tahanaqvi14/Movie-Explorer",
      colorname: "#4f46e5"
  },
  {
      cardname:3,
      title: "WeatherWise",
      heading: "Your Personal Weather Companion",
      description: "WeatherWise is an intuitive weather app that provides real-time weather updates. It fetches temperature, humidity, and wind speed data using the OpenWeather API to keep users informed anytime.",
      linkgithub: "https://github.com/tahanaqvi14/weather-wise",
      colorname:"#9c3a6c"
  },
  {
      cardname:4,
      title: "ShopEase", 
      heading: "Shop Smart, Shop Easy!", 
      description: "ShopEase is a Python shopping app built with Tkinter, designed for effortless shopping. Users can browse, add to cart, and manage purchases. Simple, smart, and built for everyday shopping needs.",
      linkgithub: "https://github.com/tahanaqvi14/Shopping-App",
      colorname: "#6348a1"
  }
];

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const CardContainer = styled.div`
  animation: ${({ fade }) => (fade === "out" ? fadeOut : fadeIn)} 0.5s ease-in-out;
`;

const Card = () => {
    const { setcard } = Store();
    const [progress, setProgress] = useState(0);
    const [progress1, setProgress1] = useState(0);
    const [colorindex, setcolorindex] = useState(0);
    const [fade, setFade] = useState("in");
    let [colorlit,setcolorlit]=useState("#4f46e5");

    function inc() {
      setFade("out");
      setcolorindex((prevIndex) => (prevIndex + 1) );
    }
    function dec() {
      setcolorindex((prevIndex) => (prevIndex - 1) );
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    setFade("out");
                    setTimeout(() => {
                        setcolorindex((prevIndex) => (prevIndex + 1) % colors.length); // Ensure colorindex stays within bounds
                        setProgress(0);
                        setProgress1(0); // Reset both progress bars
                        setFade("in");
                    }, 500);
                    return 0;
                }
                return prev + 1;
            });
            setProgress1((prev) => (prev >= 20 ? prev : prev + 1));
        }, 100); // Same timing for smooth updates

        return () => clearInterval(interval);
    }, [colorindex]);
    useEffect(()=>{
      setcolorlit(colors1[colorindex].colorname)
      setcard(colors1[colorindex].cardname)
    }, [colorindex]);

    return (
        <CardContainer fade={fade} className="bg-black text-white flex items-center justify-start p-8">

        {/* <div className="bg-black text-white flex items-center justify-start p-8"> */}
            <div className="text-left">
                <h1 className="text-4xl font-bold ">
                  {colors1[colorindex]?.title || "Default Title"}
                </h1>
                
                {/* <div style={{ width: `${progress1}%`}} className="border-b-2 border-indigo-600 w-16 my-4 "></div> */}
                <ProgressContainer1>
                    <ProgressBar1 style={{ width: `${progress1}%`, backgroundColor: colors1[colorindex].colorname }} />
                </ProgressContainer1>


                <p className="text-gray-400 mb-6">{colors1[colorindex].description}</p>
                <StyledWrapper color={colorlit} className="flex space-x-4 mb-6">
                    {/* <a className="btn" href={`${colors1[colorindex].linkgithub}`}>View Code</a> */}
                    <a className="btn"href={`${colors1[colorindex].linkgithub}`} target="_blank" rel="noopener noreferrer">View Code</a>
                    <a className="btn1" href={`${colors1[colorindex].linkgithub}`} target="_blank" rel="noopener noreferrer">Live Demo</a>
                </StyledWrapper>

                {/* Progress Bar */}
                <ProgressContainer>
                    <ProgressBar style={{ width: `${progress}%`, backgroundColor: colors1[colorindex].colorname }} />
                </ProgressContainer>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between w-full mt-5">
                    {/* <button className="text-gray-400 hover:text-white transition" disabled={colorindex==1} onClick={dec}>
                        <i  ></i> {'<'} Prev
                    </button> */}
                    <div className="flex space-x-2">
                    {[...Array(4)].map((_, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor: colorindex === index ? colorlit : 'gray',
                        }}
                      ></div>
                    ))}

                    </div>
                    {/* <button className="text-gray-400 hover:text-white transition" disabled={colorindex==4} onClick={inc}>
                        Next {'>'} <i className="fas fa-chevron-right"></i>
                    </button> */}
                </div>
            </div>
        </CardContainer>
    );
};

const StyledWrapper = styled.div`
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 16px;
    font-weight: 700;
    color: ${(props) => props.color}; /* Add semicolon here */
    border: 1px solid ${(props) => props.color}; /* Add semicolon here */
    border-radius: 0.25rem;
    cursor: pointer;
    position: relative;
    background-color: transparent;
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
  }
  .btn::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.color}; 
    transform: translateX(-100%);
    transition: all .3s;
    z-index: -1;
  }
  .btn:hover {
    color: white;
  }
  .btn:hover::before {
    transform: translateX(0);
  }
  .btn1 {
    display: inline-block;
    padding: 0.5rem 1rem;
    font-size: 16px;
    font-weight: 700;
    color: black;
    border: 1px solid ${(props) => props.color}; 
    border-radius: 0.25rem;
    cursor: pointer;
    position: relative;
    background-color: ${(props) => props.color}; 
    text-decoration: none;
    overflow: hidden;
    z-index: 1;
    font-family: inherit;
  }
  .btn1::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    transform: translateX(-100%);
    transition: all .3s;
    z-index: -1;
  }
  .btn1:hover {
    color: ${(props) => props.color}; 
  }
  .btn1:hover::before {
    transform: translateX(0);
  }
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 5px;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
`;

const ProgressBar = styled.div`
  height: 100%;
  transition: width 0.1s linear;
`;

const ProgressContainer1 = styled.div`
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  height: 3px;
  background-color: black;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressBar1 = styled.div`
  height: 100%;
  transition: width 0.1s linear;
`;

export default Card;
