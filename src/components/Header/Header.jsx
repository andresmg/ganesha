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
        </header>
    )
}

export default Header
