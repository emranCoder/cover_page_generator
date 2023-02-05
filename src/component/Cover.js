import React, { useState } from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import { PDFDownloadLink  } from '@react-pdf/renderer';
import { usePDF } from '@react-pdf/renderer';
import { Page, Text, Table, Image, Document, StyleSheet, View, BlobProvider  } from '@react-pdf/renderer';
import logo from '../Metropolitanuniversity.png';
import { Font } from '@react-pdf/renderer'
import font from './CalibriRegular.ttf'
import fontBold from './CalibriBold.TTF'
import MyDocument from './MyDocument';
import ReactPDF from '@react-pdf/renderer';




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

export default function Cover(props) {

    const [name, setName] = useState("");
  const [id, setId] = useState(null);
  const [batch, setBatch] = useState(null);
  const [section, setSection] = useState(null);
  const [facultyName, setfacultyName] = useState(null);
  const [facultyDesignation, setfacultyDesignation] = useState(null);
  const [uniName, setfacultyuniName] = useState(null);
  const [uniOption, setUniOption] = useState(0);
  const [assinTitle, setAssinTitle] = useState(null);
  const [courseCode, setCourseCode] = useState(null);
  const [assinNo, setAssinNo] = useState(null);
  const [assinDate, setAssinDate] = useState(null);

    let custom = () => {
    let x = document.getElementById('clicked').value;
    if (x === 2) {
      document.getElementById('uni_logo').classList.toggle('d-none');
    }
  }

  const MyDoc = (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.view}>
          <Image img style={styles.image} src={logo} />
          <Text style={styles.heading} >ASSIGNMENT - {assinNo}</Text>
          <View style={{flexDirection: 'row', flexRow: '1', marginTop: '30px'  }}>
            <Text style={styles.titleSection}>Title : </Text>
            <Text style={{ fontSize: '13px' }}>{assinTitle}</Text>
          </View>
          <View style={styles.section}>
            <Text style={styles.titleSection}>Course Code : </Text>
            <Text style={{ fontSize: '13px' }}>{courseCode}</Text>
          </View>
          <View style={{marginTop: '50px'}}>
            <Text style={styles.titleSection}>Submitted To : </Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{facultyName}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{facultyDesignation}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Dept. of {uniName}, MU</Text>
          </View>
          <View style={{marginTop: '50px'}}>
            <Text style={styles.titleSection}>Submitted By : </Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{name}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>ID No    : {id}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Batch    : {batch}th</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Section :  {section}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{(uniOption)===1 ? `Dept. of ${uniName}, MU`:"null"}</Text>
          </View>
          <View style={{flexDirection: 'row', flexRow: '1', marginTop: '100px'}}>
            <Text style={styles.titleSection}>Date of Submission : </Text>
            <Text style={{ fontSize: '13px' }}>{assinDate}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );

  const [instance, updateInstance] = usePDF({ document: MyDoc });


  // const data = {
  //   name: name,
  //   ID: id,
  //   Batch: batch,
  //   Section: section,
  //   FacultyName: facultyName,
  //   FacultyDesigna: facultyDesignation,
  //   UniName: uniName,
  //   UniOption: uniOption,
  //   AssinTitle: assinTitle,
  //   CourseCode: courseCode,
  //   AssinNo: assinNo,
  //   AssinDate: assinDate,
  // }

  let handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
    <div className='row'>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Student Details */}
          <div className="cover-section col-md-6 ">
            <h4 className='text-center'>Student Details</h4>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Name*</label>
              <input type="text" className="form-control" onChange={(e) => { setName(e.target.value) }} id="sName" aria-describedby="emailHelp" placeholder="Enter Your Name" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">ID*</label>
              <input type="text" className="form-control" onChange={(e) => { setId(e.target.value) }} id="sId" placeholder="Your ID*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Batch*</label>
              <input type="text" className="form-control" onChange={(e) => { setBatch(e.target.value) }} id="sBatch" placeholder="Your Batch" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Section*</label>
              <input type="text" className="form-control" id="sSection" onChange={(e) => { setSection(e.target.value) }} placeholder="Your Section*" />
            </div>
          </div>
          {/* Teacher Details */}
          <div className="cover-section col-md-6">
            <h4 className='text-center'>Teacher Details</h4>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Name*</label>
              <input type="text" className="form-control" id="facultyName" onChange={(e) => { setfacultyName(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter Your Name*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Designation*</label>
              <input type="text" className="form-control" id="designation" onChange={(e) => { setfacultyDesignation(e.target.value) }} placeholder="Teacher Designation*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Department Name*</label>
              <input type="text" className="form-control" id="tun" onChange={(e) => { setfacultyuniName(e.target.value) }} placeholder="Type your department name*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Universtiy Logo*</label>
              <select className="form-select" id='clicked' onClick={custom} defaultValue aria-label="Default select example">
                <option value='0'  onClick={(e) => { setUniOption(e.target.value) }} >Select University</option>
                <option value="1" onClick={(e) => { setUniOption(e.target.value) }} >Metropolitan University</option>
                <option value="2" onClick={(e) => { setUniOption(e.target.value) }} >Custom</option>
              </select>
            </div>
            <div className="mb-3 d-none" id='uni_logo'>
              <label htmlFor="formFile" className="form-label">Upload University Logo</label>
              <input className="form-control" name='unilogo' type="file" id="formFile" />
            </div>
          </div>
          <div className="cover-section col-md-6">
            <h4 className='text-center'>Title Section</h4>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Title*</label>
              <input type="text" className="form-control" id="title" onChange={(e) => { setAssinTitle(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter Title*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Course Code*</label>
              <input type="text" className="form-control" id="coursecode" onChange={(e) => { setCourseCode(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter Course Code*" />
            </div>
          </div>
          <div className="cover-section col-md-6">
            <h4 className='text-center'>Additional Info</h4>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Assignment No*</label>
              <input type="number" className="form-control" id="asignmentNo" onChange={(e) => { setAssinNo(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter Title*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Submission Date*</label>
              <input type="date" className="form-control" id="submitionDate" onChange={(e) => { setAssinDate(e.target.value) }} aria-describedby="emailHelp" placeholder="Enter Course Code*" />
            </div>
            
            <button type="submit" className="btn btn-primary"><PDFDownloadLink document={<MyDocument name ={name}
id ={id}
batch ={batch}
section ={section}
facultyName ={facultyName}
facultyDesignation ={facultyDesignation}
uniName ={uniName}
uniOption ={uniOption}
assinTitle ={assinTitle}
courseCode ={courseCode}
assinNo ={assinNo}
assinDate ={assinDate} />} fileName="somename.pdf">Submit<div style={{display
: "none"}}><PDFViewer>
      
</PDFViewer></div></PDFDownloadLink></button>  
            
          </div>
        </div>
      </form>
    </div>
   </>
  )
}


