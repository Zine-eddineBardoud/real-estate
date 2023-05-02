import React from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
    return (
        <section className='c-wrapper'>
            <div className="c-container paddings innerWdith flexCenter">
                {/* Left Side */}
                <div className="c-left flexColStart">
                    <span className='orangeText'>Our Contacts</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>
                        We always ready to help by providing the best services for you.
                        We beleive a good blace to live can make your life better.
                    </span>
                    <div className="flexColStart contactModes">
                        {/* First Row */}
                        <div className="flexStart row">
                            {/* First Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Call</span>
                                        <span className='secondaryText'>012 234 456 543</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>
                            {/* Second Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Chat</span>
                                        <span className='secondaryText'>email@test.com</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Caht Now
                                </div>
                            </div>
                        </div>
                        {/* Second Row */}
                        <div className="flexStart row">
                            {/* First Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Video Call</span>
                                        <span className='secondaryText'>012 234 456 543</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                Video Call Now
                                </div>
                            </div>
                            {/* Second Mode */}
                            <div className="flexColCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart detail">
                                        <span className='primaryText'>Message</span>
                                        <span className='secondaryText'>email@test.com</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Message Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="c-right flexEnd">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
