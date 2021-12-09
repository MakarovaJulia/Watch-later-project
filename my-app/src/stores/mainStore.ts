import {observable} from "mobx";
import AuthStore from "./authStore";
import ModalStore from "./modalStore";
import CollectionStore from "./CollectionStore";


class MainStore {
    @observable isLoading: boolean;

    authStore: AuthStore;
    modalStore: ModalStore;
    collectionStore: CollectionStore;

    constructor() {
        this.isLoading = false;

        this.authStore = new AuthStore(this)
        this.modalStore = new ModalStore(this)
        this.collectionStore = new CollectionStore(this)
    }
}

const mainStore = new MainStore();

export default mainStore;
export { MainStore };
