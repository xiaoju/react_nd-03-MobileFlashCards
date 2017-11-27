import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'
import { getDecks, deleteAllDecks } from '../utils/api'

export default class DecksList extends Component {

  // incrementCorrectCount
  // incrementIncorrectCount
  // reset correctCount and incorrectCount
  // set currentDeck

	constructor(props){
		super(props)
		// this.state = DummyDecks
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
    .then( () => console.log((new Date(Date.now())).toLocaleString()) )
    .then ( () => console.log(this.state.allDecks))
  }

	render(){

    alldecksArray = Object.keys(this.state.allDecks)
    console.log('type of this.state.allDecks: ', typeof this.state.allDecks)
    console.log('this.state.allDecks: ', this.state.allDecks)

		return (

      <View>

        <Text>
          {alldecksArray[0]}
        </Text>

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
