import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const { width, height }: { width: number; height: number } =
  Dimensions.get("screen");
import { AntDesign } from "@expo/vector-icons";
import SecuredMarkdown from "../../../components/SecuredMarkdown";
import MultiImage from "../../../components/MultiImage";
const VyhodnePusobeni = (): ReactElement => {
  const [citaceLegenda, setCitaceLegenda] = useState<number>(0);

  const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
  const [width, setWidth] = useState<number>(Dimensions.get("screen").width);
  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setHeight(screen.height);
        setWidth(screen.width);
      }
    );
    return () => subscription?.remove();
  });

  return (
    <View>
      <SecuredMarkdown
        keyName="EstetrolNestActionTitle"
        element="text"
        style={styles.fontStyle}
      />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: width - 100,
        }}
      >
        <MultiImage
          nameOfTheImage="EstetrolNestActionImage"
          style={{ width: width - 500, height: height - 350, marginTop: 100 }}
        />
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          justifyContent: "center",
          alignItems: "flex-end",
          height: 80,
        }}
      >
        <TouchableOpacity
          style={{ paddingRight: 80 }}
          onPress={() => setCitaceLegenda(1)}
        >
          <AntDesign name="infocirlce" size={80} color="#71abc3" />
        </TouchableOpacity>
      </View>
      {citaceLegenda === 1 && (
        <TouchableOpacity
          onPress={() => setCitaceLegenda(0)}
          style={styles.canvas2}
        >
          <View style={styles.legenda}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View style={{ width: 80, flexDirection: "row" }}>
                <View style={styles.icon}></View>
                <Image
                  style={styles.icon}
                  source={require("../../../assets/icon_blue.png")}
                />
              </View>
              <View>
                <SecuredMarkdown element='text' style={styles.nadpis} keyName='EstetrolNestActionInfoParagraph1' />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
              }}
            >
              <View style={{ width: 80, flexDirection: "row" }}>
                <View style={styles.icon}></View>
                <Image
                  style={styles.icon}
                  source={require("../../../assets/icon_purple.png")}
                />
              </View>
              <View>
              <SecuredMarkdown element='text' style={styles.nadpis} keyName='EstetrolNestActionInfoParagraph2' />
             
              </View>
            </View>
          </View>
          <View
            style={{
              width: width - 300,
            }}
          >
            <Text></Text>
            <Text></Text>
            <Text></Text>
             <SecuredMarkdown element='markdown' style={styles.nadpis} keyName='EstetrolNestActionInfoParagraph3' />
             
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VyhodnePusobeni;

const styles = StyleSheet.create({
  legenda: {
    borderWidth: 2,
    padding: 4,
    borderColor: "grey",
    borderRadius: 4,
    paddingRight: 40,
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
    zIndex: 11,
  },
  icon: {
    width: 30,
    height: 60,
    resizeMode: "contain",
    marginRight: 10,
  },
  image: {
    width: 200,
    resizeMode: "contain",
    height: 450,
  },

  tablenormal: {
    color: "grey",
    fontFamily: "Museo",
    textAlign: "left",
  },
  aligncenter: { textAlign: "center", fontFamily: "Museo", fontSize: 20 },

  normalText: {
    color: "grey",
    fontFamily: "Museo",
    fontSize: 20,
    position: "relative",
    marginTop: 5,
  },
  nadpis: {
    color: "black",
    fontFamily: "MuseoBold",
    fontSize: 20,
    position: "relative",
    marginTop: 5,
  },

  subText: {
    color: "black",
    fontFamily: "MuseoBold",
    fontSize: 10,
    fontWeight: "bold",
    position: "relative",
  },

  fourGrid: {
    display: "flex",
    flexDirection: "column",
    width: width,

    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    marginTop: 150,
  },
  fontStyle: {
    color: "#d9326f",
    fontSize: 60,
    padding: 10,
    fontFamily: "Museo",
    position: "absolute",
    top: 0,
    right: 0,
  },
});
