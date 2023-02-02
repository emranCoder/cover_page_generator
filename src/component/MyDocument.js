import React from 'react';
import { Page, Text, view, img, Document, StyleSheet, View } from '@react-pdf/renderer';
import logo from '../Metropolitan_university.png';


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
  heading: {
    textAlign: 'center',
    fontSize: '22pt',
    fontWeight: 'bold',
    margin: '70px 0px'
  },
  section: {
    margin: 10,
    padding: 10,
  },
  image: {
    width: '500px',
    margin: 'auto',
    display: 'flex',
  },
  title_section: {
    fontWeight: 'bold',
  },
});

// Create Document Component
const MyDocument = () => {

  
  return (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.view}>
        <img style={styles.image} src={logo} />
        <h3 style={styles.heading}>ASSIGNMENT - </h3>
        <div style={{ fontSize: '14pt' }}>
          <span style={styles.title_section}>Title : </span><span>Lab Assignment – 3</span>
          <br />
          <span style={styles.title_section}>Course Code : </span><span>CSS-122</span>
        </div>
        <p class="c15"><span class="c0">&nbsp;</span></p>
        <p class="c15"><span class="c0">&nbsp;</span></p>
        <table class="table-section c17">
          <tr class="c16">
            <td class="c7" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">Submitted To</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">:</span></p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
          </tr>
          <tr class="c12">
            <td class="c7" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">SUHEL AHMED</span></p>
            </td>
          </tr>
          <tr class="c12">
            <td class="c7" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">LECTURER</span></p>
            </td>
          </tr>
          <tr class="c12">
            <td class="c7" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c5" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">Dept. of Computer Science &amp; Engineering, MU</span></p>
            </td>
          </tr>
        </table>
        <p class="c15"><span class="c0">&nbsp;</span></p>
        <table class="table-section c17">
          <tr class="c16">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">Submitted By</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">:</span></p>
            </td>
            <td class="c14" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c6" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
          </tr>
          <tr class="c12">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c3" colspan="3" rowspan="1">
              <p class="c4"><span class="c0">MD.EMRAN ALAM</span></p>
            </td>
          </tr>
          <tr class="c12">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c14" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">ID No</span></p>
            </td>
            <td class="c6" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">:</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">221-115-110</span></p>
            </td>
          </tr>
          <tr class="c20">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c14" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">Batch </span></p>
            </td>
            <td class="c6" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">:</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c4"><span class="c22">56</span><span class="c9">th</span></p>
            </td>
          </tr>
          <tr class="c12">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c14" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">Section</span></p>
            </td>
            <td class="c6" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">:</span></p>
            </td>
            <td class="c8" colspan="1" rowspan="1">
              <p class="c4"><span class="c2">C</span></p>
            </td>
          </tr>
          <tr class="c12">
            <td class="c10" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c11" colspan="1" rowspan="1">
              <p class="c4"><span class="c0">&nbsp;</span></p>
            </td>
            <td class="c3" colspan="3" rowspan="1">
              <p class="c4"><span class="c0">Dept. of Computer Science &amp; Engineering, MU</span></p>
            </td>
          </tr>
        </table>
        <p class="c15"><span class="c0">&nbsp;</span></p>
        <div style={{ fontSize: '14pt' }}>
          <span style={styles.title_section}>Date of Submission : </span><span> August 31,2022</span>
        </div>
      </View>
    </Page>
  </Document>
  )
};
export default MyDocument;