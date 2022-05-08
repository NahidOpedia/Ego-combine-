import React,{useEffect} from 'react';
import './Specialities.css';

// /import images 

import AOS from 'aos';
import 'aos/dist/aos.css';

import SpicalFQA from '../../common/SpicalFQA';
const Specialities = () => {

        useEffect(() => {
    
    AOS.init({duration:3000});

}, [])

    return (
        <div>
            <div className="special-container" data-aos="fade-up">
                <h1 className='special-title'>Our Specialities</h1>
                <h2 className='special-subtitle'>HOW WE OPERATE</h2>
                    
                <div className="fqa-special-container">
                    <SpicalFQA/>
                </div>

            </div>
        </div>
    );
};

export default Specialities;