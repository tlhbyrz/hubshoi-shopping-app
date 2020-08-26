import React,{useState, Fragment} from "react";
import "./CustomModal.css";

function CustomModal({handleModal, handleModalLevel, level}) {
    const [openCountry, setOpenCountry] = useState(false);
    const [openLanguage, setOpenLanguage] = useState(false);
    const [country, setCountry] = useState("Belgium");
    const [language, setLanguage] = useState("English");

    return(
        <div className="custom-modal-section">
            <div className="custom-modal">
                <i className="fa fa-times fa-2x modal-close-icon" aria-hidden="true" onClick={() => handleModal()}></i>
                <p className="custom-modal-title">{level === 0 ?  "Find the best deals and offers" : "Check the cities to\n" +
                    "find the best deals and offers!"}</p>
                <p className="custom-modal-subtitle">{level === 0 ? "Select your country and language" : "Select one or more cities and click to see offers" }</p>

                {
                    level === 0 ?
                        (
                            <div className="custom-modal-selects">
                                <div className="custom-modal-select">
                                    <p className="custom-modal-select-text">{country}</p>
                                    <i className={`fa fa-chevron-${openCountry ? "up" : "down"} select-input-icon`} aria-hidden="true" onClick={() => setOpenCountry(!openCountry)}></i>

                                    <div className={`custom-modal-select-options ${openCountry ? "show-modal-select-option" : null}`}>
                                        <p className="custom-modal-select-option">Turkey</p>
                                        <p className="custom-modal-select-option">Germany</p>
                                        <p className="custom-modal-select-option">France</p>
                                    </div>
                                </div>

                                <div className="custom-modal-select">
                                    <p className="custom-modal-select-text">{language}</p>
                                    <i className={`fa fa-chevron-${openLanguage ? "up" : "down"} select-input-icon`} aria-hidden="true" onClick={() => setOpenLanguage(!openLanguage)}></i>

                                    <div className={`custom-modal-select-options ${openLanguage ? "show-modal-select-option" : null}`}>
                                        <p className="custom-modal-select-option">Turkish</p>
                                        <p className="custom-modal-select-option">French</p>
                                        <p className="custom-modal-select-option">Japenese</p>
                                        <p className="custom-modal-select-option">Japenese</p>
                                        <p className="custom-modal-select-option">Japenese</p>
                                        <p className="custom-modal-select-option">Japenese</p>
                                        <p className="custom-modal-select-option">Japenese</p>
                                    </div>
                                </div>
                            </div>
                        ) :
                        <Fragment>
                            <div className="custom-modal-search">
                                <input type="text" className="custom-modal-search-input" placeholder="Enter city name"/>
                            </div>

                            <div className="custom-modal-search-options">
                                <div className="custom-modal-search-option">
                                    <input type="checkbox" className="custom-modal-checkbox"/>
                                    <p className="custom-modal-search-text">Ankara</p>
                                </div>
                                <div className="custom-modal-search-option">
                                    <input type="checkbox" className="custom-modal-checkbox"/>
                                    <p className="custom-modal-search-text">Ankara</p>
                                </div>
                                <div className="custom-modal-search-option">
                                    <input type="checkbox" className="custom-modal-checkbox"/>
                                    <p className="custom-modal-search-text">Ankara</p>
                                </div>
                                <div className="custom-modal-search-option">
                                    <input type="checkbox" className="custom-modal-checkbox"/>
                                    <p className="custom-modal-search-text">Ankara</p>
                                </div>
                                <div className="custom-modal-search-option">
                                    <input type="checkbox" className="custom-modal-checkbox"/>
                                    <p className="custom-modal-search-text">Ankara</p>
                                </div>
                                <div className="custom-modal-search-option">
                                    <input type="checkbox" className="custom-modal-checkbox"/>
                                    <p className="custom-modal-search-text">Ankara</p>
                                </div>
                                <div className="custom-modal-search-option">
                                    <input type="checkbox" className="custom-modal-checkbox"/>
                                    <p className="custom-modal-search-text">Ankara</p>
                                </div>
                            </div>
                        </Fragment>

                }



                {
                    level === 1 &&
                    <div className="custom-modal-btn modal-back-btn" onClick={() => handleModalLevel("back")}>
                        <p className="custom-modal-btn-text">Back</p>
                    </div>
                }


                <div className="custom-modal-btn" onClick={() => handleModalLevel("next")}>
                    <p className="custom-modal-btn-text">Next</p>
                </div>

            </div>
        </div>
    )
}

export default CustomModal;