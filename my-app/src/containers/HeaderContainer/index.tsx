import React from 'react';
import styles from './index.module.css'
import {Button} from "../../components/ui/Button";
import logo from "../../Watch_Later_Logo_Full.svg";
import {HeaderButton} from "../../components/ui/HeaderButton";
import collectionIcon from "../../Collection.svg";
import plusIcon from "../../PlusIcon.svg";
import searchIcon from "../../SearchIcon.svg";

export const HeaderContainer = (props: any) =>{
    const {
        children
    } = props;


    return (
        <>
            <div className={styles.container}>
                { children }
            </div>
        </>
    )
}