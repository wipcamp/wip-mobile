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
    bannerMain: {
        height: height * 0.45,
        width: width,
        resizeMode: Image.resizeMode.cover
    },
    mainIcon: {
        width: width * 0.25,
        height: width * 0.25
    },
    mainIconS: {
        height: width * 0.19,
        resizeMode: Image.resizeMode.contain,
    },
    problemIcon: {
        height: width * 0.2 - 20,
        width: width * 0.2 - 20,
        borderRadius: (width * 0.2 - 20) / 2
    },
    imgNoInternet: {
        height : height * 0.25,
        resizeMode: Image.resizeMode.contain,
        right: width * -0.02
    },
    profileBanner: {
        height: height * 0.3 * 0.75,
        width: width,
        resizeMode: Image.resizeMode.cover
    },
    profileImg: {
        height: height * 0.3 * 0.5,
        width: height * 0.3 * 0.5,
        borderRadius: height * 0.3 * 0.5 / 2,
        position: 'absolute',
        zIndex: 100,
        bottom: 0,
        left: (width / 2) - (height * 0.3 * 0.5 / 2)
    }
})

export default styles