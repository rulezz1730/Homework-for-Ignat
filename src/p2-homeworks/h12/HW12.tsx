import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, ThemeReducerType, ThemeType} from "./bll/themeReducer";
import {AppStoreType} from "../h10/bll/store";
import {Dispatch} from "redux";

const themes = ['dark', 'red', 'some', "light", 'deep'];


function HW12() {
    const {theme} = useSelector<AppStoreType, ThemeReducerType>(state => state.theme)
    console.log(theme)
    const dispatch = useDispatch<Dispatch>()
    // const theme = 'some'; // useSelector

    // useDispatch, onChangeCallback
    const onChangeCallBack = (themeColor: ThemeType) => {
        dispatch(changeThemeC(themeColor))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperSelect options={themes} onChangeOption={onChangeCallBack}/>

            <hr/>
        </div>
    );
}

export default HW12;
