export type ThemeState = {
    themeId: number
}

const initState: ThemeState = {
    themeId: 1,
}

type ChangeThemeIdAction = {
    type: 'SET_THEME_ID'
    id: number
}

export type ThemeActions = ChangeThemeIdAction

export const themeReducer = (
    state: ThemeState = initState,
    action: ThemeActions
): ThemeState => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return { ...state, themeId: action.id }

        default:
            return state
    }
}

export const changeThemeId = (id: number): ChangeThemeIdAction => ({
    type: 'SET_THEME_ID',
    id,
})