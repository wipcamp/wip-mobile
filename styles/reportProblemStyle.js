import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    bgWhite: {
        backgroundColor: "#FFF"
    },
    borderTopic: {
        borderStyle : "solid",
        borderWidth : 1,
        borderColor : "#FFF",
        padding: 10,
        paddingBottom: 10
    },
    borderDetail: {
        borderStyle : "solid",
        borderWidth : 1,
        borderColor : "#FFF",
        padding: 10,
        paddingBottom: 10,
        height: 361
    },
    topicGray: {
        height : Dimensions.get('screen').height * 0.05,
    },
    topicWhite: {
        height : Dimensions.get('screen').height * 0.07,
        justifyContent: 'center'
    },
    addButon: {
        color: "#1b94f1",
        marginRight: 10
    },
    bg: {
        backgroundColor: '#ECEFF1',
        flex:1
    }
})

export default styles