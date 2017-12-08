import React, { Component } from 'react'
import { View, Text, Button, FlatList, TouchableHighlight } from 'react-native'
import { getDecks, deleteAllDecks } from '../utils/api'
import DecksListItem from './DecksListItem'
import { FontAwesome } from '@expo/vector-icons'
import { MyStyles } from '../utils/MyStyles'

export default class DecksList extends Component {

	constructor(props){
		super(props)
    this.state = { allDecks: {} }
  }

  componentDidMount() {
    getDecks()
    .then( allDecks => this.setState({allDecks: allDecks}))
  }

	render(){
		return (
      <View style={[MyStyles.background]}>

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

				<View style={[MyStyles.iconsBar]}>
					<TouchableHighlight style={[MyStyles.iconContainer]}>
						<FontAwesome
						  name='bomb'
							onPress={() => deleteAllDecks()}
							size={40}
						/>
					</TouchableHighlight>

					<TouchableHighlight style={[MyStyles.iconContainer]}>
						<FontAwesome
						  name='plus'
							onPress={() => this.props.navigation.navigate('NewDeck')}
							size={40}
						/>
					</TouchableHighlight>
				</View>

      </View>
		)
	}
}
