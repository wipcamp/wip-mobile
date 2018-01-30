import { StyleSheet, Dimensions } from 'react-native'

const style = StyleSheet.create({
    boxWhite: {
        backgroundColor: '#FFFFFF'
    },
    boxGray: {
        backgroundColor: '#efefef'
    },
    bg: {
        backgroundColor: '#ECEFF1',
        flex:1
    },
    text: {
        fontSize: 17,
        flexDirection: 'row'
    },
    textBold: {
        fontSize: 17,
        flexDirection: 'row',
        color: '#c8c8c8'
    },
    border: {
        borderStyle : "solid",
        borderWidth : 1,
        borderColor : "#efefef",
        justifyContent: 'center',
        borderBottomColor: '#c8c8c8'
    },
    topicWhite: {
        height : Dimensions.get('screen').height * 0.07
    },
    topicGray: {
        height : Dimensions.get('screen').height * 0.05
    },
    spaces: {
        marginTop: 35
    }
})

export default style