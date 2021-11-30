import './Achievements.css'
import React from 'react'
import {Fade} from 'react-awesome-reveal'

function Achievements() {
    return (
        <section className="container-fluid Achievements">
            <div className="container">
                <div className="row align-items-stretch">
                    <div className="col-12 col-sm-6 Achievements__bg"></div>
                    <div className="col-12 col-sm-6 offset-sm-6 Achievements__respinfo">
                        <Fade direction="up" triggerOnce>
                            <div className="Achievements__title-big">
                                Palmarés
                            </div>
                        </Fade>
                        <Fade cascade direction="up" duration={200} triggerOnce>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">ITF BEACH TENNIS WORLD CUP 2021</h3>
                                <p className="Achievements__text">3er lugar / <span>Por equipos</span>
                                </p>
                            </div>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">EUROPEAN BEACH TENNIS CHAMPIONSHIP 2021</h3>
                                <p className="Achievements__text">2do lugar / <span>Por equipos</span></p>
                            </div>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">CAMPEONATO ESPAÑA POR CCAA 2021</h3>
                                <p className="Achievements__text">1er lugar / <span>Por equipos</span></p>
                            </div>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">ITF BT100 MADRID 2021</h3>
                                <p className="Achievements__text">2do lugar</p>
                            </div>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">ITF BT100 LAS PALMAS DE GRAN CANARIA 2020</h3>
                                <p className="Achievements__text">Semi-finalista</p>
                            </div>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">CAMPEONATO ESPAÑA 2021 - 2020 - 2018</h3>
                                <p className="Achievements__text">2do lugar</p>
                            </div>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">CAMPEONATO CATALUNYA 2020</h3>
                                <p className="Achievements__text">1er lugar</p>
                            </div>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">ITF HOF TER BURST OPEN 2019</h3>
                                <p className="Achievements__text">1er lugar</p>
                            </div>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">ITF 3000$ CIRCUITO SOL - INDALO 2019</h3>
                                <p className="Achievements__text">Semi-finalista</p>
                            </div>
                            <div className="Achievements__row">
                                <h3 className="Achievements__title">ITF HOF TER BURST OPEN 2019</h3>
                                <p className="Achievements__text">1er lugar</p>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Achievements
