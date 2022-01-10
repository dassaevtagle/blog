import { ActionTree } from 'vuex';

enum ThemeColors {
    light = "LIGHT",
    dark = "DARK"
}

class ThemeState {
    public currentTheme: ThemeColors = ThemeColors.light;
}

export const state = (): ThemeState => (
    new ThemeState()
)

export const actions: ActionTree<ThemeState, ThemeState> = {
    
}  
