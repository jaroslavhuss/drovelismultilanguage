import { StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
const { width, height } = Dimensions.get("screen")
const Prsa = () => {
    return (

        <ScrollView style={{ height: "100%" }}>
            <View style={styles.content}>
                <View style={styles.wrapper}>
                    <Text style={styles.fontStyle}>Estetrol nezvyšuje riziko Ca-prsu, neboť antagonizuje normální i nádorovou tkáň mléčné žlázy. Toto bylo doloženo studií na animálních modelech i u lidí.</Text>
                    <Text style={{ fontSize: 18, marginTop: 30, marginBottom: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>E4 vykazuje antiestrogenní účinky na růst buněk rakoviny prsu in vitro a in vivo.</Text>
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>Studie na animálních modelech</Text>
                    </Text>
                    <Text style={{ fontSize: 18, marginBottom: 15 }}>
                        U myší, kterým byl experimentálně vyvolaný nádor prsu pomocí DMBA (7,12 dimethylbenz-antracen), <Text style={{ fontWeight: "bold" }}>vedlo podání E4 k redukci počtu a velikosti tumorů</Text> a efekt byl srovnatelný s užitím tamoxifenu nebo ovarektomií. Efekt byl přímo úměrný dávce E4.
                    </Text>
                    <Text style={{ fontStyle: "italic", fontSize: 16, marginBottom: 30 }}>Citace: Bennink. Estetrol review: profile and potential clinical applications. Climacteric. 2008;11 Suppl 1:47-58.</Text>
                    <Image source={require("../../../assets/icon_blue.png")} style={{
                        resizeMode: "contain",
                        width: 300,
                        height: 150,
                        alignSelf: "center"
                    }} />
                    <Text style={{ fontSize: 18, marginBottom: 30 }}>
                        <Text style={{ fontWeight: "bold" }}>Klinické zkoušky u lidí</Text>
                    </Text>


                    <Text style={{ fontSize: 18, marginBottom: 10 }}>
                        14denní předoperační léčba s 20 mg E4 denně u 30 žen s estrogen-receptor pozitivním časným karcinomem prsu měla významný proapoptotický účinek na nádorovou tkáň.</Text>
                    <Text style={{ fontSize: 18, marginBottom: 10 }}>
                        Tato klinická data podporují zjištění, že E4 má antiestrogenní účinky na nádorové buňky karcinomu prsu. Další klinické studie budou pokračovat.
                    </Text>
                    <Text style={{ fontStyle: "italic", fontSize: 16, marginBottom: 30 }}>
                        Citace: Singer. Antiestrogenic effects of the fetal estrogen estetrol in women with estrogen-receptor positive early breast cancer. Randomized Controlled Trial. Carcinogenesis. 2014 Nov;35(11):2447-51.</Text>

                </View>
            </View>
            <Text style={{ marginBottom: 500 }}></Text>
        </ScrollView >
    )
}

export default Prsa

const styles = StyleSheet.create({
    fontStyle: {
        color: "#d9326f",
        fontSize: 25,
        padding: 10,
        fontFamily: "Museo",

    },
    content: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignContent: "center",
        width,
        height: height - 170,
        zIndex: -2
    },
    wrapper: {
        width: width - 300,
        alignSelf: "center",

    }

})