import React, {useState, useEffect, useSate} from 'react';
import {View, Text, StyleSheet, Animated, TextInput} from 'react-native'
import {withSubmissionContext} from "../../state_management/submissionContext";
import BottomCard from "./BottomCard";
import {fetchRoom} from '../../mock_backend/qasurvey-backend'
import * as Progress from 'react-native-progress';

const Submission = (props) => {
    const [popupAnim, setPopupAmin] = useState(new Animated.Value(-150))
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)


    useEffect(()=>{
        setTimeout(()=> {
                Animated.spring(popupAnim, {
                    toValue: -20,
                    duration: 200,
                }).start();
            },200
        )
    }, [popupAnim])




    const handleSubmit = (withPop=false) => {
        setLoading(true)
        setError(false)
        console.log(withPop)
        if (withPop===true){
            setPopupAmin(new Animated.Value(-150))
        }
        fetchRoom(input)
            .then(res=> {
                    // console.log(res)
                    setLoading(false)
                }
            )
            .catch(error=>{
                setError(true)
                setLoading(false)
            })
    }

    // useEffect(() => {
    //     runBottomAnimation()
    // }, []);

    return (
        <View style={styles.container}>
            <View
            style={styles.textInputWrapper}
            >
                <TextInput
                placeholder={'Write 4-digit room ID here'}
                style={styles.textInput}
                value={input}
                onChangeText={(text)=>{setInput(text)}}
                onSubmitEditing={()=>handleSubmit(true)}
                />
            </View>
            {loading &&
            <View style={styles.loadingBar}>
                <Progress.Bar
                    width={300}
                    height={10}
                    indeterminate={true}
                    color='purple'
                />
            </View>
            }
            <Animated.View style={{...styles.bottomCard, marginBottom:popupAnim}}>
                <BottomCard
                action={handleSubmit}
                loading={loading}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
    },
    bottomCard:{
        flex: 1,
        justifyContent: 'flex-end',
    },
    loadingBar:{
        position:'absolute',
        top:'50%',
        width:'100%',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textInputWrapper:{
        position:'absolute',
        top:'40%',
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

export default withSubmissionContext(Submission);
