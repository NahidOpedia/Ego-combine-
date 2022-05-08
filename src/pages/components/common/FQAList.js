import React from 'react';
import '../../../style/FQAList.css';
const FQAList = () => {
    return (
        <div className='row'>
            <div id="accordionExample" className='col-12'>
                <div className="accordion-item-costom">
                    <h2 className="accordion-header-costom d-flex justify-content-between" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Is Bitcoin useful for illegal activities?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body accordion-body-custom">
                        Bitcoin is money, and money has always been used both for legal and illegal purposes. Cash, credit cards and current banking systems widely surpass Bitcoin.
                    </div>
                    </div>
                </div>







                <div className="accordion-item-costom">
                    <h2 className="accordion-header d-flex justify-content-between" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Can Bitcoin be regulated?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body accordion-body-custom">
                        Bitcoin is money, and money has always been used both for legal and illegal purposes. Cash, credit cards and current banking systems widely surpass Bitcoin.
                    </div>
                    </div>
                </div>          





                <div className="accordion-item-costom">
                    <h2 className="accordion-header d-flex justify-content-between" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            What about Bitcoin and taxes?
                        </button>
                        {/* <i type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"className="fa-solid fa-chevron-down text-center text-white"></i> */}
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body accordion-body-custom">
                        Bitcoin is money, and money has always been used both for legal and illegal purposes. Cash, credit cards and current banking systems widely surpass Bitcoin.
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FQAList;