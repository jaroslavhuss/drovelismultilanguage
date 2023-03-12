import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { URL } from '../Global_URL'
interface PreviewPostData  {
 attributes: {Title:string, 
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
  const {Title, createdAt, ShortText, PreviewImage, Content} = data.attributes;
  return (
    <TouchableOpacity style={{borderWidth:0.3, borderRadius:8, padding:8, margin:2}}>
      <View style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <Image style={{width:100, height:100, resizeMode:"contain", flex:1, padding:2}} source={{uri:`${URL}${PreviewImage.data.attributes.url}`}}/>
      <Text style={{flex:8, padding:5, margin:5, fontWeight:"bold", fontSize:18}}>{Title}{"\n"}<Text style={{color:"grey", fontSize:12}}>[{new Date(createdAt).toDateString()}]</Text></Text>
      </View>
      <Text>{ShortText}...</Text>
    </TouchableOpacity>
  )
}

export default PostPreview

const styles = StyleSheet.create({})