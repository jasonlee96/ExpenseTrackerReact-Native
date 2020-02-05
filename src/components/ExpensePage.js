import React, { Component, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavBar, MoneyViewer, CategoryBox, CategoryItem, Button } from './common';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';
import Database from './Database';

export default class ExpensePage extends Component {
  expenses =[];
  state = {selected: 1};
  descriptions=[];
  componentDidMount(){
    let db = new Database();
    
    //db.dropTable();
    // db.insertExpense();
    db.listExpenseCategory().then(
      (data) =>{
        this.expenses = data;
        this.forceUpdate();
      }
    ).catch(
      error=>{console.log("List Expense Error: " + error)}
    );
    this.getData();
  }
  componentDidUpdate(nextProps, nextState) {
    if(this.state.selected !== nextState.selected){
        this.getData();
    }
}
  getData(){
    this.descriptions=[];
    let db = new Database();
    db.listExpense(this.state.selected).then(
      (data) =>{
        this.descriptions = data;
        this.forceUpdate();
      }
    ).catch(error => console.log("List Specified Expense Error: " + error));
  }

  onPress() {
    Actions.addExpense();
  }
  renderExpenses(){
    const { textStyle, moneyStyle, iconStyle, iconContainer } = styles;
    return this.expenses.map((expense)=>{
      return (
        <>
          <CategoryItem key={expense.catId}>
            <Text style={textStyle}>
              {expense.catName}
            </Text>
            <Text style={moneyStyle}>
              {expense.total}
            </Text>
            <View style={iconContainer}>
              <Icon.Button backgroundColor="#00000000" color="rgba(200,200,200,0.8)" style={iconStyle} name="chevron-down" onPress={()=>{
                this.setState({selected: expense.catId})
              }}/>
            </View>
            
          </CategoryItem>
          {this.state.selected == expense.catId && 
            this.renderDescription()
          }
        </>
      );
    })
  }

  renderDescription(){
    const { descriptionTextStyle, iconContainer, descriptionMoneyStyle } = styles;
    return this.descriptions.map((description)=>{
      return (
        <CategoryItem key={description.exId}>
          <Text style={descriptionTextStyle}>
            {description.exName}
          </Text>
          <Text style={descriptionMoneyStyle}>
            {description.value}
          </Text>
          <View style={iconContainer}>
          </View>
        </CategoryItem>
      );
    });
  }

  render() {
    const { scrollContainer, textStyle, buttonStyle, iconContainer, moneyStyle } = styles;
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today = new Date();
    const monthIndex = today.getMonth();
    const currDate = month[monthIndex]+"-"+(today.getYear() + 1900);
    var sum = 0;
    if(this.expenses.length > 0){
      sum = this.expenses.reduce((acc, currentObj) => {
        acc+= currentObj.total;
        return acc;
      }, 0);
    }
    return (
      <View style={{ flex: 1, flexDirection:'column', backgroundColor: '#2e2e1f'}}>
        <MoneyViewer date={currDate} expense={sum} title="Monthly Expense"/>

          <CategoryBox>
            <CategoryItem>
              <Text style={textStyle}>
                Category
              </Text>
              <Text style={moneyStyle}>
                Total (RM)
              </Text>
              <View style={iconContainer}>
              </View>
            </CategoryItem>
            <ScrollView style={scrollContainer}>
            {this.renderExpenses()}
            
            </ScrollView>
          </CategoryBox>
        
        <View style={buttonStyle}>
          <Button onPress={this.onPress.bind(this)}>
            Add Expense
          </Button>
        </View>

        <NavBar />
      </View>
    );
  }
}

const styles = {
  textStyle:{
    width: '70%',
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  moneyStyle:{
    width: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },
  descriptionTextStyle:{
    width: '70%',
    color: 'white',
    fontSize: 16,
    marginLeft: 30
  },
  descriptionMoneyStyle: {
    width: '30%',
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },
  buttonStyle: {
    marginVertical: 10,
    justifyContent: 'flex-end',
    height:40,
    width:150,
    alignSelf:'flex-end',
    textAlign: 'flex-end'
  },
  scrollContainer: {
    height: '55%'
  },
  iconStyle: {
    textAlign: 'center',
    fontSize: 15,
    color: 'rgba(200,200,200,0.8)',
    padding:0,
    paddingRight:0,
    margin: 0
  },
  iconContainer: {
    width: 30,
    marginTop: 5,
    marginRight: 15
  }
}
