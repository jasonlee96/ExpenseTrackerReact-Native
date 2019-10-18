import React from 'react';
import { View } from 'react-native';

const CategoryBox = ({ children }) => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 15,
    backgroundColor:'#3d3d29'
  }
}
export { CategoryBox }
