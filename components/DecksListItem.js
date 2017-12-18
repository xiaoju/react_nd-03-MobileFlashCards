import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'
import {
  primaryColor,
  primaryLightColor,
  primaryDarkColor,
  secondaryColor,
  secondaryLightColor,
  secondaryDarkColor,
  primaryTextColor,
  secondaryTextColor
} from '../utils/colors'
import styled from 'styled-components/native'

const STouchableHighlight = styled.TouchableHighlight`
  background-color: ${primaryDarkColor};
  margin: 3px 7px;
  border-radius: 8px;
  border-color: ${secondaryColor};
  border-width: 3px;
  border-style: solid;
  padding: 5px;
`

const STitle = styled.Text`
  font-size: 40px;
`

const SLength = styled.Text`
  font-size: 18px;
`

export default class DecksListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { thisDeck: this.props.thisDeck }
  }

  render() {
    return (
      <STouchableHighlight
        onPress={() =>
          this.props.navigation.navigate('DeckView', {
            thisDeck: this.state.thisDeck
          })
        }
      >
        <View>
          <STitle>{this.state.thisDeck.key}</STitle>
          {this.state.thisDeck.questions.length === 0 ? (
            <SLength>Empty deck</SLength>
          ) : this.state.thisDeck.questions.length === 1 ? (
            <SLength>1 card</SLength>
          ) : (
            <SLength>{this.state.thisDeck.questions.length} cards</SLength>
          )}
        </View>
      </STouchableHighlight>
    )
  }
}
