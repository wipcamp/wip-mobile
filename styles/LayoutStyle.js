import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    flex01: {
        flex: 0.1
    },
    flex02: {
        flex: 0.2
    },
    flex21: {
        flex: 0.21
    },
    flex1: {
        flex: 1
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    alignCenter: {
        alignItems: 'center'
    },
    alignTop: {
        alignItems: 'flex-start'
    },
    justifyStart: {
        justifyContent: 'flex-start'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    padLR10: {
        paddingLeft: 10,
        paddingRight: 10
    },
    maTop5: {
        marginTop: 5
    },
    maTop35: {
        marginTop: 35
    },
    maBot35: {
        marginBottom: 35
    },
})

export default styles