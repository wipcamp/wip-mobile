import { StyleSheet, Dimensions, Image } from 'react-native'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const style = StyleSheet.create({
    flex1: {
        flex: 1
    },
    row: {
        flexDirection: 'row'
    },
    alignCenter: {
        alignItems: 'center'
    },
    justifySpaceBet: {
        justifyContent: 'space-between'
    },
    textWhite: {
        color: '#fff'
    },
    card: {
        backgroundColor: '#fff',
        height: '10%',
        paddingLeft: 10,
        paddingRight: 10,
        borderColor: "#aaa",
        borderBottomWidth: 1
    },
    arrow: {
        height: '100%',
        resizeMode: Image.resizeMode.contain,
    },
    currentDate: {
        backgroundColor: "#ff8214"
    },
    dateBorder: {
        borderColor: "#ff8214",
        borderRightWidth: 1
    },
    hourHeight: {
        height: height*0.12
    },
    timeWidth: {
        flex: 0.1
    },
    hourLine: {
        flex: 0.9,
        borderColor: "#aaa",
        borderTopWidth: 1,
        marginTop: 8
    }
})

export default style