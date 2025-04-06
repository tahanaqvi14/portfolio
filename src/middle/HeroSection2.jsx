import { useEffect, useRef } from "react";
import Typed from "typed.js"; // Using Typed.js directly

export default function HeroSection2() {
  const typedElement = useRef(null); // Reference for the Typed element

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: [
        "Software Engineer",
        "Full Stack Developer",
        "Web Developer",
        // "I write clean, efficient code.",
      ],
      typeSpeed: 70,
      backSpeed: 20,
      backDelay: 1500,
      loop: true,
    });

    return () => typed.destroy(); // Cleanup on component unmount
  }, []);

  return (
    <section className=" text-white  flex items-center">
      <div className="">
        <p className="text-3xl font-bold text-gray-500">
          <span ref={typedElement} /> {/* Attach the ref here */}
        </p>
      </div>
    </section>
  );
}
