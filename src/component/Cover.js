import React, { useState } from 'react'
import { PDFDownloadLink,PDFViewer  } from '@react-pdf/renderer';
import MyDocument from './MyDocument';



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
                  <option value='0' onClick={(e) => { setUniOption(e.target.value) }} >Select University</option>
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

              <button type="submit" className="btn btn-primary"><PDFDownloadLink document={<MyDocument name={name}
                id={id}
                batch={batch}
                section={section}
                facultyName={facultyName}
                facultyDesignation={facultyDesignation}
                uniName={uniName}
                uniOption={uniOption}
                assinTitle={assinTitle}
                courseCode={courseCode}
                assinNo={assinNo}
                assinDate={assinDate} />} fileName={id+"rafs.pdf"} >Submit 
                <div className='d-none'><PDFViewer></PDFViewer></div>
              </PDFDownloadLink></button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}


