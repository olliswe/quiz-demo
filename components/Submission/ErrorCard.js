import React, {useEffect, useState} from 'react';
import {View, Animated, StyleSheet, Text} from 'react-native'

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
                <Text
                style={styles.text}
                >
                    Can't process the link!
                </Text>
                <Text
                    style={styles.text}
                >
                    Check for typos or try to use another one
                </Text>
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
        color:'white'
    }
})

export default ErrorCard;
