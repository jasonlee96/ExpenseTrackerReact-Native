import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { CategoryBox, CategoryItem, Button, MoneyViewer } from './common';
import { Actions } from 'react-native-router-flux';
import Database from './Database';

export default class ExpenseView extends Component {
  expenses =[];
  componentWillMount(){
    let db = new Database();
    
    //db.dropTable();
    //db.insertExpense();
    //db.testData();
    db.listExpenseCategory().then(
      (data) =>{
        this.expenses = data;
        this.forceUpdate();
      }
    ).catch(
      error=>{console.log("List Expense Error: " + error)}
    );
  }

  onPress(){
    Actions.addExpense();
  }

  renderCategory(){
    const { textStyle, buttonStyle } = styles;
    console.log(this.expenses.length);
    return this.expenses.map((expense)=>{
      return (
        <CategoryItem>
          <Text style={textStyle}>
            {expense.catName}
          </Text>
          <Text style={textStyle}>
            {expense.total}
          </Text>
        </CategoryItem>
      );
    })
      
  }

  render() {
    const { textStyle, buttonStyle } = styles;
    var sum = 0;
    if(this.expenses.length > 0){
      sum = this.expenses.reduce((acc, currentObj) => {
        acc+= currentObj.total;
        return acc;
      }, 0);
    }
    return (
      <View styles={{ flexDirection: 'column' }}>
        <View>
          <MoneyViewer date={this.props.date} expense={sum} title="Daily Expenses"/>
          <CategoryBox>
            <CategoryItem>
              <Text style={textStyle}>
                Category
              </Text>
              <Text style={textStyle}>
                Total (RM)
              </Text>
            </CategoryItem>
            {this.renderCategory()}
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
