import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
const { width, height } = Dimensions.get("screen")
const DrovelisPearlIndex = () => {
    const { navigate }: any = useNavigation()
    return (
        <View>
            <Text style={styles.fontStyle}>Drovelis je účinná antikoncepce s velmi nízkým Pearl indexem</Text>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={{ fontSize: 17 }}>
                        V evropské klinické studii, která vycházela z celkového počtu <Text style={{ fontWeight: "bold" }}>14 759 cyklů</Text>
                        {"\n"}(s vyloučením cyklů se záložní antikoncepcí a cyklů bez sexuální aktivity),
                        byly u žen ve věku 18–35 let zjištěny následující hodnoty Pearl indexu:{"\n"}{"\n"}
                        <Text style={{ fontWeight: "bold" }}>Selhání metody: 0,26</Text>{"\n"}
                        <Text style={{ fontWeight: "bold" }}>Selhání metody a uživatelky: 0,44</Text>
                    </Text>
                    <TouchableOpacity onPress={() => {
                        navigate("spc")
                    }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>Citace SPC</Text>
                    </TouchableOpacity>
                    <Image source={require("../../../assets/pearl_index.png")} style={{
                        resizeMode: "contain",
                        width: 600,
                        height: 250,
                        alignSelf: "center"
                    }} />
                    <Text style={{ fontSize: 15 }}>
                        <Text style={{ fontWeight: "bold" }}>Tolerance chyby v užívání:</Text>{"\n"}
                        <Text>Pokud se užití kterékoliv růžové aktivní tablety opozdí o méně než 24 hodin, není antikoncepční ochrana narušena. Žena má užít tabletu okamžitě, jakmile si to uvědomí, a další tabletu pak užije v obvyklou dobu.
                        </Text>

                    </Text>
                    <TouchableOpacity onPress={() => {
                        navigate("spc")
                    }}>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>Citace SPC</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default DrovelisPearlIndex

const styles = StyleSheet.create({
    fontStyle: {
        color: "#d9326f",
        fontSize: 30,
        padding: 10,
        fontFamily: "Museo",
        position: "absolute",
        top: 20,
        right: 0,
    },
    content: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignContent: "center",
        width,
        height: height - 170,
        zIndex: -2
    },
    wrapper: {
        width: width - 300,
        alignSelf: "center"
    }

})