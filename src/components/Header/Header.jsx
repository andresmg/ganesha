import './Header.css'
import React from 'react'

function Header() {
    return (
        <header className="container Header">
            <div className="row">
                <div className="col-12 Header__row">
                    <img className="Header__logo" src="./images/logo.svg" alt="logo" />
                </div>
            </div>
            <nav className="Header__nav">
                <div className="row">
                    <div className="col Header__nav-row">
                        <div className="Header__respLogo" />
                    </div>
                    <div className="Header__nav-icon">
                        <img src="./images/whatsapp.svg" alt="logo" />
                    </div>
                    <div className="Header__nav-icon">
                        <img src="./images/mail.svg" alt="logo" />
                    </div>
                    <div className="Header__nav-icon">
                        <img src="./images/instagram.svg" alt="logo" />
                    </div>
                    <div className="Header__nav-icon">
                        <img src="./images/twitter.svg" alt="logo" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
