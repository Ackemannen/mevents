import { useEffect, useState } from "react";
import { Zap, Volume2, Lightbulb } from "lucide-react";

import bgImage1 from "../assets/IMG_1.webp";
import bgImage2 from "../assets/IMG_2.webp";
import bgImage3 from "../assets/IMG_3.webp";
import bgImage4 from "../assets/IMG_4.webp";
import bgImage5 from "../assets/IMG_5.jpeg";
import bgImage6 from "../assets/IMG_6.webp";
import bgImage7 from "../assets/IMG_7.webp";

const images = [
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4,
  bgImage5,
  bgImage6,
  bgImage7,
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out mt-15 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-linear-to-br from-gray-400 from-0% via-gray-600 via-50% to-gray-900 to-100%  opacity-70"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-red-400 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute hidden md:block top-40 right-20 w-32 h-32 bg-yellow-300 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-red-500 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-32 text-center mt-5">
        <div className="max-w-4xl mx-auto">
          <h1 className="!text-3xl md:!text-7xl font-bold text-white mb-6 leading-tight">
            Välkommen till oss på
            <span className="!text-4xl md:!text-8xl block bg-gradient-to-r from-red-500 to-red-800 bg-clip-text text-transparent">
              MEVENTS
            </span>
          </h1>

          <p className="text-base md:text-2xl font-semibold text-white mb-10 md:mb-25 leading-relaxed text-shadow-lg">
            Vi fixar högkvalitativa ljud- och ljusanläggningar för konferenser,
            konserter, bröllop och företagsevent.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-white/20 backdrop-blur-sm rounded-lg border border-white/40 shadow-2xl">
              <Lightbulb className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Ljusdesign
              </h3>
              <p className="text-white text-center">
                Skapar den perfekta atmosfären
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/20 backdrop-blur-sm rounded-lg border border-white/40 shadow-2xl">
              <Volume2 className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Ljudsystem
              </h3>
              <p className="text-white text-center">
                Kristallklar ljudkvalitet
              </p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/20 backdrop-blur-sm rounded-lg border border-white/40 shadow-2xl">
              <Zap className="h-12 w-12 text-red-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Ljuseffekter
              </h3>
              <p className="text-white text-center">
                Snygga och moderna effekter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
