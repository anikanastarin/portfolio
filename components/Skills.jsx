import React from "react";

const Skills = () => {
  return (
    <>
      <div className="py-4">
        <h2 className="text-xl font-bold py-2">Skills</h2>
        <div>
          <ul
            className="flex list-none flex-wrap gap-1 p-0"
            aria-label="List of skills"
          >
            <li>
              <div
                className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono"
                aria-label="Skill: Research"
              >
                Research
              </div>
            </li>
            <li>
              <div
                className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono"
                aria-label="Skill: Python"
              >
                Python
              </div>
            </li>
            <li>
              <div
                className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono"
                aria-label="Skill: Auto Cad"
              >
                Auto Cad
              </div>
            </li>
            <li>
              <div
                className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono"
                aria-label="Skill: Micrsoft Office"
              >
                Micrsoft Office
              </div>
            </li>

            <li>
              <div
                className="inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold font-mono"
                aria-label="Skill: Accounting"
              >
                Accounting
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Skills;
