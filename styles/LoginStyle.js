import { StyleSheet, Dimensions, Image } from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#efefef',
        alignItems: 'center',
        justifyContent: 'center'
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
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 20,
    },
    viewFBButton: {
        justifyContent: 'flex-start'
    },
    loginText: {
        marginTop: 5,
        color: '#ffffff'
    },
    facebookLogo: {
        height: Dimensions.get('screen').height / 25,
        width: Dimensions.get('screen').height / 25,
        marginRight: 20,
    }
})

export default style