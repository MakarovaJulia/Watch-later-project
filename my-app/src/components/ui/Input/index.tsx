import React from 'react';
import classNames from 'classnames/bind';

import { IInput } from "./index.interfaces";
import styles from './index.module.css'

const cx = classNames.bind(styles);

export const Input = <T extends string | number | undefined>(props: IInput<T>) => {
    const { value, onChange, placeholder, type, status='default'} = props;

    const handleChange = (value: any): void => {
        console.log(value)
        onChange(value);
    }

    return(
        <div>
            <input type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => handleChange(e.target.value)}
            className={cx({
                input: true,
                default: status === 'default',
                error: status === 'error',
                warning: status === 'warning',
                success: status === 'success',
            })}/>
        </div>
    )
}