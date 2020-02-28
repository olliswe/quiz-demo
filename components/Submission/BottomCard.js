import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import themes from "../../themes";


const BottomCard = (props) => {
    return (
        <View style={[styles.outerBox,themes.shadow]}>
            <TouchableOpacity
                style={[styles.innerBox,themes.shadow]}
                onPress={props.action}
                disabled={props.loading}
            >
                    <Text
                    style={styles.text}
                    >
                        {props.loading ?
                            '...'
                            :
                            'Process'
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
