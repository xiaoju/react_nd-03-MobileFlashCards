import { AsyncStorage } from 'react-native'
import DummyDecks from './DummyDecks'
// import uuid from 'uuid/v4'

export const DECKS_STORAGE_KEY = 'MobileFlashCard:allDecks'

export function getDecks() {
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then ( res => res ? JSON.parse(res) : {} )
  // if app is used for first time, res is null
}

export function getDeck (deckId) {
  // take in a single id argument and return the deck associated with that id.
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
  .then( res => JSON.parse(res) )
  .then( res => res[deckId] )
}

export const deleteAllDecks = () =>
  AsyncStorage.setItem(DECKS_STORAGE_KEY, '{}')

export const saveDeckTitle = (deckTitle) =>
  // take in a single title argument and add it to the decks.f
  AsyncStorage.mergeItem(
    DECKS_STORAGE_KEY,
    JSON.stringify({
      [deckTitle]: {
        key: deckTitle,
        questions: []
      }
  }))
  .then( () => ({key: deckTitle, questions: []}) )

export function addCardToDeck(deckTitle, card) {
  // take in two arguments, title and card, and will add the card to the list of
  // questions for the deck with the associated title.
  // 'card' is  { question: 'xxx ?', answer: 'here the answer'}
  return AsyncStorage.getItem(DECKS_STORAGE_KEY)
    .then(res => JSON.parse(res))
    .then(res => {res[deckTitle].questions.push(card); return res})
    .then(res => AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(res)) )
    .then( () => getDeck(deckTitle) )
}
