import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import VTE from './Components/VTE';
import Prsiska from "./Components/Prsa"
import JatraCyp from './Components/JatraCyp';
import MetabolickyProfil from './Components/MetabolickyProfil';
const { width, height } = Dimensions.get("screen");
const Prsa = ({ selection, display }: any) => {
    const [selectionState, setSelectionState] = useState(0);
    useEffect(() => {
        setSelectionState(selection);
        return () => {
            //
        }
    }, [])
    return (
        <View style={styles.page}>
            <ImageBackground style={{ width, height }} source={require("../../assets/pozadidetail.png")}>
                <SafeAreaView style={{ maxHeight: height - 200 }}>

                    {selectionState === 1 && <VTE />}
                    {selectionState === 2 && <Prsiska />}
                    {selectionState === 3 && <JatraCyp />}
                    {selectionState === 4 && <MetabolickyProfil />}


                </SafeAreaView>

                {selectionState > 1 && <TouchableOpacity style={styles.back} onPress={() => {
                    setSelectionState(selectionState - 1)
                }}><AntDesign name="caretleft" size={60} color="#E81E75" /></TouchableOpacity>}
                <TouchableOpacity style={styles.close} onPress={() => {
                    display();
                }}><AntDesign name="closecircleo" size={60} color="#E81E75" /></TouchableOpacity>
                {selectionState < 4 && <TouchableOpacity style={styles.next} onPress={() => {
                    setSelectionState(selectionState + 1)
                }}><AntDesign name="caretright" size={60} color="#E81E75" /></TouchableOpacity>
                }


            </ImageBackground>
        </View>
    )
}

export default Prsa

const styles = StyleSheet.create({
    page: {
        width,
        height,
        backgroundColor: "white",
        position: "absolute",
        justifyContent: "center",
        alignItems: "center"
    },
    fontStyle: {
        color: "#d9326f",
        fontSize: 60,
        padding: 10,
        fontFamily: "Museo",
        position: "absolute",
        top: 0,
        right: 0
    },
    close: {
        position: "absolute",
        bottom: 0,
        left: 0,
        padding: 10,
        marginLeft: width / 2 - 40,
        marginBottom: 100
    },
    next: {
        position: "absolute",
        bottom: 0,
        left: 0,
        padding: 10,
        marginLeft: width / 2 + 120,
        marginBottom: 100
    },
    back: {
        position: "absolute",
        bottom: 0,
        left: 0,
        padding: 10,
        marginLeft: width / 2 - 200,
        marginBottom: 100
    }

})
