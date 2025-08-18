
import React from "react";
import Card from "../cards/card";

const Projects = [
    // Example project data
    {
        title: "Gooba",
        description: "A frontend framework written in Python, inspired by React, aimed at beginners who want to build web UIs with Python.",
        url: "https://github.com/SethLK/GooBa",
    },
];

export default function Works() {
    return (
        <main className="container mx-auto " id="work">
            <section className="my-8">
                <h1 className="text-3xl font-bold mb-6 pl-4">I’ve Built</h1>
                <p className="mb-6 pl-4">Here are some of the projects I’ve worked on:</p>
                <div className="l flex justify-center items-center">
                        {/* <div className="m-2 grid h-56 grid-cols-4 content-start gap-2 "> */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 w-full max-w-7xl">
                          {Projects.map((project, index) => (
                            <Card key={index} title={project.title} description={project.description} url={project.url} />
                        ))}
                        </div>
                      </div>
            </section>
        </main>
    );
}
