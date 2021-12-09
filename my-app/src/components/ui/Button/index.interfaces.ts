import {ReactNode} from "react";

export interface IButton {
    title: ReactNode;
    onClick?: (e: any) => void;
    disabled?: boolean;
    type?: ReactNode;
    size?: ReactNode;
}