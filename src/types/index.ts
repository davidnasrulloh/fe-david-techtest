import { MouseEventHandler, ChangeEvent } from "react";

export interface User {
    id: number; 
    email: string;
    first_name: string;
    last_name: string;
    avatar: string
}

export interface UserData {
    data: User[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number
}

export interface UserState {
    data: UserData;
    loading: boolean;
    status: 'idle' | 'loading' | 'success' | 'failed';
    error?: string;
}

export interface UserDetailState {
    data: User;
    loading: boolean;
    status: 'idle' | 'loading' | 'success' | 'failed';
    error?: string;
}

export interface CustomButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit"
    textStyle?: string;
    rightIcon?: React.ReactNode;
    isDisabled?: boolean;
}

export interface CustomInputProps {
    name: string;
    inputStyle?: string;
    handleChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    inputType?: "text" | "number" | "password";
    placeholder?: string;
    value?: string | number;
    labelStyle?: string;
    leadingIcon?: React.ReactNode;
    isDisabled?: boolean;
    iconStyle?: string;
    color?: string;
    label?: string;
    error?: boolean;
    errorText?: string;
}



