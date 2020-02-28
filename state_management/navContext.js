import React, {createContext} from 'react'
import * as SecureStore from 'expo-secure-store';


const NavContext = createContext()


let initialState = 'enter';


let reducer = (state, action) => {

    switch (action.type) {
        case "SUCCESS":
            return 'question';
        case "ANSWER":
            return 'poll';
        case "START_OVER":
            return 'enter';
    }
};

const NavContextProvider = (props) => {
    // [A]
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };


    // [B]
    return (
        <NavContext.Provider value={value}>{props.children}</NavContext.Provider>
    );
}


let NavContextConsumer = NavContext.Consumer;

const withNavContext =  (WrappedComponent) => {
    return (
        function(props){
            return(
                <NavContextProvider><WrappedComponent {...props}/></NavContextProvider>
            )
        }
    );
};



export { NavContext, NavContextProvider, NavContextConsumer, withNavContext };
