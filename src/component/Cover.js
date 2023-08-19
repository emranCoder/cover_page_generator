import React, { useState } from 'react'
import { PDFDownloadLink, Font, Page, Text, Image, Document, StyleSheet, View } from '@react-pdf/renderer';
import logo from '../Metropolitan_university.png';
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
    flexRow: 1,
    marginLeft: '20px'
  },
  heading: {
    fontSize: '22pt',
    fontFamily: 'CalibriBold',
    alignSelf: 'center',
    marginTop: '50px',
    marginBottom: '20px',
    textTransform: 'uppercase',
  }

});




export default function Cover() {


  const [datas, setDatas] = useState({
    name: "",
    id: "",
    batch: "",
    section: "",
    facultyName: "",
    facultyDesignation: "",
    yourDept: "",
    techerDept: "",
    uniName: "",
    uniOption: "",
    assinTitle: "",
    courseCode: "",
    assinNo: "",
    assinDate: "",
  });

  let custom = () => {
    let x = document.getElementById('clicked').value;
    if (x === 2) {
      document.getElementById('uni_logo').classList.toggle('d-none');
    }
  }


  const handleOnchange = (e) => {
    setDatas({ ...datas, [e.target.name]: e.target.value });
  }
  const [dataesSubmit, sedataesSubmit] = useState(null);



  //from active
  const [disStyle, setdisStyle] = useState({
    name: "",
    disOff: true,
    disStyle:{
      "transation": "0.1s",
      "display": "none",
    }
    

  });

  const handleDisp = (e) => {

    setdisStyle({
      disOff: false,
      name: e.target.name,
      disStyle:{
        "display": "flex",
      }
      
    }
    );
    

  }

  const MyDoc = () => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.view}>
          <Image img style={styles.image} src={logo} />
          <Text style={styles.heading} >{disStyle.name} - {datas.assinNo}</Text>
          <View style={{ flexDirection: 'row', flexRow: '1', marginTop: '30px', marginLeft: '20px' }}>
            <Text style={styles.titleSection}>Title : </Text>
            <Text style={{ fontSize: '13px' }}>{datas.assinTitle}</Text>
          </View>
          <View style={styles.section} >
            <Text style={styles.titleSection}>Course Code : </Text>
            <Text style={{ fontSize: '13px' }}>{datas.courseCode}</Text>
          </View>
          <View style={{ marginTop: '50px', marginLeft: '20px' }}>
            <Text style={styles.titleSection}>Submitted To : </Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{datas.facultyName}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{datas.facultyDesignation}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Dept. of {datas.techerDept}, MU</Text>
          </View>
          <View style={{ marginTop: '50px', marginLeft: '20px' }}>
            <Text style={styles.titleSection}>Submitted By : </Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>{datas.name}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>ID No    : {datas.id}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Batch    : {datas.batch}th</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Section :  {datas.section}</Text>
            <Text style={{ fontSize: '13px', marginLeft: '85px', fontFamily: 'CalibriBold', }}>Dept. of {datas.yourDept}, MU</Text>
          </View>
          <View style={{ flexDirection: 'row', flexRow: '1', marginTop: '100px', marginLeft: '20px' }}>
            <Text style={styles.titleSection}>Date of Submission : </Text>
            <Text style={{ fontSize: '13px' }}>{dataesSubmit}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );


  let handleSubmit = (e) => {
    e.preventDefault();
  }


  const onchangedate = (e) => {
    let month = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"]
    let day = e.target.value;
    let arr = day.split("-");
    let ix = (arr[1] < 10) ? arr[1] % 10 : arr[1];
    let ans = month[ix - 1] + ", " + arr[2] + ", " + arr[0];
    sedataesSubmit(ans);
  }



  return (
    <>
      <div className={`choose-type ${disStyle.disOff? "d-grid":"d-none"} justify-content-center m-5`}>
        <h2 className='m-1 mb-3 text-center'>Choose Your Cover Type👇</h2>
        <a name="Assignment" onClick={handleDisp} className="btn btn-dark btn-lg m-2" href="/#" role="button">Assignment</a>
        <a name="Lab Report" onClick={handleDisp} className="btn btn-danger btn-lg m-2" href="/#" role="button">Lab Report</a>
      </div>
      <form style={disStyle.disStyle} onSubmit={handleSubmit} className="row">
        {/* Student Details */}
        <div className="cover-section col-md-6 ">
          <h4 className='text-center'>Student Details</h4>
          <div className="form-group my-3">
            <label htmlFor="name">Name*</label>
            <input type="text" className="form-control" onChange={handleOnchange} id="name" name="name" aria-describedby="emailHelp" placeholder="Enter Your Name" />
          </div>
          <div className="form-group my-3">
            <label htmlFor="id">ID*</label>
            <input type="text" className="form-control" onChange={handleOnchange} id="id" name="id" placeholder="Your ID*" />
          </div>
          <div className="form-group my-3">
            <label htmlFor="batch">Batch*</label>
            <input type="text" className="form-control" onChange={handleOnchange} id="batch" name="batch" placeholder="Your Batch" />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Section*</label>
            <input type="text" className="form-control" id="section" name="section" onChange={handleOnchange} placeholder="Your Section*" />
          </div>
          <div className="form-group my-3">
            <label htmlFor="yourDept">Your Department Name*</label>
            <input type="text" className="form-control" id="yourDept" name="yourDept" onChange={handleOnchange} placeholder="Type your department name*" />
          </div>
        </div>
        {/* Teacher Details */}
        <div className="cover-section col-md-6">
          <h4 className='text-center'>Teacher Details</h4>
          <div className="form-group my-3">
            <label htmlFor="exampleInputEmail1">Name*</label>
            <input type="text" className="form-control" id="facultyName" name="facultyName" onChange={handleOnchange} aria-describedby="emailHelp" placeholder="Enter Faculty Name*" />
          </div>
          <div className="form-group my-3">
            <label htmlFor="facultyDesignation">Designation*</label>
            <input type="text" className="form-control" id="facultyDesignation" name="facultyDesignation" onChange={handleOnchange} placeholder="Teacher Designation*" />
          </div>
          <div className="form-group my-3">
            <label htmlFor="techerDept">Department Name*</label>
            <input type="text" className="form-control" id="techerDept" name="techerDept" onChange={handleOnchange} placeholder="Type your department name*" />
          </div>
          <div className="form-group my-3">
            <label htmlFor="exampleInputPassword1">Universtiy Logo*</label>
            <select className="form-select" id='clicked' onClick={custom} defaultValue aria-label="Default select example">
              <option value='0' onClick={handleOnchange} >Select University</option>
              <option value="1" onClick={handleOnchange} >Metropolitan University</option>
              <option value="2" onClick={handleOnchange} >Custom</option>
            </select>
          </div>
          <div className="mb-3 d-none" id='uni_logo'>
            <label htmlFor="formFile" className="form-label">Upload University Logo</label>
            <input className="form-control" name='unilogo' type="file" id="formFile" />
          </div>
        </div>
        <div className="cover-section col-md-6">
          <h4 className='text-center'>{disStyle.name} Title Section</h4>
          <div className="form-group my-3">
            <label htmlFor="assinTitle">{disStyle.name} Title*</label>
            <input type="text" className="form-control" id="assinTitle" name="assinTitle" onChange={handleOnchange} aria-describedby="emailHelp" placeholder={`Enter ${disStyle.name} Title*`} />
          </div>


          <div className="form-group my-3">
            <label htmlFor="courseCode">Course Code*</label>
            <input type="text" className="form-control" id="courseCode" name="courseCode" onChange={handleOnchange} aria-describedby="emailHelp" placeholder="Enter Course Code*" />
          </div>
        </div>
        <div className="cover-section col-md-6">
          <h4 className='text-center'>Additional Info</h4>
          <div className="form-group my-3">
            <label htmlFor="assinNo">{disStyle.name} No*</label>
            <input type="number" className="form-control" id="assinNo" name="assinNo" onChange={handleOnchange} aria-describedby="emailHelp" placeholder={`Enter ${disStyle.name} No*`} />
          </div>
          <div className="form-group my-3">
            <label htmlFor="assinDate">Submission Date*</label>
            <input type="date" className="form-control" id="assinDate" name="assinDate" onChange={onchangedate} aria-describedby="emailHelp" placeholder="Enter The Date*" />
          </div>
          <button type="submit" className={`btn btn-primary ${((datas.name && datas.id && datas.batch && datas.section && datas.facultyName && datas.facultyDesignation && datas.yourDept && datas.techerDept && datas.assinTitle && datas.courseCode && datas.assinNo && dataesSubmit) ? " " : " disabled")}`}>

            <PDFDownloadLink document={<MyDoc />} fileName={`${datas.id}_${datas.name}_EC.pdf`}>
              {(() => {
                if ((datas.name && datas.id && datas.batch && datas.section && datas.facultyName && datas.facultyDesignation && datas.yourDept && datas.techerDept && datas.assinTitle && datas.courseCode && datas.assinNo && dataesSubmit)) {
                  return ({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now! 😉')
                } else {
                  return "Put Values 🙂"
                }
              })()}

            </PDFDownloadLink>
          </button>

        </div>
      </form>
    </>
  )
}



