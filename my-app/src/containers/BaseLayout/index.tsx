import React from 'react';
import { IBaseLayout } from './index.interfaces'
import styles from './index.module.css';
import { LayoutContainer } from "../LayoutContainer"
import {HeaderContainer} from "../HeaderContainer";

export const BaseLayout = (props: IBaseLayout) => {
    const {
        children
    } = props;

    return (
        <LayoutContainer>
            <div className={styles.container}>
                { children }
            </div>
        </LayoutContainer>
    )
}