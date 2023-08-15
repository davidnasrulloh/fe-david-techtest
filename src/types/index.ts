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
