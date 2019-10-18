import React from 'react';
import ProgressBar from 'react-native-progress/Bar';
import { View, Text } from 'react-native';

const MoneyOverview = ({ title, textColor = "white", titleColor = "white", maxBudget = 0, expense = 0}) => {
  const { containerStyle, budgetText, expenseText, bigContainerStyle, titleStyle, moneyContainer } = styles;

  var factor;

  if (expense == 0 && maxBudget == 0) factor = 0;
  else if(maxBudget == 0) factor = 1.0;
  else factor = expense/maxBudget;

  return (
    <View style={bigContainerStyle}>
      <Text style={[{ color: titleColor }, titleStyle]}>
        {title}
      </Text>
      <View style={containerStyle}>
        <View style={moneyContainer}>
          <Text style={[{ color: textColor }, expenseText]}>
            {"RM " + expense}
          </Text>
          <Text style={budgetText}>
            {"/ RM " + maxBudget}
          </Text>
        </View>
        <ProgressBar
          style={{ marginHorizontal: 10 }}
          borderWidth={0}
          color={'#6C7A89'}
          unfilledColor={'#d6d6c2'}
          borderRadius={0}
          progress={factor}
          width={null}
        />
      </View>
    </View>
  );
};

const styles = {
  bigContainerStyle: {
    width: "100%",
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#2e2e1f',
    paddingVertical: 10
  },
  titleStyle: {
    textAlign: 'left',
    marginLeft: 15,
    fontSize: 25,
    fontWeight: 'bold'
  },
  containerStyle:{
    width: "100%",
    marginVertical: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#3d3d29',
    justifyContent: 'center',
    borderRadius: 15,
    paddingVertical: 15
  },
  moneyContainer:{
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },
  expenseText:{
    fontSize: 40,
    fontWeight: 'bold'
  },
  budgetText:{
    fontSize: 20,
    color: 'white',
    alignSelf: 'flex-end'
  }
}
export { MoneyOverview };
