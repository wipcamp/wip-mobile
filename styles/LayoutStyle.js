import { StyleSheet, Dimensions } from 'react-native'

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    flex01: {
        flex: 0.1
    },
    flex02: {
        flex: 0.2
    },
    flex025: {
        flex: 0.25
    },
    flex0275: {
        flex: 0.275
    },
    flex03: {
        flex: 0.3
    },
    flex04: {
        flex: 0.4
    },
    flex045: {
        flex: 0.45
    },
    flex065: {
        flex: 0.65
    },
    flex07: {
        flex: 0.7
    },
    flex08: {
        flex: 0.8
    },
    flex09: {
        flex: 0.9
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
    alignStart: {
        alignItems: 'flex-start'
    },
    alignEnd: {
        alignItems: 'flex-end'
    },
    justifyStart: {
        justifyContent: 'flex-start'
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    justifyBetween: {
        justifyContent: 'space-between'
    },
    justifyAround: {
        justifyContent: 'space-around'
    },
    justifyEnd: {
        justifyContent: 'flex-end'
    },
    padTB10: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    padT2: {
        paddingTop: 2
    },
    padT5: {
        paddingTop: 5
    },
    padT8: {
        paddingTop: 8
    },
    padT10: {
        paddingTop: 10
    },
    padT15: {
        paddingTop: 15
    },
    padB4: {
        paddingBottom: 4
    },
    padB5: {
        paddingBottom: 5
    },
    padB10: {
        paddingBottom: 10
    },
    padB15: {
        paddingBottom: 15
    },
    padL10: {
        paddingLeft: 10
    },
    padLR05P: {
        paddingLeft: width * 0.05,
        paddingRight: width * 0.05
    },
    padLR10: {
        paddingLeft: 10,
        paddingRight: 10
    },
    maTop5: {
        marginTop: 5
    },
    maTop20: {
        marginTop: 20
    },
    maBot35: {
        marginBottom: 35
    },
    maR10: {
        marginRight: 10
    },
    radius: {
        borderRadius: width * 0.4 / 10
    },
    left95: {
        left: 9.5
    },
    right95: {
        right: 9.5
    },
    overHid: {
        overflow: 'hidden'
    },
})

export default styles