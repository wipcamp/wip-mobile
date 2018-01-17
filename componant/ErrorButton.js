import React,{ Component } from 'react'
import { Button ,Text ,View , StyleSheet} from 'react-native'

export default class PagrOfError extends React.Component{
    rander(){
        return(
            <View style={styles.btn_bar}>
                <Button title="BACK"/>
            </View>
        );
    }
}

contst styles = StyleSheet.create({
    btn_bar: {
        heigth: 40,
        flex:1,
        flexDirection: "row",
        justifyConent: "space-around"
    }
})