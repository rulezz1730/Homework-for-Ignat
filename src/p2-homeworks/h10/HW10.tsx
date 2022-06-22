import React, {useEffect} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {ActionTypes, InitStateType, loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import {Dispatch} from "redux";

function HW10() {
    // useSelector, useDispatch
    const dispatch = useDispatch<Dispatch<ActionTypes>>()
    // const loading = false
    const {isLoading} = useSelector<AppStoreType, InitStateType>((state) => state.loading)

    useEffect(() => {
        isLoading && setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
    }, [dispatch, isLoading])

    const setLoading = () => {
        dispatch(loadingAC(true))
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading

                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
