import React, {useContext} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import themes from "../../themes";
import {SubmissionContext} from "../../state_management/submissionContext";
import {handleSubmit} from "../../actions";
import {NavContext} from "../../state_management/navContext";
import {QuestionContext} from "../../state_management/questionContext";



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
        <View style={[styles.outerBox,themes.shadow]}>
            <TouchableOpacity
                style={[styles.innerBox,themes.shadow]}
                onPress={handlePress}
                disabled={submissionContext.state.state === 'loading' }
            >
                    <Text
                    style={styles.text}
                    >
                        {navContext.state === 'submission' ?
                            (submissionContext.state.state === 'loading' ?
                                    '...'
                                    :
                                    'Process'
                            )
                            :
                            'Start Over'
                        }
                    </Text>
            </TouchableOpacity>

</View>
    );
};


const styles = StyleSheet.create({
    outerBox:{
        height:150,
        width:"100%",
        borderTopLeftRadius:44,
        borderTopRightRadius:44,
        backgroundColor:'purple',
        justifyContent:'center',
        alignItems:'center',
        zIndex: 100
    },
    innerBox:{
        width:"70%",
        height:50,
        justifyContent: 'center',
        backgroundColor: 'purple',
        borderRadius:50,
    },
    text:{
        width:'100%',
        textAlign:'center',
        color:'white'
    }
})

export default BottomCard;
