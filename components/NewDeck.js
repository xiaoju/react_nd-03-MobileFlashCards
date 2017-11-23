import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'
import { dummyFunction } from '../utils/api'

export default class NewDeck extends Component {

	render(){
		return (
			<View>
        <Text style={[styles.bigblue]}>Title for new deck:</Text>
        <Button
          onPress={ () =>
            dummyFunction('dummyDeckTitle')
          }
          title='submit'
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
