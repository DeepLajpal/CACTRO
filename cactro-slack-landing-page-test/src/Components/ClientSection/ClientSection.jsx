import React from 'react'
import style from "./clientSection.module.css"
import intuit from "../../assets/intuit.png"
import kiva from "../../assets/kiva.png"
import lonely_planet from "../../assets/lonely_planet.png"
import O from "../../assets/O.png"
import carvana from "../../assets/carvana.png"
import fox from "../../assets/fox.png"
const ClientSection = () => {
    return (
        <div className={style["clientSectionContainer"]}>
            <img src={fox} alt="fox company icon" />
            <img src={lonely_planet} alt="lonely_planet company icon" />
            <img src={intuit} alt="intuit company icon" />
            <img src={carvana} alt="carvana company icon" />
            <img src={kiva} alt="kiva company icon" />
            <img src={O} alt="O company icon" />
        </div>
    )
}

export default ClientSection