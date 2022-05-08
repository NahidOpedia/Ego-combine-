import React, { useEffect, useState, useRef } from "react";
import "./Roadmap.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Roadmap = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, [toggle]);

  return (
    <div className="road-map-bg" id="roadmap" data-aos="fade-up">
      <div className="road-map">
        <h2>Road map</h2>
        <h1>Our Strategy & Project Plan</h1>
        <div className="d-block-flex d-lg-flex justify-contain-md-between d-sm-block roadmap-res">
          {/* card start here  */}
          <div className="card-1">
            <div className="road-card-1">
              <h1>
                Q<span>1</span>
              </h1>
            </div>

            <div className="road-card-options">
              <ul>
                <li>dApp launch</li>
                <li>CMC listing</li>
                <li>DEX listing</li>
                <li>Yield farming start</li>
                <li>Begin building the EGO Treasury</li>
                <div
                  style={{ marginTop: "14px" }}
                  className="d-flex justify-content-between"
                >
                  <li>
                    Launch staking protocols
                    <ul
                      className={`d-flex mt-1 subToggle${toggle ? "open" : ""}`}
                    >
                      <li>7 day</li>
                      <li className="ms-5">30 day</li>
                      <li className="ms-5">90 day</li>
                    </ul>
                  </li>
                  <i
                    onClick={() => setToggle(!toggle)}
                    style={{ cursor: "pointer" }}
                    className={`fa-solid fa-angle-right ${
                      toggle ? "rotateIcon" : ""
                    }`}
                  ></i>
                </div>
                <div
                  style={{ marginTop: "14px" }}
                  className="d-flex justify-content-between"
                >
                  <li>
                    Mentorship and Investment Library
                    <ul className={`subToggle${toggleTwo ? "open" : ""}`}>
                      <li>FAQ and knowledge base</li>
                    </ul>
                  </li>
                  <i
                    onClick={() => setToggleTwo(!toggleTwo)}
                    style={{ cursor: "pointer" }}
                    className={`fa-solid fa-angle-right ${
                      toggleTwo ? "rotateIcon" : ""
                    }`}
                  ></i>
                </div>
                <li>FAQ and knowledge base</li>
                <li>500 holders</li>
                <li>1000 TG and 1000 discord members</li>
              </ul>
            </div>
          </div>
          <div className="road-2-card">
            <div>
              <div className="road-card-2">
                <h1>
                  Q<span>2</span>
                </h1>
              </div>
              <div className="road-card-options-2">
                <ul>
                  <li className="mt-5">DeFi card service</li>
                  <li>Beta EGO trading system launch</li>
                  <li>Bonding protocols (proposed)</li>
                  <li>Lending and Borrowing Protocols (proposed)</li>
                  <li>750 holders</li>
                  <li>2000 discord members</li>
                </ul>
              </div>
            </div>
            <div className="road-card-3-map">
              <div className="road-card-3">
                <h1>
                  Q<span>3</span>
                </h1>
              </div>
              <div className="road-card-options-3">
                <ul>
                  <div
                    style={{ marginTop: "14px" }}
                    className="d-flex justify-content-between"
                  >
                    <li>
                      Become a bank within the metaverse
                      <ul className={`subToggle${toggle3 ? "open" : ""}`}>
                        <li>What metaverse will we operate in?</li>
                        <li className="fa-solid fa-arrow-right">
                          <span className="fa-costm">
                            {" "}
                            Hold metaverse currency?
                          </span>
                        </li>
                      </ul>
                    </li>
                    <i
                      onClick={() => setToggle3(!toggle3)}
                      style={{ cursor: "pointer" }}
                      className={`fa-solid fa-angle-right ${
                        toggle3 ? "rotateIcon" : ""
                      }`}
                    ></i>
                  </div>
                  <li>Investor EGO trading system launch (proposed)</li>
                  <div
                    style={{ marginTop: "14px" }}
                    className="d-flex justify-content-between"
                  >
                    <li>
                      Wen Freedom Foundation
                      <ul className={`subToggle${toggle4 ? "open" : ""}`}>
                        <li>
                          Gifting a EGO holder with the keys to financial
                          freedom
                        </li>
                        <li className="fa-solid fa-arrow-right">
                          <span className="fa-costm">
                            {" "}
                            Pledge to give to charity?
                          </span>
                        </li>
                        <li className="fa-solid fa-arrow-right">
                          {" "}
                          <span className="fa-costm">
                            {" "}
                            Help others attain financial freedom
                          </span>
                        </li>
                      </ul>
                    </li>
                    <i
                      onClick={() => setToggle4(!toggle4)}
                      style={{ cursor: "pointer" }}
                      className={`fa-solid fa-angle-right ${
                        toggle4 ? "rotateIcon" : ""
                      }`}
                    ></i>
                  </div>
                  <li>Region based trading windows</li>
                  <li>1000 holders</li>
                  <li>5000 discord members</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
