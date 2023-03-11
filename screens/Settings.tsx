import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { ScrollView } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { URL } from "../Global_URL";
import * as FileSystem from "expo-file-system";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
type LangType = {
  id: number;
  name: string;
  code: string;
};
const Settings = () => {
  const [listOfLanguages, setListOfLanguages] = useState<LangType[]>([]);
  const [requestMessage, setRequestMessage] = useState("");
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

  const loadLocales = async () => {
    console.log(URL + "/api/i18n/locales");
    try {
      const res: Response = await fetch(URL + "/api/i18n/locales");
      const data: LangType[] = await res.json();
      if (data.length > 0) {
        setListOfLanguages(data);
      } else {
        setListOfLanguages([]);
        setRequestMessage(
          "There was a problem with either connection or language server. We could not download the language pack for you. Try it later or contact huss@richtergedeon.cz"
        );
      }
    } catch (error: any) {
      setRequestMessage(error.toString());
    }
  };

  const downloadLanguagePack = async (index: number) => {
    try {
      const res: Response = await fetch(
        URL +
          `/api/drovelis-presentations?populate=*&locale=${listOfLanguages[index].code}`
      );
      const data: any = await res.json();

      await AsyncStorage.setItem(
        "i18",
        JSON.stringify(data.data[0].attributes)
      ).then(async () => {
        downloadAllImages();
      });

      setListOfLanguages([]);

      setRequestMessage(
        `${listOfLanguages[index].name} was successfully uploaded to your device. If you do not see any changes, please, turn off and on the app.`
      );

      setTimeout(() => {
        setRequestMessage("");
      }, 2000);
    } catch (error: any) {
      setRequestMessage(error.toString());
    }
  };

  const testDownload = (
    imgUrl: string,
    name: string,
    localStorageKeyName: string
  ) => {
    const finalImageUrl = URL + imgUrl;
    FileSystem.downloadAsync(finalImageUrl, FileSystem.documentDirectory + name)
      .then(async ({ uri }) => {
        await AsyncStorage.setItem(localStorageKeyName, uri).then(() => {
          console.log(
            `Saved to local storage under the key = ${localStorageKeyName} & URL: ${uri}`
          );
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const downloadAllImages = async () => {
    const local: string | null = await AsyncStorage.getItem("i18");
    if (local) {
      const imgJson = JSON.parse(local);
      for (const key in imgJson) {
        if (key.match(/image/gi)) {
          const imgURL: string = imgJson[key].data.attributes.url;
          const imgName: string = imgJson[key].data.attributes.name;
          const localStorageKeyName: string = key;
          testDownload(imgURL, imgName, localStorageKeyName);
        }
        if(key.match(/pdfdocument/gi)){
          const imgURL: string = imgJson[key].data.attributes.url;
          const imgName: string = imgJson[key].data.attributes.name;
          const localStorageKeyName: string = key;
          testDownload(imgURL, imgName, localStorageKeyName);
        }
      }
    }
  };
  return (
    <Layout>
      <SafeAreaView>
        <View
          style={{
            width,
            height,
            flexDirection: "row",
            padding: width * 0.06,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {
            //First columnt
          }
          <View
            style={{
              width: width / 2 - width * 0.1,
              margin: 2,
              padding: 2,
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <TouchableOpacity style={styles.btn} onPress={loadLocales}>
              <Text
                style={{ color: "#7eb1c6c2", fontWeight: "bold", fontSize: 18 }}
              >
                Update language pack
              </Text>
              <MaterialCommunityIcons
                style={{ textAlign: "center" }}
                name="update"
                size={64}
                color="#7eb1c6c2"
              />
            </TouchableOpacity>
            <ScrollView>
              {listOfLanguages &&
                listOfLanguages.map((l: LangType, i: number) => (
                  <View
                    key={i}
                    style={{
                      flexDirection: "column",
                      width: width / 3,
                      marginTop: 10,
                      justifyContent: "center",
                    }}
                  >
                    <TouchableOpacity
                      style={{
                        margin: 4,
                        padding: 12,
                        borderWidth: 1,
                        borderColor: "Grey",
                        borderRadius: 5,
                      }}
                      onPress={() => {
                        downloadLanguagePack(i);
                      }}
                    >
                      <Text>
                        <Text style={{ fontWeight: "bold" }}>Download: </Text>
                        {l.name}
                      </Text>
                    </TouchableOpacity>
                  </View>
                ))}
              <Text style={{ paddingTop: 20 }}>{requestMessage}</Text>
            </ScrollView>
          </View>
          {
            //Second column
          }

          <View
            style={{
              width: width / 2 - width * 0.1,
              margin: 2,
              padding: 2,
              height: "auto",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <TouchableOpacity style={styles.btn}>
              <Text
                style={{ color: "#7eb1c6c2", fontWeight: "bold", fontSize: 18 }}
              >
                Dynamic Pages
              </Text>

              <Foundation
                name="page-search"
                style={{ textAlign: "center" }}
                size={64}
                color="#7eb1c6c2"
              />
            </TouchableOpacity>
            <ScrollView>
              {
                //Tady už pak propíši dynamickou komponentu
              }
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </Layout>
  );
};

export default Settings;

const styles = StyleSheet.create({
  btn: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});
