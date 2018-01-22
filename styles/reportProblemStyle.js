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