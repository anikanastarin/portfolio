import React from "react";

const Summary = () => {
  return (
    <>
      <div id="about" className="flex min-h-0 flex-col py-4">
        <h2 className="text-xl font-bold">About</h2>
        <div className="text-pretty font-mono text-sm print:text-[12px]">
          <p className="py-2">
            I am currently serving as an Assistant Teacher at a Government
            Primary School in Bangladesh, a role I began in 2023. With a strong
            academic background in Electronics and Communications Engineering, I
            hold both Bachelor’s and Master’s degrees from Khulna University,
            where I developed a deep interest in biomedical signal processing
            and machine learning.
          </p>

          <p className="py-2">
            My research work, titled{" "}
            <span className="font-semibold">
              Robust Control of Hand Prostheses from Surface EMG Signal for
              Transradial Amputees
            </span>{" "}
            was published in 2019. This study explored advanced signal
            processing and classification techniques to enhance the
            functionality of prosthetic hands for amputees. It employed machine
            learning models like SVM, LDA, QLDA, and Decision Trees, optimized
            through Bayesian techniques.
          </p>
          <p className="py-2">
            I am now planning to pursue higher studies abroad through a
            scholarship, aiming to further explore interdisciplinary research
            opportunities and contribute to the development of innovative,
            human-centric technologies in healthcare and education.
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
