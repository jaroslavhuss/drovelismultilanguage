import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import Ctyri from "./components/Ctyritypy";
import Rozdily from "./components/Rozdily";
import Nest from "./components/Nest";
import Vyhodne from "./components/VyhodnePusobeni";
import Pozitiva from "./components/Pozitiva";
import Historie from "./components/Historie";

const {width,height} = Dimensions.get("screen");
const Prsa = ({selection, display}:any) => {
    const [selectionState, setSelectionState] = useState(0);
    useEffect(() => {
        setSelectionState(selection);
        return () => {
            //
        }
    }, [])
    return (
        <View style={styles.page}>
           <ImageBackground style={{width,height}} source={require("../../assets/pozadidetail.png")}>
                {selectionState>1&&<TouchableOpacity style={styles.back} onPress={() => {
                    setSelectionState(selectionState-1)
                }}><AntDesign name="caretleft" size={60} color="#E81E75" /></TouchableOpacity>}

                <TouchableOpacity style={styles.close} onPress={() => {
                    display();
                }}><AntDesign name="closecircleo" size={60} color="#E81E75" /></TouchableOpacity>
                {selectionState<6&& <TouchableOpacity style={styles.next} onPress={() => {
                    setSelectionState(selectionState+1)
                }}><AntDesign name="caretright" size={60} color="#E81E75" /></TouchableOpacity>
            }
               
                {selectionState===1&&<View><Ctyri /></View>}
                {selectionState===2&&<View><Rozdily /></View>}
                {selectionState===3&&<View><Nest /></View>}
                {selectionState===4&&<View><Vyhodne /></View>}
                {selectionState===5&&<View><Pozitiva /></View>}
                {selectionState===6&&<View><Historie /></View>}
                </ImageBackground>
        </View>
    )
}

export default Prsa

const styles = StyleSheet.create({
    page:{
        width,
        height,
        backgroundColor:"white",
        position:"absolute",
        justifyContent:"center",
        alignItems:"center"
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
    close:{
        position:"absolute",
        bottom:0,
        left:0,
        padding:10,
        marginLeft:width/2-40,
        marginBottom:100
    },
    next:{
        position:"absolute",
        bottom:0,
        left:0,
        padding:10,
        marginLeft:width/2+120,
        marginBottom:100
    },
    back:{
        position:"absolute",
        bottom:0,
        left:0,
        padding:10,
        marginLeft:width/2-200,
        marginBottom:100
    }

})
