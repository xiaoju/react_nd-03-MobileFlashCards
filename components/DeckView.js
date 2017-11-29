import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'

export default class DeckView extends Component {

	render(){
		return (
			<View>
        <Text style={[styles.bigblue]}>{this.props.navigation.state.params.thisDeck.key}</Text>
				<Text style={[styles.bigblue]}>{this.props.navigation.state.params.thisDeck.questions.length} cards</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Quiz')}
          title='Start quiz'
        />
        <Button
          onPress={() => this.props.navigation.navigate(
            'AddQuestion',
            {deckTitle: this.props.navigation.state.params.thisDeck.key}
          )}
          title='Add question'
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
