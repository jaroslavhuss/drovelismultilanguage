import React, { useState } from 'react'
import { ReactElement } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

const { width, height }: { width: number, height: number } = Dimensions.get("screen");
const Rozdily = (): ReactElement => {
    const [rozdil, setRozdil] = useState<number>(0);

    return (
        <View style={{ marginLeft: 60 }}>
            <Text style={styles.fontStyle}>Rozdíly mezi typy estrogenů</Text>
            <View style={styles.fourGrid}>
                <TouchableOpacity onPress={() => setRozdil(1)}>
                    <Image source={require("../../../assets/e1.png")} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRozdil(2)}>
                    <Image source={require("../../../assets/e2.png")} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRozdil(5)} style={{ width: width, justifyContent: "center", alignItems: "center" }}>
                    <AntDesign style={{ marginRight: 60 }} name="table" size={60} color="#511d52" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRozdil(3)}>
                    <Image source={require("../../../assets/e3.png")} style={styles.image} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setRozdil(4)}>
                    <Image source={require("../../../assets/e4.png")} style={styles.image} />
                </TouchableOpacity>
            </View>
            {rozdil === 1 && <TouchableOpacity style={styles.canvas} onPress={() => setRozdil(0)}>
                <View style={{ justifyContent: "flex-start", alignContent: "flex-start" }}>
                    <Image source={require("../../../assets/e1.png")} style={styles.image} />
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.subText}>Estron (E1)</Text><Text style={styles.sub}>1-3</Text>
                    </View>
                    <View>
                        <Text></Text>
                        <Text style={styles.normalText}>Primární estrogen u žen po menopauze</Text>
                        <Text style={styles.normalText}>Syntetizuje se ve více tkáních včetně{"\n"}vaječníků a tukové tkáně</Text>
                        <Text style={styles.normalText}>Perorální biologická dostupnost: {"<"}5%</Text>
                        <Text style={styles.normalText}>Síla: 10% síly E2</Text>
                        <Text></Text>
                        <Text style={styles.smallText}>
                            1. Kuhl H. Pharmacology of estrogens and progestogens: infl uence of diff erent routes of administration. Climacteric. 2005;8(suppl 1):3-63.
                        </Text>
                        <Text style={styles.smallText}>
                            2. Cui J, Shen Y, Li R. Estrogen synthesis and signaling pathways during aging: from periphery to brain. Trends Mol Med. 2013;19(3):197-209.
                        </Text>
                        <Text style={styles.smallText}>
                            3. Patel B, Nitsche JF, Taylor RN. The endocrinology of pregnancy. In: Gardner DG, Shoback D, eds. Greenspan’s Basic & Clinical Endocrinology. New York, NY: McGraw-Hill Education; 2018:1-25.
                        </Text>

                    </View>
                </View>
            </TouchableOpacity>}
            {rozdil === 2 && <TouchableOpacity style={styles.canvas} onPress={() => setRozdil(0)}>
                <View>
                    <Image source={require("../../../assets/e2.png")} style={styles.image} />
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.subText}>Estradiol (E2)</Text><Text style={styles.sub}>1-4</Text>
                    </View>
                    <View>
                        <Text></Text>




                        <Text style={styles.normalText}>Nejčastější a nejsilnější estrogen u žen v reprodukčním věku</Text>
                        <Text style={styles.normalText}>Vylučuje se z vaječníků</Text>
                        <Text style={styles.normalText}>Perorální biologická dostupnost: {"<"}5%</Text>
                        <Text style={styles.normalText}>Poločas (perorální podání): 13 - 20 hodin</Text>
                        <Text></Text>
                        <Text style={styles.smallText}>
                            1. Kuhl H. Pharmacology of estrogens and progestogens: infl uence of diff erent routes of administration. Climacteric. 2005;8(suppl 1):3-63.
                        </Text>
                        <Text style={styles.smallText}>
                            2. Chatuphonprasert W, Jarukamjorn K, Ellinger I. Physiology and pathophysiology of steroid biosynthesis, transport and metabolism in the human placenta. Front Pharmacol. 2018;9:1027.
                        </Text>
                        <Text style={styles.smallText}>
                            3. Stanczyk FZ, Archer DF, Bhavnani BR. Ethinyl estradiol and 17β-estradiol in combined oral contraceptives: pharmacokinetics, pharmacodynamics and risk assessment. Contraception. 2013;87(6):706-727.
                        </Text>
                        <Text style={styles.smallText}>
                            4. https://en.wikipedia.org/wiki/Ethinylestradiol#cite_note-GruhnKazer2013-15
                        </Text>

                    </View>
                </View>
            </TouchableOpacity>}
            {rozdil === 3 && <TouchableOpacity style={styles.canvas} onPress={() => setRozdil(0)}>
                <View>
                    <Image source={require("../../../assets/e2.png")} style={styles.image} />
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.subText}>Estriol (E3)</Text><Text style={styles.sub}>1-4</Text>
                    </View>
                    <View>

                        <Text></Text>
                        <Text style={styles.normalText}>Vytváří se ve velkém množství během těhotenství</Text>
                        <Text style={styles.normalText}>U netěhotných žen je v oběhu v malém množství</Text>
                        <Text style={styles.normalText}>Lze ho získat z E1 a E2</Text>
                        <Text style={styles.normalText}>Perorální biologická dostupnost: {"<"}5%</Text>
                        <Text style={styles.normalText}>Síla: 1% síly E2</Text>

                        <Text></Text>
                        <Text style={styles.smallText}>
                            1. Kuhl H. Pharmacology of estrogens and progestogens: infl uence of diff erent routes of administration. Climacteric. 2005;8(suppl 1):3-63.
                        </Text>
                        <Text style={styles.smallText}>
                            2. Cui J, Shen Y, Li R. Estrogen synthesis and signaling pathways during aging: from periphery to brain. Trends Mol Med. 2013;19(3):197-209.
                        </Text>
                        <Text style={styles.smallText}>
                            3. Patel B, Nitsche JF, Taylor RN. The endocrinology of pregnancy. In: Gardner DG, Shoback D, eds. Greenspan’s Basic & Clinical Endocrinology. New York, NY: McGraw-Hill Education; 2018:1-25.
                        </Text>
                        <Text style={styles.smallText}>
                            4. Shoham Z, Kopernik G. Tools for making correct decisions regarding hormone therapy. part I: background and drugs. Fertil Steril. 2004;81(6):1447-1457.
                        </Text>

                    </View>
                </View>
            </TouchableOpacity>}
            {rozdil === 3 && <TouchableOpacity style={styles.canvas} onPress={() => setRozdil(0)}>
                <View>
                    <Image source={require("../../../assets/e3.png")} style={styles.image} />
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.subText}>Estriol (E3)</Text><Text style={styles.sub}>1-4</Text>
                    </View>
                    <View>

                        <Text></Text>
                        <Text style={styles.normalText}>Vytváří se ve velkém množství během těhotenství</Text>
                        <Text style={styles.normalText}>U netěhotných žen je v oběhu v malém množství</Text>
                        <Text style={styles.normalText}>Lze ho získat z E1 a E2</Text>
                        <Text style={styles.normalText}>Perorální biologická dostupnost: {"<"}5%</Text>
                        <Text style={styles.normalText}>Síla: 1% síly E2</Text>

                        <Text></Text>
                        <Text style={styles.smallText}>
                            1. Kuhl H. Pharmacology of estrogens and progestogens: infl uence of diff erent routes of administration. Climacteric. 2005;8(suppl 1):3-63.
                        </Text>
                        <Text style={styles.smallText}>
                            2. Cui J, Shen Y, Li R. Estrogen synthesis and signaling pathways during aging: from periphery to brain. Trends Mol Med. 2013;19(3):197-209.
                        </Text>
                        <Text style={styles.smallText}>
                            3. Patel B, Nitsche JF, Taylor RN. The endocrinology of pregnancy. In: Gardner DG, Shoback D, eds. Greenspan’s Basic & Clinical Endocrinology. New York, NY: McGraw-Hill Education; 2018:1-25.
                        </Text>
                        <Text style={styles.smallText}>
                            4. Shoham Z, Kopernik G. Tools for making correct decisions regarding hormone therapy. part I: background and drugs. Fertil Steril. 2004;81(6):1447-1457.
                        </Text>

                    </View>
                </View>
            </TouchableOpacity>}
            {rozdil === 4 &&

                <TouchableOpacity onPress={() => setRozdil(0)} style={styles.canvas} >

                    <Image source={require("../../../assets/e4.png")} style={styles.image} />
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.subText}>Estetrol (E4)</Text><Text style={styles.sub}>1-7</Text>
                    </View>
                    <View>

                        <Text></Text>
                        <Text style={styles.normalText}>Vytváří se výlučně během těhotenství</Text>
                        <Text style={styles.normalText}>V porovnání s ostatními estrogeny cirkuluje mezi matkou a plodem ve velkém množství</Text>
                        <Text style={styles.normalText}>Perorální biologická dostupnost: ~ 70%</Text>

                        <Text style={styles.normalText}>Síla: 1% - 10% síly E2</Text>
                        <Text style={styles.normalText}>Poločas (perorální podání): 24 - 28 hodin</Text>

                        <Text></Text>

                        <Text style={styles.smallText}>
                            1. Coelingh Bennink HJ, Holinka CF, Diczfalusy E. Estetrol review: profi le and potential clinical applications. Climacteric. 2008;11(suppl 1):47-58. 3
                        </Text>
                        <Text style={styles.smallText}>
                            2. Foidart JM, Gaspard U, Pequeux C, et al. Unique vascular benefi ts of estetrol, a native fetal estrogen with specifi c actions in tissues (NEST). In: Brinton RD, Genazzani AR, Simoncini T, Stevenson JC, eds. Sex Steroids’ Eff ects on Brain, Heart and Vessels Volume 6: Frontiers in Gynecological Endocrinology. New York, NY: Springer International Publishing; 2019:169-195.
                        </Text>
                        <Text style={styles.smallText}>
                            3. Coelingh Bennink HJ, Heegaard AM, Visser M, Holinka CF, Christiansen C. Oral bioavailability and bone-sparing eff ects of estetrol in an osteoporosis model. Climacteric. 2008;11(suppl 1):2-14.
                        </Text>
                        <Text style={styles.smallText}>
                            4. Holinka CF, Gurpide E. In vivo eff ects of estetrol on the immature rat uterus. Biol Reprod. 1979;20(2):242-246.
                        </Text>
                        <Text style={styles.smallText}>
                            5. Abot A, Fontaine C, Buscato M, et al. The uterine and vascular actions of estetrol delineate a distinctive profi le of estrogen receptor α modulation, uncoupling nuclear and membrane activation. EMBO Mol Med. 2014;6(10):1328-1346.
                        </Text>
                        <Text style={styles.smallText}>
                            6. Visser M, Holinka CF, Coelingh Bennink HJ. First human exposure to exogenous single-dose oral estetrol in early postmenopausal women. Climacteric. 2008;11(suppl 1):31-40.
                        </Text>
                        <Text style={styles.smallText}>
                            7. Drovelis SmPC 2021
                        </Text>



                    </View>
                </TouchableOpacity>

            }
            {rozdil === 5 &&

                <TouchableOpacity onPress={() => setRozdil(0)} style={styles.canvas2} >
                    <View style={styles.row}>
                        <View style={[styles.cellEmpty]}></View>
                        <View style={[styles.cell, { backgroundColor: "#71abc3" }]}><Text style={[styles.aligncenter, { color: "white", fontFamily: "Museo", fontSize: 18 }]}>Etinylestradiol{"\n"}("EE")</Text></View>
                        <View style={[styles.cell, { backgroundColor: "#71abc3" }]}><Text style={[styles.aligncenter, { color: "white", fontFamily: "Museo", fontSize: 18 }]}>Estradiolvalerát{"\n"}("E2V")</Text></View>
                        <View style={[styles.cell, { backgroundColor: "#71abc3" }]}><Text style={[styles.aligncenter, { color: "white", fontFamily: "Museo", fontSize: 18 }]}>Estradiol{"\n"}("E2")</Text></View>
                        <View style={[styles.cell, { backgroundColor: "#511d52" }]}><Text style={[styles.aligncenter, { color: "white", fontFamily: "Museo", fontSize: 18 }]}>Estetrol{"\n"}("e4")</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.cellSpecial]}>
                            <Text style={styles.aligncenter}>
                                <Text style={styles.tablesub}>Terminální poločas{"\n"}</Text>
                                <Text style={styles.tablenormal}>Indikátor délky biologické aktivity</Text>
                            </Text>
                        </View>
                        <View style={styles.cell}><Text style={styles.aligncenter}>13 - 27 hodin</Text></View>
                        <View style={styles.cell}><Text style={styles.aligncenter}>13 - 20 hodin</Text></View>
                        <View style={styles.cell}><Text style={styles.aligncenter}>3,6 +- 1,5 hodin{"\n"}(po intravenózním podání)</Text></View>
                        <View style={[styles.cell, { backgroundColor: "#511d52" }]}><Text style={[styles.aligncenter, { color: "white" }]}>24 - 48 hodin</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.cellSpecial]}>
                            <Text style={styles.aligncenter}>
                                <Text style={styles.tablesub}>Inhibice jaterních enzymů CYP450</Text>
                                <Text style={styles.tablenormal}>{"\n"}Zda má lék interakci s metabolismem jiných léků</Text>
                            </Text>
                        </View>
                        <View style={styles.cell}><Text style={styles.aligncenter}>Ano</Text></View>
                        <View style={styles.cell}><Text style={styles.aligncenter}>Ano</Text></View>
                        <View style={styles.cell}><Text style={styles.aligncenter}>Ano</Text></View>

                        <View style={[styles.cell, { backgroundColor: "#511d52" }]}><Text style={[styles.aligncenter, { color: "white" }]}>Ne</Text></View>
                    </View>
                    <View style={styles.row}>
                        <View style={[styles.cellSpecial]}>
                            <Text style={styles.aligncenter}>
                                <Text style={styles.tablesub}>Perorální biologická dostupnost</Text>
                                <Text style={styles.tablenormal}>{"\n"}Podíl léku, který se dostane do tkáně</Text>
                            </Text>
                        </View>
                        <View style={styles.cell}><Text style={styles.aligncenter}>Střední (~50 %)</Text></View>
                        <View style={styles.cell}><Text style={styles.aligncenter}>Velmi nízká (~5 %)</Text></View>
                        <View style={styles.cell}><Text style={styles.aligncenter}>Velmi nízká (1~2%)</Text></View>
                        <View style={[styles.cell, { backgroundColor: "#511d52" }]}><Text style={[styles.aligncenter, { color: "white" }]}>Vysoká (~70 %)</Text></View>

                    </View>

                </TouchableOpacity>

            }
        </View>
    )
}

export default Rozdily

const styles = StyleSheet.create({
    tablesub: {
        color: "#511d52",
        fontFamily: "MuseoBold",
        textAlign: "left"
    },
    tablenormal: {
        color: "grey",
        fontFamily: "Museo",
        textAlign: "left"
    },
    aligncenter: { textAlign: "center", fontFamily: "Museo", },
    row: {
        flexDirection: "row"
    },
    cell: {
        borderWidth: 1,
        borderColor: "#71abc3",
        width: 150,
        height: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: 3,
        borderRadius: 5,
        fontFamily: "Museo",
    },
    cellEmpty: {
        width: 150,
        height: 100,
        marginTop: 3,
        marginRight: 3,

    },
    cellSpecial: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: 150,
        height: 100,
        borderTopWidth: 1,
        borderTopColor: "#71abc3",
        borderTopRightRadius: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#71abc3",
        borderBottomRightRadius: 5,
        marginTop: 3,
        marginRight: 3,
        borderRightWidth: 1,
        borderRightColor: "#71abc3"

    },
    smallText: {
        fontSize: 10,
        fontFamily: "Museo",
        marginTop: 5,

    },

    normalText: {
        color: "grey",
        fontFamily: "Museo",
        fontSize: 20,
        position: "relative",
        marginTop: 5
    },
    subText: {
        color: "#511d52",
        fontFamily: "MuseoBold",
        fontSize: 30,
        fontWeight: "bold",
        position: "relative",
    },
    sub: {
        fontSize: 15,
        color: "#511d52",
        fontFamily: "MuseoBold",
        fontWeight: "bold",
        position: "relative"
    },
    canvas: {
        width: width / 2,
        height,
        position: "absolute",
        top: 0,
        right: 0,
        backgroundColor: "#e8eaedf0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: width / 2,
        padding: 10,
        zIndex: 11
    },
    canvas2: {
        width: width,
        height,
        position: "absolute",
        top: 0,
        right: 0,
        marginRight: -55,
        backgroundColor: "#e8eaedf0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: width,
        padding: 10,
        zIndex: 11
    },
    image: {
        width: width / 3,
        resizeMode: "contain",
        height: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    fourGrid: {
        display: "flex",
        flexDirection: "row",
        width: width - 60,
        height: height - 300,
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: 150
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
})
