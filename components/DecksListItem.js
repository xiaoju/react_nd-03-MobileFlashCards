import React from 'react'
import { TouchableHighlight, Text, View } from 'react-native'

export default class DecksListItem extends React.Component {

  constructor(props){
		super(props)
    this.state = { thisDeck: this.props.thisDeck}
  }

  render() {

    return (
        <TouchableHighlight
          onPress={()=>this.props.navigation.navigate('DeckView', {thisDeck: this.state.thisDeck})}
          >

          <View>
            <Text>{this.state.thisDeck.key}</Text>
            <Text>{this.state.thisDeck.questions.length} questions</Text>
          </View>

        </TouchableHighlight>
    )
  }
}
