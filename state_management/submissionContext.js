import React, {createContext} from 'react'


const SubmissionContext = createContext();


let initialState = {
    input:'',
    submissionState:'awaiting_submission'
};


let reducer = (state, action) => {

    switch (action.type) {
        case "SET_INPUT":
            return {...state, input:action.payload.input}
        case "SUBMIT":
            return {...state,submissionState:'loading'};
        case "SUCCESS":
            return {input:'',submissionState:'awaiting_submission'};
        case "ERROR":
            return {...state,submissionState:'error'};
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
