import React, { Component } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, Text, Button, TextInput } from 'react-native'
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
import { addCardToDeck } from '../utils/api'

export default class NewDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: '',
      answer: ''
    }
  }

	render(){
		return (

			<KeyboardAvoidingView
        style={[styles.background]}
        >
          
        <Text style={[styles.text]}>Type question and answer:</Text>

        <TextInput
          style = {[styles.textInput]}
          placeholder = 'A question...'
          value = {this.state.question}
          multiline = {true}
          onChangeText = {(question) => this.setState({question})}
        />

        <TextInput
          style = {[styles.textInput]}
          placeholder = 'An answer...'
          value = {this.state.answer}
          multiline = {true}
          onChangeText = {(answer) => this.setState({answer})}
        />

        <View
          backgroundColor={primaryColor}
          width={200}
          padding= {5}
          margin= {20}
          border-radius= {8}
          behavior="padding">
            <Button
              onPress={ () =>
                {
                  addCardToDeck(this.props.navigation.state.params.deckTitle,{question: this.state.question, answer: this.state.answer})
                  alert('Question added!')
                  this.props.navigation.goBack(null)
                }
              }
              title="Submit"
              accessibilityLabel="Create a new deck of flashcards"
            />
        </View>

			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: secondaryLightColor,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: secondaryTextColor,
  },
  button: {
    color: 'red',
  },
  textInput: {
    fontSize: 30,
    height: 100,
    color: secondaryTextColor,
  },
})
