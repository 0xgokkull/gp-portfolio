import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="text-gray-100 shadow-lg rounded-lg p-6 max-w-4xl mx-auto">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p className="text-justify text-xl md:text-2xl">
            Hi Everyone, I am{" "}
            <span className="text-white font-bold text-2xl md:text-3xl">
              Gokul Priyan S
            </span>{" "}
            from{" "}
            <span className="text-purple-300 font-bold text-2xl md:text-3xl">
              Chennai, India.
            </span>
            <br />
            I am a Blockchain Full Stack Developer with a passion for creating
            innovative and scalable applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-3 text-lg md:text-xl text-gray-200">
            <li className="flex items-center space-x-2">
              <ImPointRight className="text-purple-600" />
              <span className="text-white font-semibold">
                Participating in Hackathons
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <ImPointRight className="text-purple-600" />
              <span className="text-white font-semibold">
                Mentoring and Teaching
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <ImPointRight className="text-purple-600" />
              <span className="text-white font-semibold">
                Exploring Blockchain Technology
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <ImPointRight className="text-purple-600" />
              <span className="text-white font-semibold">
                Involving in sports activities
              </span>
            </li>
          </ul>

          <p className="text-purple-400 font-semibold text-xl md:text-4xl mt-4">
            "Live and Let Live !"
          </p>
          <footer className="blockquote-footer text-gray-400 text-base md:text-sm mt-4 lg:ml-72 ml-44">
            ~ Gokul
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
