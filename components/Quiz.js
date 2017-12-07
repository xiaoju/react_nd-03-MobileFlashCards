import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
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

export default class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thisDeck: this.props.navigation.state.params.thisDeck,
      questionNo: this.props.navigation.state.params.questionNo,
      correctCount: this.props.navigation.state.params.correctCount,
    }
  }

	render(){

		return (
      <View
        style={[MyStyles.background]}
        >
        {
          this.state.questionNo > this.state.thisDeck.questions.length ?
          <View>
            <Text style={[MyStyles.text]}>Quiz is complete!</Text>
            <Text style={[MyStyles.text]}>Your score:</Text>

            


            <Text style={[MyStyles.text]}>
              {Math.round(this.state.correctCount / this.state.thisDeck.questions.length * 100)}%
            </Text>
          </View>
          :
    			<View>
            <Text style={[MyStyles.smallText]}>{this.state.questionNo}/{this.state.thisDeck.questions.length}</Text>
            <Text style={[MyStyles.text]}>{this.state.thisDeck.questions[this.state.questionNo - 1].question}</Text>
          </View>
        }

        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>

          <SiconContainer>
            <FontAwesome
              name='home'
              onPress={() => this.props.navigation.navigate('DeckView',{thisDeck: this.state.thisDeck})}
              color={secondaryTextColor}
              size={40}
              accessibilityLabel='Return to individual deck view'
            />
          </SiconContainer>

          <SiconContainer>
            <FontAwesome
              name='refresh'
              onPress={() => this.props.navigation.navigate(
                'Quiz',
                {
                  thisDeck: this.state.thisDeck,
                  questionNo: 1,
                  correctCount: 0,
                }
              )}
              color={secondaryTextColor}
              size={40}
              accessibilityLabel='Restart quiz'
            />
          </SiconContainer>

          <SiconContainer>
            <FontAwesome
              name='arrow-right'
              onPress={() => this.props.navigation.navigate(
                'Answer',
                {
                  thisDeck: this.state.thisDeck,
                  questionNo: this.state.questionNo,
                  correctCount: this.state.correctCount,
                }
              )}
              color={secondaryTextColor}
              size={40}
              accessibilityLabel='Next: view answer'
            />
          </SiconContainer>

  			</View>
      </View>
		)
	}
}
