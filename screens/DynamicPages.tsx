import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    SafeAreaView,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  import Layout from "../components/Layout";
  import { ScrollView } from "react-native-gesture-handler";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import PostPreview from "../components/PostPreview";
import { useFocusEffect } from "@react-navigation/native";
  const DynamicPages = () => {
    const [height, setHeight] = useState<number>(Dimensions.get("screen").height);
    const [width, setWidth] = useState<number>(Dimensions.get("screen").width);
    useEffect(() => {
      //ask user for file permission
      const subscription = Dimensions.addEventListener(
        "change",
        ({ window, screen }) => {
          setHeight(screen.height);
          setWidth(screen.width);
        }
      );
      return () => subscription?.remove();
    });
  
   
  
  
  const [listOfPosts, setListOfPosts] = useState([]);
    useFocusEffect(
      React.useCallback(() => {
        (async()=>{
          const posts:string|null = await AsyncStorage.getItem("posts");
          if(posts){
            setListOfPosts(JSON.parse(posts));
          }
        })()
        return () => {
          setListOfPosts([])
        }
      }, [])
    );

    return (
      <Layout>
        <SafeAreaView>
          <View
            style={{
              width,
              height,
              flexDirection: "column",
              padding: width * 0.05,

            }}
          >
            {
              //First column
            }
            
            {
              //Second column
            }
  
            <View
              style={{
                width: width - 200,
                margin: 2,
                padding: 2,
                marginLeft:40,
                borderRadius: 5,
              }}
            >
              
              <ScrollView>
                {
                 listOfPosts && listOfPosts.map((p,i)=>{
                    return (
                      <PostPreview data={p} key={i}/>
                    )
                  })
                }
              
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </Layout>
    );
  };
  
  export default DynamicPages;
  
  const styles = StyleSheet.create({
    btn: {
      paddingLeft: 20,
      paddingRight: 20,
      paddingTop: 10,
      paddingBottom: 10,
    },
  });
  