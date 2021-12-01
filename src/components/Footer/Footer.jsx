import './Footer.css'
import React from 'react'

function Footer() {
    return (
        <footer className="Footer container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 Footer__copy"> Todos los derechos reservados {new Date().getFullYear()} © Ganesha Díaz | PROFESSIONAL BEACH TENNIS PLAYER</div>
                    <div className="col-12 col-sm-6 Footer__made">Diseñado y programado por <a href="https://www.linkedin.com/in/andresmg/" target="_blank" rel="noopener noreferrer">Andrés Martínez</a></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
