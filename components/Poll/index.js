import React, {useContext} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import themes, {purpleColor} from "../../themes";
import {QuestionContext} from "../../state_management/questionContext";
import InsetShadow from 'react-native-inset-shadow'
import CustomText from "../Text/CustomText";

const shadowOpt = {
    width:100,
    height:100,
    color:"#000",
    border:2,
    radius:3,
    opacity:0.2,
    x:0,
    y:3,
    inset:true,
    style:{marginVertical:5}
}

const Poll = (props) => {
    let questionContext = useContext(QuestionContext)

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
                    Final results for:
                </CustomText>
                <CustomText
                    style={styles.question}
                >
                    {questionContext.state.question}
                </CustomText>
            </View>
            <View
                style={styles.answers}
            >
                <View
                    style={styles.row}
                >
                    <CustomText
                    style={styles.answerCustomText}
                    >
                        YES
                    </CustomText>
                    <View
                        style={{marginBottom:20}}
                    >
                        <View
                        style={styles.answerCounterWrapper}
                        >
                        <InsetShadow>
                            <View
                            style={styles.answerCounter}
                            >
                                <CustomText
                                >
                                    {questionContext.state.answers && questionContext.state.answers.Yes}
                                </CustomText>
                            </View>
                        </InsetShadow>
                        </View>
                    </View>
                </View>
                <View
                    style={styles.row}
                >
                    <CustomText style={styles.answerCustomText}
                    >
                        NO
                    </CustomText>
                    <View style={{marginBottom:20}}>
                        <View
                        style={styles.answerCounterWrapper}
                        >
                            <InsetShadow
                            >
                                <View
                                style={styles.answerCounter}
                                >
                                    <CustomText>
                                        {questionContext.state.answers && questionContext.state.answers.No}
                                    </CustomText>
                                </View>
                            </InsetShadow>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card:{
        width:'90%',
        margin:'5%',
        minHeight:300,
        backgroundColor: 'rgb(212, 229, 244)',
        borderRadius:40
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
    answers:{
        flexDirection:'column',
        flex:1,
        marginBottom:20,
        marginLeft:20,
        marginRight:20
    },
    row:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    answerCustomText:{
        fontSize:18,
        marginBottom:'5%',
    },
    answerCounter:{
        justifyContent: 'center',
        alignItems:'center',
        flex:1,
    },
    answerCounterWrapper:{
        width:60,
        borderRadius:4,
        overflow:'hidden'
    }
});

export default Poll;
