import React, {useEffect, useContext} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {withNavContext} from "./state_management/navContext";
import {NavContext} from "./state_management/navContext";

function App(props) {

  let navContext = useContext(NavContext)
  let navState = navContext.state


  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default withNavContext(App)