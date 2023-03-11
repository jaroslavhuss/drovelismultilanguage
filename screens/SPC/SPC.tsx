import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { WebView } from 'react-native-webview';
import Layout from '../../components/Layout';
import { useFocusEffect } from '@react-navigation/native';
import MultiPDF from '../../components/MultiPDF';

const Spc = () => {
    const [loadComponent, setLoadComponent] = useState<boolean>(false)
    let pdf = require("../../assets/pdf.pdf");
    useFocusEffect(() => {
        setLoadComponent(true)
        return () => {
            setLoadComponent(false)
        }
    })
    return (
        <Layout>
            <MultiPDF nameOfThePDF='DrovelisSPCPDFdocument'/>
        </Layout>
    )
}

export default Spc

