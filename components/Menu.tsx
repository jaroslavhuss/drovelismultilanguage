import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, View, TouchableOpacity, Text, Dimensions, ImageBackground } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { GlobalContext } from '../context/GlobalContext';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const Menu = () => {
    const { navigate }:{navigate:(string:string)=>void} = useNavigation();
    const { currentMenu, setMenu } = useContext<any>(GlobalContext);
    const [showSecondaryMenu, setShowSecondaryMenu] = useState<boolean>(false)

    const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
    const [width, setWidth] = useState<number>(Dimensions.get("screen").width);
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });

    return (
        <>
        <View style={styles.appleMenu}>
            <View style={styles.appleSubStyle}>
                <TouchableOpacity onPress={() => {
                       setShowSecondaryMenu(false)
                    navigate("Home");
                    setMenu("hlavnistranka");

                }} style={[styles.appleBg, currentMenu === "hlavnistranka" && styles.selectedMenuItem]}>
                    <AntDesign name="home" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                       setShowSecondaryMenu(false)
                    navigate("Efficiency");
                    setMenu("ucinnost");
                }} style={[styles.appleBg, currentMenu === "ucinnost" && styles.selectedMenuItem]}>
                    <AntDesign name="linechart" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                       setShowSecondaryMenu(false)
                    navigate("Safety")
                    setMenu("bezpecnost");
                }} style={[styles.appleBg, currentMenu === "bezpecnost" && styles.selectedMenuItem]}>
                    <AntDesign name="Safety" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                       setShowSecondaryMenu(false)
                    navigate("Frugality")
                    setMenu("setrnost");
                }} style={[styles.appleBg, currentMenu === "setrnost" && styles.selectedMenuItem]}>
                    <AntDesign name="hearto" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                       setShowSecondaryMenu(false)
                    navigate("Estetrol")
                    setMenu("estetrol");
                }} style={[styles.appleBg, currentMenu === "estetrol" && styles.selectedMenuItem]}>
                    <AntDesign name="medicinebox" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                       setShowSecondaryMenu(false)
                    navigate("spc")
                    setMenu("spc");
                }} style={[styles.appleBg, currentMenu === "spc" && styles.selectedMenuItem]}>
                    <AntDesign name="pdffile1" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  //  navigate("settings")
                  setShowSecondaryMenu(!showSecondaryMenu)
                    setMenu("settings");
                }} style={[styles.appleBg, currentMenu === "settings" && styles.selectedMenuItem]}>
                    <AntDesign name="setting" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
        {
            showSecondaryMenu &&
            
            <View style={{width:width/3, backgroundColor:"white", height, position:"absolute", top:0, right:0}}>
                <ImageBackground source={require("../assets/the_girl_bg.png")} style={{height}}>
                <Text style={{textAlign:"center", padding:10, fontSize:24, fontWeight:"bold"}}><MaterialIcons name="menu" size={20} color="black" /> Menu</Text>
                <TouchableOpacity onPress={() => { 
                    setShowSecondaryMenu(false)
                    navigate("lang-selection") 
                    }} style={[{padding:10}, styles.secondaryMenuItem]}>
                    <Text style={{textAlign:"left", fontSize:20, color:"white", fontWeight:"bold"}}><FontAwesome name="language" size={24} color="white" /> Language</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { 
                       setShowSecondaryMenu(false)
                    navigate("dynamic-pages") }} style={[{padding:10}, styles.secondaryMenuItem]}>
                    <Text style={{textAlign:"left", fontSize:20, color:"white", fontWeight:"bold"}}><FontAwesome name="book" size={24} color="white" /> Dynamic pages</Text>
                </TouchableOpacity>
                </ImageBackground>
            </View>
            
        }
        </>
        
    )
}

export default Menu

const styles = StyleSheet.create({
    secondaryMenuItem:{
        borderBottomWidth:0.3,
        marginBottom:5,
        borderColor:"grey",
        backgroundColor:"#5c294fd9",
        },
    appleMenu: {
        zIndex: 1000,
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
    appleSubStyle: {
        flexDirection: "row",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
        backgroundColor: "#ffffff4f",
        padding: 10,
        borderRadius: 15,
        margin: 4
    },
    appleBg: {
        backgroundColor: "#5c294fd9",
        flexDirection: "row",
        margin: 5,
        padding: 20,
        borderRadius: 15,

        borderColor: "grey",
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 20,
    },
    selectedMenuItem: {
        backgroundColor: "#7eb1c6c2",
        shadowColor: "black",
        borderBottomWidth: 4,
        borderBottomColor: "white",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 40,
    }
})
