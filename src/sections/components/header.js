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
          <Text>EDUTAK</Text>
          </View>
      </View>
      </SafeAreaView>
    </View>
  )
}
const styles = StyleSheet.create({
  imagen: {
    width: 200,
    height: 28,
    resizeMode: 'contain',
  },
  logo: {
    backgroundColor:'skyblue',
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  letra: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
})


export default Header
