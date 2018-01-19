import React, { Component } from 'react'
import { View, Text, StyleSheet,Button} from 'react-native'



class AProblem extends Component {
    render() {
        return (
            <View >
                <Text >Topic :</Text>
                <Text >Type :</Text>
                <Text >Note :</Text>
                <Text >Post by </Text>
                    <View>
                        <input type='checkbox'/>
                        <Text >EDIT DONE!!</Text>
                    </View>
            </View>
        )
    }
}

export default AProblem

