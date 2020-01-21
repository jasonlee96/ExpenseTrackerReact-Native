import React, { Component } from 'react';
import { View, Text, TextComponent } from 'react-native';
import { connect } from 'react-redux';
import { NavBar, InputBar, Button, CategoryBar } from './common';
import { nameChanged, moneyChanged, categoryChanged, onSubmitExpense, newNameRequest } from '../actions'

class ExpenseForm extends Component {
  onNewNameChange(text){
    this.props.nameChanged(text);
  }
  onNameChange(text){
    //May change to categoryBar
    if(text.key == "new"){
      this.props.newNameRequest(true);
      text={key:"Empty", label: ''};
    }else{
      this.props.newNameRequest(false);
    }
    this.props.nameChanged(text.label);
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
    return ;
  }

  renderNameBar(){
    
    const data =  [
      { key: "Empty", section: true, label: 'Expense Name' },
      { key: "Bill", label: 'Bill' },
      { key: "General", label: 'General' },
      { key: "Food", label: 'Food' },
      { key: "new", label: 'New Expense'},
      // etc...
      // Can also add additional custom keys which are passed to the onChange callback
  ];
    if(this.props.isNew){
      return(
        <View>
          <CategoryBar
            label="Name"
            data={data}
            initValue={this.props.name}
            onChange={this.onNameChange.bind(this)}
          />
          <InputBar
            label="Expense"
            placeholder="New Expense Name"
            onChangeText={this.onNewNameChange.bind(this)}
            value={this.props.name}
          />
        </View>
      );
    }else{
      
      return(
        <CategoryBar 
          label="Name"
          data={data}
          initValue={this.props.name}
          onChange={this.onNameChange.bind(this)}
        />
      );
    }
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
          label="Category" 
          data={data}
          initValue={this.props.category.label}
          onChange={this.onCategoryChange.bind(this)}
        />

        {this.renderNameBar()}
        
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
  const { name, expense, category, error, loading, isNew } = state.expense;

  return { name, expense, category, error, loading, isNew };
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

export default connect(mapStateToProps, { onSubmitExpense, nameChanged, moneyChanged, categoryChanged, newNameRequest })(ExpenseForm);
