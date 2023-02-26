import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Layout from '../components/Layout'
import { ScrollView } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

type LangType = {
    id: number;
name: string;
code: string;
}

const Settings = () => {
    const [height, setHeight] = useState<number>(Dimensions.get("screen").height)
    const [width, setWidth] = useState<number>(Dimensions.get("screen").width)
    const [listOfLanguages, setListOfLanguages] = useState<LangType[]>([])
    const [requestMessage, setRequestMessage] = useState("");

    useEffect(() => {
        const subscription = Dimensions.addEventListener('change', ({ window, screen }) => {
          setHeight(screen.height)
          setWidth(screen.width)
        });
        return () => subscription?.remove();
      });

      const loadLocales = async () =>{
        try {
            const res:Response = await fetch("http://10.15.101.177:1337/api/i18n/locales");
            const data:LangType[] = await res.json();

            if(data.length>0){
                setListOfLanguages(data)
            }
            
        } catch (error:any) {
            setRequestMessage(error.toString())
        }
      }

      const downloadLanguagePack = async (index:number) =>{
        try {
            const res:Response = await fetch(`http://10.15.101.177:1337/api/drovelis-presentations?populate=*&locale=${listOfLanguages[index].code}`);
            const data:any= await res.json();

        await AsyncStorage.setItem("i18", JSON.stringify(data.data[0].attributes));

            setListOfLanguages([])

            setRequestMessage(`${listOfLanguages[index].name} was successfully uploaded to your device. If you do not see any changes, please, turn off and on the app.`)
            
        } catch (error:any) {
            setRequestMessage(error.toString())
        }
      }
  return (
    <Layout>
        <ScrollView>
            <SafeAreaView>
        <View style={{width, height, justifyContent:"center", alignItems:"center"}}>
                <TouchableOpacity style={styles.btn} onPress={loadLocales}>
                    <Text style={{color:"white", fontWeight:"bold", fontSize:18}}>Load Languages</Text>
                </TouchableOpacity>
                {
                    listOfLanguages && listOfLanguages.map((l:LangType,i:number)=>
                    <View key={i} style={{flexDirection:"column", width:width/3, marginTop:10}}>
                    <TouchableOpacity style={{margin:4, padding:12, borderWidth:1, borderColor:"Grey", borderRadius:5}} onPress={()=>{
                        downloadLanguagePack(i)
                    }}>
                        <Text><Text style={{fontWeight:"bold"}}>Download: </Text>{l.name}</Text>
                  </TouchableOpacity>
                    </View>
            
                    )
                }
                <Text style={{paddingTop:20}}>{requestMessage}</Text>
        </View>
        </SafeAreaView>
</ScrollView>
    </Layout>
  )
}

export default Settings

const styles = StyleSheet.create({
    btn:{
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        backgroundColor:"#7eb1c6c2"
    }
})