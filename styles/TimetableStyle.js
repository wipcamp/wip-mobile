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
        resizeMode: Image.resizeMode.contain,
        height: height * 0.03,
        width: 10
    },
    currentDate: {
        backgroundColor: "#ff8214",
    },
    dateBorder: {
        borderRightWidth: 1,
        borderColor: "#ff8214",
    },
    dateBorderLast: {
        paddingTop: 14,
        paddingBottom: 14,
    },
    hourHeight: {
        height: height*0.12
    },
    timeWidth: {
        flex: 0.15
    },
    hourLine: {
        flex: 0.81,
        borderColor: "#aaa",
        borderTopWidth: 1,
        marginTop: 8
    },
    eventContainer: {
        position: "absolute",
        marginLeft: '5%',
        zIndex: 50
    },
    eventCard: {
        backgroundColor: "#ff8214",
        marginLeft: width*0.1
    },
    paddingTop10: {
        paddingTop: 10
    },
    paddingBottom10: {
        paddingBottom: 10
    }
})

export default style