import React, {useState} from 'react'
import { ReactElement } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 

const {width,height}:{width:number, height:number} = Dimensions.get("screen");
const Nest = ():ReactElement => {
    return (
        <View style={{marginLeft:60}}>
            <Text style={styles.fontStyle}>E4 je NEST</Text>
            <View style={{height:height-300, marginTop:100, alignItems:"center"}}>
                <View>
                <Text style={[styles.aligncenter,{borderWidth:1, padding:10, borderRadius:12, borderColor:"#71abc3", width:width/2}]}>Native oEstrogen with Selective Tissue action{"\n"}={"\n"}Nativní Estrogen se Selektivním působením ve Tkáních
                </Text> 
                </View>
                <View style={{padding:20,flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
                <View style={{flex:65}}>
                <View style={{marginTop:30}}>
                    <Text style={{fontFamily:"Museo", fontSize:20}}>
                       
                            <Text style={{fontFamily:"MuseoBold"}}>ANTAGONISTA na membránových ERα{"\n"}{"\n"}</Text>
                 
                               <Text style={{flexDirection:"row"}}><Text>Blokuje membránový estrogenní receptor α <Text style={styles.sub}>1,2,3</Text>{"\n"}</Text></Text>

                               <Text style={{flexDirection:"row"}}><Text>Má neutrální vliv na játra na rozdíl od jiných estrogenů <Text style={styles.sub}>1,2,3</Text>{"\n"}</Text></Text>

                               <Text style={{flexDirection:"row"}}><Text>Má malý vliv na normální i maligní prsní tkáň 4,5 <Text style={styles.sub}>1,2,3</Text>{"\n"}</Text></Text>
                       
                             
                       </Text>
                </View>
                <View style={{marginTop:30}}>
                    <Text style={{fontFamily:"Museo", fontSize:20}}>
                       
                            <Text style={{fontFamily:"MuseoBold"}}>AGONISTA na jádrových ERα
{"\n"}{"\n"}</Text>
                 
<Text style={{flexDirection:"row"}}><Text>Aktivuje estrogenní receptory α v jádře <Text style={styles.sub}>1,2,3</Text>{"\n"}</Text></Text>
                               
<Text style={{flexDirection:"row"}}><Text>Má estrogenní aktivitu na pochvu, endometrium, kosti a {""}kardiovaskulární systém a tím poskytuje žádoucí estrogenní aktivitu<Text style={styles.sub}>1,2,3</Text></Text></Text>


                       </Text>
                </View>
               
                </View>
                    <View style={{flex:30, alignSelf:"center"}}>




<Text style={{fontSize:10, fontFamily:"Museo"}}>1 Foidart JM, et.al. Estetrol (E4) Is a Unique Estrogen with Selective Actions in Tissues Which Are Distinctly Different from the Actions of SERM. Journal of the Endocrine Society, Volume 3, Issue Supplement_1, April-May 2019, SUN-LB001</Text>
<Text style={{fontSize:10, fontFamily:"Museo"}}>                    
2 Arnal JF, et. al. Membrane and Nuclear Estrogen Receptor Alpha Actions: From Tissue Specificity to Medical Implications. Physiol Rev. 2017 Jul 1;97(3):1045-1087.</Text>
<Text style={{fontSize:10, fontFamily:"Museo"}}>3 Abot A, Fontaine C, Buscato M, et al. The uterine and vascular actions of estetrol delineate a distinctive profile of estrogen receptor a modulation, uncoupling nuclear and membrane activation. EMBO Mol Med. 2014;6(10):1328-1346.</Text>
<Text style={{fontSize:10, fontFamily:"Museo"}}>4 Visser M, Holinka CF, Coelingh Bennink HJ. First human exposure to exogenous single-dose oral estetrol in early postmenopausal women. Climacteric. 2008;11 Suppl 1:31-40.</Text>
<Text style={{fontSize:10, fontFamily:"Museo"}}>5 Singer C, et. al. Antiestrogenic effects of the fetal estrogen estetrol in women with estrogen-receptor positive early breast cancer. Carcinogenesis, Volume 35, Issue 11, November 2014, Pages 2447–2451.</Text>
                    </View>
                </View>
                
          </View>
         
        </View>
    )
}

export default Nest

const styles = StyleSheet.create({
    tablesub:{
        color:"#511d52",
    fontFamily:"MuseoBold",
    textAlign:"left"
    },
    tablenormal:{
        color:"grey",
        fontFamily:"Museo",
        textAlign:"left"
    },
    aligncenter:{textAlign:"center",  fontFamily:"Museo", fontSize:20},
    row:{
        flexDirection:"row"
    },
    cell:{
        borderWidth:1,
        borderColor:"#71abc3",
        width:150,
        height:100,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        margin:3,
        borderRadius:5,
        fontFamily:"Museo",
    },
    cellEmpty:{
        width:150,
        height:100,
        marginTop:3,
        marginRight:3,

    },
    cellSpecial:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:150,
        height:100,
        borderTopWidth:1,
        borderTopColor:"#71abc3",
        borderTopRightRadius:5,
        borderBottomWidth:1,
        borderBottomColor:"#71abc3",
        borderBottomRightRadius:5,
        marginTop:3,
        marginRight:3,
        borderRightWidth:1,
        borderRightColor:"#71abc3"

    },
    smallText:{
        fontSize:10,
        fontFamily:"Museo",
        marginTop:5,
    
    },

    normalText:{
        color:"grey",
        fontFamily:"Museo",
        fontSize:20,
        position:"relative",
        marginTop:5
    },
    subText:{
        color:"#511d52",
        fontFamily:"MuseoBold",
        fontSize:30,
        fontWeight:"bold",
        position:"relative",
    },
    sub:{
        fontSize:10,
 
        fontFamily:"Museo",

        position:"relative"
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
