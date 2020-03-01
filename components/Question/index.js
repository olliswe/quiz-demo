import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native'
import {QuestionContext} from "../../state_management/questionContext";
import CustomText from "../Text/CustomText";
import themes, {purpleColor} from "../../themes";
import {NavContext} from "../../state_management/navContext";


const Question = (props) => {

    let questionContext = useContext(QuestionContext)
    let navContext = useContext(NavContext)

    const handleAnswer = (answer) => {
        navContext.dispatch({type:'ANSWER'})
        questionContext.dispatch({type:'ANSWER_QUESTION',payload:{answer:answer}})
    }

    return (
        <View
        style={[styles.card,themes.shadow]}
        >
            <View
            style={styles.textContainer}
            >
                <CustomText
                style={styles.questionTop}
                >
                    The question is:
                </CustomText>
                <CustomText
                style={styles.question}
                >
                    {questionContext.state.question}
                </CustomText>
            </View>
            <View
            style={styles.row}
            >
            <TouchableOpacity
            style={[styles.button, themes.shadow]}
            onPress={()=>handleAnswer('yes')}
            >
                <CustomText
                style={styles.buttonCustomText}
                >YES</CustomText>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.button, themes.shadow]}
            onPress={()=>handleAnswer('no')}
            >
                <CustomText
                style={styles.buttonCustomText}
                >NO</CustomText>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        width:'90%',
        margin:'5%',
        minHeight:250,
        backgroundColor: 'rgb(212, 229, 244)',
        borderRadius:40,
        flexDirection:'column',
    },
    textContainer:{
      flex:1
    },
    questionTop:{
        color:purpleColor,
        marginTop:40,
        marginLeft:20,
        fontSize:16
    },
    question:{
      marginTop:20,
      marginLeft:20,
      fontSize:22,
    },
    row:{
        flexDirection:'row',
        flex:1
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:5,
        backgroundColor: 'rgb(212, 229, 244)',
        height:'50%',
        margin:5,
        borderRadius:10,
    },
    buttonCustomText:{
        color:purpleColor,
        fontSize:20
    }
})

export default Question;
