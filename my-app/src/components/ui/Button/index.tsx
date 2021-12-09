import React from 'react';
import classNames from 'classnames/bind';

import { IButton } from './index.interfaces';
import styles from './index.module.scss'

const cx = classNames.bind(styles);

export const Button = (props: IButton) => {
    const { title, onClick, disabled} = props;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={cx({
                button: true
            },"enterBtn")}
            >
            {title}
        </button>
    )
}