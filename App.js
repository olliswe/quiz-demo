import React, {useEffect, useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Animated, Keyboard} from 'react-native';
import {withNavContext} from "./state_management/navContext";
import {NavContext} from "./state_management/navContext";
import Submission from "./components/Submission";
import Question from "./components/Question";
import Poll from "./components/Poll";
import BottomCard from "./components/Submission/BottomCard";
import {compose} from 'redux'
import {SubmissionContext, withSubmissionContext} from "./state_management/submissionContext";
import {fetchRoom} from "./mock_backend/qasurvey-backend";
import ErrorCard from "./components/Submission/ErrorCard";
import {withQuestionContext} from "./state_management/questionContext";

function App(props) {
  const [popupAnim, setPopupAnim] = useState(new Animated.Value(-150));


  const [submissionAnim, setSubmissionAnim] = useState(new Animated.Value(250));
  const [questionAnim, setQuestionAnim] = useState(new Animated.Value(-500));
  const [pollAnim, setPollAnim] = useState(new Animated.Value(-500));

  const [showBottomCard, setShowBottomCard] = useState(true)


  let navContext = useContext(NavContext)
  let submissionContext = useContext(SubmissionContext)

  useEffect (()=>{
    Keyboard.addListener('keyboardDidShow', ()=>{
      setShowBottomCard(false)
    })
    Keyboard.addListener('keyboardDidHide', ()=>{
      setShowBottomCard(true)
      setPopupAnim(new Animated.Value(-150))
    })
  },[])

  useEffect(()=>{
    setTimeout(()=> {
          Animated.spring(popupAnim, {
            toValue: -20,
            duration: 200,
          }).start();
        },200
    )
  }, [popupAnim])

  useEffect(() => {

    if (navContext.state === 'submission'){
      setSubmissionAnim(new Animated.Value(250));
      setQuestionAnim(new Animated.Value(-500));
      setPollAnim(new Animated.Value(-500))

    } else if (navContext.state === 'question'){
      Animated.parallel([
      Animated.spring(questionAnim, {
            toValue: 150,
            duration: 1000,
          }),
      Animated.spring(submissionAnim, {
          toValue: 1000,
          duration: 1000,
        }),

          ]).start()


    } else if (navContext.state === 'poll'){
          Animated.parallel([
            Animated.spring(questionAnim, {
              toValue: 1000,
              duration: 1000,
            }),
            Animated.spring(pollAnim, {
              toValue: 150,
              duration: 1000,
            }),

          ]).start()

    }


  }, [navContext.state]);




  return (
    <View style={styles.container}>
      {submissionContext.state.state === 'error' &&
        <ErrorCard/>
      }
      <Animated.View
          style={[styles.card,{top:submissionAnim}]}
      >
          <Submission/>
      </Animated.View>
      <Animated.View
          style={[styles.card,{top:questionAnim}]}
      >
          <Question/>
      </Animated.View>
      <Animated.View
          style={[styles.card,{top:pollAnim}]}
      >
          <Poll/>
      </Animated.View>
      <View
      style={styles.placeholder}
      >
        {showBottomCard &&
        <Animated.View style={{...styles.bottomCard, marginBottom: popupAnim}}
        >
          <BottomCard
          />
        </Animated.View>
        }
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(212, 229, 244)',
    flex:1,
  },
  card:{
    position:'absolute',
    width:'100%',
  },

  placeholder:{
    height:200,
    position:'absolute',
    bottom:0,
    width:'100%'
  },
  bottomCard:{
    flex: 1,
    justifyContent: 'flex-end',
  },
});


export default withQuestionContext(withNavContext(withSubmissionContext((App))))