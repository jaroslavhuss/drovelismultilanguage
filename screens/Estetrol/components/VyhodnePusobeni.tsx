import React,{useState} from 'react'
import { ReactElement } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'

const {width, height}:{width:number, height:number} = Dimensions.get("screen");
import { AntDesign } from '@expo/vector-icons';
const VyhodnePusobeni = ():ReactElement => {
    const [citaceLegenda, setCitaceLegenda] = useState<number>(0);
    return (
        <View>
            <Text style={styles.fontStyle}>Výhodné působení E4 jako Nest</Text>
          <View style={{
              flexDirection:"row",
              justifyContent:"center",
              alignItems:"center",
              marginTop:100
          }}>
         <View>
              <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
              <View style={{width:80, flexDirection:"row"}}>
                <View style={styles.icon}></View>
                  <Image style={styles.icon} source={require("../../../assets/icon_purple.png")} />
                    </View>
                    <View>
                        <View style={{
                            flexDirection:"row",
                            justifyContent:"flex-start",
                            alignItems:"center"
                        }}>
                        <Text style={styles.nadpis}>Prsa</Text><Text style={styles.subText}>2</Text>
                        </View>
                    <Text style={styles.normalText}>Stimuluje růst</Text>
                  </View>
              </View>
              <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
                  <View style={{width:80, flexDirection:"row"}}>
                <View style={styles.icon}></View>
                  <Image style={styles.icon} source={require("../../../assets/icon_blue.png")} />
                    </View>
                    <View>
              
                    <View style={{
                            flexDirection:"row",
                            justifyContent:"flex-start",
                            alignItems:"center"
                        }}>
                        <Text style={styles.nadpis}>Cévní systém</Text><Text style={styles.subText}>2,3</Text>
                        </View>
                    <Text style={styles.normalText}>Předchází vzniku a růstu{"\n"}aterosklerotických plátů</Text>
                  </View>
              </View>
              <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
            
                  <View style={{width:80,flexDirection:"row"}}>
                  <Image style={styles.icon} source={require("../../../assets/icon_blue.png")} />
                  <Image style={styles.icon} source={require("../../../assets/icon_purple.png")} />
                    </View>
                    <View>
                    <View style={{
                            flexDirection:"row",
                            justifyContent:"flex-start",
                            alignItems:"center"
                        }}>
                        <Text style={styles.nadpis}>Játra</Text><Text style={styles.subText}>3,5</Text>
                        </View>
                    <Text style={styles.normalText}>Ovlivňuje metabolismus{"\n"}tuků v játrech</Text>
                  </View>
              </View>
              <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
            
                  <View style={{width:80,flexDirection:"row"}}>
                  <Image style={styles.icon} source={require("../../../assets/icon_blue.png")} />
                  <Image style={styles.icon} source={require("../../../assets/icon_purple.png")} />
                    </View>
                    <View>
                    <View style={{
                            flexDirection:"row",
                            justifyContent:"flex-start",
                            alignItems:"center"
                        }}>
                        <Text style={styles.nadpis}>Kosti</Text><Text style={styles.subText}>1,5</Text>
                        </View>
                    <Text style={styles.normalText}>Udrží minerální{"\n"}hustotu kostí</Text>
                  </View>
              </View>
              
          </View>


          <Image style={styles.image} source={require("../../../assets/figure.png")} />



          <View>

              <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start"}}>
                    <View>
                    <View style={{
                           flexDirection:"row",
                            justifyContent:"flex-end",
                            alignItems:"center",
                        }}>
                     
                        <Text style={[styles.nadpis, {textAlign:"right"}]}>
                            Cévní systém
                        </Text>
                        <Text style={[styles.subText,{textAlign:"right"}]}>
                            2
                        </Text>
                       
                        </View>
                    <Text style={[styles.normalText,{textAlign:"right"}]}>Regeneruje{"\n"}a udržuje tkáně{"\n"}Reguluje cévní tonus</Text>
                  </View>
                  <View style={{flexDirection:"row"}}>
                    <Image style={[styles.icon,{marginLeft:10,marginRight:0}]} source={require("../../../assets/icon_purple.png")} />
                </View>
              </View>

              <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start", marginTop:20}}>
                    <View>
               
                    <View style={{
                           flexDirection:"row",
                            justifyContent:"flex-end",
                            alignItems:"center",
                        }}>
                     
                        <Text style={[styles.nadpis, {textAlign:"right"}]}>
                            Děloha
                        </Text>
                        <Text style={[styles.subText,{textAlign:"right"}]}>
                            2
                        </Text>
                       
                        </View>
                    <Text style={[styles.normalText,{textAlign:"right"}]}>Podporuje udržování{"\n"}tkáně</Text>
                  </View>
                  <View style={{flexDirection:"row"}}>
                    <Image style={[styles.icon,{marginLeft:10,marginRight:0}]} source={require("../../../assets/icon_blue.png")} />
                </View>
              </View>

              <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"flex-start", marginTop:20}}>
                    <View>
                        <View style={{
                           flexDirection:"row",
                            justifyContent:"flex-end",
                            alignItems:"center",
                        }}>
                     
                        <Text style={[styles.nadpis, {textAlign:"right"}]}>
                            Vagína
                        </Text>
                        <Text style={[styles.subText,{textAlign:"right"}]}>
                            4
                        </Text>
                       
                        </View>
                    <Text style={[styles.normalText,{textAlign:"right"}]}>Podporuje udržování{"\n"}tkáně</Text>
                  </View>
                  <View style={{flexDirection:"row"}}>
                    <Image style={[styles.icon,{marginLeft:10,marginRight:0}]} source={require("../../../assets/icon_blue.png")} />
                </View>
              </View>

              
          </View>
        
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
              <View style={styles.legenda}>
                    <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                    <View style={{width:80, flexDirection:"row"}}>
                        <View style={styles.icon}></View>
                        <Image style={styles.icon} source={require("../../../assets/icon_blue.png")} />
                            </View>
                            <View>
                            <Text style={styles.nadpis}>Efekt ER v jádře = efekt E4</Text>
                           
                        </View>
                    </View>

                    <View style={{flexDirection:"row", justifyContent:"flex-start", alignItems:"center"}}>
                    <View style={{width:80, flexDirection:"row"}}>
                        <View style={styles.icon}></View>
                        <Image style={styles.icon} source={require("../../../assets/icon_purple.png")} />
                            </View>
                            <View>
                            <Text style={styles.nadpis}>Převážně efekt závislý od membrány</Text>
                           
                        </View>
                    </View>
              </View>
              <View style={{
                  width:width-300
              }}>
                  <Text style={{fontFamily:"Museo"}}>
                      <Text>{"\n\n"}</Text>
                      <Text>1. Coelingh Bennink HJ, Heegaard AM, Visser M, Holinka CF, Christiansen C. Oral bioavailability and bone-sparing eff ects of estetrol in an osteoporosis model. Climacteric. 2008;11(suppl 1):2-14.{"\n"}{"\n"}</Text>
                      <Text>2. Abot A, Fontaine C, Buscato M, et al. The uterine and vascular actions of estetrol delineate a distinctive profi le of estrogen receptor α modulation, uncoupling nuclear and membrane activation. EMBO Mol Med. 2014;6(10):1328-1346.{"\n"}{"\n"}</Text>
                      <Text>3. Arnal JF, Lenfant F, Metivier R, et al. Membrane and nuclear estrogen receptor alpha actions: from tissue specifi city to medical implications. Physiol Rev. 2017;97(3):1045-1087.{"\n"}{"\n"}</Text>
                      <Text>4. Benoit T, Valera MC, Fontaine C, et al. Estetrol, a fetal selective estrogen receptor modulator, acts on the vagina of mice through nuclear estrogen receptor α activation. Am J Pathol. 2017;187(11):2499-2507.{"\n"}{"\n"}</Text>
                      <Text>5. Ascenzi P, Bocedi A, Marino M. Structure function relationship of estrogen receptor alpha and beta: impact on human health. Mol Aspects Med. 2006;27(4):299-402.</Text>
</Text>
              </View>
              </TouchableOpacity>}
                 
              </View>    

    )
}

export default VyhodnePusobeni

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
       width:200, 
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
