import {StyleSheet} from 'react-native'


const themes = StyleSheet.create(
    {
        shadow:{
            elevation:10,
            shadowColor: 'white',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
        },
        shadowInner:{
            borderWidth: 30,
            shadowColor: 'black',
            shadowRadius: 10,
            shadowOpacity: 1,
        }
    }
)

export const purpleColor = 'rgb(165,65,248)'

export default themes