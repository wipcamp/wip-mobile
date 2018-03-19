import { StyleSheet, Dimensions, Image } from 'react-native'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const style = StyleSheet.create({
    border: {
        borderColor: "#aaa",
        borderBottomWidth: 1
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    flex01: {
        flex: 0.1
    },
    flex02: {
        flex: 0.2
    },
    flex21: {
        flex: 0.21
    },
    flex1: {
        flex: 1
    },
    alignCenter: {
        alignItems: 'center'
    },
    alignTop: {
        alignItems: 'flex-start'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    borderLeft: {
        borderColor: "#aaa",
        borderLeftWidth: 1
    },
    borderBottom: {
        borderColor: "#aaa",
        borderBottomWidth: 1
    },
    padTop20: {
        paddingTop: 20
    },
    profileImg: {
        height: height * 0.11 - 40,
        width: height * 0.11 - 40,
    },
    wipLogo: {
        resizeMode: Image.resizeMode.contain,
        height: height * 0.15,
        width: 'auto'
    },
    menuIcon: {
        resizeMode: Image.resizeMode.contain,
        width: 100,
        height: height * 0.09
    },
    marginBottom5: {
        marginBottom: 5
    },
    marginRight10: {
        marginRight: 10
    },
    borderRadius10: {
        borderRadius: 10,
    },
})

export default style