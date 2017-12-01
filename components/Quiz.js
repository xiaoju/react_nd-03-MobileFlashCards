import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'

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

      this.state.questionNo > this.state.thisDeck.questions.length ?
      <View>
        <Text>Quiz is complete!</Text>
        <Text>Your score:</Text>
        <Text>{Math.round(this.state.correctCount / this.state.thisDeck.questions.length * 100)}%</Text>

        <Button
          onPress={() => this.props.navigation.navigate('DecksList')}
          title='Back to decks list'
        />

      </View>
      :
			<View>
        <Text style={[styles.bigblue]}>{this.state.questionNo}/{this.state.thisDeck.questions.length}</Text>
        <Text style={[styles.bigblue]}>Question: </Text>
        <Text>{this.state.thisDeck.questions[this.state.questionNo - 1].question}</Text>
        <Button
          onPress={() => this.props.navigation.navigate(
            'Answer',
            {
              thisDeck: this.state.thisDeck,
              questionNo: this.state.questionNo,
              correctCount: this.state.correctCount,
            }
          )}
          title='View answer'
        />
        <Button
          // onPress={() => this.props.navigation.navigate('Answer')}
          // on press: reset score, currentQuestion, correctCount and incorrectCount
          title='Restart quiz'
        />
        <Button
          onPress={() => this.props.navigation.navigate('DeckView',{thisDeck: this.state.thisDeck})}
          title='Back to Deck'
        />
			</View>
		)
	}
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 50,
  },
  red: {
    color: 'red',
  },
})

// card question
// button 'view answer'
// button "Correct"
// button "Incorrect"

// number of cards left in the quiz
// percentage correct once the quiz is complete
