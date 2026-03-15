import type { User } from "./user.types";

export interface CakeState {
    numOfCakes: number;
}

export interface IceCreamState {
    numOfIceCreams: number;
}

export interface UserState {
    loading: boolean;
    error: string | null;
    users: User[];
}

export interface RootState {
    cake: CakeState;
    icecream: IceCreamState;
    users: UserState;
}