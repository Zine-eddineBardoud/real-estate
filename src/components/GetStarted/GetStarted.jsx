import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
    return (
        <section className='g-wrapper'>
            <div className="g-container paddings innedWidth ">
                <div className="flexColCenter inner-container">
                    <span className='primaryText'>Get Started With Homyz</span>
                    <span className='secondaryText'>
                        Subscrib and find super attractive price quotes from us.
                        <br />
                        Find your residence soon.
                    </span>
                    <button className="button">
                        <a href="mailto:bardoudz379@gmail.com">Get Started</a>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default GetStarted
