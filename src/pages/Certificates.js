import React from "react";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Coursera",
    year: "2023",
  },
  {
    title: "React & Redux Mastery",
    issuer: "Udemy",
    year: "2022",
  },
  {
    title: "Cloud Computing Essentials",
    issuer: "Google Cloud",
    year: "2021",
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-4xl bg-neutral-900 rounded-2xl shadow-2xl p-8 border border-purple-900 animate-slideIn">
        <h2 className="text-4xl font-bold mb-6 text-purple-500 text-center">
          Certificates
        </h2>
        <div className="space-y-4">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-purple-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-purple-300">
                {cert.title}
              </h3>
              <p className="text-gray-400">Issued by: {cert.issuer}</p>
              <p className="text-gray-400">Year: {cert.year}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
