import React from 'react';
import styles from './Message.module.scss'


type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: MessagePropsType) {
    let {
        avatar,
        name,
        message,
        time,
    } = props;

    return (
        <div className={styles.message}>
            <img width={45} height={45} src={avatar} alt="Avatar"/>
            <div className={styles.messageText}>
                <span><b>{name}</b></span>
                <p>{message}</p>
                <span className={styles.messageTime}>{time}</span>
            </div>

        </div>
    )
}

export default Message
