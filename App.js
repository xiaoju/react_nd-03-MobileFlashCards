import React from 'react'
import { Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import DecksList from './components/DecksList'
import DeckView from './components/DeckView'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import Answer from './components/Answer'
import AddQuestion from './components/AddQuestion'
import { setLocalNotification } from './utils/helpers'

const MainNavigator = StackNavigator({
  DecksList: {screen: DecksList},
  DeckView: {screen: DeckView},
  NewDeck: {screen: NewDeck},
  Quiz: {screen: Quiz},
  Answer: {screen: Answer},
  AddQuestion: {screen: AddQuestion}
})

export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
        <View style={{flex: 1, backgroundColor: '#ff00ff'}}>
          <MainNavigator />
        </View>
    )
  }
}
