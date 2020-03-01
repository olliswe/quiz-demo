import React, {createContext} from 'react'
import {submitAnswer} from "../mock_backend/qasurvey-backend";

const QuestionContext = createContext()


let initialState = {
    answers:null,
    question:null,
    roomId:null
};


let reducer = (state, action) => {

    switch (action.type) {
        case "SET_QUESTION":
            return {answers:action.payload.answers, question:action.payload.question, roomId:action.payload.roomId};
        case "ANSWER_QUESTION":
            console.log(action.payload.roomId)
            console.log(action.payload.answer)
            submitAnswer(action.payload.roomId, action.payload.answer)
                .then(res=>{console.log(res)})
                .catch(error=>{alert(error)})
            if (action.payload.answer==='Yes'){
                return {...state, answers:{...state.answers,Yes:state.answers.Yes+1}}
            } else {
                return {...state, answers:{...state.answers,No:state.answers.No+1}}

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
