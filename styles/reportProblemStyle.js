import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
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
    },
    addButon: {
        color: "#1b94f1",
        marginRight: 10
    }
})

export default styles