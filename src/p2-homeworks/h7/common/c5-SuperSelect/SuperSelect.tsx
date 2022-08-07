import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react';
import styles from '../../HW7.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: string[] | number[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange,
        onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options?.map(el => <option key={el}>{el}</option>) || []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeOption && e.currentTarget.value && onChangeOption(e.currentTarget.value)
    }

    return (
        <select className={styles.customSelect} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
