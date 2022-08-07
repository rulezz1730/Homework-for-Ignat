const CHANGE_THEME = 'CHANGE_THEME'

export type ThemeType = 'dark' | 'red' | 'some' | "light" | "deep"
export type ThemeReducerType = {
    theme: ThemeType
}

const initState: ThemeReducerType = {
    theme: 'some'
};


export const themeReducer = (state: ThemeReducerType = initState, action: ActionsTypes): ThemeReducerType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state, theme: action.payload.theme};
        }
        default:
            return state;
    }
};


export type ActionsTypes = ChangeThemeCType

export type ChangeThemeCType = {
    type: typeof CHANGE_THEME,
    payload: {
        theme: ThemeType
    }
}
export const changeThemeC = (theme: ThemeType): ChangeThemeCType => ({
    type: CHANGE_THEME,
    payload: {theme},
}); // fix any

