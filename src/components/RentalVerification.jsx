import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/responsive.css';
import '../assets/css/animation.css';

//Reacr Icons 
import { CiLocationOn, CiCalendarDate } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineDriveFileRenameOutline, MdOutlineAccountBalanceWallet } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { MdPayments, MdOutlinePayments, MdOutlineSubtitles } from "react-icons/md";
import { TbTransferOut } from "react-icons/tb";
import { RiShareForward2Line } from "react-icons/ri";
import { GoComment } from "react-icons/go";
import { VscVerified } from "react-icons/vsc";
import { BsCursor } from "react-icons/bs";


function RentalVerification() {

    const [nameofapplicant, setNameofapplicant] = useState('')
    const [propertyaddress, setPropertyaddress] = useState('')
    const [startdateofresidency, setStartDateofresidency] = useState('')
    const [enddateofresidency, setEndDateofresidency] = useState('')
    const [isPays, setIsPaid] = useState('')
    const [howmany, setHowmany] = useState('')
    const [leaseviolations, setLeaseviolations] = useState('')
    const [balanceowed, setBalanceowed] = useState()
    const [balance, setBalance] = useState('')
    const [eviction, setEviction] = useState('')
    const [re_rent, setRe_rent] = useState('')
    const [comments, setComments] = useState('')
    const [VerifiedBy, setVerifedBy] = useState('')
    const [title, setTitle] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [isFormFilled, setIsFormFilled] = useState(false)
    const [isLeaseViolationsFilled, setIsLeaseViolationsFilled] = useState(false)


    const handleSubmit = async (e) => {
        console.log(process.env.YOUR_PUBLIC_KEY);
        e.preventDefault();
        if (currentPage === 1 && isFormFilled) {
            nameofapplicant()
            setIsLeaseViolationsFilled(true);
            setIsFormFilled(true);
            setCurrentPage(currentPage + 1);
        } else if (currentPage === 2
            && nameofapplicant
            && propertyaddress
            && startdateofresidency
            && enddateofresidency
            && isPays
            && isLeaseViolationsFilled
            && balanceowed
            && eviction
            && VerifiedBy
            && title


        ) {

            const data = {
                nameofapplicant: nameofapplicant,
                propertyaddress: propertyaddress,
                startdateofresidency: startdateofresidency,
                enddateofresidency: enddateofresidency,
                isPays: isPays,
                howmany: howmany,
                leaseviolations: leaseviolations,
                balanceowed: balanceowed,
                balance: balance,
                eviction: eviction,
                re_rent: re_rent,
                comments: comments,
                VerifiedBy: VerifiedBy,
                title: title
            }
            console.log(data);

            emailjs.send('service_5s28b5r', 'template_bv6gnef', data, 'oQseoodrPUV7HvKmr')
                .then((result) => {
                    window.location.href = '/thanks';
                }, (error) => {
                    window.location.href = '/'
                })
        }

    };
    const handleInputChange = (e) => {
        setIsPaid(e.target.value);
    };
    const handleHowmany = (e) => {
        setHowmany(e.target.value)
    }
    const handleLeaseviolations = (e) => {
        setLeaseviolations(e.target.value)
        setIsFormFilled(false);
    }
    const handleBalanceowed = (e) => {
        setBalanceowed(e.target.value)
    }
    const handleEvivtion = (e) => {
        setEviction(e.target.value)
    }
    const handleRe_rent = (e) => {
        setRe_rent(e.target.value)
    }

    const nextStep = () => {
        if (currentPage === 1 && nameofapplicant && propertyaddress && startdateofresidency && enddateofresidency && isPays && leaseviolations) {
            setIsLeaseViolationsFilled(true);
            setIsFormFilled(true);
            setCurrentPage(currentPage + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        setCurrentPage(currentPage - 1);
        window.scrollTo(0, 0);
    };


    return (
        <main>
            <div className="logo">
                <div className="logo-icon">
                    <img src={require('../assets/images/logo.png')} alt="BeRifma" />
                </div>
            </div>
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                        <div className="c-order tab-sm-100 col-md-6">
                            {/* side */}
                            <div className="left">
                                <article className="side-text">
                                    <h2> Rental Verification </h2>
                                </article>
                                <div className="left-img">
                                    <img
                                        src={require('../assets/images/left-bg.gif')}
                                        alt="BeRifma"
                                    />
                                </div>
                                <ul className="links">
                                    <li>
                                        <p><BsCursor size={16} /> First Pacific Group, Inc.</p>
                                    </li>
                                    <li>
                                        <p><CiLocationOn size={18} /> 675 Gilman St Palo Alto, CA 94301-2528</p>
                                    </li>
                                    <li>
                                        <IoCallOutline size={18} /><a href="tel:(415) 409-6200"> (415) 409-6200</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="tab-sm-100 offset-md-1 col-md-5">
                            <div className="right">
                                {/* form */}
                                <div id="step1" className="form-inner lightSpeedIn">
                                    <form id="steps" method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>

                                        {currentPage === 1 && (
                                            <div>
                                                <div className="input-field">
                                                    <label htmlFor="">< MdOutlineDriveFileRenameOutline /> Name of applicant <span>*</span></label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="nameofapplicant"
                                                        id="nameofapplicant"
                                                        placeholder="Type name of applicant"
                                                        value={nameofapplicant}
                                                        onChange={(e) => setNameofapplicant(e.target.value)} />
                                                    <span></span>
                                                </div>

                                                <div className="input-field">
                                                    <label htmlFor="propertyaddress"><IoLocationOutline /> Property address <span>*</span></label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="propertyaddress"
                                                        id="propertyaddress"
                                                        placeholder="Type Property address"
                                                        value={propertyaddress}
                                                        onChange={(e) => setPropertyaddress(e.target.value)} />
                                                    <span></span>
                                                </div>

                                                <div className="input-field">
                                                    <label htmlFor="startdateofresidency"><CiCalendarDate /> Start date of residency <span>*</span></label>
                                                    <input
                                                        required
                                                        type="date"
                                                        name="startdateofresidency"
                                                        id="startdateofresidency"
                                                        placeholder="Type dates of residency"
                                                        value={startdateofresidency}
                                                        onChange={(e) => setStartDateofresidency(e.target.value)} />
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="enddateofresidency"><CiCalendarDate /> End date of residency <span>*</span></label>
                                                    <input
                                                        required
                                                        type="date"
                                                        name="enddateofresidency"
                                                        id="enddateofresidency"
                                                        placeholder="Type dates of residency"
                                                        value={enddateofresidency}
                                                        onChange={(e) => setEndDateofresidency(e.target.value)} />
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor=""><MdPayments /> Late pays <span>*</span></label>
                                                    <div className="line">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                required
                                                                type="radio"
                                                                name="latepays"
                                                                id="pYes"
                                                                value="yes"
                                                                onChange={handleInputChange}
                                                                checked={isPays === 'yes'}
                                                                className="form-check-input"

                                                            />
                                                            <label htmlFor="pYes" className="form-check-label">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="latepays"
                                                                id="pNo"
                                                                value="no"
                                                                onChange={handleInputChange}
                                                                checked={isPays === 'no'}
                                                                className="form-check-input"
                                                                required
                                                            />
                                                            <label htmlFor="pNo" className="form-check-label">No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="input-field">
                                                    <label htmlFor="howmany"> If yes, how many? <span></span></label>
                                                    <input
                                                        type="number"
                                                        name="howmany"
                                                        id="howmany"
                                                        placeholder="Type how many"
                                                        value={howmany}
                                                        onChange={handleHowmany} />
                                                    <span></span>
                                                </div>

                                                <div className="input-field">
                                                    <label htmlFor=""><MdOutlinePayments /> Lease violations <span>*</span></label>
                                                    <div className="line">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="leaseviolations"
                                                                id="lYes"
                                                                value="yes"
                                                                onChange={handleLeaseviolations}
                                                                checked={leaseviolations === 'yes'}
                                                                className="form-check-input"
                                                                required
                                                            />
                                                            <label htmlFor="lYes" className="form-check-label">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="leaseviolations"
                                                                id="lNo"
                                                                value="no"
                                                                onChange={handleLeaseviolations}
                                                                checked={leaseviolations === 'no'}
                                                                className="form-check-input"
                                                                required
                                                            />
                                                            <label htmlFor="lNo" className="form-check-label">No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <span></span>
                                                <button className="btn btn-dark" onClick={nextStep}>Next</button>
                                            </div>
                                        )}

                                        {currentPage === 2 && (
                                            <div>
                                                <div className="input-field">
                                                    <label htmlFor=""><MdOutlineAccountBalanceWallet /> Balance owed <span>*</span></label>
                                                    <div className="line">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="balanceowed"
                                                                id="yes"
                                                                value="yes"
                                                                onChange={handleBalanceowed}
                                                                checked={balanceowed === 'yes'}
                                                                className="form-check-input"
                                                                required
                                                            />
                                                            <label htmlFor="yes" className="form-check-label">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="balanceowed"
                                                                id="no"
                                                                value="no"
                                                                onChange={handleBalanceowed}
                                                                checked={balanceowed === 'no'}
                                                                className="form-check-input"
                                                                required
                                                            />
                                                            <label htmlFor="no" className="form-check-label">No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="balance">  If yes, what is the balance? <span></span></label>
                                                    <input
                                                        type="text"
                                                        id="balance"
                                                        name="balance"
                                                        value={balance}
                                                        onChange={(e) => setBalance(e.target.value)}
                                                        placeholder="Type the balance"
                                                    />
                                                    <span></span>
                                                </div>

                                                <div className="input-field">
                                                    <label htmlFor="">< TbTransferOut /> Eviction <span>*</span></label>
                                                    <div className="line">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="eviction"
                                                                id="eYes"
                                                                value="yes"
                                                                onChange={handleEvivtion}
                                                                checked={eviction === 'yes'}
                                                                className="form-check-input"
                                                                required
                                                            />
                                                            <label htmlFor="eYes" className="form-check-label">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="eviction"
                                                                id="eNo"
                                                                value="no"
                                                                onChange={handleEvivtion}
                                                                checked={eviction === 'no'}
                                                                className="form-check-input"
                                                                required
                                                            />
                                                            <label htmlFor="eNo" className="form-check-label">No</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="input-field">
                                                    <label htmlFor=""><RiShareForward2Line /> Would you re-rent to this tenant? <span>*</span></label>
                                                    <div className="line">
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="re_rent"
                                                                id="rYes"
                                                                value="yes"
                                                                onChange={handleRe_rent}
                                                                checked={re_rent === 'yes'}
                                                                className="form-check-input"
                                                                required
                                                            />
                                                            <label htmlFor="rYes" className="form-check-label">Yes</label>
                                                        </div>
                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                type="radio"
                                                                name="re_rent"
                                                                id="rNo"
                                                                value="no"
                                                                onChange={handleRe_rent}
                                                                checked={re_rent === 'no'}
                                                                className="form-check-input"
                                                                required
                                                            />
                                                            <label htmlFor="rNo" className="form-check-label">No</label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="comments"> <GoComment /> Any additional comments <span></span></label>
                                                    <input
                                                        type="text"
                                                        name="comments"
                                                        id="comments"
                                                        placeholder="Type comment"
                                                        value={comments}
                                                        onChange={(e) => setComments(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="VerifiedBy"><VscVerified /> Verified by <span>*</span></label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="VerifiedBy"
                                                        id="VerifiedBy"
                                                        placeholder="Verifed by"
                                                        value={VerifiedBy}
                                                        onChange={(e) => setVerifedBy(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <div className="input-field">
                                                    <label htmlFor="title"><MdOutlineSubtitles /> Title<span>*</span></label>
                                                    <input
                                                        required
                                                        type="text"
                                                        name="title"
                                                        id="title"
                                                        placeholder="Type title"
                                                        value={title}
                                                        onChange={(e) => setTitle(e.target.value)} />
                                                    <span></span>
                                                </div>
                                                <button className="btn btn-dark next" onClick={prevStep}>Previous</button>
                                                <button className="btn btn-success submit" type="submit">Submit</button>
                                            </div>
                                        )}
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </main >
    );
}

export default RentalVerification;