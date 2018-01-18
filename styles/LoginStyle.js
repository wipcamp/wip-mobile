import { StyleSheet, Dimensions, Image } from 'react-native'

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
    }
})

export default style