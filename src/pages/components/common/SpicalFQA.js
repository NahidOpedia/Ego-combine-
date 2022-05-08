import React from 'react';

import risk from '../../../assets/special-icon/risk2.png';
import vote from '../../../assets/special-icon/vote 2.png';
import Group from '../../../assets/special-icon/Group.png';
import '../../../style/SpicalFQA.css'
const SpicalFQA = () => {
    return (
        <div className="ac-container">

            <div className="costom-accordion row" id="accordionExample">

            <div className="accordion-item accordion-item-costom-1 col-12 col-md-12 col-sm-12 col-xs mb-4">
                <h2 className="" id="headingOne">
                <button className="d-flex justify-content-center align-items-center p-5 risk-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <img src={risk} alt="" className='risk-img'/> <h1 className="text-white ms-3 ac-title">Managed Risk</h1>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body text-white ac-text">
                   $EGO aims to promote a stress-free trading experience while ensuring that investments remain unaltered while trading is closed.
                   <ul>
                       <li>The Developer team conducts thorough research and analysis prior to their weekly investments. Once a list of viable and trusted passive income projects is produced, a team vote is initiated for future passive income investments.</li>
                       <li>To mitigate sell pressure, there are limits set on wallets, buys, as well as a cool down period between transactions. Additionally, staking rewards are distributed in BUSD, a Binance stable coin, instead of $EGO tokens. With this system in place, holders can claim their rewards without affecting the value of $EGO.</li>
                       <li>No minimum amount is required to begin staking your $EGO tokens and earning rewards.</li>
                   </ul>
                </div>
                </div>
            </div>



<br/>



            <div className="accordion-item accordion-item-costom-1 col-12 col-md-12 col-sm-12 col-xs mb-4">
                <h2 className="" id="headingTwo">
                <button className="d-flex justify-content-center align-items-center p-5 risk-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <img src={vote} alt="" className='risk-img'/> <h1 className="text-white ms-3 ac-title">Education</h1>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body text-white ac-text">
                    A common occurrence that we notice within the crypto space is the lack of information in regards to passive income opportunities. The $EGO team conducts extensive research and provides factual data to show possible earnings from passive income projects on various blockchain networks. Although we do not provide financial advice, we do share the information we find and discuss our investing strategies. Every Wednesday, our CEO hosts an educational Twitter Space in a podcast format with the Community Lead from Polar Nodes. Join the $EGO community to discover passive income opportunities in the crypto space
                </div>
                </div>
            </div>






            <div className="accordion-item accordion-item-costom-1 col-12 col-md-12 col-sm-12 col-xs">
                <h2 id="headingThree">
                <button className="d-flex justify-content-center align-items-center p-5 risk-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <img src={Group} alt="" className='risk-img'/> <h1 className="text-white ms-3 ac-title">Transparency</h1>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body text-white ac-text">
                    Building trust in the cryptocurrency space requires transparency and truth. Every Sunday, join us for our weekly AMA where we go over the financial reports for the week prior and discuss our upcoming investments. Holders have the opportunity to participate in bi-weekly node giveaways and learn about the projects $EGO is invested in. All transactions can be verified via the multi-sig wallet addresses located in our GitBook.
                </div>
                </div>
            </div>
            </div>

        </div>
    );
};

export default SpicalFQA;