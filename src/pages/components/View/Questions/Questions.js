import React, { useEffect } from "react";
import FQAList from "../../common/FQAList";
import "./Questions.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Questions = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="fqa-container" data-aos="fade-up">
      <h6 className="fqa-subtitle">Frequently Asked Questions</h6>
      <h1 className="fqa-title">Have Any Questions ?</h1>
      <p className="fqa-text">
        Frequently asked questions (FAQ) or Questions and Answers (Q&A), are
        listed questions and answers, all supposed to be commonly.
      </p>
      <div className="fqa-section">
        <FQAList />
      </div>
    </div>
  );
};

export default Questions;
