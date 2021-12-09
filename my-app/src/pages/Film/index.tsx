import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import {useStores} from "../../utils/stores-utils";

export const Film = observer(() => {
    const {collectionStore: {collection}} = useStores();
    let history = useHistory();
    let filmId = history.location.pathname.substr(7,1)
    console.log(filmId)
    return(
        <>
            <div>
                Информация о фильме
            </div>
        </>
    )
})