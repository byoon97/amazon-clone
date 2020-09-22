// set up data layer
import React, { createContext, useContext, useReducer } from "react";

// Data Layer
export const StateContext = createContext();

// Building a Provier
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

// This is how we use inside of a component
export const useStateValue = () => useContext(StateContext)