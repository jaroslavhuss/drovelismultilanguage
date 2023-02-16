import React, { useState, useRef, useEffect } from 'react'
import { StyleSheet, View, Dimensions, Image, TouchableOpacity } from 'react-native'
import Heading from '../../components/Heading'
import Layout from '../../components/Layout'
import Slider from '@react-native-community/slider';

const KontrolaCyklu = () => {
    const imageArray = [
        require("../../assets/1.jpeg"),
        require("../../assets/2.jpeg"),
        require("../../assets/3.jpeg"),
        require("../../assets/4.jpeg"),
        require("../../assets/5.jpeg"),
    ]
    const { width, height } = Dimensions.get("screen");
    const [imageValue, setImageValue] = useState<number>(Math.floor(imageArray.length / 2));
    const airplane3 = require("../../assets/airplane3.png");
    const airplane4 = require("../../assets/airplane4.png");
    const [isZoomActivated, setIsZoomActivated] = useState(false);
    const [currentAirplane, setCurrentAirplane] = useState(airplane3);

    const prevCount: number = usePrevious<number>(imageValue);

    function usePrevious<T>(value: T): T {
        const ref: any = useRef<T>();
        useEffect(() => {
            ref.current = value;
        }, [value]);
        return ref.current;
    }


    useEffect(() => {
        if (imageValue < prevCount) {
            setCurrentAirplane(airplane4);
        } else {
            setCurrentAirplane(airplane3);
        }
        return () => {
            //  cleanup
        }
    }, [imageValue])
    return (
        <Layout>
            <Heading heading="Šetrnost" />
            <View style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height,
                padding: 20
            }}>
                <View style={{ flex: 70, justifyContent: "center", alignItems: "center" }}>
                    <View style={styles.imageContainer}>
                        {imageValue > 0 ? <TouchableOpacity onPress={() => {
                            setImageValue(imageValue - 1);
                        }}><Image source={imageArray[imageValue] - 1} style={styles.leftImage} /></TouchableOpacity> : <View style={styles.leftImage}></View>}

                        <TouchableOpacity onPress={() => { setIsZoomActivated(!isZoomActivated) }}><Image source={imageArray[imageValue]} style={styles.theImage} /></TouchableOpacity>


                        {imageValue < imageArray.length - 1 ? <TouchableOpacity onPress={() => {
                            setImageValue(imageValue + 1);
                        }}><Image source={imageArray[imageValue] + 1} style={styles.rightImage} /></TouchableOpacity> : <View style={styles.leftImage}></View>}

                    </View>

                </View>
                <View style={{ flex: 30 }}>
                    <Slider
                        style={{ width: width - 150, height: 40, marginLeft: 30 }}
                        minimumValue={0}
                        maximumValue={Math.floor(imageArray.length) - 1}
                        value={imageValue}
                        minimumTrackTintColor="black"
                        maximumTrackTintColor="black"
                        thumbImage={currentAirplane}
                        trackImage={require("../../assets/plocha.png")}
                        onValueChange={(value) => {
                            setImageValue(Math.floor(value));
                        }}
                    />
                </View>
            </View>
            {
                isZoomActivated && <TouchableOpacity onPress={() => { setIsZoomActivated(false) }} style={{
                    position: "absolute",
                    backgroundColor: "#000000cf",
                    justifyContent: "center",
                    alignItems: "center",
                    width,
                    height,
                    top: 0,
                    left: 0,
                    zIndex: 5000
                }}>
                    <Image style={{
                        resizeMode: "contain",
                        width: width - 100,
                        padding: 20,
                        zIndex: 200
                    }} source={imageArray[imageValue]} />
                </TouchableOpacity>
            }

        </Layout>
    )
}

export default KontrolaCyklu

const styles = StyleSheet.create({
    leftImage: {
        width: 200,
        height: 100,
        resizeMode: "contain",
        opacity: 0.3
    },
    rightImage: {
        width: 200,
        height: 100,
        resizeMode: "contain",
        opacity: 0.3
    },
    theImage: {
        width: 500,
        height: 400,
        resizeMode: "contain",
    },
    imageContainer: {
        marginTop: 50,
        shadowColor: "#000",
        flexDirection: "row",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
    }
})
