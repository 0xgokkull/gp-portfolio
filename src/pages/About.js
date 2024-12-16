import React from "react";

const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Docker",
    "Kubernetes",
    "GraphQL",
    "AI/ML",
    "Cloud Native",
  ];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-4xl bg-neutral-900 rounded-2xl shadow-2xl p-8 md:p-12 border border-purple-900 animate-slideIn">
        <h2 className="text-4xl font-bold mb-6 text-purple-500 text-center">
          About My Digital Journey
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300 animate-fadeIn">
              A passionate technologist crafting elegant solutions at the
              intersection of design and functionality.
            </p>
            <p className="text-gray-300 animate-fadeIn">
              My mission is to transform complex challenges into intuitive
              digital experiences that inspire and innovate.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4 text-purple-500">
              Tech Arsenal
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-purple-900 text-purple-300 px-3 py-1 rounded-full text-sm transition-all duration-300 hover:bg-purple-800 hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
