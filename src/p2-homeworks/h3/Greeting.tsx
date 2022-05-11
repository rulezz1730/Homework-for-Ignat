import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : s.during // need to fix with (?:)

    return (
        <div>
            <div>
                <input value={name} onChange={setNameCallback} className={`${s.inputStatus} ${inputClass}`}/>
                <button onClick={addUser} disabled={error} className={inputClass}><b>add</b></button>
                <span>{totalUsers}</span>
            </div>
            <span className={s.errorMessage}>{error && "Поле ввода не должно быть пустым"}</span>
        </div>
    )
}

export default Greeting
