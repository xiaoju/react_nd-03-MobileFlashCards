import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

export default class DecksListItem extends React.Component {

  handlePress = () => {
    alert('hello!')
  }

  render() {
    return (
        <TouchableHighlight onPress={this.handlePress}>
          <View>
            <Text>{this.props.title}</Text>
            <Text>{this.props.questionsCount} questions</Text>
          </View>
        </TouchableHighlight>
    )
  }
}
