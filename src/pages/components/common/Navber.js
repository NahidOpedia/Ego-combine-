import React, { useState } from "react";
import "../../../style/nav.css";
import Logo from "../../../assets/Logo/ego-logo.png";
import MyVerticallyCenteredModal from "./MyVerticallyCenteredModal";

const Navber = () => {
  const [modalShow, setModalShow] = useState(false);

  return (
    // <div className="nav-conatainer">
    //   <nav className="navbar navbar-expand-lg">
    //     <div className="container-fluid">
    //       <a className="navbar-brand" href="#">
    //         <img src={Logo} alt="" srcSet="" />
    //       </a>
    //       <button
    //         className="navbar-toggler button-toggle"
    //         type="button"
    //         data-bs-toggle="collapse"
    //         data-bs-target="#navbarSupportedContent"
    //         aria-controls="navbarSupportedContent"
    //         aria-expanded="false"
    //         aria-label="Toggle navigation"
    //       >
    //           <i className="fa-solid fa-bars-sort"></i>
    //       </button>

    //       <div
    //         className="collapse navbar-collapse nav-item d-flex d-md-flex d-sm-block align-items-center justify-content-between"
    //         id="navbarSupportedContent"
    //       >
    //         <ul className="navbar-nav mb-2 mb-lg-0">
    //           <li className="nav-item">
    //             <a
    //               className="nav-link active"
    //               aria-current="page"
    //               href="#tokenomics"
    //             >
    //               Tokenomics
    //             </a>
    //           </li>
    //           <li className="nav-item">
                // <a className="nav-link" href="#roadmap">
                //   Roadmap
                // </a>
    //           </li>

    //           <li className="nav-item">
    //             <a
    //               className="nav-link"
    //               href="https://www.dropbox.com/s/z24vbc91pvylnbw/ego-white-paper.pdf?dl=0"
    //               target="_blank"
    //             >
    //               Whitepaper
    //             </a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" onClick={() => setModalShow(true)}>
    //               DAPP
    //             </a>

    //             <MyVerticallyCenteredModal
    //               show={modalShow}
    //               onHide={() => setModalShow(false)}
    //             />
    //           </li>
    //         </ul>

    //         <a
    //           className="buy-btn me-2"
    //           type="submit"
    //           href="https://pancakeswap.finance/swap"
    //           target="blank"
    //         >
    //           Buy EGO
    //         </a>
    //       </div>
    //     </div>
    //   </nav>
    // </div>


    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> <img className="logo" src={Logo} alt="" srcSet="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <i className="fa-solid fa-bars-staggered text-white"></i>
		    </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                  className="nav-link active"
                  aria-current="page"
                  href="#tokenomics"
                >
                  Tokenomics
                </a>
            </li>
            <li className="nav-item">
               <a className="nav-link" href="#roadmap">
                  Roadmap
                </a>
            </li>
            <li className="nav-item">
              <a
                  className="nav-link"
                  href="https://www.dropbox.com/s/z24vbc91pvylnbw/ego-white-paper.pdf?dl=0"
                  target="_blank"
                >
                  Whitepaper
                </a>
            </li>
            
            <li className="nav-item">
              <a className="nav-link" onClick={() => setModalShow(true)}>
             DAPP
               </a>

             <MyVerticallyCenteredModal
                show={modalShow}
                 onHide={() => setModalShow(false)}
            />
            </li>
          </ul>
            <div className="d-flex justify-content-center ">
              <a
              className="buy-btn me-2"
              type="submit"
              href="https://pancakeswap.finance/swap"
              target="blank"
            >
              Buy EGO
            </a>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navber;
