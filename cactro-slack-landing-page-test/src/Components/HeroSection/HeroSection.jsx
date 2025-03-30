import React from 'react'
import styles from "./HeroSection.module.css"
import GoogleIcon from "../../assets/google_icon.png";
import HeroImg from "../../assets/hero_img.png";

const HeroSection = () => {
    return (
        <div className={styles['container']}>
            <div className={styles["left"]}>
                <div className={styles["left-inner"]}>
                    <h1>Slack is where the future works</h1>
                    <p>Transform the way you work with one place for everyone and everything you need to get stuff done.</p>
                    <div>
                        <button>TRY FOR FREE</button>
                        <button>
                            <img src={GoogleIcon} alt='Google Sign Up Icon' />
                            <span>SIGN UP WITH GOOGLE</span>
                        </button>
                    </div>
                </div>
            </div>

            <img src={HeroImg} alt="hero image" />
        </div>
    )
}

export default HeroSection