import React from 'react'
import {Routes, Route, Navigate} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import styles from './HW5.module.scss'
import JuniorPlus from "../hw13/JuniorPlus";

export const PATH = {
    PRE_JUNIOR: 'pre-junior',
    JUNIOR: "junior",
    JUNIOR_PLUS: "junior-plus"
    // add paths
}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>
                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<div className={styles.page}>Feauture Homework</div>}/>
                {/*<Route path={PATH.JUNIOR_PLUS} element={<div className={styles.page}>Feauture Homework</div>}/>*/}
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

                {/*// add routes*/}

                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
