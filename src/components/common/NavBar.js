import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { Actions } from 'react-native-router-flux';

class NavBar extends Component {
  state={ key: "main" }

  onButtonPress() {
    Actions[this.state.key]({type: 'reset'});
    // switch(this.state.key){
    //   case "main":
    //     Actions.main({type: 'reset'});
    //     break;
    //   case "expense":
    //     Actions.expense({type: 'reset'});
    //     break;
    //   case "income":
    //     Actions.income({type: 'reset'});
    //     break;
    //   case "calendar":
    //     Actions.calendar({type: 'reset'});
    //     break;
    //   default:
    //     Actions.main({type: 'reset'});
    // }
  }
  render(){
    const { navBarStyle, textStyle, boxStyle, iconStyle } = styles;
    return (
      <View style={navBarStyle}>
        <TouchableOpacity style={{ flex: 1 }} onPress={() => {
          this.setState({ key: "main"},
          this.onButtonPress.bind(this));
        }}>
          <View style={boxStyle}>
            <Icon style={iconStyle} name='home'/>
            <Text style={textStyle}>Overview</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1 }} onPress={() => {
          this.setState({ key: "expense"},
          this.onButtonPress.bind(this));
        }}>
          <View style={boxStyle}>
            <Icon style={iconStyle} name='money-bill-wave'/>
            <Text style={textStyle}>Expense</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1 }} onPress={() => {
          this.setState({ key: "income"},
          this.onButtonPress.bind(this));
        }}>
          <View style={boxStyle}>
            <Fontisto style={iconStyle} name='money-symbol'/>
            <Text style={textStyle}>Income</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1 }} onPress={() => {
          this.setState({ key: "calendar"},
          this.onButtonPress.bind(this));
        }}>
          <View style={boxStyle}>
            <Fontisto style={iconStyle} name='date'/>
            <Text style={textStyle}>Calendar</Text>
          </View>
          </TouchableOpacity>
      </View>
    );
  };
}

const styles = {
  navBarStyle: {
    backgroundColor: "rgba(0,0,0,1)",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0
  },
  iconStyle:{
    textAlign: 'center',
    fontSize: 20,
    color: 'rgba(200,200,200,0.8)',
    paddingBottom: 5
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 11,
    color: 'rgba(200,200,200,0.8)'
  },
  boxStyle: {
    flex: 4,
    padding: 10
  }
};

export { NavBar };
