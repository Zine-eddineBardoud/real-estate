import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className='f-wrapper'>
            <div className="f-container flexCenter paddings innerWdith">
                {/* Left Side */}
                <div className="f-left flexColStart">
                    <img src="./logo2.png" alt="logo" width={120} />
                    <span className="secondaryText">
                        Our vision is to make all people 
                        <br /> 
                        the best place to live for them.
                    </span>
                </div>
                {/* Right Side */}
                <div className="f-right flexColStart">
                    <span className='primaryText'>Information</span>
                    <span className='secondaryText'>145 New York, FL 5467, USA</span>
                    <div className="f-menu flexCenter">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
