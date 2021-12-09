import {ReactNode} from "react";

export interface IHeaderButton {
    id?: string;
    toggled: boolean;
    title: ReactNode;
    onClick?: (e: any) => void;
    type?: ReactNode;
    image?: string;
}