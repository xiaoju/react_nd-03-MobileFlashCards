import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import {
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers.js'
import { FontAwesome } from '@expo/vector-icons'
import { MyStyles } from '../utils/MyStyles'

export default class DeckView extends Component {

  constructor(props){
		super(props)
    this.state = { thisDeck: this.props.navigation.state.params.thisDeck}
  }

	render(){
		return (
			<View style={[MyStyles.background]}>
        <View style={[MyStyles.infoView]}>
          <Text
            style={{fontSize: 40, fontWeight: 'bold'}}
            >{this.state.thisDeck.key}</Text>
  				<Text
            style={{fontSize: 30}}
            >{this.state.thisDeck.questions.length} cards</Text>
        </View>

        <View style={[MyStyles.iconsBar]}>

          <TouchableHighlight style={[MyStyles.iconContainer]}>
            <FontAwesome
              name='home'
              onPress={() => this.props.navigation.navigate('DecksList')}
              size={40}
              accessibilityLabel="Return to decks list view"
            />
          </TouchableHighlight>

  				<TouchableHighlight style={[MyStyles.iconContainer]}>
  					<FontAwesome
  					  name='plus'
              onPress={() => this.props.navigation.navigate(
                'AddQuestion',
                {deckTitle: this.state.thisDeck.key}
              )}
  						size={40}
              accessibilityLabel="Add a question"
  					/>
  				</TouchableHighlight>

          <TouchableHighlight style={[MyStyles.iconContainer]}>
  					<FontAwesome
  					  name='flag'
              onPress={() =>
                clearLocalNotification()
                  .then(setLocalNotification)
                  .then(
                    this.props.navigation.navigate(
                      'Quiz',
                      {
                        thisDeck: this.state.thisDeck,
                        questionNo: 1,
                        correctCount: 0,
                      }
                    )
                  )
              }
  						size={40}
              accessibilityLabel="Start quiz"
  					/>
  				</TouchableHighlight>

        </View>
			</View>
		)
	}
}
