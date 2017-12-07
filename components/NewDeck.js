import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/api'
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
import styled from 'styled-components/native'

const SView = styled.View`
  background-color: ${secondaryLightColor};
`

export default class NewDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {inputText: ''}
  }

	render(){
		return (
			<SView>
        <Text
          style={{fontSize: 40, fontWeight: 'bold'}}
          >Title:</Text>

        <TextInput
          style = {{fontSize: 30, height: 300}}
          placeholder = 'Type here a title for your new deck'
          value = {this.state.inputText}
          multiline = {true}
          onChangeText = {(inputText) => this.setState({inputText})}
        />

        <View
          backgroundColor={primaryColor}
          width={200}
          padding= {5}
          margin= {20}
          border-radius= {8}>

            <Button
                onPress={ () =>
                  {
                    this.state.inputText.length > 0 &&
                    saveDeckTitle(this.state.inputText)
                    .then ( newDeck => this.props.navigation.navigate('DeckView', {thisDeck: newDeck }))
                    .then (this.setState({inputText: ''}))
                  }
                }

              title="Submit"
              accessibilityLabel="Create a new deck of flashcards"
            />
        </View>
			</SView>
		)
	}
}
