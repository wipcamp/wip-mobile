import { StyleSheet, Dimensions, Image } from 'react-native'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

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
    },
    problemIcon: {
        height: width * 0.2 - 20,
        width: width * 0.2 - 20,
        borderRadius: (width * 0.2 - 20) / 2
    }
})

export default styles