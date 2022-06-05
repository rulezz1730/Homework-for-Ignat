import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react';
import styles from '../../HW7.module.scss'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type,
        name,
        options,
        value,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && e.currentTarget.value && onChangeOption(e.currentTarget.value)

        // e.currentTarget.value && onChange(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        // map options with key
        <div key={name + '-' + i} className={styles.customInputGroup}>
            <input
                className={styles.customInputRadio}
                type={'radio'}
                name={name}
                onChange={onChangeCallback}
                value={o}
                checked={value === o}
                id={name && (name + i).toString()}
                // name, checked, value, onChange
            />
            <label htmlFor={name && (name + i).toString()}>{o}</label>
        </div>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
