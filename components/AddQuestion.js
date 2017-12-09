import React, { Component } from 'react'
import {
	View,
	KeyboardAvoidingView,
	Text,
	Button,
	TextInput,
	TouchableHighlight,
} from 'react-native'
import { addCardToDeck } from '../utils/api'
import { FontAwesome } from '@expo/vector-icons'
import { MyStyles } from '../utils/MyStyles'

export default class NewDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {question: '', answer: ''}
  }

	render(){
		return (
			<KeyboardAvoidingView behavior='padding' style={[MyStyles.background]}>
        <Text style={[MyStyles.topInfo]}>Please input…</Text>

        <TextInput
          style = {[MyStyles.textInput]}
          placeholder = '…a question…'
          value = {this.state.question}
          multiline = {true}
          onChangeText = {(question) => this.setState({question})}
        />

        <TextInput
          style = {[MyStyles.textInput]}
          placeholder = '…and an answer!'
          value = {this.state.answer}
          multiline = {true}
          onChangeText = {(answer) => this.setState({answer})}
        />

				<View style={[MyStyles.iconsBar]}>
					<TouchableHighlight style={[MyStyles.iconContainer]}>
						<FontAwesome
						  name='check'
							onPress={ () =>
								{
									this.state.question.length > 0 &&
									this.state.answer.length > 0 &&
									addCardToDeck(
										this.props.navigation.state.params.deckTitle,
										{question: this.state.question, answer: this.state.answer})
									.then(()=>alert('Question added!'))
									.then(()=>this.props.navigation.goBack(null))
								}
							}
							size={40}
							accessibilityLabel="Add this card to the deck"
						/>
					</TouchableHighlight>
				</View>

			</KeyboardAvoidingView>
		)
	}
}
