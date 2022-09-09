import React, {ChangeEvent, SyntheticEvent, useState} from 'react';
import {requestApi} from "./requestApi";
import styles from './HW13.module.scss'

const Request = () => {
    const [request, setRequest] = useState<string>('')
    const [check, setCheck] = useState<boolean>(false)

    const handleSentData = (e: SyntheticEvent) => {
        e.preventDefault()
        requestApi.postData(check)
            .then(res => {
                setRequest(res.data.errorText ? res.data.errorText : res.data.info || "Все ок!")
            })
            .catch(err => {
                setRequest(err ? err.response.data.errorText : err.message)
            })
    }

    const handlePressCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(!check)
    }

    return (
        <div className={styles.requestBlock}>
            <p>Send request</p>
            <form onSubmit={handleSentData}>
                <input name={'boolean'} type="checkbox" checked={check} onChange={handlePressCheck}/>
                <button type={'submit'}>Sent Data</button>
            </form>
            <div className={styles.error}>
                {request}
            </div>
        </div>
    );
};

export default Request;