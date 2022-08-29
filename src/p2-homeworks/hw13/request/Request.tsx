import React, {ChangeEvent, useEffect, useState} from 'react';
import {requestApi} from "./requestApi";
import styles from './HW13.module.scss'

const Request = () => {
    const [request, setRequest] = useState<any>()
    const [check, setCheck] = useState<boolean>(false)

    useEffect(() => {
        console.log(request)
    }, [request])

    const handlePressCheck = (e: ChangeEvent<HTMLInputElement>) => {
        setCheck(e.currentTarget.checked)
        if (e.currentTarget.checked) {
            requestApi.postData(e.currentTarget.checked)
                .then(res => setRequest(res.data))
                .catch(err => {
                    setRequest(err.response ? err.response.data.errorText : err.message)
                })
        } else {
            setRequest('')
        }
    }


    return (
        <div className={styles.requestBlock}>
            <p>Send request</p>
            <input type="checkbox" checked={check} onChange={handlePressCheck}/>
            <div className={styles.error}>
                {request}
            </div>
        </div>
    );
};

export default Request;