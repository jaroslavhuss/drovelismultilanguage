import React,{useState} from 'react'
import { ReactElement } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Touchable } from 'react-native'

const {width, height}:{width:number, height:number} = Dimensions.get("screen");
import { AntDesign } from '@expo/vector-icons';
import MultiImage from '../../../components/MultiImage';
import SecuredMarkdown from '../../../components/SecuredMarkdown';
const Pozitiva = ():ReactElement => {
    const [citaceLegenda, setCitaceLegenda] = useState<number>(0);
    return (
        <View>
            <SecuredMarkdown keyName='EstetrolNestPositiveTypesTitle' element='text' style={styles.fontStyle}/>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    height:height-200,
            
                }}>
                  <MultiImage nameOfTheImage='EstetrolNestPositiveTypesImage' style={styles.img}/>
                </View>
                <View style={{
          position:"absolute",
          bottom:0,
          right:0,
              justifyContent:"center",
              alignItems:"flex-end",
              height:80,
          }}>
            <TouchableOpacity style={{paddingRight:80}} onPress={()=>setCitaceLegenda(1)}>
                <AntDesign name="infocirlce" size={80} color="#71abc3" />
            </TouchableOpacity>
          </View>
          {citaceLegenda===1&&<TouchableOpacity onPress={()=>setCitaceLegenda(0)} style={styles.canvas2}>
              <View style={{
                  width:width-300
              }}>
                  <SecuredMarkdown element='markdown' keyName='EstetrolNestPositiveTypesInfo' />
              </View>
              </TouchableOpacity>}
               
        </View>    

    )
}

export default Pozitiva

const styles = StyleSheet.create({
    nadpis:{
        color:"black",
        fontFamily:"MuseoBold",
        fontSize:20,
        position:"relative",
        marginTop:5,
    },
 
    legenda:{
        borderWidth:2,
        padding:4,
        borderColor:"grey",
        borderRadius:4,
        paddingRight:40
        
    },
    icon:{
        width:30,
        height:60,
        resizeMode:"contain",
        marginRight:10
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
   img:{
       marginTop:100,
       flex:1,
       resizeMode:"contain",
       width:width/2,
       height:450
   }, 
 
    fontStyle:{
        color:"#d9326f",
        fontSize:40,
        padding:10,
        fontFamily:"Museo",
        position:"absolute",
        top:0,
        right:0
    },
})
