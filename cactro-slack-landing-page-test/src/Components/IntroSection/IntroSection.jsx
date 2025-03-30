import React from 'react';
import introImg from "../../assets/introImg.png";
import style from "./IntroSection.module.css"
const IntroSection = () => {
    return (
        <div className={style["introContainer"]}>
            <div className={style["imgContainer"]}>
                <img src={introImg} alt="introImage" />
            </div>
            <div className={style["right"]}>
                <div>

                    <h2>
                        Now is your moment to build a better tomorrow
                    </h2>
                    <p>We've seen what the future can be. Now it's time to decide what it will be.</p>
                    <button>WATCH VIDEO</button>

                </div>
            </div>
        </div>
    )
}

export default IntroSection