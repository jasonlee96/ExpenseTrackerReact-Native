import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, InputBar, Button, CategoryBar } from './common';
import { nameChanged, moneyChanged, categoryChanged, onSubmitExpense } from '../actions'

class ExpenseForm extends Component {
  onNameChange(text){
    //May change to categoryBar
    this.props.nameChanged(text);
  }

  onCategoryChange(category){
    this.props.categoryChanged(category);
  }

  onMoneyChange(value){
    //Filter should added in here
    if(this.props.expense < value){
      value=parseFloat(value)*10;
    }else{
      value=parseFloat(value)/10;
    }
    value=value.toFixed(2);
    if(value < '0.01' || value == 'NaN'){
      value = '0.00';
    }    
    value=String(value);
    this.props.moneyChanged(value);
  }

  onSubmit(){
    this.props.onSubmitExpense(this.props.name, this.props.category, this.props.expense);
  }

  renderError(){
    return (
      
    );
  }

  render (){
    const { titleStyle, buttonContainer } = styles;
    const data =  [
      { key: "Empty", section: true, label: 'Category' },
      { key: "Utilities", label: 'Utilities' },
      { key: "General", label: 'General' },
      { key: "Food", label: 'Food' },
      { key: "Others", label: 'Others'},
      // etc...
      // Can also add additional custom keys which are passed to the onChange callback
  ];
    return (
      <View style={{ flex: 1, flexDirection:'column', backgroundColor: '#2e2e1f'}}>
        <Text style={titleStyle}>
        Add New Expense
        </Text>
        <CategoryBar 
          data={data}
          initValue={this.props.category.label}
          onChange={this.onCategoryChange.bind(this)}
        />

        <InputBar
          label="Name"
          placeholder="Name"
          onChangeText={this.onNameChange.bind(this)}
          value={this.props.name}
        />
        
        <InputBar
          label="Amount"
          placeholder="RM "
          keyboardType='numeric'
          onChangeText={this.onMoneyChange.bind(this)}
          value={this.props.expense}
        />
        <View style={buttonContainer}>
          <Button onPress={this.onSubmit.bind(this)}>
            Submit
          </Button>
        </View>
        <NavBar />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, expense, category, error, loading } = state.expense;

  return { name, expense, category, error, loading };
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

export default connect(mapStateToProps, { onSubmitExpense, nameChanged, moneyChanged, categoryChanged })(ExpenseForm);
