import { IState, TActionObject } from "./types";

const initialState: IState = {
  menuOpen: false,
  // Add other state values here (e.g., activeMenuItem, someData)
};

const siderReducer = (state = initialState, action: TActionObject) => {
  switch (action.type) {
    case 'toggle':
      return { ...state, isOpen: !state.menuOpen };
    // Add other reducer cases for different actions that update state values
    default:
      return state;
  }
};

export default siderReducer;
