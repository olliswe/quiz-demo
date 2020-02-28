import React, {createContext} from 'react'
import * as SecureStore from 'expo-secure-store';


const SubmissionContext = createContext()


let initialState = 'awaiting_submission';


let reducer = (state, action) => {

    switch (action.type) {
        case "SUBMIT":
            return 'loading';
        case "ERROR":
            return 'error';
    }
};

const SubmissionContextProvider = (props) => {
    // [A]
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };


    // [B]
    return (
        <SubmissionContext.Provider value={value}>{props.children}</SubmissionContext.Provider>
    );
}


let SubmissionContextConsumer = SubmissionContext.Consumer;

const withSubmissionContext =  (WrappedComponent) => {
    return (
        function(props){
            return(
                <SubmissionContextProvider><WrappedComponent {...props}/></SubmissionContextProvider>
            )
        }
    );
};



export { SubmissionContext, SubmissionContextProvider, SubmissionContextConsumer, withSubmissionContext };
