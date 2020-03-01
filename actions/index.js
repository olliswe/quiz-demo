import React from 'react'
import {fetchRoom, fetchRandomRoom} from "../mock_backend/qasurvey-backend";

export const handleSubmit = (submissionContext, navContext, questionContext) => {
    submissionContext.dispatch({type:"SUBMIT"});
    fetchRandomRoom(submissionContext.state.input)
        .then(res=> {
                console.log(res)
                if (!!res.question){
                    console.log(res)
                    submissionContext.dispatch({type:"SUCCESS"});
                    navContext.dispatch({type:"SUCCESS"});
                    questionContext.dispatch({type:"SET_QUESTION", payload:{answers:res.answers, question:res.question, roomId:res.id}})
                } else{
                    submissionContext.dispatch({type:"ERROR"})
                }
            }
        )
        .catch(error=>{
            console.log(error)
            submissionContext.dispatch({type:"ERROR"})
        })
}

