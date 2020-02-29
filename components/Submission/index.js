import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Animated, TextInput} from 'react-native'
import {SubmissionContext} from "../../state_management/submissionContext";
import BottomCard from "./BottomCard";
import {fetchRoom} from '../../mock_backend/qasurvey-backend'
import * as Progress from 'react-native-progress';
import {handleSubmit} from "../../actions";
import {NavContext} from "../../state_management/navContext";
import {QuestionContext} from "../../state_management/questionContext";

const Submission = (props) => {
    let submissionContext = useContext(SubmissionContext)
    let navContext = useContext(NavContext)
    let questionContext = useContext(QuestionContext)





    return (
        <View style={styles.container}>
            <View
            style={styles.textInputWrapper}
            >
                <TextInput
                placeholder={'Write 4-digit room ID here'}
                style={styles.textInput}
                value={submissionContext.state.input}
                onChangeText={(text)=>{
                    submissionContext.dispatch({type:'SET_INPUT',payload:{'input':text}})
                }}
                onSubmitEditing={()=> {
                    handleSubmit(submissionContext, navContext, questionContext)
                }}
                />
            </View>
            {submissionContext.state.state==='loading' &&
            <View style={styles.loadingBar}>
                <Progress.Bar
                    width={300}
                    height={10}
                    indeterminate={true}
                    color='purple'
                />
            </View>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:3,
        flexDirection:'column',
    },
    loadingBar:{
        position:'relative',
        top:'20%',
        width:'100%',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInputWrapper:{
        position:'relative',
        top:0,
        alignSelf: 'center',
        justifyContent: 'center',
        width:'100%',
    },

    textInput:{
        borderColor:'purple',
        borderWidth:1,
        borderRadius:50,
        height:60,
        width:'80%',
        padding:10,
        alignSelf:'center',
        paddingLeft:30
    }
})

export default Submission;
