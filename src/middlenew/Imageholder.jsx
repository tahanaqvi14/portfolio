import React from "react";
import "./style.css";
import Store from "../assets/Store";

let color = [
  {
    technologies: ["React", "Mongodb ", "APIs", "Routing"],
    number: 2,
    heading: "Your Ultimate Movie Database",
    main: "#1E1F49",
    smallboxbg: "#1a1a3d",
    smallboxtext: "#4A4AFF",
    smallboxbordercolor: "#4A4AFF",
  },
  {
    technologies: ["JS", "Html", "Tailwind", "APIs"],
    number: 3,
    heading: "Your Personal Weather Companion",
    main: "#48172F",
    text: "#EB4898",
    smallboxbg: "#511935",
    smallboxtext: "#ff4af0",
    smallboxbordercolor: "#ff4af0",
  },
  {
    technologies: ["", "Bootstrap", "JS", ""],
    number: 1,
    heading: "Your Gateway to Global Crypto & Travel",
    main: "#053A29",
    text: "#10B981",
    smallboxbg: "#063F2C",
    smallboxtext: "#0EA573",
    smallboxbordercolor: "#0EA573",
  },
  {
    technologies: ["Python", "Tkinter", "GUI", "Backend"],
    number: 4,
    heading: "Shop Smart, Shop Easy!",
    main: "#2A1C49",
    text: "#8B5CF6",
    smallboxbg: "#2F1F53",
    smallboxtext: "#6946BA",
    smallboxbordercolor: "#6946BA",
  },
];

const Imageholder = () => {
  // Move the Store() call inside the component
  const { card } = Store();

  // Filter the color array for the desired number
  let ahasn = color.find((p) => p.number === card) || color[0]; // Fallback to the first item if no match is found

  return (
    <div
      className="max-w-full rounded-2xl h-96 flex flex-col justify-between p-8"
      style={{
        background: `linear-gradient(to bottom, ${ahasn.main}, #131320)`,
      }}
    >
      <div className="text-left">
        <div className="flex items-center space-x-4">
          {/* Glowing Number */}
          <span
            className={`text-6xl lg:text-7xl font-bold glow-effect${ahasn.number}`}
            style={{ color: ahasn.text }}
          >
            {ahasn.number}
          </span>
          <div className="border-l-[2px] border-l-gray-700 p-2 ">
            <p className="text-sm lg:text-lg text-gray-500">Project</p>
            <h1 className="text-2xl lg:text-3xl font-bold">{ahasn.heading}</h1>
          </div>
        </div>
      </div>
      <div className="element11">
        {ahasn.technologies.map((tech, index) => (
          <div
            key={index}
            className="max-[390px]:text-sm py-1 px-[1px] min-[472px]:py-3 min-[472px]:px-3  min-[472px]:text-xl rounded xl:text-2xl"
            style={{
              backgroundColor: ahasn.smallboxbg,
              color: ahasn.smallboxtext,
              border: `2px solid ${ahasn.smallboxbordercolor}`,
            }}
          >
            {tech || "Tech"}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Imageholder;

