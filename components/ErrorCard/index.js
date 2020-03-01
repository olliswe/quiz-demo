import React, {useEffect, useState} from 'react';
import {View, Animated, StyleSheet} from 'react-native'
import CustomText from "../Text/CustomText";

const ErrorCard = (props) => {

    const [popdownAnim, setPopdownAnum] = useState(new Animated.Value(-200))

    useEffect(()=>{
                Animated.spring(popdownAnim, {
                    toValue: -20,
                    duration: 200,
                }).start();
    }, [popdownAnim])

    return (
        <Animated.View
        style={{
            position:'absolute',
            top:popdownAnim,
            width:'100%'
        }}
        >
            <View
            style={styles.card}
            >
                <CustomText
                style={styles.text}
                >
                    Can't process the link!
                </CustomText>
                <CustomText
                    style={styles.text}
                >
                    Check for typos or try to use another one
                </CustomText>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'rgba(151,57,228,0.76)',
        height:110,
        paddingTop:60,
        padding:20
    },
    text:{
        color:'white',
        fontSize:16
    }
})

export default ErrorCard;
