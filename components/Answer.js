import React, { Component } from 'react'
import { View, Text, Button, TouchableHighlight } from 'react-native'
import { MyStyles } from '../utils/MyStyles'
import { FontAwesome } from '@expo/vector-icons'

export default class Answer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thisDeck: this.props.navigation.state.params.thisDeck,
      questionNo: this.props.navigation.state.params.questionNo,
      correctCount: this.props.navigation.state.params.correctCount
    }
  }

  render() {
    return (
      <View style={[MyStyles.background]}>
        <View style={[MyStyles.infoView]}>
          <Text style={[MyStyles.text]}>
            {this.state.thisDeck.questions[this.state.questionNo - 1].answer}
          </Text>
        </View>
        <View style={[MyStyles.iconsBar]}>
          <TouchableHighlight style={[MyStyles.iconContainer]}>
            <FontAwesome
              name="thumbs-up"
              onPress={() =>
                this.props.navigation.navigate('Quiz', {
                  thisDeck: this.state.thisDeck,
                  questionNo: this.state.questionNo + 1,
                  correctCount: this.state.correctCount + 1
                })
              }
              size={40}
              accessibilityLabel="Correct (I was right)"
            />
          </TouchableHighlight>
          <TouchableHighlight style={[MyStyles.iconContainer]}>
            <FontAwesome
              name="thumbs-down"
              onPress={() =>
                this.props.navigation.navigate('Quiz', {
                  thisDeck: this.state.thisDeck,
                  questionNo: this.state.questionNo + 1,
                  correctCount: this.state.correctCount
                })
              }
              size={40}
              accessibilityLabel="Incorrect (I was wrong)"
            />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}
