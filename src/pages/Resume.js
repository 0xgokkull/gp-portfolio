import React from "react";

const Resume = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 animate-fadeIn">
      <div className="max-w-3xl bg-neutral-900 rounded-2xl shadow-2xl p-8 border border-purple-900 animate-slideIn">
        <h2 className="text-4xl font-bold mb-6 text-purple-500 text-center">
          Resume
        </h2>
        <p className="text-gray-300 text-center">
          Download my resume to explore my skills, experience, and achievements
          in detail.
        </p>
        <div className="mt-6 flex justify-center">
          <a
            href="/path-to-your-resume.pdf"
            download
            className="bg-purple-700 hover:bg-purple-600 text-white px-6 py-3 rounded-md text-lg transition-colors"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
