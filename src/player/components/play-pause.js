import React from 'react';
import {
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
} from 'react-native';
function PLayPause(props){
  return(
    <TouchableHighlight
    onPress={props.onPress}
    style={styles.container}
    underlayColor="red"
    hitSlop={{
      left:5,
      top:5,
      bottom:5,
      right:5,
    }}
    >
      {
        props.paused?
        <Text style={styles.button}>PLAY</Text>
        :
        <Text style={styles.button}>PAUSE</Text>
      }
    </TouchableHighlight>
  )
}
const styles=StyleSheet.create({
  container:{

  },
  button:{

  }
})
export default PLayPause;
