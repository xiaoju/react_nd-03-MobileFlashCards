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
          { this.state.thisDeck.questions.length === 0
            ? <Text style={{fontSize: 30}}>Empty deck</Text>
            :
              this.state.thisDeck.questions.length === 1
              ? <Text style={{fontSize: 30}}>1 card</Text>
              : <Text style={{fontSize: 30}}>{this.state.thisDeck.questions.length} cards</Text> }
          <Text style={[MyStyles.smallText]}>Press + to add cards.</Text>
          <Text style={[MyStyles.smallText]}>Press the flag to start this quiz.</Text>
        </View>

        <View style={[MyStyles.iconsBar]}>

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
              name='home'
              onPress={() => this.props.navigation.navigate('DecksList')}
              size={40}
              accessibilityLabel="Return to decks list view"
            />
          </TouchableHighlight>

        </View>
			</View>
		)
	}
}
