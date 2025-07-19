import React from "react";

const WorkExperience = () => {
  return (
    <div className="py-4">
      <h2 className="text-xl font-bold">Work Experience</h2>
      <div className="" role="feed" aria-labelledby="work-experience">
        <div>
          <div className="rounded-lg py-2">
            {/* Work Experience item */}
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center justify-between gap-x-2 text-base">
                <h3 className="inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                  <a
                    className="hover:underline"
                    href="https://www.dpe.gov.bd"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Govt. Primary School"
                  >
                    Govt. Primary School
                  </a>
                </h3>
                <div
                  className="text-sm tabular-nums"
                  aria-label="Employment period: 2023 to Present"
                >
                  2023 to Present
                </div>
              </div>
              <h4 className="font-mono text-sm font-semibold leading-none print:text-[12px]">
                Assistant Teacher
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
