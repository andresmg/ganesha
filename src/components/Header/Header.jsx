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
                        <img className="Header__respLogo" src="./images/resp-logo.svg" alt="logo" />
                    </div>
                    <div className="Header__nav-icon whatsapp"></div>
                    <div className="Header__nav-icon mail"></div>
                    <div className="Header__nav-icon instagram"></div>
                    <div className="Header__nav-icon twitter"></div>
                </div>
            </nav>
        </header>
    )
}

export default Header
