import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { URL } from '../Global_URL'
import { AntDesign } from '@expo/vector-icons';
import Markdown from 'react-native-markdown-display';
interface PreviewPostData  {
 attributes: {
  Title:string, 
  createdAt:Date,
   locale:string,
    ShortText:string, 
    PreviewImage:{
      data:{
        attributes:{
          url:string
        }
      }
    },
    Content:string,
  }
}
const PostPreview = ({data}:{data:PreviewPostData}) => {

const [shoudLoadThePost, setShoudLoadThePost] = useState<boolean>(false)

  const {Title, createdAt, ShortText, PreviewImage, Content} = data.attributes;

  const prepareContent = (content:string):string => {
    let finalContent:string = content;
  //   const getArrayOfImages = content.split(/!\[.*?\]\((.*?)\)/gi).filter((item:string)=>{return item.match(/uploads/)}).map((item:string)=>{return URL + item})

  //appends URL to the image in the content

  const finalImages = finalContent.replace(/!\[.*?\]\((.*?)\)/gi, (match:string, p1:string)=>{
      return `![${p1}](${URL + p1})`
    })
    return finalImages
  }
  return (
    <>
   
    {
      shoudLoadThePost ?
      <View style={styles.mainPost}>
        <TouchableOpacity
        onPress={()=>{setShoudLoadThePost(!shoudLoadThePost)}}
        >
          <AntDesign style={{textAlign:"right"}} name="closecircleo" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{
          fontWeight:"bold",
          fontSize:20,
          paddingTop:10,
          paddingBottom:10,
          textAlign:"center"
          }}>{Title}</Text>
          <Image style={{width:100, height:100, resizeMode:"contain", flex:1, padding:2,
        alignSelf:"center", maxHeight:100, maxWidth:100, borderRadius:50
        }} source={{uri:`${URL}${PreviewImage.data.attributes.url}`}}/>
      {
        //@ts-ignore
      }<Markdown>{prepareContent(Content)}</Markdown>
        
    </View>
    :
    <TouchableOpacity style={{borderWidth:0.3, borderRadius:8, padding:8, margin:2}}
    onPress={()=>{setShoudLoadThePost(!shoudLoadThePost)}}
    >
      <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <Image style={{width:100, height:100, resizeMode:"contain", flex:1, padding:2}} source={{uri:`${URL}${PreviewImage.data.attributes.url}`}}/>
      <Text style={{flex:8, padding:5, margin:5, fontWeight:"bold", fontSize:18}}>{Title}{"\n"}<Text style={{color:"grey", fontSize:12}}>[{new Date(createdAt).toDateString()}]</Text></Text>
      </View>
      {
        //@ts-ignore
      }<Markdown>{ShortText}</Markdown>
      
    </TouchableOpacity>
    }
    </>
    
  )
}

export default PostPreview

const styles = StyleSheet.create({
  mainPost:{
    width:"100%",
    height:"100%",
    padding:10,
    backgroundColor:"#d2d2d280",
    top:0,
    left:0,
    zIndex:1000,
    elevation:1000,
    borderRadius:10,
  }
})