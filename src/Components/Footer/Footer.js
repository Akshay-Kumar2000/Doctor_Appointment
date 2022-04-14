import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <div className="footer">
            <div>
                <div>
                    <div>
                        <p>Services</p>
                    </div>
                    <div>
                        <small>Emergency Care</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Treatment of Personal Diseases</small>
                        <br />
                        <small>Doctor Advice</small>
                        <br />
                        <small>Check Up</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Full Body Health</p>
                    </div>
                    <div>
                        <small>Emergency Care</small>
                        <br />
                        <small>Check Up</small>
                        <br />
                        <small>Treatment of Personal Diseases</small>
                        <br />
                        <small>Doctor's Advice</small>
                        <br />
                        <small>Check Up</small>
                    </div>
                </div>
                <div>
                    <div>
                        <p>Our Address</p>
                    </div>
                    <div>
                        <small>India</small>
                        <div className="brandIcon">
                            <FontAwesomeIcon icon={faFacebookF} />
                            <FontAwesomeIcon icon={faGooglePlusG} />
                            <FontAwesomeIcon icon={faTwitter} />
                        </div>
                        <small>Call Now</small>
                        <p className="callNow">+91 8091774412</p>
                    </div>
                </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "28px" }}>
                <small>Images are taken from the google</small>
            </div>
        </div>
    );
};

export default Footer;