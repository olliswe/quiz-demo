import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import themes from "../../themes";
import {QuestionContext} from "../../state_management/questionContext";

const Poll = (props) => {
    let questionContext = useContext(QuestionContext)

    return (
        <View
            style={[styles.card,themes.shadow]}
        >
            <Text>
                {questionContext.state.answers && questionContext.state.answers.Yes}
            </Text>
            <Text>
                {questionContext.state.answers && questionContext.state.answers.No}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        width:'90%',
        margin:'5%',
        height:200,
        backgroundColor: 'rgb(212, 229, 244)'
    },})

export default Poll;
