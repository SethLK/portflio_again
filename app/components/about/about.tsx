"use client";

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// const Frame = styled.div`
//   position: relative;
//   width: 300px;
//   height: 300px;
//   border: 2px solid var(--accent);
//   border-radius: 8px;
//   overflow: hidden;
//   background-color: var(--background);
//   color: #62ECD0;

//   /* Create the offset border effect */
//   &::before {
//     content: '';
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   background-color: rgba(24, 61, 61, 0.7); /* var(--secondary) with 70% opacity */
//   z-index: 1;
//     transition: opacity 0.3s ease;

//     &:hover {
//       opacity: 0; /* Change opacity on hover */
//   }
// `;

const Frame = styled.div`

  position: relative;
  width: 350px;
  height: 350px;
  border: 2px solid var(--accent);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
  background-color: var(--background);


    &:hover {
    bottom: 20px;
    right: 20px;
}
`;

const About: React.FC = () => {
    const Skill_Set = [
        "HTML",
        "CSS",
        "Tailwind",
        "JavaScript",
        "React / Next",
        "Vue",
        "WordPress",
        "PHP",
        "Laravel",
        "Node.js",
        "Express",
        "SQL",
        "MySQL",
        "MariaDB",
        "MongoDB",
    ];

    return (
        <main className="container mx-auto p-4">
            <section id="about" className="my-8">
                <div className="flex flex-col md:flex-row gap-5">
                    <div className="text-container flex-1">
                        <h1 className="text-3xl font-bold mb-4">About Me</h1>
                        <div className="max-w-3xl text-lg leading-relaxed space-y-4">
                            <p>
                                Hello! I’m Seth, a curious developer who first got into programming because I desperately
                                wanted to build an app. At first I tried app builders, but when I couldn’t afford them,
                                I decided to build one from scratch. My first little GUI project—a simple clock—was the
                                moment I knew this was what I wanted to do.
                            </p>
                            <p>
                                Since then, I’ve built a variety of projects I’m proud of, especially service-based ones
                                like an LMS for a client. Along the way, solving problems has sharpened my skills, from
                                tricky backend business logic to those stubborn CSS challenges you can’t just throw at AI.
                            </p>
                            <p>
                                These days, my focus is on full-stack development, with a special love for Laravel,
                                Node.js, and React. I enjoy combining backend logic with polished frontend experiences.
                                I’m also exploring AI and machine learning, since I love staying at the edge of what’s next.
                            </p>
                        </div>
                        <ul className="list-disc pl-5 mt-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-2">
                            {Skill_Set.map((skill, index) => (
                                <li key={index} className="mb-1 text-lg">{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="image-container flex-1 flex justify-center items-center">
                        <Frame>
                            <Image
                                src={"/me.jpg"}
                                alt="My Image"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </Frame>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;