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
		flex: 1,
    fontSize: 30,
    color: secondaryTextColor,
		borderRadius: 8,
		borderColor: secondaryColor,
		borderWidth: 3,
		borderStyle: 'solid',
		margin: 10,
		padding: 5,
  },
	infoView: {
		backgroundColor: primaryDarkColor,
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		margin: 30,
	},
	topInfo: {
		backgroundColor: primaryDarkColor,
		color: primaryTextColor,
		fontSize: 30,
		fontWeight: 'bold',
		padding: 10,
		margin: 10,
	},
	warningText: {
		fontSize: 30,
		fontWeight: 'bold',
		color: primaryTextColor,
	},
	iconsBar: {
		flex: 1,
		flexDirection: 'row-reverse',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
	},
	iconContainer: {
		backgroundColor: primaryDarkColor,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 10,
		padding: 5,
		width: 60,
		height: 60,
		borderRadius: 8,
		borderColor: secondaryColor,
		borderWidth: 3,
		borderStyle: 'solid',
	},
})
