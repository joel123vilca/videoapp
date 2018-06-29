import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function Header(props) {
  return(
    <View>
      <SafeAreaView>
      <View
      style={styles.logo}>
        <Image
          source={require('../../../assets/edutak.png')}
          style={styles.imagen}
          />
          <View style={styles.letra}>
            <Text>Acomer Tacna</Text>
          </View>
      </View>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  imagen: {
    width: 200,
    height: 26,
    resizeMode: 'contain',
  },
  logo: {
    backgroundColor:'skyblue',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  letra: {
    backgroundColor: 'green',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})


export default Header
