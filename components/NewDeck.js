import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TextInput } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'
import { saveDeckTitle } from '../utils/api'

export default class NewDeck extends Component {

  constructor(props) {
    super(props);
    this.state = {inputText: ''}
  }

	render(){
		return (
			<View>
        <Text style={[styles.bigblue]}>Title:</Text>

        <TextInput
          style = {{height: 50}}
          placeholder = 'Type new deck title here'
          value = {this.state.inputText}
          multiline = {true}
          onChangeText = {(inputText) => this.setState({inputText})}
        />

        <Button
          onPress={ () =>
            {
              saveDeckTitle(this.state.inputText)
              .then ( newDeck => this.props.navigation.navigate('DeckView', {thisDeck: newDeck }))
              .then (this.setState({inputText: ''}))
            }
          }
          title='Create Deck'
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
