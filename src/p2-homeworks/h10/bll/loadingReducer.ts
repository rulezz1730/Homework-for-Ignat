export enum ACTIONS_TYPE {
    CHANGE_LOADING = "CHANGE-LOADING"
}

const initState = {
    isLoading: false
};

export type InitStateType = typeof initState

export const loadingReducer = (state: InitStateType = initState, action: ActionTypes): InitStateType => {
    // fix any
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_LOADING: {
            return {isLoading: action.isLoading}
        }
        default:
            return state
    }
}

// fix any

type LoadingACType = ReturnType<typeof loadingAC>

export const loadingAC = (isLoading: boolean) => {
    return {type: ACTIONS_TYPE.CHANGE_LOADING, isLoading}
}

export type ActionTypes = LoadingACType
