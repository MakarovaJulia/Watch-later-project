import {MainStore} from "./mainStore";
import {action, makeObservable ,observable} from "mobx";
import { FC } from 'react';


export default class ModalStore{
    currentModal: any;

    constructor(public mainStore: MainStore) {
        makeObservable(this, {
            currentModal: observable,
            setCurrentModal: action,
            clearCurrentModal: action
        })
        this.currentModal = null;
    }

    setCurrentModal = (modal: FC<any>) =>{
        this.currentModal = modal;
    }

    clearCurrentModal = () => {
        this.currentModal = null;
    }
}