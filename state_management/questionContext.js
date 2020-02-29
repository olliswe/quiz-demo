import React, {createContext} from 'react'


const QuestionContext = createContext()


let initialState = {
    answers:null,
    question:null,
    roomId:null
};


let reducer = (state, action) => {

    switch (action.type) {
        case "SET_QUESTION":
            return {answers:action.payload.answers, question:action.payload.question, roomId:action.payload.roomId}
        case "ANSWER_QUESTION":
            if (action.payload.answer==='yes'){
                //increase answer YES by 1
            } else {
                //increase answer NO by 1
            }
    }
};

const QuestionContextProvider = (props) => {
    // [A]
    let [state, dispatch] = React.useReducer(reducer, initialState);
    let value = { state, dispatch };


    // [B]
    return (
        <QuestionContext.Provider value={value}>{props.children}</QuestionContext.Provider>
    );
}


let QuestionContextConsumer = QuestionContext.Consumer;

const withQuestionContext =  (WrappedComponent) => {
    return (
        function(props){
            return(
                <QuestionContextProvider><WrappedComponent {...props}/></QuestionContextProvider>
            )
        }
    );
};





export { QuestionContext, QuestionContextProvider, QuestionContextConsumer, withQuestionContext };
