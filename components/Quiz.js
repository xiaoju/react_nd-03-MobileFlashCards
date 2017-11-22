import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'

export default class Quiz extends Component {

	render(){
		return (
			<View>
        <Text style={[styles.bigblue]}>xx/xx</Text>
        <Text style={[styles.bigblue]}>Question:</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Answer')}
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
