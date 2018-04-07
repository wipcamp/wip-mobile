import { StyleSheet, Dimensions } from 'react-native'

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    facebookButton: {
        backgroundColor: '#4867AD',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 60,
        paddingRight: 60,
        borderRadius: 20,
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 16,
        paddingRight: 16,
        borderRadius: 10
    },
    rejectButton: {
        backgroundColor: '#D9534F'
    },
    solveButton: {
        backgroundColor: '#5Cb85C'
    },
    point: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: '#000'
    },
    pointTimeline: {
        height: 14,
        width: 14,
        borderRadius: 7,
        backgroundColor: '#FF8214'
    },
    verticalLine: {
        width: 2,
        backgroundColor: '#FF8214'
    },
    qrCamera: {
        width: width * 0.8,
        height: width * 0.8,
        marginTop: height * 0.05,
        marginBottom: height * 0.15
    }
})

export default styles