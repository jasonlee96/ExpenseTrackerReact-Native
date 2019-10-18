import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavBar, MoneyOverview } from './common';
import ExpenseView from './ExpenseView';

export default class TestPage extends Component {
  render() {


    return(
      <View style={{ flex: 1, flexDirection: 'column' , backgroundColor: '#2e2e1f'}}>
        <MoneyOverview
          title="Budget"
          titleColor="white"
          textColor="#1ca30d"
          expense="13000"
          maxBudget='20000'
          />
        <ExpenseView date="Today"/>
        <NavBar />
      </View>
    );
  }
}
