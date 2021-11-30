import './Bio.css'
import React from 'react'
import {Fade} from 'react-awesome-reveal'

function Bio() {
    return (
        <>
            <section className="Bio container">
                <div className="row">
                    <div className="Bio__intro col-12 col-sm-4">
                        <Fade direction="up" triggerOnce>
                            <p>Nací en Venezuela en el año 1994. Allí comencé a jugar tenis playa en el 2014, después de que una lesión en la clavícula me dejará fuera del fútbol profesional que practicaba para ese momento.</p>
                            <p>En el 2016 decido mudarme a Barcelona en busca de mi objetivo, y fue en el 2018 que comencé a jugar a nivel profesional, participando ese mismo año, y por primera vez en el Campeonato de España, <strong>logrando consagrarme como Subcampeona de España.</strong></p>
                        </Fade>
                    </div>
                </div>
            </section>
            <Fade direction="up" delay={500} triggerOnce>
                <section className="container-fluid Bio__quote-row">
                    <div className="container Bio__quote">
                        <img className="Bio__quote-icon" src="./images/quotes.svg" alt="quotes icon" />
                        <div className="row">
                            <div className="Bio__info">
                                <p>No importa lo que poseas, sino </p>
                                <p>quién eres y qué haces con ello.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </>
    )
}

export default Bio
