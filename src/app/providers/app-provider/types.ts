
export type TToggleMenu = (value: boolean | undefined) => void;

export interface IState{
  menuOpen: boolean;
  toggleMenu?: TToggleMenu
}

export type TActionTypes = "toggle" | "close" | "open"

export type TActionObject = {type: TActionTypes}

export interface IActions{
  toggleMenu: TToggleMenu
}