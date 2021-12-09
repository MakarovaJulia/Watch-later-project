import {MainStore} from "./mainStore";
import {makeObservable, observable} from "mobx";
import minari from '../minari.svg';
import sun from '../sun.svg';
import mank from '../mank.svg';
import girl from '../girl.svg';
import ground from '../ground.svg';
import father from '../father.svg';
import drunk from '../drunk.svg';
import soul from '../soul.svg';
import godzilla from '../godzilla.svg';

const collectionMock = [
    {
        id:1,
        title: 'Минари',
        rate: '6.9',
        posterImg: minari
    },
    {
        id:2,
        title: 'Солнцестояние',
        rate: '6.6',
        posterImg: sun
    },
    {
        id:3,
        title: 'Манк',
        rate: '7.1',
        posterImg: mank
    },
    {
        id:4,
        title: 'Девушка, подающая надежды',
        rate: '6.8',
        posterImg: girl
    },
    {
        id:5,
        title: 'Земля кочевников',
        rate: '8.4',
        posterImg: ground
    },
    {
        id:6,
        title: 'Отец',
        rate: '7.3',
        posterImg: father
    },
    {
        id:7,
        title: 'Еще по одной',
        rate: '7.5',
        posterImg: drunk
    },
    {
        id:8,
        title: 'Душа',
        rate: '7.9',
        posterImg: soul
    },
    {
        id:9,
        title: 'Годзилла',
        rate: '6.1',
        posterImg: godzilla
    }
]


export default class CollectionStore{
    collection: any[];

    constructor(public mainStore: MainStore) {
        makeObservable(this,{
            collection: observable
        })
        this.collection = collectionMock;
    }
}