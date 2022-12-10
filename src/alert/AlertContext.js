import React, { useState, useContext, useReducer } from "react";

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const AlertContext = React.createContext()

export const useAlert = () => useContext(AlertContext)

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT: return {...state, visible: true, text: action.text}
    case HIDE_ALERT: return {...state, visible: false}

    default: return state
  }
}

export const AlertProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    visible: false
  })

  const show = text => dispatch({ type: SHOW_ALERT, text})
  const hide = () => dispatch({ type: HIDE_ALERT})

  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      text: state.text,
      show, hide
    }}>
      {children}
    </AlertContext.Provider>
  )
}
