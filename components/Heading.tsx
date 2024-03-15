import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
const Heading = ({heading}:any) => {
    return (
        <View style={styles.contain}>
            <Text style={styles.fontStyle}>{heading}</Text>
        </View>
    )
}

export default Heading

const styles = StyleSheet.create({
    contain:{
        position:"absolute",
        top:0,
        right:0,
      
    },
    fontStyle:{
        color:"#d9326f",
        fontSize:60,
        padding:10,
        fontFamily:"Museo"
    }
})
