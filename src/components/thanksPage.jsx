import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/logo.png'
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";


function ThankYouPage() {
    return (
        <main className="main thankyou-page">
            <div className="main-wrapper">
                <div className="main-inner">
                    <div className="logo">
                        <div className="logo-icon">
                            <img src={Logo} alt="logo" />
                        </div>
                        <div className="logo-text">
                            Thank you for taking the time to submit this information to us.
                        </div>
                    </div>
                    <div className="mb-5 back-home">
                        <Link to="/">Back to Home</Link>
                    </div>
                </div>
                <ul className="links">
                    <li>
                        <p>First Pacific Group, Inc.</p>
                    </li>
                    <li>
                        <p><CiLocationOn size={18} />675 Gilman St Palo Alto, CA 94301-2528</p>
                    </li>
                    <li>
                        <IoCallOutline size={18} /><a href="tel:(415) 409-6200">(415) 409-6200</a>
                    </li>
                </ul>
            </div>
        </main >
    );
}

export default ThankYouPage;