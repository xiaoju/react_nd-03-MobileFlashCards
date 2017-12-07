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
import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'

const SiconContainer = styled.TouchableHighlight`
	background-color: ${secondaryDarkColor};
	margin: 3px;
	padding: 5px;
	border-radius: 8px;
	width: 50px;
	height: 50px;
	margin-right: 20px;
`

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

            <SiconContainer>
    					<FontAwesome
    					  name='check'
                onPress={ () =>
                  {
                    addCardToDeck(this.props.navigation.state.params.deckTitle,{question: this.state.question, answer: this.state.answer})
                    alert('Question added!')
                    this.props.navigation.goBack(null)
                  }
                }
    					  color={secondaryTextColor}
    						size={40}
                accessibilityLabel="Add this card to the deck"
    					/>
    				</SiconContainer>

        </View>

			</KeyboardAvoidingView>
		)
	}
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: primaryColor,
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
