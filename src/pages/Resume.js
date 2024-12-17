import React from "react";
import resumePDF from "../assets/gp-resume.pdf"; // Import the PDF file

const Resume = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-neutral-900 rounded-2xl shadow-2xl p-6 border border-purple-900">
        <h2 className="text-4xl font-bold mb-6 text-purple-500 text-center">
          Resume
        </h2>
        <div className="h-[80vh] overflow-auto border border-purple-700 rounded-md">
          <iframe src={resumePDF} title="Resume" className="w-full h-full">
            Your browser does not support PDFs. Please{" "}
            <a href={resumePDF} download>
              download the resume
            </a>
            .
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Resume;
