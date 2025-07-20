import React from "react";

const Projects = () => {
  return (
    <>
      <div className="py-4">
        <h2 className="text-xl font-bold" id="education-section">
          Publications
        </h2>
        <div className="" role="feed" aria-labelledby="work-experience">
          <div>
            <div className="rounded-lg py-2">
              {/* Work Experience item */}
              <div className="flex flex-col space-y-1.5">
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="inline-flex items-center justify-center gap-x-1 font-mono leading-none">
                    <a
                      className="hover:underline"
                      href="https://ieeexplore.ieee.org/document/8975630"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="ieee xplore"
                    >
                      Robust Control of Hand Prostheses from Surface EMG Signal
                      for Transradial Amputees
                    </a>
                  </h3>
                  <div
                    className="text-sm tabular-nums"
                    aria-label="Employment period: 2023 to Present"
                  >
                    2019
                  </div>
                </div>
                <h3 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
                  Supervisor:
                  <a
                    href="https://www.researchgate.net/profile/Mdabdul-Awal"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Md. Abdul Awal
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
