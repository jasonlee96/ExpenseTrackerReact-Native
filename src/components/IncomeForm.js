import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavBar, InputBar, Button, CategoryBar } from './common';

class IncomeForm extends Component {
  render (){
    const { titleStyle, buttonContainer } = styles;
    const data =  [
      { key: "Empty", section: true, label: 'Category' },
      { key: "Work", label: 'Work' },
      { key: "Investment Profit", label: 'Investment Profit' },
      { key: "Others", label: 'Others' }
      // etc...
      // Can also add additional custom keys which are passed to the onChange callback
  ];

    return (
      <View 
        style={{ flex: 1, backgroundColor: '#2e2e1f' }}>
        <Text style={titleStyle}>
        Add New Income
        </Text>
        <InputBar
          label="Name"
          placeholder="Name"
        />
        <CategoryBar data={data}/>
        <InputBar
          label="Amount"
          placeholder="RM "
          keyboardType='numeric'
        />
        <View style={buttonContainer}>
          <Button>
            Submit
          </Button>
        </View>
        <NavBar />
      </View>
    );
  }
}

const styles = {
  titleStyle: {
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
    margin: 10
  },
  buttonContainer: {
    width: '50%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: 10
  }
}

export default IncomeForm;
