import React, { useEffect, useState } from "react";
import "./Breakdown.css";
import AOS from "aos";
import "aos/dist/aos.css";

import Treding1 from "../../../../assets/cripto-walltet-icon/Ellipse 014.png";
import Treding2 from "../../../../assets/cripto-walltet-icon/Ellipse 015.png";
import Treding3 from "../../../../assets/cripto-walltet-icon/Ellipse 016.png";
import Treding4 from "../../../../assets/cripto-walltet-icon/Ellipse 017.png";
import Treding5 from "../../../../assets/cripto-walltet-icon/Ellipse 018.png";
import Chartgraph from "../../common/Chartgraph";
// import Clock from '../../common/Clock';

const Breakdown = () => {
  
    const [trading, setTrading] = useState();

    const [SecState, setSecState] = useState(null);
    const [SecStateLocal, setSecStateLocal] = useState(null);

    useEffect(() => {
      setInterval(() => {
        let date = new Date();
        setSecState(date.toLocaleString('en-US', {
            timeZone: 'America/New_York',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }));
        setSecStateLocal(date.toLocaleString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
          }));

        const Hours = new Date(date.toLocaleString('en-US',{
          timeZone: 'America/New_York',
          hour12: false,
          hour: '2-digit'
        }));

        if ( Hours >= 9 && Hours <= 16) {
          setTrading(true)
        }
        else{
          setTrading(false)
        }

      }, 1000);
    }, []);
 

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="Breakdown-bg">
      <div className="graph-container">
        <div className="Breakdown-container" data-aos="fade-up">
          <div className="title">
            <div
              id="tokenomics"
              className="token-btn d-flex justify-content-center"
            >
              <button>Tokenomics</button>
            </div>
          </div>
        </div>

        <div className="treding-bg">
          <div className="treding-container">
            <div className="treding-icon row" data-aos="fade-up">
              <div className="icon-box col-md col-sm-12">
                {/* <img src={Treding1} alt="" srcSet="" className="treading-img" /> */}
                <div className="img text-center">
                  <img src={Treding1} alt="" srcSet="" />
                </div>
                <div className="treding-text">
                  <h3>Supply</h3>
                  <p>1,000,000,000</p>
                </div>
              </div>

              <div className="icon-box col-md col-sm-12">
                <div className="img text-center">
                  <img src={Treding2} alt="" srcSet="" />
                </div>
                <div className="treding-text">
                  <h3>Max Wallet</h3>
                  <p>25,000,000</p>
                </div>
              </div>
              <div className="icon-box col-md col-sm-12">
                <div className="img text-center">
                  <img src={Treding3} alt="" srcSet="" />
                </div>
                <div className="treding-text">
                  <h3>Max Buy</h3>
                  <p>10,000,000</p>
                </div>
              </div>
              <div className="icon-box col-md col-sm-12">
                <div className="img text-center">
                  <img src={Treding4} alt="" srcSet="" />
                </div>
                <div className="treding-text">
                  <h3>Max Sell</h3>
                  <p>5,000,000</p>
                </div>
              </div>
              <div className="icon-box col-md col-sm-12">
                <div className="img text-center">
                  <img src={Treding5} alt="" srcSet="" />
                </div>
                <div className="treding-text">
                  <h3>Cool Down</h3>
                  <p>60 Seconds</p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <Chartgraph/>
            </div>

            <div className="row  time-container-2">
              <h6 className="let-text">Let your Ego rest with you</h6>
                      <div className="row time-container">
          <div className="text-white text-center d-flex justify-content-center time-box-container">
            {/* <div> */}
              {/* <div
                className={`time-box ${trading ? "green-text" : "red-text"}`}
              >
                {HourState}
              </div>
              <p>Hour</p>
            </div>
            <div>
              <div
                className={`time-box ${trading ? "green-text" : "red-text"}`}
              >
                {MinsState}
              </div>
              <p>Minutes</p>
            </div> */}
            <div className="d-flex justify-content-between">
              <div className="time-box-all">
                <h5 style={{textAlign:'left'}}>EST TIME</h5>
                <div
                className={`time-box ${trading ? "green-text" : "red-text"}`}
              >
                {SecState}
              </div>
              </div>

              <div className="mr-5">
                <h5 style={{textAlign:'right'}}>LOCAL TIME</h5>
                <div
                className={` time-box ${trading ? "green-text" : "red-text"} `}
                >
                {SecStateLocal}
              </div>
              </div>
            </div>
          </div>
        </div>
              {/* <div className="text-white text-center d-flex justify-content-between time-box-container">
                <div>
                  <div
                    className={`time-box ${
                      trading ? "green-text" : "red-text"
                    }`}
                  >
                    {HourState}
                  </div>
                  <p>Hour</p>
                </div>
                <div>
                  <div
                    className={`time-box ${
                      trading ? "green-text" : "red-text"
                    }`}
                  >
                    {MinsState}
                  </div>
                  <p>Minutes</p>
                </div>
                <div>
                  <div
                    className={`time-box ${
                      trading ? "green-text" : "red-text"
                    }`}
                  >
                    {" "}
                    {SecState}
                  </div>
                  <p>Seconds</p>
                </div>
              </div> */}
            </div>

            <div
              className="treding-hour-container-time-line"
              data-aos="fade-up"
            >
              <h1 className="time-shedule-title">Staking Rewards</h1>

              <div className="time-shedule-container">
                <h2 className="time-1">7 DAYS at 2.5%</h2>
                <h2 className="time-2">30 DAYS at 15%</h2>
                <h2 className="time-3">90 DAYS at 30% every 30 days</h2>
              </div>
              {/* <div className="treding-hour-container" data-aos="fade-up">
                <h2>Trading Hours</h2>
                <p className="treding-hour-container-text">
                  The EGO Token will operate solely during weekdays on New York
                  Stock
                  <br />
                  Exchange Hours. You can now sleep easy at night knowing that
                  you won’t wake up to a crashed portfolio!
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breakdown;
