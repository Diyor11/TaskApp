"use client"
import React, { createContext, ReactNode, useReducer } from 'react';
import appReducer from './reducer';
import type { TToggleMenu, IState} from "./types"


const initialState: IState = {
  menuOpen: false,
}


const AppContext = createContext(initialState);

const AppContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(appReducer, initialState)
  
  const toggleMenu: TToggleMenu = (isOpen) => {
    if(isOpen !== undefined) {
       dispatch({type: isOpen ? "open":"close"});
    } else {
      dispatch({type: "toggle"})
    }
  }

  const value = {...state, toggleMenu}

  return(
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider;
