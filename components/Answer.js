import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'

export default class Answer extends Component {

	render(){
		return (
			<View>
        <Text style={[styles.bigblue]}>Question:</Text>
        <Text style={[styles.bigblue]}>Answer:</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          // increment corectCount
          title='correct (I was right)'
        />
        <Button
          onPress={() => this.props.navigation.goBack()}
          // decrement correctCount
          title='incorrect (I was wrong)'
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
