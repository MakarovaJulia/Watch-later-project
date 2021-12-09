import {ReactNode} from "react";

export interface IInput<T> {
    value?: string;
    onChange: (e: any) => void;
    placeholder: string;
    type?: string;
    status?: ReactNode;
}