import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import {
  clearLocalNotification,
  setLocalNotification,
} from '../utils/helpers.js'
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
import { FontAwesome } from '@expo/vector-icons'

const ColoredBack = styled.View`
  background-color: ${primaryColor};
`

const SiconContainer = styled.TouchableHighlight`
	background-color: ${secondaryDarkColor};
	margin: 3px;
	padding: 5px;
	border-radius: 8px;
	width: 50px;
	height: 50px;
	margin-right: 20px;
`

export default class DeckView extends Component {

  constructor(props){
		super(props)
    this.state = { thisDeck: this.props.navigation.state.params.thisDeck}
  }

	render(){
		return (
			<ColoredBack style={{flex: 1}}>
        <View>
          <Text
            style={{fontSize: 40, fontWeight: 'bold'}}
            >{this.state.thisDeck.key}</Text>
  				<Text
            style={{fontSize: 30}}
            >{this.state.thisDeck.questions.length} cards</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-around'}}>

          <SiconContainer>
            <FontAwesome
              name='home'
              onPress={() => this.props.navigation.navigate('DecksList')}
              color={secondaryTextColor}
              size={40}
              accessibilityLabel="Return to decks list view"
            />
          </SiconContainer>

  				<SiconContainer>
  					<FontAwesome
  					  name='plus'
              onPress={() => this.props.navigation.navigate(
                'AddQuestion',
                {deckTitle: this.state.thisDeck.key}
              )}
  					  color={secondaryTextColor}
  						size={40}
              accessibilityLabel="Add a question"
  					/>
  				</SiconContainer>

          <SiconContainer>
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
  					  color={secondaryTextColor}
  						size={40}
              accessibilityLabel="Start quiz"
  					/>
  				</SiconContainer>

        </View>
			</ColoredBack>
		)
	}
}
