import { StyleSheet, Image } from 'react-native'

const style = StyleSheet.create({
    row: {
        flexDirection: 'row'
    },
    alignCenter: {
        alignItems: 'center'
    },
    justifySpaceBet: {
        justifyContent: 'space-between'
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
    }
})

export default style