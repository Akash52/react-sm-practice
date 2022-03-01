export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
    interpretedBy: string;
}

export interface IUsers {
    users: IUser[];
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
}
