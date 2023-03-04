import React from 'react'

export default function Header() {
  return (
    <>
      <div className="container m-3">
        <div className="row justify-content-center align-items-center g-2">
          <h3 className='dev-title m-5'>Developet By</h3>
          <div className="col-md-3">
            <img src='../deveimg.jpg' className="img-fluid rounded dev-img" alt="sdfa" />
          </div>
          <div className="col-md-5">
            <div className="row">
              <div className='dev-dtl m-2'>
                <p>MD.Emran Alam</p>
                <p>Developer of CoverMonkey</p>
                <p>Study Computer Science & Engeneering</p>
                <p>Metropolitan University, Sylhet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
