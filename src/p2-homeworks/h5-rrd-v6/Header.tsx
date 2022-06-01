import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import styles from './HW5.module.scss'

function Header() {
    const [isCloseNavBar, setIsCloseNavBar] = useState<boolean>(false)

    const mouseEnterMenuStatus = (): void => {
        setIsCloseNavBar(!isCloseNavBar)
    }

    const mouseLeaveNavBar = () => {
        setIsCloseNavBar(!isCloseNavBar)
    }

    return (
        <>
            {
                isCloseNavBar ? (
                    <div className={styles.header} onMouseLeave={mouseLeaveNavBar}>
                        <NavLink
                            className={({isActive}) => `${styles.headerLink} + ${isActive ? styles.activeLink : ""}`}
                            to='/pre-junior'>{PATH.PRE_JUNIOR}</NavLink>
                        <NavLink
                            className={({isActive}) => `${styles.headerLink} + ${isActive ? styles.activeLink : ""}`}
                            to='/junior'>{PATH.JUNIOR}</NavLink>
                        <NavLink
                            className={({isActive}) => `${styles.headerLink} + ${isActive ? styles.activeLink : ""}`}
                            to='/junior-plus'>{PATH.JUNIOR_PLUS}</NavLink>
                    </div>
                ) : (
                    <div className={styles.header}>
                        <img onClick={mouseEnterMenuStatus} style={{cursor: "pointer"}} width={30} height={30}
                             src="https://www.svgrepo.com/show/135594/menu.svg" alt="Menu"/>
                    </div>
                )
            }
        </>
    )
}

export default Header
