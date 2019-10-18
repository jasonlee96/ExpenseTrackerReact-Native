import React from 'react';
import { View } from 'react-native';

const CategoryItem = ({ children }) => {
  const { containerStyle } = styles;

  return (
    <View style={containerStyle}>
      {children}
    </View>
  );
};

const styles = {
  containerStyle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    paddingVertical: 8,
    borderColor: '#221'
  }
};

export { CategoryItem };
