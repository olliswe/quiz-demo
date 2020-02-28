import React, {useEffect, useContext} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import {withNavContext} from "./state_management/navContext";
import {NavContext} from "./state_management/navContext";
import Submission from "./components/Submission";
import Question from "./components/Question";
import Poll from "./components/Poll";

function App(props) {

  let navContext = useContext(NavContext)
  let navState = navContext.state


  return (
    <View style={styles.container}>
      {navState === 'submission' &&
          <Submission/>
       }
      {navState === 'question' &&
          <Question/>
      }
      {navState === 'poll' &&
           <Poll/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(212, 229, 244)',
    flex:1,
  },
});


export default withNavContext(App)