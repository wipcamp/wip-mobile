import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    bgWhite: {
        backgroundColor: "#FFF",
    },
    borderTopic: {
        borderStyle : "solid",
        borderBottomColor: '#c8c8c8', 
        borderWidth : 1,
        borderColor : "#FFF",
        padding: 10,
        paddingBottom: 1,
        fontSize: 18
    },
    borderDetail: {
        borderStyle : "solid",
        borderWidth : 1,
        borderColor : "#FFF",
        padding: 10,
        paddingBottom: 10,
        height: 300,
        fontSize: 18
    },
    topicGray: {
        height : Dimensions.get('screen').height * 0.05
    },
    topicWhite: {
        height : Dimensions.get('screen').height * 0.08
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