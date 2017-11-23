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
