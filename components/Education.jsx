import React from "react";

const Education = () => {
  return (
    <>
      <div className="py-4">
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold" id="education-section">
            Education
          </h2>
          <div
            className="space-y-4"
            role="feed"
            aria-labelledby="education-section"
          >
            <article role="article">
              <div className="rounded-lg bg-card text-card-foreground">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      Khulna University
                    </h3>
                    <div
                      className="text-sm tabular-nums"
                      aria-label="Period: 2017-2019"
                    >
                      2017-2019
                    </div>
                  </div>
                </div>
                <div
                  className="text-pretty font-mono text-sm mt-2 text-foreground/80 print:text-[12px]"
                  aria-labelledby="education-National-University"
                >
                  Masters of Science in Electronics and Communications
                  Engineering
                  <p>CGPA: CGPA 3.94/4.00</p>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="rounded-lg bg-card text-card-foreground">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      Khulna University
                    </h3>
                    <div
                      className="text-sm tabular-nums"
                      aria-label="Period: 2012 - 2016"
                    >
                      2012 - 2016
                    </div>
                  </div>
                </div>
                <div
                  className="text-pretty font-mono text-sm mt-2 text-foreground/80 print:text-[12px]"
                  aria-labelledby="education-National-University"
                >
                  Batchelor of Science in Electronics and Communications
                  Engineering
                  <p>CGPA: CGPA 3.08/4.00</p>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="rounded-lg bg-card text-card-foreground">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      Govt. Majeed Memorial City College, Khulna
                    </h3>
                    <div
                      className="text-sm tabular-nums"
                      aria-label="Period: 2012 - 2016"
                    >
                      2012 - 2016
                    </div>
                  </div>
                </div>
                <div
                  className="text-pretty font-mono text-sm mt-2 text-foreground/80 print:text-[12px]"
                  aria-labelledby="education-National-University"
                >
                  Higher Secondary Certificate(H.S.C) Certificate, Science
                  <p>GPA: 5/5</p>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="rounded-lg bg-card text-card-foreground">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      Govt. Coronation Girls High School ,Khulna
                    </h3>
                    <div
                      className="text-sm tabular-nums"
                      aria-label="Period: 2012 - 2016"
                    >
                      2000 - 2008
                    </div>
                  </div>
                </div>
                <div
                  className="text-pretty font-mono text-sm mt-2 text-foreground/80 print:text-[12px]"
                  aria-labelledby="education-National-University"
                >
                  Secondary School Certificate(S.S.C), Science
                  <p>GPA: 5/5</p>
                </div>
              </div>
            </article>
            <article role="article">
              <div className="rounded-lg bg-card text-card-foreground">
                <div className="flex flex-col space-y-1.5">
                  <div className="flex items-center justify-between gap-x-2 text-base">
                    <h3 className="font-semibold leading-none">
                      SOS Hermann Gmeiner School, Khulna
                    </h3>
                    <div
                      className="text-sm tabular-nums"
                      aria-label="Period: 2012 - 2016"
                    >
                      1995 - 2000
                    </div>
                  </div>
                </div>
                <div
                  className="text-pretty font-mono text-sm mt-2 text-foreground/80 print:text-[12px]"
                  aria-labelledby="education-National-University"
                >
                  Elementary
                  <p>Graduate</p>
                </div>
              </div>
            </article>
          </div>
        </section>
      </div>
    </>
  );
};

export default Education;
