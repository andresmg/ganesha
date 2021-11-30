import './Sponsors.css'
import React from 'react'
import {Fade} from 'react-awesome-reveal'

function Sponsors() {
    return (
        <section className="container-fluid Sponsors">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 Sponsors__info">
                        <Fade direction="up" triggerOnce>
                            <div className="Achievements__title-big">
                                Patrocinadores
                            </div>
                            <div className="row">
                                <Fade cascade delay={300} direction="up" triggerOnce>
                                    <div className="col-12 col-sm-6">
                                        <img src="./images/nox.svg" alt="Patrocinadores" className="Sponsors__image" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <img src="./images/nox.svg" alt="Patrocinadores" className="Sponsors__image" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <img src="./images/nox.svg" alt="Patrocinadores" className="Sponsors__image" />
                                    </div>
                                    <div className="col-12 col-sm-6">
                                        <img src="./images/nox.svg" alt="Patrocinadores" className="Sponsors__image" />
                                    </div>
                                </Fade>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sponsors
