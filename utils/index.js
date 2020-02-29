import React from 'react'
import {fetchRoom} from "../mock_backend/qasurvey-backend";

export const handleSubmit = (submissionContext, navContext, questionContext) => {
    submissionContext.dispatch({type:"SUBMIT"})
    fetchRoom(submissionContext.state.input)
        .then(res=> {
                if (!!res.question){
                    submissionContext.dispatch({type:"SUCCESS"});
                    navContext.dispatch({type:"SUCCESS"})
                    questionContext.dispatch({type:"SET_QUESTION", payload:{answers:res.answers, question:res.question, roomId:res.id}})
                } else{
                    submissionContext.dispatch({type:"ERROR"})
                }
            }
        )
        .catch(error=>{
            submissionContext.dispatch({type:"ERROR"})
        })
}

