import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import MultiImage from '../../../components/MultiImage';
const {width,height}:{width:number, height:number} = Dimensions.get("screen");
const Ctyritypy = () => {
    return (
        <View style={{marginLeft:60}}>
            <Text style={styles.fontStyle}>4 typy estrogenů</Text>
            <View style={styles.fourGrid}>
                
            
                <MultiImage
            nameOfTheImage="EstetrolTypesImage1"
            style={styles.image}
          />
                <MultiImage
            nameOfTheImage="EstetrolTypesImage2"
            style={styles.image}
          />
                <MultiImage
            nameOfTheImage="EstetrolTypesImage3"
            style={styles.image}
          />
                <MultiImage
            nameOfTheImage="EstetrolTypesImage4"
            style={styles.image}
          />
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
