import React, { Component } from 'react';
import {  View, Text, ListView, } from 'react-native';
import { connect } from 'react-redux'
import ViewAllProblemComponent from '../components/ViewAllProblemComponent';
import CatagoryComponent from '../components/CatagoryComponent';
import TopicInputComponent from '../components/TopicInputComponent';
import styles from '../styles/MockViewAllProblemStyle';

class ViewAllProblemPage extends Component {
  static navigationOptions = {
    title: 'Problem',
    headerRight: <Text>+</Text>
}

    componentDidUpdate() {
    console.log(this.props.state)
}
    componentWillMount() {
      const ds = new ListView.DataSource({
        rowHasChanged: (problem1, problem2) => problem1 !== problem2
      })
   
      this.dataSource = ds.cloneWithRows(this.props.allproblem);
    }
   
    renderRow(TopicProblem) {
      return <ViewAllProblemComponent problem = {TopicInputComponent} category = {CatagoryComponent}/>        
    }
   
    render() {
      return (
        <View style={styles.bg}>
          <View style={styles.boxgray}></View>
          <CatagoryComponent/>
          <View style={styles.boxgray}></View>
            <View style={styles.boxwhite}>
              <View style={styles.flexrow}>
                <Text>Topic Name</Text>
                <Text>Sunday</Text>
              </View>
              <View>
                <Text>Category : Category Name</Text>
              </View>
              </View>
            <View style={styles.boxwhite}>
              <View style={styles.flexrow}>
                <Text>Topic Name</Text>
                <Text>Monday</Text>
              </View>
              <View>
                <Text>Category : Category Name</Text>
              </View>
            </View>
            <View style={styles.boxwhite}>
              <View style={styles.flexrow}>
                <Text>Topic Name</Text>
                <Text>Monday</Text>
              </View>
              <View>
                <Text>Category : Category Name</Text>
              </View>
            </View>
        </View>
      );
    }
    
  }
   
  const mapStateToProps = (state) => {
    return { allproblem: state.allproblem }
  }

   
  export default connect(mapStateToProps)(ViewAllProblemPage)
