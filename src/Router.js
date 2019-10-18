import React, { Component } from 'react';
import { Router, Scene, Actions } from 'react-native-router-flux';
import TestPage from './components/TestPage';
import ExpensePage from './components/ExpensePage';
import IncomePage from './components/IncomePage';
import CalendarPage from './components/CalendarPage';
import ExpenseForm from './components/ExpenseForm';
import IncomeForm from './components/IncomeForm';

const RouterComp = () => {
  return (
    <Router>
      <Scene key="root" titleStyle={ styles.titleStyle }>
        <Scene key="main" title="Overview" component={TestPage} initial/>
        <Scene key="expense" title="Expense" component={ExpensePage} />
        <Scene key="income" title="Income" component={IncomePage} />
        <Scene key="calendar" title="Calendar" component={CalendarPage} />
        <Scene key="addExpense" title="Add Expense" titleStyle={{marginLeft: 150}} component={ExpenseForm} />
        <Scene key="addIncome" title="Add Income" titleStyle={{marginLeft: 150}} component={IncomeForm} />      
      </Scene>
    </Router>
  );
}

const styles = {
  titleStyle: {
    textAlign: 'center',
    flex: 1
  }
};

export default RouterComp;
