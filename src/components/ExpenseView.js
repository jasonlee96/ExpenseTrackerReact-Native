import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CategoryBox, CategoryItem, Button, MoneyViewer } from './common';
import { Actions } from 'react-native-router-flux';

export default class ExpenseView extends Component {
  onPress(){
    Actions.addExpense();
  }

  render() {
    const { textStyle, buttonStyle } = styles;

    return (
      <View styles={{ flexDirection: 'column' }}>
        <View>
          <MoneyViewer date={this.props.date} expense="2300" title="Daily Expenses"/>

          <CategoryBox>
            <CategoryItem>
              <Text style={textStyle}>
                Category
              </Text>
              <Text style={textStyle}>
                Total (RM)
              </Text>
            </CategoryItem>

            <CategoryItem>
              <Text style={textStyle}>
                Utilities
              </Text>
              <Text style={textStyle}>
                2,300
              </Text>
            </CategoryItem>

            <CategoryItem>
              <Text style={textStyle}>
                General
              </Text>
              <Text style={textStyle}>
                2,300
              </Text>
            </CategoryItem>

            <CategoryItem>
              <Text style={textStyle}>
                Foods
              </Text>
              <Text style={textStyle}>
                2,300
              </Text>
            </CategoryItem>

            <CategoryItem>
              <Text style={textStyle}>
                Others
              </Text>
              <Text style={textStyle}>
                2,300
              </Text>
            </CategoryItem>
          </CategoryBox>
        </View>
        <View style={buttonStyle}>
          <Button onPress={this.onPress.bind(this)}>
            Add Expense
          </Button>
        </View>
      </View>
    );
  }
}


const styles = {
  textStyle:{
    width: '50%',
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  buttonStyle: {
    marginVertical: 10,
    justifyContent: 'flex-end',
    height:40,
    width:150,
    alignSelf:'flex-end',
    textAlign: 'flex-end'
  }
};
