import React from 'react'

export default function Cover() {

let custom = ()=>{
  let x = document.getElementById('clicked').value;
  if (x===2){
      document.getElementById('uni_logo').classList.toggle('d-none');
  }

}

  return (
    <div className='row'>
      <form>
        <div className="row">
          {/* Student Details */}
          <div className="cover-section col-md-6 ">
            <h4 className='text-center'>Student Details</h4>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Name*</label>
              <input type="text" className="form-control" id="sName" aria-describedby="emailHelp" placeholder="Enter Your Name" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">ID*</label>
              <input type="text" className="form-control" id="sId" placeholder="Your ID*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Batch*</label>
              <input type="text" className="form-control" id="sBatch" placeholder="Your Batch" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Section*</label>
              <input type="text" className="form-control" id="sSection" placeholder="Your Section*" />
            </div>
          </div>
          {/* Teacher Details */}
          <div className="cover-section col-md-6">
            <h4 className='text-center'>Teacher Details</h4>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Name*</label>
              <input type="text" className="form-control" id="sName" aria-describedby="emailHelp" placeholder="Enter Your Name*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Designation*</label>
              <input type="text" className="form-control" id="designation" placeholder="Teacher Designation*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Universtiy Name*</label>
              <input type="text" className="form-control" id="tun" placeholder="Teacher University Name*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputPassword1">Universtiy Logo*</label>
              <select className="form-select" id='clicked' onClick={custom} defaultValue aria-label="Default select example">
                <option  value='0'>Select University</option>
                <option value="1">Metropolitan University</option>
                <option value="2">Custom</option>
              </select>
            </div>
            <div className="mb-3 d-none" id='uni_logo'>
              <label htmlFor="formFile" className="form-label">Upload University Logo</label>
              <input className="form-control"  name='unilogo' type="file" id="formFile" />
            </div>
          </div>
          <div className="cover-section col-md-6">
            <h4 className='text-center'>Title Section</h4>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Title*</label>
              <input type="text" className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter Title*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Course Code*</label>
              <input type="text" className="form-control" id="coursecode" aria-describedby="emailHelp" placeholder="Enter Course Code*" />
            </div>
          </div>
          <div className="cover-section col-md-6">
            <h4 className='text-center'>Additional Info</h4>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Assignment No*</label>
              <input type="number" className="form-control" id="asignmentNo" aria-describedby="emailHelp" placeholder="Enter Title*" />
            </div>
            <div className="form-group my-3">
              <label htmlFor="exampleInputEmail1">Submission Date*</label>
              <input type="date" className="form-control" id="submitionDate" aria-describedby="emailHelp" placeholder="Enter Course Code*" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>

    </div>
  )
}
