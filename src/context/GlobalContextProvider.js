import React from 'react'

export const GlobalStateContext = React.createContext()
export const GlobalDispatchContext = React.createContext()

const initialState = {
    bool: true,
}

function reducer(state, action) {
    switch (action.bool) {
        case "TOGGLE_BOOLEAN" : {
            return {
                ...state,
                bool: !state.bool
            }
        }
        default:
            throw new Error("Bad Action Type")
    }
}

 const GlobalContextProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (<GlobalStateContext.Provider value = {state}>
        <GlobalDispatchContext.Provider value = {dispatch}>
            {children}
        </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>)
 }

 export default GlobalContextProvider