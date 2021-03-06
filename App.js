import React, {useEffect, Fragment,useContext, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Animated, Keyboard} from 'react-native';
import {withNavContext} from "./state_management/navContext";
import {NavContext} from "./state_management/navContext";
import Submission from "./components/Submission";
import Question from "./components/Question";
import Poll from "./components/Poll";
import BottomCard from "./components/BottomCard";
import {SubmissionContext, withSubmissionContext} from "./state_management/submissionContext";
import {fetchRoom} from "./mock_backend/qasurvey-backend";
import ErrorCard from "./components/ErrorCard";
import {withQuestionContext} from "./state_management/questionContext";
import * as Font from 'expo-font';
import {LinearGradient} from "expo-linear-gradient";
import { Dimensions } from 'react-native';


function App(props) {

  console.disableYellowBox = true

  const [popupAnim, setPopupAnim] = useState(new Animated.Value(-150));
  const [fontLoaded, setFontLoaded] = useState(false)
  const [submissionAnim, setSubmissionAnim] = useState(new Animated.Value(screenHeight*0.35));
  const [questionAnim, setQuestionAnim] = useState(new Animated.Value(-screenHeight*0.5));
  const [pollAnim, setPollAnim] = useState(new Animated.Value(-screenHeight*0.5));
  const [showBottomCard, setShowBottomCard] = useState(true)

  const screenHeight = Math.round(Dimensions.get('window').height);



  let navContext = useContext(NavContext)
  let submissionContext = useContext(SubmissionContext)

  useEffect (()=>{

      Font.loadAsync({
          'helvetica-neue': require('./assets/fonts/HelveticaNeueLt.ttf'),
      }).then(res=>setFontLoaded(true));



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
        },100
    )
  }, [popupAnim])

  useEffect(() => {

    if (navContext.state === 'submission'){
      setSubmissionAnim(new Animated.Value(screenHeight*0.35));
      setQuestionAnim(new Animated.Value(-screenHeight*0.5));
      setPollAnim(new Animated.Value(-screenHeight*0.5))

    } else if (navContext.state === 'question'){
      Animated.parallel([
      Animated.spring(questionAnim, {
            toValue: screenHeight*0.2,
            duration: 3000,
          }),
      Animated.spring(submissionAnim, {
          toValue: screenHeight*1.5,
          duration: 3000,
        }),

          ]).start()


    } else if (navContext.state === 'poll'){
          Animated.parallel([
            Animated.spring(questionAnim, {
              toValue: screenHeight*1.5,
              duration: 2000,
            }),
            Animated.spring(pollAnim, {
              toValue: screenHeight*0.2,
              duration: 2000,
            }),

          ]).start()

    }


  }, [navContext.state]);




  return (
    <LinearGradient
        colors={['rgb(212,229,244)','rgb(239,245,250)']}
        start={[0.5,1]}
        end={[0.5,0]}
        style={styles.container}>
        {fontLoaded &&
        <Fragment>
            {submissionContext.state.submissionState === 'error' &&
            <ErrorCard/>
            }
            <Animated.View
                style={[styles.card, {top: submissionAnim}]}
            >
                <Submission/>
            </Animated.View>
            <Animated.View
                style={[styles.card, {top: questionAnim}]}
            >
                <Question/>
            </Animated.View>
            <Animated.View
                style={[styles.card, {top: pollAnim}]}
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
        </Fragment>
        }
    </LinearGradient>

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