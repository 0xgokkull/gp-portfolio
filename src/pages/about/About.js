import React from "react";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import gp from "../../assets/gp.jpeg";
import Toolstack from "./Toolstack";
import Github from "./Github";

function About() {
  return (
    <div className="py-10 lg:ml-20 lg:mr-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-center pb-12">
          {/* About Card */}
          <div className="md:w-7/12 pt-8 pb-12">
            <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Know Who <span className="text-purple-500">I'M</span>
            </h1>
            <Aboutcard />
          </div>

          {/* Image Section */}
          <div className="md:w-5/12 flex items-center justify-center pb-12">
            <img
              src={gp}
              alt="about"
              className="rounded-xl shadow-lg lg:w-60 lg:h-96 md:w-full md:h-auto"
            />
          </div>
        </div>

        {/* Skillset Section */}
        <div>
          <h1 className="text-4xl font-semibold text-white mb-2 mt-12">
            Professional <span className="text-purple-500">Skillset</span>
          </h1>
          <Techstack />
        </div>

        {/* Toolstack Section */}
        <div>
          <h1 className="text-4xl font-semibold text-white mb-2 mt-12">
            Tools<span className="text-purple-500"> I use</span>
          </h1>
          <Toolstack />
        </div>
        <div>
          <h1 className="text-4xl font-semibold text-white mb-2 mt-12">
            Github<span className="text-purple-500"> Status</span>
          </h1>
          <Github />
        </div>
      </div>
    </div>
  );
}

export default About;
