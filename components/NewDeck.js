import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput, TouchableHighlight } from 'react-native'
import { saveDeckTitle } from '../utils/api'
import { FontAwesome } from '@expo/vector-icons'
import { MyStyles } from '../utils/MyStyles'

export default class NewDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {inputText: ''}
  }

	render(){
		return (
			<View style={[MyStyles.background]}>
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

				<TouchableHighlight style={[MyStyles.iconContainer]}>
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
						size={40}
						accessibilityLabel="Submit title of new deck"
					/>
				</TouchableHighlight>

			</View>
		)
	}
}
