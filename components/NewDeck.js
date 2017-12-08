import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { FontAwesome } from '@expo/vector-icons'
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
  background-color: ${secondaryLightColor}
	flex: 1;
	justify-content: space-between;
`
const SiconContainer = styled.TouchableHighlight`
	background-color: ${secondaryDarkColor};
	margin: 10px;
	padding: 5px;
	border-radius: 8px;
	width: 60px;
	height: 60px;
	margin-right: 20px;
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

				<SiconContainer>
					<FontAwesome
						name='check'
						onPress={ () =>
							{
								this.state.inputText.length > 0 &&
								saveDeckTitle(this.state.inputText)
								.then ( newDeck => this.props.navigation.navigate('DeckView', {thisDeck: newDeck }))
								.then (this.setState({inputText: ''}))
							}
						}
						color={secondaryTextColor}
						size={40}
						accessibilityLabel="Submit title of new deck"
					/>
				</SiconContainer>

			</SView>
		)
	}
}
