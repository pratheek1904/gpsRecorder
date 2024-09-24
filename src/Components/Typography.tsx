import React, { memo } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
  
  interface TypographyProps {
    children: React.ReactNode;
    style?: StyleProp<TextStyle>;
    StyleView?: StyleProp<ViewStyle>;
    lines?:number
  }
  
  const Typography: React.FC<TypographyProps> = ({
    children,
    style,
    StyleView,
    lines
  }) => {
    return (
      <View style={[StyleView]}>
        <Text numberOfLines={lines} style={[styles.defaultText, style]}>{children}</Text>
      </View>
    );
  };
  
  export default memo(Typography);
  
  const styles = StyleSheet.create({
    defaultText: {
      fontSize: 15, 
      color: '#000',
      fontWeight:"400",
      lineHeight:22,
      fontFamily:"Poppins"

    },
    make600:{
      fontWeight:"600" 
    }
  });
  