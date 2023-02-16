import React,{useState} from 'react'
import { ReactElement } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Touchable } from 'react-native'

const {width, height}:{width:number, height:number} = Dimensions.get("screen");
import { AntDesign } from '@expo/vector-icons';
const Pozitiva = ():ReactElement => {
    const [citaceLegenda, setCitaceLegenda] = useState<number>(0);
    return (
        <View>
            <Text style={styles.fontStyle}>Pozitiva jednotlivých typů{"\n"}estrogenů</Text>
                <View style={{
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                    height:height-200,
            
                }}>
                    <Image source={require("../../../assets/the_main_graph.png")} style={styles.img}/>
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
                  <Text style={{fontFamily:"Museo"}}>
                  <Text>{"\n\n"}</Text>
                  <Text>1. Coelingh Bennink HJ, Holinka CF, Diczfalusy E. Estetrol review: profi le and potential clinical applications. Climacteric. 2008;11(suppl 1):47-58.</Text>
                  <Text>{"\n\n"}2. Abot A, Fontaine C, Buscato M, et al. The uterine and vascular actions of estetrol delineate a distinctive profile of estrogen receptor α modulation, uncoupling nuclear and membrane activation. EMBO Mol Med. 2014;6(10):1328-1346.</Text>
                  <Text>{"\n\n"}3. Coelingh Bennink HJT, Verhoeven C, Zimmerman Y, Visser M, Foidart JM, Gemzell-Danielsson K. Pharmacodynamic eff ects of the fetal estrogen estetrol in postmenopausal women: results from a multiple-rising-dose study. Menopause. 2017;24(6):677-685.</Text>
                  <Text>{"\n\n"}4. Arnal JF, Lenfant F, Metivier R, et al. Membrane and nuclear estrogen receptor alpha actions: from tissue specifi city to medical implications. Physiol Rev. 2017;97(3):1045-1087.</Text>
                  <Text>{"\n\n"}5. Coelingh Bennink HJT, Verhoeven C, Zimmerman Y, Visser M, Foidart JM, Gemzell-Danielsson K. Pharmacokinetics of the fetal estrogen estetrol in a multiple-rising-dose study in postmenopausal women. Climacteric. 2017;20(3):285-289.</Text>
                  <Text>{"\n\n"}6. Benoit T, Valera MC, Fontaine C, et al. Estetrol, a fetal selective estrogen receptor modulator, acts on the vagina of mice through nuclear estrogen receptor α activation. Am J Pathol. 2017;187(11):2499-2507.</Text>
                  <Text>{"\n\n"}7. Hyder SM, Chiappetta C, Stancel GM. Synthetic estrogen 17alpha-ethinyl estradiol induces pattern of uterine gene expression similar to endogenous estrogen 17beta-estradiol. J Pharmacol Exp Ther. 1999;290(2):740-747.</Text>
                  <Text>{"\n\n"}8. Coelingh Bennink HJ, Heegaard AM, Visser M, Holinka CF, Christiansen C. Oral bioavailability and bone-sparing eff ects of estetrol in an osteoporosis model. Climacteric. 2008;11(suppl 1):2-14.</Text>
</Text>
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
