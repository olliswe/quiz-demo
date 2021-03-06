import React, {useState, useEffect, useContext} from 'react';
import {View, Text, StyleSheet, Animated, TextInput} from 'react-native'
import {SubmissionContext} from "../../state_management/submissionContext";
import Index from "../BottomCard";
import {fetchRoom} from '../../mock_backend/qasurvey-backend'
import * as Progress from 'react-native-progress';
import {handleSubmit} from "../../actions";
import {NavContext} from "../../state_management/navContext";
import {QuestionContext} from "../../state_management/questionContext";
import {purpleColor} from "../../themes";
import InsetShadow from "react-native-inset-shadow";

const Submission = (props) => {
    let submissionContext = useContext(SubmissionContext)
    let navContext = useContext(NavContext)
    let questionContext = useContext(QuestionContext)





    return (
        <View style={styles.container}>
            <View
            style={styles.textInputWrapper}
            >
                <InsetShadow
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
                        placeholderTextColor= {'rgba(49,69,106,0.6)'}
                    />
                </InsetShadow>
            </View>
            {submissionContext.state.submissionState==='loading' &&
            <View style={styles.loadingBar}>
                <Progress.Bar
                    width={300}
                    height={10}
                    indeterminate={true}
                    color={purpleColor}
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
        width:'80%',
        borderRadius:10,
        overflow:'hidden',
        height:60
    },

    textInput:{
        height:60,
        width:'100%',
        padding:10,
        alignSelf:'center',
        paddingLeft:30,
    }
})

export default Submission;
