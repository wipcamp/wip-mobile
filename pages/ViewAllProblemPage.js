import React, { Component } from 'react';
import {  View, Text, ListView, } from 'react-native';
import { connect } from 'react-redux'
import ViewAllProblemComponent from '../components/ViewAllProblemComponent';
import CatagoryComponent from '../components/CatagoryComponent';
import TopicInputComponent from '../components/TopicInputComponent';

class ViewAllProblemPage extends Component {
    componentWillMount() {
      const ds = new ListView.DataSource({
        rowHasChanged: (problem1, problem2) => problem1 !== problem2
      });
   
      this.dataSource = ds.cloneWithRows(this.props.allproblem);
    }
   
    renderRow(TopicProblem) {
      return <ViewAllProblemComponent problem = {TopicInputComponent} category = {CatagoryComponent}/>        
    }
   
    render() {
      return (
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      );
    }
  }
   
  const mapStateToProps = (state) => {
    return { allproblem: state.allproblem };
  };
   
  export default connect(mapStateToProps)(ViewAllProblemPage);