import React from 'react';
import classNames from 'classnames/bind';

import { IHeaderButton } from './index.interfaces';
import styles from './index.module.scss'

const cx = classNames.bind(styles);

export const HeaderButton = (props: IHeaderButton) => {
    const { id, title, onClick, image, toggled} = props;

    return (
        <button
            onClick={onClick}
            className={cx({
                button: true
            },props.toggled ? "btnActive" : "btn")}
            id={id}
        >
            <img src={image} alt="IMAGE"/>
            {title}
        </button>
    )
}