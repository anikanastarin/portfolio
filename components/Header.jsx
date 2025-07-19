import Link from "next/link";
import React from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaResearchgate,
} from "react-icons/fa";
import { SiIeee } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import profileImage from "../public/anika-nastarin.png";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between mb-4">
        <div>
          <div className="text-base font-medium mb-2">
            <h1 className="md:text-3xl text-xl font-semibold">
              Anika Nastarin
            </h1>
            <h2 className="font-mono text-sm">
              Assistant Teacher at Govt. Primary School
            </h2>
          </div>
          <p>
            <a
              className="inline-flex gap-x-1.5 test-sm align-baseline leading-none hover:underline"
              href="https://www.google.com/maps/place/khulna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Location: Khulna, Bangladesh"
            >
              <FaMapMarkerAlt /> Khulna, Bangladesh
            </a>
          </p>
          <div
            className="flex gap-x-2 pt-1 text-sm print:hidden"
            role="list"
            aria-label="Contact-links"
          >
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="mailto:victoriaeceku110922@gmail.com"
              rel="noreferrer"
              target="_blank"
              aria-label="Email"
            >
              <MdEmail />
            </Link>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://www.researchgate.net/scientific-contributions/Anika-Nastarin-2169947021"
              rel="noreferrer"
              target="_blank"
              aria-label="researchgate"
            >
              <FaResearchgate />
            </Link>
            <div className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300">
              <Link
                href="https://ieeexplore.ieee.org/author/37087406956"
                rel="noreferrer"
                target="_blank"
                aria-label="ieeexplore"
              >
                <SiIeee />
              </Link>
            </div>

            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://www.linkedin.com/in/anika-nastareen"
              rel="noreferrer"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input size-8 hover:scale-110 ease-in duration-300"
              href="https://github.com/anikanastarin"
              rel="noreferrer"
              target="_blank"
              aria-label="Github"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
        <div
          className="relative flex shrink-0 overflow-hidden rounded-xl size-28 border-2 border-gray-300"
          aria-hidden="true"
        >
          <Image
            src={profileImage}
            alt="Mushfiqur Rahman's Profile Picture"
            className="aspect-square h-full w-full dark:bg-lime-600 bg-amber-700"
          />
        </div>
      </header>
    </>
  );
};

export default Header;
