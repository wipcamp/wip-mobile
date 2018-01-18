import { StyleSheet, Dimensions } from 'react-native'

const style = StyleSheet.create({
    bgWhite: {
        backgroundColor: "#FFF"
    },
    border: {
        borderStyle : "solid",
        borderWidth : 1,
        borderColor : "#efefef"
    },
    topic: {
        height : Dimensions.get('screen').height * 0.1
    }
})

export default style