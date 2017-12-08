import React, { Component } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { getDecks, deleteAllDecks } from '../utils/api'
import DecksListItem from './DecksListItem'
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
import { MyStyles } from '../utils/MyStyles'

const SView = styled.View`
  background-color: ${secondaryDarkColor};
  color: ${secondaryTextColor};
`

const SBackground = styled.View`
  background-color: ${primaryColor};
	flex: 1;
`

const SiconContainer = styled.TouchableHighlight`
	background-color: ${primaryDarkColor};
	justify-content: center;
	align-items: center;
	margin: 10px;
	padding: 5px;
	border-radius: 8px;
	width: 60px;
	height: 60px;
`

export default class DecksList extends Component {

	constructor(props){
		super(props)
    this.state =
    { currentDeck: '',
      currentQuestion: 0,
      correctCount: 0,
      incorrectCount: 0,
      allDecks: {}
    }
  }

  componentDidMount() {
    getDecks()
    .then( allDecks => this.setState({allDecks: allDecks}))
  }

	render(){
		return (

      <SBackground>

				{ Object.keys(this.state.allDecks).length === 0 &&
					<View style={[MyStyles.infoView]}>
						<Text style={[MyStyles.warningText]}>Press the + button to create new decks.</Text>
						<Text style={[MyStyles.warningText]}>BEWARE! The bomb button will DELETE ALL YOUR DECKS!</Text>
					</View>
				}

        <FlatList
          data = {Object.keys(this.state.allDecks).map( title => this.state.allDecks[title] )}
          renderItem = {({item}) => <DecksListItem thisDeck={item} navigation={this.props.navigation}/>}
        />

				<View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
					<SiconContainer style={{position: 'absolute', bottom: 10, left: 10}}>
						<FontAwesome
						  name='bomb'
							onPress={() => deleteAllDecks()}
						  color={secondaryTextColor}
							size={40}
						/>
					</SiconContainer>

					<SiconContainer style={{position: 'absolute', bottom: 10, right: 10}}>
						<FontAwesome
						  name='plus'
							onPress={() => this.props.navigation.navigate('NewDeck')}
						  color={secondaryTextColor}
							size={40}
						/>
					</SiconContainer>
				</View>

      </SBackground>
		)
	}
}
