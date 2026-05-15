import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center">
      <div className="container mx-auto px-6 sm:px-8 md:px-12 text-center">

        <p className="text-base sm:text-lg mb-2">
          Hello there, I am
        </p>

        <h1 className="font-bold mb-4 
                       text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          Seth Linn Khant
        </h1>

        <p className="mx-auto 
                      max-w-sm sm:max-w-xl md:max-w-2xl 
                      text-base sm:text-lg leading-relaxed">
          I’m a software engineer focused on building scalable, accessible,
          and human-centered digital products, with growing experience.
        </p>

      </div>
    </section>
  );
};

export default HeroSection;