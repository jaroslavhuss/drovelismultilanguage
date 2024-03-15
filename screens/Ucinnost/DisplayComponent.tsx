import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ImageBackground } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import DrovelisPearlIndex from './components/DrovelisPearlIndex';
import StabilitaCyklu from './components/StabilityCyklu';
const { width, height } = Dimensions.get("screen");
const Prsa = ({ selection, display }: any) => {
    const [selectionState, setSelectionState] = useState(0);
    useEffect(() => {
        setSelectionState(selection);
        return () => {
            //
        }
    }, [])


    const [height, setHeight] = useState<number>(Dimensions.get("screen").height)
    const [width, setWidth] = useState<number>(Dimensions.get("screen").width)
    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });
    return (
        <View style={styles.page}>
            <ImageBackground style={{ width, height, zIndex:1000 }} source={require("../../assets/pozadidetail.png")}>
                {selectionState > 1 && <TouchableOpacity style={styles.back} onPress={() => {
                    setSelectionState(selectionState - 1)
                }}><AntDesign name="caretleft" size={60} color="#E81E75" /></TouchableOpacity>}
                <TouchableOpacity style={styles.close} onPress={() => {
                    display();
                }}><AntDesign name="closecircleo" size={60} color="#E81E75" /></TouchableOpacity>
                {selectionState < 2 && <TouchableOpacity style={styles.next} onPress={() => {
                    setSelectionState(selectionState + 1)
                }}><AntDesign name="caretright" size={60} color="#E81E75" /></TouchableOpacity>
                }

                {selectionState === 1 && <DrovelisPearlIndex />}



                {selectionState === 2 && <StabilitaCyklu />}

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
        alignItems: "center",
        zIndex: 100,

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
