import React, { useContext } from 'react'
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';
import { GlobalContext } from '../context/GlobalContext';

const Menu = () => {
    const { navigate } = useNavigation();
    const { currentMenu, setMenu } = useContext<any>(GlobalContext);
    return (
        <View style={styles.appleMenu}>
            <View style={styles.appleSubStyle}>
                <TouchableOpacity onPress={() => {
                    navigate("Home");
                    setMenu("hlavnistranka");

                }} style={[styles.appleBg, currentMenu === "hlavnistranka" && styles.selectedMenuItem]}>
                    <AntDesign name="home" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigate("ucinnost-rozcestnik");
                    setMenu("ucinnost");
                }} style={[styles.appleBg, currentMenu === "ucinnost" && styles.selectedMenuItem]}>
                    <AntDesign name="linechart" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigate("bezpecnost-rozcestnik")
                    setMenu("bezpecnost");
                }} style={[styles.appleBg, currentMenu === "bezpecnost" && styles.selectedMenuItem]}>
                    <AntDesign name="Safety" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigate("setrnost")
                    setMenu("setrnost");
                }} style={[styles.appleBg, currentMenu === "setrnost" && styles.selectedMenuItem]}>
                    <AntDesign name="hearto" size={30} color="white" />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    navigate("estetrol-rozcestnik")
                    setMenu("estetrol");
                }} style={[styles.appleBg, currentMenu === "estetrol" && styles.selectedMenuItem]}>
                    <AntDesign name="medicinebox" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigate("spc")
                    setMenu("spc");
                }} style={[styles.appleBg, currentMenu === "spc" && styles.selectedMenuItem]}>
                    <AntDesign name="pdffile1" size={30} color="white" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    navigate("settings")
                    setMenu("settings");
                }} style={[styles.appleBg, currentMenu === "settings" && styles.selectedMenuItem]}>
                    <AntDesign name="setting" size={30} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Menu

const styles = StyleSheet.create({
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
