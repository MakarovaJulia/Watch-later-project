import { Link } from "react-router-dom";
import styles from './index.module.css';
import {LayoutContainer} from "../../containers/LayoutContainer";
import {useStores} from "../../utils/stores-utils";
import {observer} from "mobx-react";
import {HeaderContainer} from "../../containers/HeaderContainer";
import logo from '../../Watch_Later_Logo_Short.svg';
import React from "react";
import {HeaderButton} from "../../components/ui/HeaderButton";
import plusIcon from "../../PlusIcon.svg";
import collectionIcon from "../../Collection.svg";
import searchIcon from "../../SearchIcon.svg";
import avatar from "../../Avatar.svg"

export const Collection = observer(() => {
    const {collectionStore: {collection}} = useStores();

    return (
        <>
        <HeaderContainer>
            <div className="container">
                <HeaderButton toggled={false} title="Коллекция" image={collectionIcon}/>
                <HeaderButton toggled={false} title="Добавить" image={plusIcon}/>
            </div>
            <img className={styles.logo} src={logo} alt="Watch Later Logo"/>
            <div className="container">
                <HeaderButton toggled={true} title="Поиск" image={searchIcon}/>
            </div>
            <img className={styles.avatar} src={avatar} alt="Avatar"/>
        </HeaderContainer>
            <LayoutContainer>
            <h1>Коллекция</h1>
            <div className={styles.collection}>
                {collection.map(film =>
                    <div className={styles.film}>
                        <Link className={styles.poster} to={`/films/${film.id}`}>
                            <p className={styles.rating}>{film.rate}</p>
                            <img src={film.posterImg} alt={film.title} />
                        </Link>
                        <p className={styles.title}>{film.title}</p>
                    </div>
                )}
            </div>
            </LayoutContainer>
        </>
    )
});