import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'
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

			<View>
        <Text style={[styles.bigblue]}>Type question and answer:</Text>

        <TextInput
          style = {{height: 50}}
          placeholder = 'A question...'
          value = {this.state.question}
          multiline = {true}
          onChangeText = {(question) => this.setState({question})}
        />

        <TextInput
          style = {{height: 50}}
          placeholder = 'An answer...'
          value = {this.state.answer}
          multiline = {true}
          onChangeText = {(answer) => this.setState({answer})}
        />

        <Button
          onPress={ () =>
            {
              addCardToDeck(this.props.navigation.state.params.deckTitle,{question: this.state.question, answer: this.state.answer})
              alert('Question added!')
              this.props.navigation.goBack(null)
            }
          }

          title='Submit'
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
