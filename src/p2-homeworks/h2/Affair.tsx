import React from 'react'
import {AffairType} from "./HW2";
import styles from "./Affairs.module.scss"

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType, // need to fix any
    deleteAffairCallback: (_id: number) => void,  // need to fix any
}

function Affair({affair, deleteAffairCallback}: AffairPropsType) {
    const deleteCallback = (id: number) => {
        deleteAffairCallback(id)
    }// need to fix

    return (
        <div className={styles.affairItem}>
            <p>{affair.name}</p>
            <button onClick={() => deleteCallback(affair._id)}>X</button>
        </div>
    )
}

export default Affair
