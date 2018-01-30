import { StyleSheet } from 'react-native'

const style = StyleSheet.create({
    topic: {
        fontSize: 18,
        fontWeight: "bold"
    },
    description: {
        fontSize: 14
    },
    date: {
        fontSize: 10
    },
    border: {
        borderColor: "#aaa",
        borderBottomWidth: 1,
        paddingTop: 10,
        paddingBottom: 10        
    },
    column: {
        flexDirection: 'column'
    },
    row: {
        flexDirection: 'row'
    },
    flex05: {
        flex: 0.5
    },
    flex1: {
        flex: 1
    },
    flex4: {
        flex: 4
    },
    itemCenter: {
        alignItems: 'center'
    },
    disable: {
        backgroundColor: '#E4E4E4'
    }
})

export default style