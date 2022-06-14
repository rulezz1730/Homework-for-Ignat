import {UserType} from "../HW8";

export type SortByUpActionType = {
    type: 'sort',
    payload: "up" | "down"
}

export type SortByAgeActionType = {
    type: 'check',
    payload: number
}

type ActionsType = SortByUpActionType | SortByAgeActionType

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return action.payload === "up"
                ? [...state.sort((a: UserType, b: UserType) => a.age - b.age)]
                : [...state.sort((a: UserType, b: UserType) => b.age - a.age)]
        }
        case 'check': {
            // need to fix
            return state.filter((user) => user.age >= action.payload)
        }
        default:
            return state
    }
}

