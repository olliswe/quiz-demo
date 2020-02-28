import React, {createContext} from 'react'


const NavContext = createContext()


let initialState = 'submission';


let reducer = (state, action) => {

    switch (action.type) {
        case "SUCCESS":
            return 'question';
        case "ANSWER":
            return 'poll';
        case "START_OVER":
            return 'submission';
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
