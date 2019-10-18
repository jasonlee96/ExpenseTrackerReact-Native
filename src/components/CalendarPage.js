import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavBar } from './common';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default class CalendarPage extends Component{

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#2e2e1f' }}>
        <View style={{ marginVertical: 15}}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Select Date to view the expense</Text>
        </View>
        <View style={{ height: '60%' }}>
          <CalendarList
            // Callback which gets executed when visible months change in scroll view. Default = undefined
            onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
            // Max amount of months allowed to scroll to the past. Default = 50
            pastScrollRange={12}
            // Max amount of months allowed to scroll to the future. Default = 50
            futureScrollRange={12}
            // Enable or disable scrolling of calendar list
            scrollEnabled={true}
            // Enable or disable vertical scroll indicator. Default = false
            showScrollIndicator={true}
            // Initially visible month. Default = Date()
            current={'2019-09-27'}

            // Handler which gets executed on day press. Default = undefined
            onDayPress={(day) => {console.log('selected day', day)}}
            // Handler which gets executed on day long press. Default = undefined
            onDayLongPress={(day) => {console.log('selected day', day)}}
            // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
            monthFormat={'MMMM yyyy'}
            // Handler which gets executed when visible month changes in calendar. Default = undefined
            onMonthChange={(month) => {console.log('month changed', month)}}
            // Hide month navigation arrows. Default = false
            hideArrows={true}
            // Do not show days of other months in month page. Default = false
            hideExtraDays={true}
            // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
            // day from another month that is visible in calendar page. Default = false
            disableMonthChange={true}
            // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
            firstDay={1}
            
            //displayLoadingIndicator
            theme={{
              backgroundColor: '#000000',
              calendarBackground: '#000000',
              textSectionTitleColor: '#b6c1cd',
              selectedDayBackgroundColor: '#00adf5',
              selectedDayTextColor: '#ffffff',
              todayTextColor: '#000000',
              todayBackgroundColor: "lightgrey",
              dayTextColor: '#a8aeb3',
              textDisabledColor: '#6c7073', //#d9e1e8
              dotColor: '#00adf5',
              selectedDotColor: '#ffffff',
             
              monthTextColor: 'white',
              indicatorColor: 'blue',
              textDayFontFamily: 'monospace',
              textMonthFontFamily: 'monospace',
              textDayHeaderFontFamily: 'monospace',
              textDayFontWeight: '300',
              textMonthFontWeight: 'bold',
              textDayHeaderFontWeight: '300',
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16
            }}
          />
          
        </View>
        <View style={{ marginVertical: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', color: 'white' }}>Scroll vertically to change the month</Text>
        </View>

        <NavBar />
      </View>
    );
  }
}
