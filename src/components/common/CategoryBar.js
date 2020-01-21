import React from 'react';
import { View, Text } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const CategoryBar = ({ label, data,  initValue, onChange }) => {
  const { containerStyle, labelStyle, selectorStyle } = styles;
  if(!initValue){
    initValue = "Choose Category First";
    if(label === "Name"){
      initValue = "Choose an Expense First";
    }
  }
  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>
        {label}
      </Text>
      <ModalSelector
        touchableStyle={selectorStyle}
        style={{width: "70%"}}
        data={data}
        initValue={initValue}
        onChange={onChange}
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
  selectorStyle: {
    borderRadius: 25,
    borderWidth: 0,
    borderColor: 'transparent',
  }
}

export { CategoryBar };
