import React, { memo } from 'react'
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native'
import { COLORS } from '../Screens/Utils/Colors'
import { SCREEN_WIDTH } from '../Screens/Utils/helpers'
import Typography from './Typography'

interface HeaderProps {
  title?:string,
  headerContainer?:StyleProp<ViewStyle>;
  titleStyles?:StyleProp<TextStyle>;
}

const Header = ({title,headerContainer,titleStyles}:HeaderProps) => {
  return (
    <View style={[styles.headerStyles,headerContainer]}>
      <Typography style={[titleStyles]}>{title}</Typography>
    </View>
  )
}

export default memo(Header)

const styles = StyleSheet.create({
  headerStyles:{
    height:55,
    width:SCREEN_WIDTH,
    backgroundColor:COLORS.primary
  }
})