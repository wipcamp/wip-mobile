import React, { Component } from 'react';
import {  View, Text, } from 'react-native';
import Catagory from '../components/CatagoryComponent'
import Styles from '../styles/ViewAProblemStyle'
import ProblemStyles from '../styles/ViewAllProblemStyle'

export default class ViewAllProblemPage extends Component {
  render() {
    return (
      <View>
        <Text style={[ Styles.boxGray , Styles.topicGray, Styles.border]}> </Text>
        <View>
          <Catagory/>
        </View>
        <Text style={[ Styles.boxGray , Styles.topicGray, Styles.border]}> </Text>
        <View>
          <Text style={Styles.boxWhite}>Topic Name</Text>
          <Text>Sunday</Text>
          <Text>Catagory: Catagory Name</Text>
          
        </View>
      </View>
    );
  }
}
