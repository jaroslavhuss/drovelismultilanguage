import { StyleSheet, Image, StyleProp,Platform } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {URL} from "../Global_URL"
import { useFocusEffect } from '@react-navigation/native'
const MultiImage = ({nameOfTheImage, style}:{nameOfTheImage:string, style:StyleProp<any>}) => {

  const [image, setImage] = useState("")

  useFocusEffect(
    React.useCallback(
        ()=>{
          if(Platform.OS === "ios" || Platform.OS === "android"){
            (async()=>{
              const getTheRightImageUri:string|null = await AsyncStorage.getItem(nameOfTheImage);
              if(getTheRightImageUri){
                setImage(getTheRightImageUri)
              }
            })()
          }
          //If web is used, it will load data straight from the URL.
          else{
            (async()=>{
              const data:string|null = await AsyncStorage.getItem("i18");
              if(data){
                  const getUrl = JSON.parse(data);
                  setImage(URL+getUrl[nameOfTheImage].data.attributes.url)
              }  
           })()
           return () =>{
              setImage("")
           }
          }
          
        }
        ,[nameOfTheImage])
  )
    
  return <>{(image.length>0&&<Image source={{uri:image}} style={style}/>)}</>

    

    

}

export default MultiImage

const styles = StyleSheet.create({})