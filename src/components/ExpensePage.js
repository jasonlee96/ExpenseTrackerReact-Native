import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavBar, MoneyViewer, CategoryBox, CategoryItem, Button } from './common';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Actions } from 'react-native-router-flux';

export default class ExpensePage extends Component {
  onPress() {
    Actions.addExpense();
  }

  renderDescription(){
    const { descriptionTextStyle, iconContainer, descriptionMoneyStyle } = styles;

    return (
      <View>
        <CategoryItem>
          <Text style={descriptionTextStyle}>
            Telecommunication Bill
          </Text>
          <Text style={descriptionMoneyStyle}>
            340
          </Text>
          <View style={iconContainer}>
          </View>
        </CategoryItem>

        <CategoryItem>
          <Text style={descriptionTextStyle}>
            Internet Bill
          </Text>
          <Text style={descriptionMoneyStyle}>
            300
          </Text>
          <View style={iconContainer}>
          </View>
        </CategoryItem>

        <CategoryItem>
          <Text style={descriptionTextStyle}>
            Electrical Bill
          </Text>
          <Text style={descriptionMoneyStyle}>
            180
          </Text>
          <View style={iconContainer}>
          </View>
        </CategoryItem>

        <CategoryItem>
          <Text style={descriptionTextStyle}>
            Insurance
          </Text>
          <Text style={descriptionMoneyStyle}>
            1,200
          </Text>
          <View style={iconContainer}>
          </View>
        </CategoryItem>

        <CategoryItem>
          <Text style={descriptionTextStyle}>
            Water Bill
          </Text>
          <Text style={descriptionMoneyStyle}>
            80
          </Text>
          <View style={iconContainer}>
          </View>
        </CategoryItem>

        <CategoryItem>
          <Text style={descriptionTextStyle}>
            Gym
          </Text>
          <Text style={descriptionMoneyStyle}>
            200
          </Text>
          <View style={iconContainer}>
          </View>
        </CategoryItem>
      </View>
    );
  }

  render() {
    const { scrollContainer, textStyle, buttonStyle, iconStyle, iconContainer, moneyStyle } = styles;

    return (
      <View style={{ flex: 1, flexDirection:'column', backgroundColor: '#2e2e1f'}}>
        <MoneyViewer date="Today" expense="2000" title="Daily Expense"/>

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
            <CategoryItem>
              <Text style={textStyle}>
                Utilities
              </Text>
              <Text style={moneyStyle}>
                2,300
              </Text>
              <View style={iconContainer}>
                <Icon style={iconStyle} name="chevron-down" />
              </View>
            </CategoryItem>

            {this.renderDescription()}
            
            <CategoryItem>
              <Text style={textStyle}>
                General
              </Text>
              <Text style={moneyStyle}>
                2,300
              </Text>
              <View style={iconContainer}>
                <Icon style={iconStyle} name="chevron-down" />
              </View>
            </CategoryItem>

            <CategoryItem>
              <Text style={textStyle}>
                Foods
              </Text>
              <Text style={moneyStyle}>
                2,300
              </Text>
              <View style={iconContainer}>
                <Icon style={iconStyle} name="chevron-down" />
              </View>
            </CategoryItem>

            <CategoryItem>
              <Text style={textStyle}>
                Others
              </Text>
              <Text style={moneyStyle}>
                2,300
              </Text>
              <View style={iconContainer}>
                <Icon style={iconStyle} name="chevron-down" />
              </View>
            </CategoryItem>
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
    fontSize: 20,
    color: 'rgba(200,200,200,0.8)'
  },
  iconContainer: {
    width: 15,
    marginTop: 5,
    marginRight: 20
  }
}
