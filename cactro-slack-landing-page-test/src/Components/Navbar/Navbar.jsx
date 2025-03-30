import React from 'react'
import style from "./Navbar.module.css"
import logo from "../../assets/slack-salesforce-logo-nav-black.png"
import { CiSearch } from "react-icons/ci";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import { useState } from 'react';


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    return (
        <nav className={style["navContainer"]}>
            <div className={style["leftNav"]}>
                <div className={style["leftNav__left"]}>
                    <img className={style["leftNav__left--img"]} src={logo} alt="slack-company-logo" />
                </div>
                <ul className={style["leftNav__right"]}>
                    <li>
                        <div className={style["dropdown"]} onClick={() => setIsDropdownOpen((prevStatus) => !prevStatus)}>
                            <div className={style["dropdown__text"]}>Products</div>
                            <div className={style["dropdown__arrow"]}>
                                {isDropdownOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                            </div>
                        </div>
                    </li>
                    <li>Enterprise</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                </ul>
            </div>

            <div className={style["rightNav"]}>
                <div className={style["rightNav__search"]}>
                    <CiSearch />
                </div>
                <div className={style["rightNav__signIn"]}>
                    <a href='#' >
                        Sign In
                    </a>
                </div>
                <div className={style["rightNav__CTA--talkToSales"]}>
                    <button >TALK TO SALES</button>
                </div>
                <div className={style["rightNav__CTA--tryForFree"]}>
                    <button >TRY FOR FREE</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar