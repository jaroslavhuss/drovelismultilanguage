import React, { useState } from "react";
import { ReactElement } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import SecuredMarkdown from "../../../components/SecuredMarkdown";
import MultiImage from "../../../components/MultiImage";

const { width, height }: { width: number; height: number } =
  Dimensions.get("screen");
const Rozdily = (): ReactElement => {
  const [rozdil, setRozdil] = useState<number>(0);

  return (
    <View style={{ marginLeft: 60 }}>
      <SecuredMarkdown
        element="text"
        keyName="EstetrolDifferencesTitle"
        style={styles.fontStyle}
      />
      <View style={styles.fourGrid}>
        <TouchableOpacity onPress={() => setRozdil(1)}>
          <MultiImage
            nameOfTheImage="EstetrolDifferencesImage1"
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRozdil(2)}>
          <MultiImage
            nameOfTheImage="EstetrolDifferencesImage2"
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setRozdil(5)}
          style={{
            width: width,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AntDesign
            style={{ marginRight: 60 }}
            name="table"
            size={60}
            color="#511d52"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRozdil(3)}>
          <MultiImage
            nameOfTheImage="EstetrolDifferencesImage3"
            style={styles.image}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setRozdil(4)}>
          <MultiImage
            nameOfTheImage="EstetrolDifferencesImage4"
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
      {rozdil === 1 && (
        <TouchableOpacity style={styles.canvas} onPress={() => setRozdil(0)}>
          <View
            style={{ justifyContent: "flex-start", alignContent: "flex-start" }}
          >
            <MultiImage
              nameOfTheImage="EstetrolDifferencesImage1"
              style={styles.image}
            />
            <View style={{ flexDirection: "row" }}>
              <SecuredMarkdown
                element="text"
                keyName="EstetrolDifferencesE1Title"
                style={styles.subText}
              />
            </View>
            <View>
              <SecuredMarkdown
                element="markdown"
                keyName="EstetrolDifferencesE1Paragraph"
                style={styles.normalText}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
      {rozdil === 2 && (
        <TouchableOpacity style={styles.canvas} onPress={() => setRozdil(0)}>
          <View
            style={{ justifyContent: "flex-start", alignContent: "flex-start" }}
          >
            <MultiImage
              nameOfTheImage="EstetrolDifferencesImage2"
              style={styles.image}
            />
            <View style={{ flexDirection: "row" }}>
              <SecuredMarkdown
                element="text"
                keyName="EstetrolDifferencesE2Title"
                style={styles.subText}
              />
            </View>
            <View>
              <SecuredMarkdown
                element="markdown"
                keyName="EstetrolDifferencesE2Paragraph"
                style={styles.normalText}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
      {rozdil === 3 && (
        <TouchableOpacity style={styles.canvas} onPress={() => setRozdil(0)}>
          <View
            style={{ justifyContent: "flex-start", alignContent: "flex-start" }}
          >
            <MultiImage
              nameOfTheImage="EstetrolDifferencesImage3"
              style={styles.image}
            />
            <View style={{ flexDirection: "row" }}>
              <SecuredMarkdown
                element="text"
                keyName="EstetrolDifferencesE3Title"
                style={styles.subText}
              />
            </View>
            <View>
              <SecuredMarkdown
                element="markdown"
                keyName="EstetrolDifferencesE3Paragraph"
                style={styles.normalText}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
      {rozdil === 4 && (
        <TouchableOpacity style={styles.canvas} onPress={() => setRozdil(0)}>
          <View
            style={{ justifyContent: "flex-start", alignContent: "flex-start" }}
          >
            <MultiImage
              nameOfTheImage="EstetrolDifferencesImage4"
              style={styles.image}
            />
            <View style={{ flexDirection: "row" }}>
              <SecuredMarkdown
                element="text"
                keyName="EstetrolDifferencesE4Title"
                style={styles.subText}
              />
            </View>
            <View>
              <SecuredMarkdown
                element="markdown"
                keyName="EstetrolDifferencesE4Paragraph"
                style={styles.normalText}
              />
            </View>
          </View>
        </TouchableOpacity>
      )}
      
      {rozdil === 5 && (
        <TouchableOpacity onPress={() => setRozdil(0)} style={styles.canvas2}>
          <View style={styles.row}>
            <View style={[styles.cellEmpty]}></View>
            <View style={[styles.cell, { backgroundColor: "#71abc3" }]}>
                         
              <SecuredMarkdown element="text" style={[
                  styles.aligncenter,
                  { color: "white", fontFamily: "Museo", fontSize: 18 },
                ]}
                keyName="EstetrolDifferencesTable12"
                />
            </View>
            <View style={[styles.cell, { backgroundColor: "#71abc3" }]}>
            <SecuredMarkdown element="text" style={[
                  styles.aligncenter,
                  { color: "white", fontFamily: "Museo", fontSize: 18 },
                ]}
                keyName="EstetrolDifferencesTable13"
                />
            </View>
            <View style={[styles.cell, { backgroundColor: "#71abc3" }]}>
            <SecuredMarkdown element="text" style={[
                  styles.aligncenter,
                  { color: "white", fontFamily: "Museo", fontSize: 18 },
                ]}
                keyName="EstetrolDifferencesTable14"
                />
            </View>
            <View style={[styles.cell, { backgroundColor: "#511d52" }]}>
            <SecuredMarkdown element="text" style={[
                  styles.aligncenter,
                  { color: "white", fontFamily: "Museo", fontSize: 18 },
                ]}
                keyName="EstetrolDifferencesTable15"
                />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.cellSpecial]}>
              <Text style={styles.aligncenter}>
               <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable21" />
              </Text>
            </View>
            <View style={styles.cell}>
            <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable22" />
            </View>
            <View style={styles.cell}>
            <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable23" />
            </View>
            <View style={styles.cell}>
              <Text style={styles.aligncenter}>
              <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable24" />
              </Text>
            </View>
            <View style={[styles.cell, { backgroundColor: "transparent" }]}>
              <Text style={[styles.aligncenter, { color: "white" }]}>
              <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable25" />
              </Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.cellSpecial]}>
              <Text style={styles.aligncenter}>
              <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable31" />
              </Text>
            </View>
            <View style={styles.cell}>
              <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable32" />
            </View>
            <View style={styles.cell}>
              <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable33" />
            </View>
            <View style={styles.cell}>
              <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable34" />
            </View>

            <View style={[styles.cell, { backgroundColor: "transparent" }]}>
            <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable35" />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.cellSpecial]}>
              <Text style={styles.aligncenter}>
              <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable41" />
              </Text>
            </View>
            <View style={styles.cell}>
            <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable42" />
            </View>
            <View style={styles.cell}>
            <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable43" />
            </View>
            <View style={styles.cell}>
            <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable44" />
            </View>
            <View style={[styles.cell, { backgroundColor: "transparent" }]}>
            <SecuredMarkdown element="markdown" keyName="EstetrolDifferencesTable45" />
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Rozdily;

const styles = StyleSheet.create({
  tablesub: {
    color: "#511d52",
    fontFamily: "MuseoBold",
    textAlign: "left",
  },
  tablenormal: {
    color: "grey",
    fontFamily: "Museo",
    textAlign: "left",
  },
  aligncenter: { textAlign: "center", fontFamily: "Museo" },
  row: {
    flexDirection: "row",
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
    borderRightColor: "#71abc3",
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
    marginTop: 5,
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
    position: "relative",
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
    zIndex: 11,
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
    marginTop: 150,
  },
  fontStyle: {
    color: "#d9326f",
    fontSize: 45,
    padding: 10,
    fontFamily: "Museo",
    position: "absolute",
    top: 0,
    right: 0,
  },
});
