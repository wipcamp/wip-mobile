import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import Catagory from '../components/CatagoryComponent';
import Styles from '../styles/ViewAProblemStyle';
import AllPagestyle from '../styles/ViewAllProblemStyle';

  class AllProblem extends Component {
    static navigationOptions = {
        title: 'Problem',
        headerRight: <Text>+</Text>
    }
  render() {
    return (
      <View>
        <View>
          <Text style={[Styles.boxGray , Styles.topicGray, Styles.border]}></Text>
        </View>
        <View>
          <Catagory/>
        </View>
          <Text style={[Styles.boxGray , Styles.topicGray, Styles.border]}></Text>
        <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border]}>
          <View styles={AllPagestyle.flexbox}>
            <Text>Topic Name</Text>
            <Text styles={AllPagestyle.textright}>Sunday</Text>
          </View>
          <Text>Catagory : Catagory Name</Text>
        </View>
        <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border, AllPagestyle.flexbox]}>
          <View styles={AllPagestyle.flexbox}>
            <Text>Topic Name</Text>
            <Text styles={AllPagestyle.textright}>Munday</Text>
          </View>
          <Text>Catagory : Catagory Name</Text>
        </View>
        <View style={[ Styles.boxWhite, Styles.topicWhite, Styles.border, AllPagestyle.flexbox]}>
          <View styles={AllPagestyle.flexbox}>
            <Text>Topic Name</Text>
            <Text styles={AllPagestyle.textright}>Munday</Text>
          </View>
          <Text>Catagory : Catagory Name</Text>
        </View>
      </View>
    );
  }
}
export default AllProblem
