import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'
import saveDeckTitle from '../utils/api'

// import { AsyncStorage } from 'react-native'
// export const DECKS_STORAGE_KEY = 'MobileFlashCard:allDecks'

export default class NewDeck extends Component {

	render(){
		return (
			<View>
        <Text style={[styles.bigblue]}>Title for new deck:</Text>
        <Button
          onPress={ () =>
            saveDeckTitle("dummyDeckTitle")
          }

          // onPress = { () =>
          //   AsyncStorage.mergeItem(
          //     DECKS_STORAGE_KEY,
          //     JSON.stringify({
          //       'dummyDeck': {
          //         title: 'dummyDeck',
          //         questions: []
          //       }
          //   }))
          // }

          title='submit'
        />
        {/* <Button
          // test if AsynStorage did work
          onPress = { () => AsyncStorage.getItem(
              DECKS_STORAGE_KEY,
              res => JSON.parse(res)
            )
            .then( (res) => console.log(res))
          }
          title='test'
        /> */}
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
