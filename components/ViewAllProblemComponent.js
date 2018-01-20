import React, { Component } from 'react';
import {  View, Text,CardSection } from 'react-native';
import ViewAllProblemStyle from '../styles/ViewAllProblemStyle'

const ListItem = (props) => {
    const { titleStyle } = styles;
    return (
        <CardSection>
            <Text style={titleStyle}>
              {props.problem.title}
            </Text>
            <Text style={titleStyle}>
              {props.category.title}
            </Text>
        </CardSection>
        );
      };
       
export default ViewAllProblemComponent;
