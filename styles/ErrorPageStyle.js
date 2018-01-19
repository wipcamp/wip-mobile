import {StyleSheet} from 'react-native'

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#FF8214',
        alignItems: 'center',
    justifyContent: 'center'
    },
    buttonContainer:{
        margin:20,
        flexDirection: 'row'
    },textTop: {
        fontSize: 28,
        flexDirection: 'row',
        color: '#FFFFFF'

    },textBottom: {
        fontSize: 24,
        flexDirection: 'row',
        color: '#FFFFFF',
        fontWeight: 'bold'

    },
    btn: {
        height: 40,
        width: 80,
        backgroundColor:'#FFFFFF',
        margin: 10
    }
})
export default style