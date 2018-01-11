import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const ComingSoon = () => (
    <View style={styles.container}>
        <Text style={styles.header}>WIP Mobile</Text>
        <Text style={styles.header}>Coming soon</Text>
    </View>
)
  
export default ComingSoon

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        fontSize: 24,
    }
})