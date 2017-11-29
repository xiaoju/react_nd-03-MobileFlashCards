import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'

export default class Quiz extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thisDeck: this.props.navigation.state.params.thisDeck,
      questionNo: this.props.navigation.state.params.questionNo,
    }
  }

	render(){

    // if questionNo === thisDeck.questions.length
    // then show the score SubScreen.
    // otherwise show quiz SubScreen

		return (
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
          onPress={() => this.props.navigation.navigate('DecksList')}
          // reset score, currentQuestion, correctCount and incorrectCount
          title='Back to decks list'
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
