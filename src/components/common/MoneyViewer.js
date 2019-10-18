import React from 'react';
import { View, Text, ScrollView } from 'react-native';

const MoneyViewer = ({ date="Today", expense="0", title }) => {
  const { titleContainer, titleText, expenseContainer, expenseText } = styles;

  return (
    <View>
      <View style={titleContainer}>
        <Text style={titleText}>
          {title} ({date}):
        </Text>
      </View>

      <View style={expenseContainer}>
        <Text style={expenseText}>
          RM {expense}
        </Text>
      </View>
    </View>
  );
}

const styles = {
  titleContainer: {
    justifyContent:'center',
    marginLeft: 15,
    marginTop: 15
  },
  titleText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  expenseContainer: {
    margin: 5
  },
  expenseText: {
    fontSize: 35,
    color: 'white',
    alignSelf: 'center'
  }
}
export { MoneyViewer };
