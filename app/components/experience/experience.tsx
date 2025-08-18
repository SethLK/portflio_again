import React from "react";

const experiences = [
  {
    company: "New Way Myanmar",
    role: "Backend Developer",
    location: "Myanmar/Burma (Remote)",
    date: "August 2024 – November 2024",
    bullets: [
      "Accomplished a secure user authentication, author admin panel, and view tracking system using Laravel.",
      "Integrated Laravel backend with Vue.js + Inertia for a dynamic, responsive, and maintainable frontend.",
      "Improved MySQL query performance and data structures, reducing processing time for straight-through operations by 30%.",
      "Enhanced SEO, accessibility, and multilingual support (local language + currency), improving load speed and discoverability.",
      "Coordinated with a remote team via GitHub, Telegram, and Discord to streamline workflows and meet deadlines.",
    ],
  },
  {
    company: "Minority Affairs Institute (MAI) Myanmar",
    role: "Backend Developer",
    location: "Myanmar/Burma (Remote)",
    date: "November 2023 – January 2024",
    bullets: [
      "Built a CMS (Content Management System) application with a team of two people focusing on blogs.",
      "Accomplished a secure admin panel, view and blogs tracking system using Laravel.",
      "Coordinated with frontend developer via GitHub, and Discord to smooth workflows and meet deadlines.",
    ],
  },
  {
    company: "iTEE Global",
    role: "Content Manager",
    location: "Myanmar/Burma (Remote)",
    date: "2022 – 2023",
    bullets: [
      "Assisted an LMS application with a team of 3–4 members in managing courses on the Moodle platform.",
      "Translated educational materials and course modules between English ↔ Myanmar to ensure accessibility for learners which helped learners effectively by 60%.",
      "Helped review, update, and organize e-learning content for accuracy and consistency across the platform.",
      "Supported instructors and learners with navigation, enrollment, and access issues.",
    ],
  },
];

export default function Experiences() {
  return (
    <main className="container mx-auto p-4" id="experiences">
      <section id="experience" className="my-8">
        <h1 className="text-3xl font-bold mb-6">Where I've Worked</h1>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 pl-4" style={{ borderColor: "var(--accent)" }}>
              <h2 className="text-xl font-semibold">{exp.role}</h2>
              <p className="text-gray-700">
                {exp.company} · <span className="italic">{exp.location}</span>
              </p>
              <p className="text-sm text-gray-500">{exp.date}</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {exp.bullets.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
