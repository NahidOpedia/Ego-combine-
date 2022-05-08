import React, { useEffect } from "react";
import "./Pancakeswap.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import Clip from "../../../../assets/icons/clip 16.svg";
import Analysis from "../../../../assets/data-analysis.gif";
import AOS from "aos";
import "aos/dist/aos.css";


const Pancakeswap = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  return (
    <div className="pancakeswap-bg">
      <div className="row swap-display" data-aos="fade-up">
        <div className="swap col-md-6 col-sm-12 mt-3 mx-auto ">
          <h3 className="swap-subtitle">Buy EGO on</h3>
          <h1 className="swap-title">Pancakeswap</h1>
          <div className="swap-text d-flex align-items-center">
            <p className="mt-4 me-4">Contact Us</p>
            <div className="icon-social d-flex justify-content-between">
              <a
                href="https://discord.com/invite/cZhaVGxG"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-discord"></i>
              </a>
              <a
                href="https://twitter.com/Growyourego"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter mx-3"></i>
              </a>
              <a
                href="https://t.me/egosystem"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-solid fa-paper-plane"></i>
              </a>
            </div>
          </div>
          {/* <p className="swap-text">or,</p> */}

          <div className="d-flex align-items-center">
            <CopyToClipboard
              text="0x1DF2C6DF4d4E7F3188487F4515587c5E8b75dbfa"
              onCopy={() => alert("Copied")}
            >
              <img
                style={{
                  cursor: "pointer",
                  height: "20px",
                  display: "inline-block",
                  marginRight: "10px",
                }}
                src={Clip}
                alt=""
                srcSet=""
              />
            </CopyToClipboard>
            <p style={{ margin: 0 }} className="swap-text">
              {" "}
              0x1DF2C6DF4d4E7F3188487F4515587c5E8b75dbfa
            </p>
          </div>
        </div>

        <div className="swap-img swap col-md-6 col-sm-12">
          <img src={Analysis} alt="" srcSet="" />
        </div>
      </div>
    </div>
  );
};

export default Pancakeswap;
