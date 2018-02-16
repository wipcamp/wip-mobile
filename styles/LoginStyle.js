import { StyleSheet, Dimensions, Image } from 'react-native'
import { start } from 'repl';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height : Dimensions.get('screen').height / 5,
        resizeMode: Image.resizeMode.contain,
        top: -50
    },
    facebookButton: {
        backgroundColor: '#4867AD',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 50,
        paddingRight: 50,
        borderRadius: 20,
    },
    loginText: {
        color: '#ffffff'
    },
    facebookLogo: {
        height: Dimensions.get('screen').height / 10,
        // resizeMode: Image.resizeMode.contain,
        // alignItems: 'flex-start'
    }
})

export default style