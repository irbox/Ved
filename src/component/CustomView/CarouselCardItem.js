import React from 'react'
import { View, Text, Image,Linking,StyleSheet, Dimensions,TouchableOpacity } from "react-native"
import { WIDTH, FONT_SIZE, COLOR, FONT_WEIGHT, HEIGHT } from '../../theme/typography'

export const SLIDER_WIDTH = Dimensions.get('window').width
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.1)

const CarouselCardItem = ({ item, index }) => {

  return (
    <View style={styles.container} key={index}>
      <TouchableOpacity 
          onPress={() => Linking.openURL(item.link)}
          style={{ }}>
        <Image
            source={{uri:item.image}}
            resizeMode='stretch'
            style={{ height: 180, width: WIDTH / 100 * 88,borderRadius:10}} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: 'white',
    marginRight:10,
    width: WIDTH,
    // paddingBottom: HEIGHT * 5 / 100,
  },
  title: {
    fontSize: FONT_SIZE.higantic,
    color: COLOR.blue,
    fontWeight: FONT_WEIGHT.bold,
  },
  title1: {
    fontSize: FONT_SIZE.huge,
    color: COLOR.blue,
    fontWeight: FONT_WEIGHT.semi_light,
    textAlign: 'center',
    lineHeight: 40
  },
  content: {
    textAlign: 'center',
    color: 'grey',
    fontSize: FONT_SIZE.medium,
    marginTop: 20,
    width: WIDTH * 80 / 100
  },
})

export default CarouselCardItem