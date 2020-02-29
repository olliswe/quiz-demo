import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {QuestionContext} from "../../state_management/questionContext";
import themes from "../../themes";
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
                <Text
                style={styles.questionTop}
                >
                    The question is:
                </Text>
                <Text
                style={styles.question}
                >
                    {questionContext.state.question}
                </Text>
            </View>
            <View
            style={styles.row}
            >
            <TouchableOpacity
            style={[styles.button, themes.shadow]}
            onPress={()=>handleAnswer('yes')}
            >
                <Text
                style={styles.buttonText}
                >YES</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.button, themes.shadow]}
            onPress={()=>handleAnswer('no')}
            >
                <Text
                style={styles.buttonText}
                >NO</Text>
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
        color:'purple',
        marginTop:20,
        marginLeft:20,
    },
    question:{
      marginTop:20,
      marginLeft:20,
      fontSize:20,
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
    buttonText:{
        color:'purple',
        fontSize:20
    }
})

export default Question;
