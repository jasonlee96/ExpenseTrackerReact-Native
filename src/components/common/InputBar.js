import React from 'react';
import { View, Text, TextInput } from 'react-native';

const InputBar = ({ label, placeholder, onChangeText, value, keyboardType='default' }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <TextInput style={inputStyle}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    flexDirection: 'row',
    width: '90%',
    backgroundColor:'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 5,
    marginVertical: 13
  },
  labelStyle: {
    width: '30%',
    paddingTop: 7,
    fontWeight: 'bold',
    borderRightWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    fontSize: 20,
    height: '100%'
  },
  inputStyle: {
    width: '70%',
    marginHorizontal: 15,
    paddingVertical: 7,
    fontSize: 18
  }
}

export { InputBar };
