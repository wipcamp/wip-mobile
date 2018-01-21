import { StyleSheet, Dimensions } from 'react-native'

const style = StyleSheet.create({
    boxWhite: {
        backgroundColor: '#FFFFFF'
    },
    boxGray: {
        backgroundColor: '#ECEFF1'
    },
    bg: {
        backgroundColor: '#ECEFF1',
        flex:1
    },
    border: {
        borderStyle : 'solid',
        borderWidth : 1,
        borderColor : '#efefef'
    },
    text: {
        fontSize: 17,
        flexDirection: 'row'
    },
    text2: {
        fontSize: 17,
        flexDirection: 'row',
        color: '#c8c8c8'
    },
    border: {
        borderStyle : "solid",
        borderWidth : 1,
        borderColor : "#efefef",
        justifyContent: 'center'
    },
    topicWhite: {
        height : Dimensions.get('screen').height * 0.07
    },
    topicGray: {
        height : Dimensions.get('screen').height * 0.05
    }
})

export default style