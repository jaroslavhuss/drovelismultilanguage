import { Text, StyleProp } from 'react-native'
import React, { useState } from 'react'
import { useFocusEffect } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Markdown from 'react-native-markdown-display'
const SecuredMarkdown = ({keyName, element, style}:{keyName:string, element?:"text"|"markdown", style?:StyleProp<any>}) => {
  const [text, setText] = useState<string>("")
  useFocusEffect(
    React.useCallback(
        ()=>{
            (async()=>{
                const data:string|null = await AsyncStorage.getItem("i18");
                if(data){
                    const parsedObject:any = JSON.parse(data);
                    const finalText:string = parsedObject[keyName];
                   setText(finalText)
                }  
             })()
             return () =>{
              setText("")
             }
        }
        ,[keyName])
  )
  return (
    //@ts-ignore
    <>{element==="markdown" && <Markdown>{text}</Markdown> } 
      {element !== "markdown" && <Text style={style}>{text}</Text>}
    </>
  )
}

export default SecuredMarkdown