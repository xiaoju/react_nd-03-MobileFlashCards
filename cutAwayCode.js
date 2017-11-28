
// DecksList.js

allDecks: {
  'CCC': {key: 'CCC', questions: []},
  'DDD': {key: 'DDD', questions: []}
}

<FlatList
  data = {alldecksAsArray}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>



        <View style={styles.container}>
          <Text style={styles.header}>Decks</Text>
          <FlatList
            data={this.state.decks}
            renderItem={({item})=>
              <DeckListItem
                updateDeckListView={this.updateDeckListView}
                navigation={this.props.navigation}
                title={item.title}
                noOfCards={item.questions?item.questions.length:0}
              />
            }
          />
          <Button color="darkorange" title="New Deck" onPress={()=>{this.props.navigation.navigate('NewDeckView',{updateDeckListView:this.updateDeckListView})}}/>
        </View>

<FlatList
  data = {[{key: 'CCC', questions: []}, {key: 'DDD', questions: []}]}
  renderItem={({item}) => <Text>{item.key}</Text>}
/>

alldecksAsArray = Object.keys(this.state.allDecks).map( title => this.state.allDecks[title] )
alldecksAsArray = [{key: 'AAA', questions: []}, {key: 'BBB', questions: []}]

{alldecksAsArray[0].key}
alldecksAsArray[0] is undefined

_keyExtractor = (item, index) => item.title;
<FlatList
  data={[{keyx: 'a', title: 'ta'}, {keyx: 'b', title: 'tb'}]}
  data={[{key: 'AAA', questions: []}, {key: 'BBB', questions: []}]}
  data = {Object.keys(this.state.allDecks).map( thisDeckId => this.state.allDecks[thisDeckId] )}
  renderItem={({item}) => <Text>{item.title}</Text>}
  keyExtractor={this._keyExtractor}
/>

<FlatList
  data = {Object.keys(this.state.allDecks).map( thisDeckId => this.state.allDecks[thisDeckId] )}
  renderItem={({item}) => <Text>{item.title}</Text>}
  keyExtractor={this._keyExtractor}
/>


<View>
  <FlatList
    data = {Object.keys(this.state.allDecks).map( thisDeckId => this.state.allDecks[thisDeckId] )}
    keyExtractor={ thisDeck => thisDeck.title }
    renderItem={({thisDeck}) => (<Text>{thisDeck.title}</Text>)}
  />
</View>

<FlatList
  data={[
  {key: 'Devin'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
]}

  renderItem={({ item }) => (<Text>{item.key}</Text>)}

/>

<FlatList
  data={[
  {key: 'Devin'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
]}
  renderItem={({thisDeck}) => <Text>{thisDeck.key}</Text>}
/>

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

{Object.keys(this.state.allDecks).map( deckId =>
  <View key={deckId} >
    <Text style={[styles.bigblue]}>{this.state.allDecks[deckId].title}</Text>
    {/* <Text style={[styles.bigblue]}>{this.state.allDecks[deckId].questions.length} cards</Text> */}
    <Button
      onPress={() => this.props.navigation.navigate('DeckView', {thisDeck: this.state.allDecks[deckId]})}
      title="Go to this deck"
    />
  </View>
)}

        <Text>{this.state.allDecks.A.title}</Text>

        <View
          <FlatList
            data={this.state.allDecks}
            renderItem={({item}) => <Text>{item.title}</Text>}
          />
        </View>

// newDeck.js

import { AsyncStorage } from 'react-native'
import saveDeckTitle from '../utils/api'
export const DECKS_STORAGE_KEY = 'MobileFlashCard:allDecks'

onPress = { () =>
  AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      'dummyDeck': {
        title: 'dummyDeck',
        questions: []
      }
  }))
}

<Button
  // test if AsynStorage did work
  onPress = { () => getDecks()
    .then( (res) => console.log(res))
  }
  title='test'
/>

// api.js

export function getDecks() {
  // return all of the decks along with their titles, questions, and answers.
  return AsyncStorage.getItem(
    DECKS_STORAGE_KEY,
    res => JSON.parse(res)
  )
}

//working:
export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then(res => {return JSON.parse(res);})
}

export function saveDeckTitle(deckTitle) {
  // take in a single title argument and add it to the decks.
  return AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deckTitle]: {
        title: deckTitle,
        questions: []
      }
  }))
  // .then ( () => console.log('test'))
  // .then( () => saveTitleToState(deckTitle) )
}
