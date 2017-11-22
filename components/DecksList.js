import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'
// import DummyDecks from '../utils/DummyDecks'

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
      allDecks: {
        React: {
          title: 'React',
          questions: [
            {
              question: 'What is React?',
              answer: 'A library for managing user interfaces'
            },
            {
              question: 'Where do you make Ajax requests in React?',
              answer: 'The componentDidMount lifecycle event'
            }
          ]
        },
        JavaScript: {
          title: 'JavaScript',
          questions: [
            {
              question: 'What is a closure?',
              answer: 'The combination of a function and the lexical environment within which that function was declared.'
            }
          ]
        }
      }
    }

  }

	render(){
		return (

      <View>

        {Object.keys(this.state.allDecks).map( deckId =>
          <View key={deckId} >
  					<Text style={[styles.bigblue]}>{this.state.allDecks[deckId].title}</Text>
  					<Text style={[styles.bigblue]}>{this.state.allDecks[deckId].questions.length} cards</Text>
            <Button
              onPress={() => this.props.navigation.navigate('DeckView', {thisDeck: this.state.allDecks[deckId]})}
              title="Go to this deck"
            />
  				</View>
        )}

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
