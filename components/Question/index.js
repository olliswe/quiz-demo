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
    }

    return (
        <View
        style={[styles.card,themes.shadow]}
        >
            <Text>
                {questionContext.state.question}
            </Text>
            <View
            style={styles.row}
            >
            <TouchableOpacity
            style={styles.button}
            onPress={()=>handleAnswer('yes')}
            >
                <Text>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>handleAnswer('no')}

            >
                <Text>No</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        width:'90%',
        margin:'5%',
        height:200,
        backgroundColor: 'rgb(212, 229, 244)'
    },
    row:{
        flexDirection:'row'
    },
    button:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})

export default Question;
