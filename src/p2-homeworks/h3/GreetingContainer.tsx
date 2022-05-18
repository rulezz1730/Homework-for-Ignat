import React, {ChangeEvent, useEffect, useRef, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>; // need to fix any
    addUserCallback: (name: string) => void; // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>(''); // need to fix any
    const [error, setError] = useState<boolean>(true);
    const totalUsers = users.length
    // const totalUsers = useRef<number>(0) // variable solution

    // let totalUsers: number = 0;
    // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>): void => {
        const {target} = e;
        target.value ? setError(false) : setError(true);// need to fix any
        setName(target.value); // need to fix
    }

    const addUser = (): void => {
        if (name) {
            alert(`Hello  ${name}!`);
            addUserCallback(name.trim());
            setName('');
            // totalUsers.current++ // for useRef solution
        }// need to fix
    }// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer;
