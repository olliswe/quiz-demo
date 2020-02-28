import {StyleSheet} from 'react-native'


const themes = StyleSheet.create(
    {
        shadow:{
            elevation:10,
            shadowColor: 'white',
            shadowOffset: { width: 0, height: 5 },
            shadowOpacity: 0.3,
            shadowRadius: 8,
        }
    }
)

export default themes