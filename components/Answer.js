import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { MyStyles } from '../utils/MyStyles'
import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'
import {
	primaryColor,
	primaryLightColor,
	primaryDarkColor,
	secondaryColor,
	secondaryLightColor,
	secondaryDarkColor,
	primaryTextColor,
	secondaryTextColor,
} from '../utils/colors'

const SiconContainer = styled.TouchableHighlight`
	background-color: ${secondaryDarkColor};
	margin: 3px;
	padding: 5px;
	border-radius: 8px;
	width: 50px;
	height: 50px;
	margin-right: 20px;
`

export default class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thisDeck: this.props.navigation.state.params.thisDeck,
      questionNo: this.props.navigation.state.params.questionNo,
      correctCount: this.props.navigation.state.params.correctCount
    }
  }

	render(){
		return (
      <View
        style={[MyStyles.background]}
        >
        <Text style={[MyStyles.text]}>Answer:</Text>
        <Text style={[MyStyles.text]}>{this.state.thisDeck.questions[this.state.questionNo -1].answer}</Text>

        <SiconContainer>
          <FontAwesome
            name='thumbs-up'
            onPress={() => this.props.navigation.navigate(
              'Quiz',
              {
                thisDeck: this.state.thisDeck,
                questionNo: this.state.questionNo + 1,
                correctCount: this.state.correctCount + 1,
              }
            )}
            color={secondaryTextColor}
            size={40}
            accessibilityLabel='Correct (I was right)'
          />
        </SiconContainer>

        <SiconContainer>
          <FontAwesome
            name='thumbs-down'
            onPress={() => this.props.navigation.navigate(
              'Quiz',
              {
                thisDeck: this.state.thisDeck,
                questionNo: this.state.questionNo + 1,
                correctCount: this.state.correctCount,
              }
            )}
            color={secondaryTextColor}
            size={40}
            accessibilityLabel='Incorrect (I was wrong)'
          />
        </SiconContainer>

			</View>
		)
	}
}
