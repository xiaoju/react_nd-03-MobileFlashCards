import React, { Component } from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import { MyStyles } from '../utils/MyStyles'

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
      <View style={[MyStyles.background]}>
        {this.state.questionNo > this.state.thisDeck.questions.length ?
          this.state.thisDeck.questions.length === 0
          ?
          <View style={[MyStyles.infoView]}>
            <Text style={[MyStyles.text]}>Add cards before starting the quiz!</Text>
            <Text style={[MyStyles.smallText]}>For that, press the + button.</Text>
            <Text style={[MyStyles.smallText]}>Also, you see the double arrow icon below? This will be to restart tests.</Text>
          </View>
          :
          <View style={[MyStyles.infoView]}>
            <Text style={[MyStyles.text]}>Complete!</Text>
            <Text style={[MyStyles.text]}>Your score:</Text>
            <Text style={[MyStyles.text]}>
              {Math.round(this.state.correctCount / this.state.thisDeck.questions.length * 100)}%
            </Text>
          </View>
          :
          <View style={[MyStyles.infoView]}>
            <Text style={[MyStyles.smallText]}>{this.state.questionNo}/{this.state.thisDeck.questions.length}</Text>
            <Text style={[MyStyles.text]}>{this.state.thisDeck.questions[this.state.questionNo - 1].question}</Text>
          </View>
        }

        <View style={[MyStyles.iconsBar]}>
          { this.state.questionNo > this.state.thisDeck.questions.length ||
            <TouchableHighlight style={[MyStyles.iconContainer]}>
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
                size={40}
                accessibilityLabel='Next: view answer'
              />
            </TouchableHighlight>
          }

          <TouchableHighlight style={[MyStyles.iconContainer]}>
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
              size={40}
              accessibilityLabel='Restart quiz'
            />
          </TouchableHighlight>

          { this.state.thisDeck.questions.length === 0 &&
          <TouchableHighlight style={[MyStyles.iconContainer]}>
            <FontAwesome
              name='plus'
              onPress={() => this.props.navigation.navigate(
                'AddQuestion',
                {deckTitle: this.state.thisDeck.key}
              )}
              size={40}
              accessibilityLabel="Add a question"
            />
          </TouchableHighlight> }

          <TouchableHighlight style={[MyStyles.iconContainer]}>
            <FontAwesome
              name='home'
              onPress={() => this.props.navigation.navigate('DeckView',{thisDeck: this.state.thisDeck})}
              size={40}
              accessibilityLabel='Return to individual deck view'
            />
          </TouchableHighlight>

  			</View>
      </View>
		)
	}
}
