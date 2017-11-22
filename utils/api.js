import { AsyncStorage } from 'react-native'
import DummyDecks from './DummyDecks'

export const DECKS_STORAGE_KEY = 'MobileFlashCard:allDecks'

export function getDecks() {
  // return all of the decks along with their titles, questions, and answers.
  return AsyncStorage.getItem(
    DECKS_STORAGE_KEY,
    res => JSON.parse(res)
  )
}

export function getDeck (deckId) {
  // take in a single id argument and return the deck associated with that id.
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then( res => JSON.parse(res) )
  .then( res => res[deckId] )
}

export const saveDeckTitle = () => console.log('deckTitle')
// export const saveDeckTitle = (deckTitle) =>
  // take in a single title argument and add it to the decks.
  // AsyncStorage.mergeItem(
  //   DECKS_STORAGE_KEY,
  //   JSON.stringify({
  //     [deckTitle]: {
  //       title: deckTitle,
  //       questions: []
  //     }
  // }))

// export function saveDeckTitle(deckTitle) {
//   // take in a single title argument and add it to the decks.
//   return AsyncStorage.mergeItem(
//     DECKS_STORAGE_KEY,
//     JSON.stringify({
//       [deckTitle]: {
//         title: deckTitle,
//         questions: []
//       }
//   }))
//   // .then ( () => console.log('test'))
//   // .then( () => saveTitleToState(deckTitle) )
// }

export function addCardToDeck(deckTitle, card) {
  // take in two arguments, title and card, and will add the card to the list of
  // questions for the deck with the associated title.
  // 'card' is  { question: 'xxx ?', answer: 'here the answer'}
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(res => JSON.parse(res))
    .then(res => {res[deckTitle].questions.push(card); return res})
    .then(res => AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(res)) )
}
