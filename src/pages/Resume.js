import React from "react";
import resumePDF from "../assets/gp-resume.pdf"; // Import the PDF file

const Resume = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-neutral-900 rounded-2xl shadow-2xl p-6 border border-purple-900">
        <h2 className="text-4xl font-bold mb-6 text-purple-500 text-center">
          Resume
        </h2>

        {/* For mobile screens, show the iframe and the download button */}
        <div className="block md:hidden text-center mb-6">
          <iframe
            src="https://lottie.host/embed/2a070129-db6c-4cc5-8f98-3e8a733ea0b7/6Z1wdFnuEb.lottie"
            className="w-full h-48 rounded-lg mb-4"
            title="Lottie Animation"
          ></iframe>
          <a
            href={resumePDF}
            download
            className="bg-purple-500 text-white px-6 py-2 rounded-md text-xl"
          >
            Download Resume
          </a>
        </div>

        {/* For larger screens, show the PDF */}
        <div className="h-[80vh] overflow-auto border border-purple-700 rounded-md hidden md:block">
          <object
            data={resumePDF}
            type="application/pdf"
            className="w-full h-full"
          >
            <p>
              Your browser does not support PDFs. Please{" "}
              <a href={resumePDF} download>
                download the resume
              </a>
              .
            </p>
          </object>
        </div>
      </div>
    </div>
  );
};

export default Resume;
