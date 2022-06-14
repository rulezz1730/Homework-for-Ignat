import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import styles from './HW9.module.scss'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        // stop
        window.clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        console.log(id)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    function convertCurrentTime(currentDate: Date): string {
        const addZero = (value: number): string => {
            return value < 10 ? `0${value}` : value.toString()
        }
        let hours: string = addZero(currentDate.getHours());
        let minutes: string = addZero(currentDate.getMinutes());
        let seconds: string = addZero(currentDate.getSeconds());

        return `${hours}:${minutes}:${seconds}`
    }

    function convertCurrentDate(currentDate: Date): string {
        const addZero = (value: number): string => {
            return value < 10 ? `0${value}` : value.toString()
        }
        let day: string = addZero(currentDate.getDate());
        let month: string = addZero(currentDate.getMonth());
        let year: number = currentDate.getFullYear()

        return `${day}.${month}.${year}`
    }

    const stringTime: string | undefined = date && convertCurrentTime(date) // fix with date
    const stringDate: string | undefined = date && convertCurrentDate(date) // fix with date

    return (
        <div className={styles.timeBlock}>
            <div className={styles.time}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
