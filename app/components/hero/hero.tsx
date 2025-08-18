import React from 'react';

{/* <main className="container mx-auto p-4">
        <section id="about" className="my-8">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
        </section>
      </main> */}

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="container mx-auto p-4">
                <p className=' p-3 pl-0 text-lg'>Hello there, my name is </p>
                <h1 className="text-6xl font-bold mb-4">Seth Linn Khant</h1>
                <h1 className="text-6xl font-bold mb-6">I build things</h1>
                <div className="max-w-3xl text-lg leading-relaxed space-y-4">

                    I’m a software engineer focused on building scalable, accessible,
                    and human-centered digital products, with growing experience.

                </div>

            </div>
        </section>
    );
};

export default HeroSection;