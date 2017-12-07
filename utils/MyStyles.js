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
    backgroundColor: secondaryLightColor,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
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
})
