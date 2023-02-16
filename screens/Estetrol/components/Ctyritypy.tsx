import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
const {width,height}:{width:number, height:number} = Dimensions.get("screen");
const Ctyritypy = () => {
    return (
        <View style={{marginLeft:60}}>
            <Text style={styles.fontStyle}>4 typy estrogenů</Text>
            <View style={styles.fourGrid}>
                <Image source={require("../../../assets/adrovelis.png")} style={styles.image}/>
                <Image source={require("../../../assets/bdrovelis.png")} style={styles.image}/>
                <Image source={require("../../../assets/cdrovelis.png")} style={styles.image}/>
                <Image source={require("../../../assets/ddrovelis.png")} style={styles.image}/>
            </View>
        </View>
    )
}

export default Ctyritypy

const styles = StyleSheet.create({
    image:{
        width:width/3,
        resizeMode:"contain",
        height:200,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
    },
    fourGrid:{
       display:"flex",
       flexDirection:"row",
       width:width-60,
       height:height-300,
       justifyContent:"center",
       alignItems:"center",
       flexWrap:"wrap",
       marginTop:150
    },
    fontStyle:{
        color:"#d9326f",
        fontSize:60,
        padding:10,
        fontFamily:"Museo",
        position:"absolute",
        top:0,
        right:0
    },
})
