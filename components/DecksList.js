import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'
import { getDecks, deleteAllDecks } from '../utils/api'
import DecksListItem from './DecksListItem'

export default class DecksList extends Component {

  // incrementCorrectCount
  // incrementIncorrectCount
  // reset correctCount and incorrectCount
  // set currentDeck

	constructor(props){
		super(props)
    this.state =
    {
      // currentDeck: '',
      // currentQuestion: 0,
      // correctCount: 0,
      // incorrectCount: 0,
      allDecks: {}
    }
  }

  componentDidMount() {
    getDecks()
    .then( allDecks => this.setState({allDecks: allDecks}))
  }

	render(){
		return (

      <View>

        <FlatList
          data = {Object.keys(this.state.allDecks).map( title => this.state.allDecks[title] )}
          renderItem = {({item}) => <DecksListItem thisDeck={item} navigation={this.props.navigation}/>}
        />

        <Button
          onPress={() => deleteAllDecks()}
          title="Delete all decks!"
        />

        <Button
          onPress={() => this.props.navigation.navigate('NewDeck')}
          title="Add deck"
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
