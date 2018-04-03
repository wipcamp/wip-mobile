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
        resizeMode: Image.resizeMode.cover
    },
    mainIcon: {
        width: width * 0.25,
        height: width * 0.25
    },
    mainIconS: {
        width: width * 0.19,
        height: width * 0.19
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
        height: (height * 0.21) + (width * 0.3 / 2),
        resizeMode: Image.resizeMode.cover,
    },
    profileImg: {
        height: width * 0.3,
        width: width * 0.3,
        borderRadius: width * 0.3 / 2,
        position: 'absolute',
        zIndex: 100,
        bottom: 0,
        left: (width / 2) - (width * 0.3 / 2)
    }
})

export default styles