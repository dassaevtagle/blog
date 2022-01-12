import { ActionTree } from 'vuex';

enum ThemeColors {
    light = "LIGHT",
    dark = "DARK"
}

class ThemeState {
    public currentTheme: ThemeColors = ThemeColors.light;

    public toJSON(): object {
        return Object.getOwnPropertyNames(this).reduce((a: any, b: any) => {
          a[b] = (this as any)[b];
          return a;
        }, {});
      }
}

export const state = (): ThemeState => (
    new ThemeState()
)

export const actions: ActionTree<ThemeState, ThemeState> = {

}  
