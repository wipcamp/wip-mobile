import { StyleSheet, Dimensions, Image } from 'react-native'

const height = Dimensions.get('screen').height

const styles = StyleSheet.create({
    wipLogo: {
        height : height / 5,
        resizeMode: Image.resizeMode.contain,
        top: -50
    },
    facebookLogo: {
        height: height / 25,
        width: height / 25,
        marginRight: 20,
    }
})

export default styles