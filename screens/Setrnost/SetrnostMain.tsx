import React, { useRef, useState } from 'react'
import { Text, View, Animated, ImageBackground, Dimensions, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useFocusEffect } from '@react-navigation/native';

import Heading from '../../components/Heading'
import Layout from '../../components/Layout'
import DisplayComponent from "./DisplayComponent";

const Screen1 = () => {
    const { width, height } = Dimensions.get("screen");
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const opacityAnim = useRef(new Animated.Value(0)).current;
    const theGirl = useRef(new Animated.Value(0)).current;
    const window1 = useRef(new Animated.Value(0)).current;
    const window2 = useRef(new Animated.Value(0)).current;
    const window3 = useRef(new Animated.Value(0)).current;
    const window4 = useRef(new Animated.Value(0)).current;
    const window5 = useRef(new Animated.Value(0)).current;
    const window6 = useRef(new Animated.Value(0)).current;

    const [theSeleciton, setTheSeleciton] = useState(0);
    const [displayComponent, setDisplayComponent] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            runAni();
            return () => {
                fadeAnim.setValue(0);
                opacityAnim.setValue(0);
                opacityAnim.setValue(0);
                window1.setValue(0);
                window2.setValue(0);
                window3.setValue(0);
                window4.setValue(0);
                window5.setValue(0);
                window6.setValue(0);
                theGirl.setValue(0);
            };
        }, [])
    );

    const runAni = () => {
        Animated.sequence([
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }),
            Animated.timing(opacityAnim, {
                toValue: 0,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]).start();
        Animated.timing(fadeAnim, {
            toValue: 1300,
            duration: 3000,
            useNativeDriver: true,
        }).start(() => {
            Animated.timing(theGirl, {
                toValue: 1,
                duration: 2000,
                useNativeDriver: true
            }).start();
        });

        //Window1
        Animated.sequence([
            Animated.timing(window1, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true,
            }),
            Animated.timing(window1, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            })
        ]).start();


        //Window2
        Animated.sequence([
            Animated.timing(window2, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(window2, {
                toValue: 1,
                duration: 400,
                useNativeDriver: true,
            })
        ]).start();
        //Window3
        Animated.sequence([
            Animated.timing(window3, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true,
            }),
            Animated.timing(window3, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            })
        ]).start(() => {
        });
        //Window4
        Animated.sequence([
            Animated.timing(window4, {
                toValue: 0,
                duration: 700,
                useNativeDriver: true,
            }),
            Animated.timing(window4, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true,
            })
        ]).start(() => {
        });
        //Window5
        Animated.sequence([
            Animated.timing(window5, {
                toValue: 0,
                duration: 900,
                useNativeDriver: true,
            }),
            Animated.timing(window5, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ]).start(() => {
        });
        //Window6
        Animated.sequence([
            Animated.timing(window6, {
                toValue: 0,
                duration: 1100,
                useNativeDriver: true,
            }),
            Animated.timing(window6, {
                toValue: 1,
                duration: 1200,
                useNativeDriver: true,
            })
        ]).start(() => {
        });

    }
    const turnOffComponent = () => {
        setDisplayComponent(false);
    }
    return (
        <Layout>
            <Heading heading="Šetrnost" />
            <View style={{ flexDirection: "row", justifyContent: "space-evenly", marginTop: 100 }}>
                <TouchableOpacity onPress={() => {
                    setDisplayComponent(true);
                    setTheSeleciton(1);
                }} style={{ position: "relative", justifyContent: "center", alignItems: "center", margin: 5 }}>
                    <Text style={styles.textWindow}>spokojenost a snášenlivost</Text>
                    <Animated.Image style={{ width: 140, height: 190, opacity: window1 }} source={require("../../assets/window_bez_kridla.png")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                    setDisplayComponent(true);
                    setTheSeleciton(2);
                }} style={{ position: "relative", justifyContent: "center", alignItems: "center", margin: 5 }}>
                    <Text style={styles.textWindow}>hmotnostní{"\n"}stabilita</Text>
                    <Animated.Image style={{ width: 140, height: 190, opacity: window2 }} source={require("../../assets/window_zadni.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setDisplayComponent(true);
                    setTheSeleciton(3);
                }} style={{ position: "relative", justifyContent: "center", alignItems: "center", margin: 5 }}>
                    <Text style={styles.textWindow}>bio</Text>
                    <Animated.Image style={{ width: 140, height: 190, opacity: window3 }} source={require("../../assets/window_bez_kridla.png")} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {
                    setDisplayComponent(true);
                    setTheSeleciton(4);
                }} style={{ position: "relative", justifyContent: "center", alignItems: "center", margin: 5 }}>
                    <Text style={styles.textWindow}>eko</Text>
                    <Animated.Image style={{ width: 140, height: 190, opacity: window4 }} source={require("../../assets/window_bez_kridla.png")} />
                </TouchableOpacity>



            </View>
            <ImageBackground resizeMode="center" style={{
                transform: [{
                    rotate: "-10deg"
                }], width: width, height: 100, marginTop: height / 1.5, position: "absolute"
            }} source={require("../../assets/plocha.png")}>
                <Animated.Image style={[{
                    width: 240, height: 162, opacity: opacityAnim, transform: [{
                        translateX: fadeAnim
                    }]
                }]} source={require("../../assets/airplane2.png")} />
            </ImageBackground>
            <Animated.Image style={{ position: "absolute", bottom: 0, right: 0, width: 250, height: 350, opacity: theGirl }} source={require("../../assets/the_girl.png")} />
            {displayComponent && <DisplayComponent selection={theSeleciton} display={turnOffComponent} />}
        </Layout>
    )
}

export default Screen1

const styles = StyleSheet.create({
    textWindow: {
        position: "absolute",
        fontFamily: "Museo",
        color: "#d9326f",
        fontSize: 15,
        textAlign: "center"

    }
});