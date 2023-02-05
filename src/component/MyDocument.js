import React from 'react';
import { Page, Text, Image, Document, StyleSheet, View } from '@react-pdf/renderer';
import logo from '../Metropolitanuniversity.png';
import { Font } from '@react-pdf/renderer'
import font from './CalibriRegular.ttf'
import fontBold from './CalibriBold.TTF'


Font.register({
  family: 'Calibri', 
  format: "truetype",
  src: font,
})
Font.register({
  family: 'CalibriBold', 
  format: "truetype",
  src: fontBold,
})



// Create styles
const styles = StyleSheet.create({
  page: {
    width: '8.27in',
    height: '11.69in',
    padding: '0.5in',
    display: 'block',
    fontFamily: 'Calibri',
  },
  view: {
    border: '1px solid #24214d',
    width: '100%',
    height: '100%',
    display: 'block',
    borderStyle: 'dashed',
    borderWidth: '3px',
    borderRadius: '10px',
    padding: '0.5in',
  },
  image: {
    width: '350px',
    alignSelf: 'center',
    marginTop: '50px',
    marginBottom: '10px',
  },
  titleSection: {
    fontSize: '13pt',
    fontFamily: 'CalibriBold',
  },
  section: {
    flexDirection: 'row',
    flexRow: 1
  },
  heading: {
    fontSize: '22pt',
    fontFamily: 'CalibriBold',
    alignSelf: 'center',
    marginTop: '50px',
    marginBottom: '20px',
  }

});


// Create Document Component
const MyDocument = (porps) => {

  
  return (
    <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.view}>
        <Image img style={styles.image} src={logo} />
        <Text style={styles.heading} >ASSIGNMENT - {porps.assinNo}</Text>
        <View style={{flexDirection: 'row', flexRow: '1', marginTop: '30px'  }}>
          <Text style={styles.titleSection}>Title : </Text>
          <Text style={{ fontSize: '13px' }}>{porps.assinTitle}</Text>
        </View>
        <View style={styles.section}>
          <Text style={styles.titleSection}>Course Code : </Text>
          <Text style={{ fontSize: '13px' }}>{porps.courseCode}</Text>
        </View>
        <View style={{marginTop: '50px'}}>
          <Text style={styles.titleSection}>Submitted To : </Text>
          <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{porps.facultyName}</Text>
          <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{porps.facultyDesignation}</Text>
          <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Dept. of {porps.uniName}, MU</Text>
        </View>
        <View style={{marginTop: '50px'}}>
          <Text style={styles.titleSection}>Submitted By : </Text>
          <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{porps.name}</Text>
          <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>ID No    : {porps.id}</Text>
          <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Batch    : {porps.batch}th</Text>
          <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Section :  {porps.section}</Text>
          <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{(porps.uniOption==1) ? `Dept. of ${porps.uniName}, MU`:"null"}</Text>
        </View>
        <View style={{flexDirection: 'row', flexRow: '1', marginTop: '100px'}}>
          <Text style={styles.titleSection}>Date of Submission : </Text>
          <Text style={{ fontSize: '13px' }}>{porps.assinDate}</Text>
        </View>
      </View>
    </Page>
  </Document>
  )
};
export default MyDocument;