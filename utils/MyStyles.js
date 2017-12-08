import React from 'react'
import { StyleSheet } from 'react-native'
import {
	primaryColor,
	primaryLightColor,
	primaryDarkColor,
	secondaryColor,
	secondaryLightColor,
	secondaryDarkColor,
	primaryTextColor,
	secondaryTextColor,
} from '../utils/colors'

export const MyStyles = StyleSheet.create({
  background: {
    backgroundColor: primaryColor,
    flex: 1,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: secondaryTextColor,
  },
  smallText: {
    fontSize: 20,
    color: secondaryTextColor,
  },
  button: {
    color: 'red',
  },
  textInput: {
    fontSize: 30,
    height: 100,
    color: secondaryTextColor,
  },
	infoView: {
		backgroundColor: primaryDarkColor,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		borderColor: secondaryColor,
		borderWidth: 3,
		borderStyle: 'solid',
		padding: 20,
		margin: 30,
	},
	warningText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: primaryTextColor,
	},
})
