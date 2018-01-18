import React, { Component } from 'react';
import {  View, Text,Picker } from 'react-native';

export default class componentName extends Component {
    constructor(props){
        super(props);
        this.state = {
          types: [
            { title: 'Champer', value: 'champer' },
            { title: 'Champer', value: 'champer' },
            { title: 'Champer', value: 'champer' }
          ],
        }
      }
      render() {
        return (
         <View>
            <Picker
                options={this.state.types}
                selectedOption={this.state.selectedtypes ? this.state.selectedtypes : this.state.types[0]}
                onValueChange={(types) => this.setState({selectedtypes: types })}>
            </Picker>
          </View>
        );
      }
}
