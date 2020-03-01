import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import themes, {purpleColor} from "../../themes";
import {SubmissionContext} from "../../state_management/submissionContext";
import {handleSubmit} from "../../actions";
import {NavContext} from "../../state_management/navContext";
import {QuestionContext} from "../../state_management/questionContext";
import CustomText from "../Text/CustomText";



const BottomCard = (props) => {
    let submissionContext = useContext(SubmissionContext)
    let navContext = useContext(NavContext)
    let questionContext = useContext(QuestionContext)

    const handlePress = () => {
        if (navContext.state!=='submission'){
            navContext.dispatch({type:"START_OVER"})
        }else{
            handleSubmit(submissionContext, navContext, questionContext)
        }
    }

    return (
        <View
        style={[styles.wrapper,themes.shadow]}
        >
            <LinearGradient
                colors={['rgb(157,57,228)','rgb(196,127,253)']}
                start={[1,0.5]}
                end={[0,0.5]}
                style={[styles.outerBox]}
            >
                <TouchableOpacity
                    style={[styles.innerBox,themes.shadow]}
                    onPress={handlePress}
                    disabled={submissionContext.state.submissionState === 'loading' }
                >
                        <CustomText
                        style={styles.text}
                        >
                            {navContext.state === 'submission' ?
                                (submissionContext.state.submissionState === 'loading' ?
                                        '...'
                                        :
                                        'Process'
                                )
                                :
                                'Start Over'
                            }
                        </CustomText>
                </TouchableOpacity>
            </LinearGradient>
        </View>
    );
};


const styles = StyleSheet.create({
    wrapper:{
        borderTopLeftRadius:44,
        borderTopRightRadius:44,
        overflow:'hidden'
    },
    outerBox:{
        height:150,
        width:"100%",
        justifyContent:'center',
        alignItems:'center',
        zIndex: 100
    },
    innerBox:{
        width:"70%",
        height:50,
        justifyContent: 'center',
        backgroundColor: purpleColor,
        borderRadius:50,
    },
    text:{
        width:'100%',
        textAlign:'center',
        color:'white',
        fontSize:20
    }
})

export default BottomCard;
