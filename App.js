import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import DecksList from './components/DecksList'
import DeckView from './components/DeckView'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import Answer from './components/Answer'

const App = StackNavigator({
  DecksList: {
    screen: DecksList,
  },
  DeckView: {
    screen: DeckView,
  },
  NewDeck: {
    screen: NewDeck,
  },
  Quiz: {
    screen: Quiz,
  },
  Answer: {
    screen: Answer,
  }
})

export default App

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
