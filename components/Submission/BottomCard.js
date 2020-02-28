import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import themes from "../../themes";


const BottomCard = () => {
    return (
        <View style={[styles.outerBox,themes.shadow]}>
            <View style={[styles.innerBox,themes.shadow]}>
                <Text
                style={styles.text}
                >Process Hello
                </Text>
            </View>
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
        alignItems:'center'
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
