import React from 'react'
import { ReactElement } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native'

const {width, height}:{width:number, height:number} = Dimensions.get("screen");
import MultiImage from '../../../components/MultiImage';
import SecuredMarkdown from '../../../components/SecuredMarkdown';
const Historie = ():ReactElement => {
    return (
        <View>
<SecuredMarkdown element='text' style={styles.fontStyle} keyName="EstetrolNestHistoryOfEstetrolTitle"/>
          <View style={{
              flexDirection:"row",
              justifyContent:"center",
              alignItems:"center",
              marginTop:100
          }}>
       
          <MultiImage nameOfTheImage='EstetrolNestHistoryOfEstetrolImage' style={styles.image}/>
          </View>
                 
              </View>    

    )
}

export default Historie

const styles = StyleSheet.create({
    legenda:{
        borderWidth:2,
        padding:4,
        borderColor:"grey",
        borderRadius:4,
        paddingRight:40
        
    },
    canvas2:{
        width:width,
        height,
        position:"absolute",
        top:0,
        right:0,
        marginRight:-55,
        backgroundColor:"#e8eaedf0",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        maxWidth:width,
        padding:10,
        zIndex:11
    },
    icon:{
        width:30,
        height:60,
        resizeMode:"contain",
        marginRight:10
    },
    image:{
       width:width/1.2, 
       resizeMode:"contain",
       height:450,
   
    },
  
    tablenormal:{
        color:"grey",
        fontFamily:"Museo",
        textAlign:"left"
    },
    aligncenter:{textAlign:"center",  fontFamily:"Museo", fontSize:20},
   

    normalText:{
        color:"grey",
        fontFamily:"Museo",
        fontSize:20,
        position:"relative",
        marginTop:5
    },
    nadpis:{
        color:"black",
        fontFamily:"MuseoBold",
        fontSize:20,
        position:"relative",
        marginTop:5,
    },
 
    subText:{
        color:"black",
        fontFamily:"MuseoBold",
        fontSize:10,
        fontWeight:"bold",
        position:"relative",
    },
 
 
    fourGrid:{
       display:"flex",
       flexDirection:"column",
       width:width,
     
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
