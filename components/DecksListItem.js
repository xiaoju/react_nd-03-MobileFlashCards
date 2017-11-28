import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

export default class DecksListItem extends React.Component {

  render() {

    return (
        <TouchableHighlight
          onPress={()=>this.props.navigation.navigate('DeckView', {thisDeck: this.props.thisDeck})}
          >

          <View>
            <Text>{this.props.thisDeck.key}</Text>
            <Text>{this.props.thisDeck.questions.length} questions</Text>
          </View>

        </TouchableHighlight>
    )
  }
}
