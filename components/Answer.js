import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { secondaryColor, secondaryTextColor} from '../utils/colors'

export default class Answer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      thisDeck: this.props.navigation.state.params.thisDeck,
      naviKey: this.props.navigation.state.params.naviKey,
      questionNo: this.props.navigation.state.params.questionNo,
      correctCount: this.props.navigation.state.params.correctCount
    }
  }

	render(){
		return (
			<View>
        <Text style={[styles.bigblue]}>Answer:</Text>
        <Text>{this.state.thisDeck.questions[this.state.questionNo -1].answer}</Text>
        <Button
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            {
              thisDeck: this.state.thisDeck,
              naviKey: this.state.naviKey,
              questionNo: this.state.questionNo + 1,
              correctCount: this.state.correctCount + 1,
            }
          )}
          title='correct (I was right)'
        />
        <Button
          onPress={() => this.props.navigation.navigate(
            'Quiz',
            {
              thisDeck: this.state.thisDeck,
              naviKey: this.state.naviKey,
              questionNo: this.state.questionNo + 1,
              correctCount: this.state.correctCount,
            }
          )}
          title='incorrect (I was wrong)'
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
