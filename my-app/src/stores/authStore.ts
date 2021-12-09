import {action, computed, makeAutoObservable, makeObservable, observable} from "mobx";
import mainStore, {MainStore} from "./mainStore";

export interface ILoginParams{
    login: string;
    password: string;
}

export default class AuthStore {
     isError: boolean | undefined;
     isLoading: boolean | undefined;

    constructor(public mainStore: MainStore) {
        makeObservable(this,{
            isError: observable,
            isLoading:observable
        })
    }

}
