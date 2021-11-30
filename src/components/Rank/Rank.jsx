import './Rank.css'
import React from 'react'
import {Fade} from 'react-awesome-reveal'
import {Link} from 'react-router-dom'


function Rank() {
    const internationalRank = 58
    const localRank = 4

    const increaseRank = (num, str) => {
        for (let i = 0; i <= num; i++) {
            setTimeout(() => {
                document.querySelector(`.${str}`).innerHTML = i
            }, i <= 4 ? i * 500 : i * 40)
        }
    }

    return (
        <>
            <section className="Rank container">
                <div className="row">
                    <div className="Rank__intro col-12 col-sm-4">
                        <Fade direction="up" triggerOnce>
                            <p>En el ranking español, mi desempeño también ha sido bueno y he pasado de estar de #11 a estar actualmente de <strong>#4 de España.</strong></p>
                            <p> A nivel internacional, comencé en el circuíto ITF en el 2018 sumando mis primeros puntos y logrando escalar más de 100 posiciones en el mismo año, pasando de la posición #180 a entrar en el top 100 mundial, <strong>siendo la posición #47 mi mejor ranking actualmente,</strong> con tan sólo 28 eventos ITF jugados.</p>
                        </Fade>
                        <Fade delay={500} direction="up" triggerOnce>
                            <div className="Rank__ranking row">
                                <div className="col-6">
                                    <h1 className="Rank__number internationalRank">{increaseRank(internationalRank, "internationalRank")}</h1>
                                    <p className="Rank__info">Ranking <span>internacional</span></p>
                                </div>
                                <div className="col-6">
                                    <h1 className="Rank__number localRank">{increaseRank(localRank, "localRank")}</h1>
                                    <p className="Rank__info">Ranking <span>español</span></p>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </section>
            <Fade delay={1000} direction="left" triggerOnce>
                <section className="Rank__rrss container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="Rank__rrss-info col-12 col-sm-4">
                                <p>CAMPEONA DE CATALUÑA 2020</p>
                                <p>SUBCAMPEONA DE ESPAÑA 2021</p>
                            </div>
                            <div className="col-12 col-sm-6 d-none d-sm-block">
                                <div className="row justify-content-center">
                                    <Link to="/what" className="col col-xs-3 Rank__icon Rank__icon-whatsapp"></Link>
                                    <Link to="/mail" className="col col-xs-3 Rank__icon Rank__icon-mail"></Link>
                                    <Link to="/inst" className="col col-xs-3 Rank__icon Rank__icon-instagram"></Link>
                                    <Link to="/twit" className="col col-xs-3 Rank__icon Rank__icon-twitter"></Link>
                                    <div className="col Rank__icon "></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fade>
        </>
    )
}

export default Rank
