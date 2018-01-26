import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    bgWhite: {
        backgroundColor: "#FFF"
    },
    borderTopic: {
        padding: 10,
        paddingBottom: 10,
        height : 15,
        fontSize: 18
    },
    borderDetail: {
        padding: 10,
        paddingBottom: 10,
        height: 100,
        fontSize: 18
    },
    topicWhite: {
        height : Dimensions.get('screen').height * 0.08
    },
    addButton: {
        color: "#1b94f1",
        marginRight: 20
    },
    bg: {
        backgroundColor: '#ECEFF1',
        flex:1
    },
    spaces: {
        marginTop: 40
    }
})

export default styles