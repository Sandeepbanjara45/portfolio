import React from 'react'

const Contact = () => {
  return (
    <>
       <section className="context py-5" id="contact">
      <div className="container">
        <div className="text-center my-5">
          <h1>Feel free <span className="text-primary">to Contact</span></h1>
          <hr className="w-25 m-auto"/>
        </div>
        <div className="row">

        <div className="col-sm-12 col-md-6 col-lg-6 col-12 m-auto text-start" data-aos="fade-up-right" data-aos-offset="200">
            <img src="https://cdn.pixabay.com/photo/2015/09/13/10/08/success-937892_640.jpg" className="img-fluid img-thumbnail sam"/>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6 col-12" data-aos="fade-up-left" data-aos-offset="200">
            <form className="row g-3">
              <div className="col-md-6">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4"/>
              </div>
              <div className="col-md-6">
                <label htmlFor="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4"/>
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
              </div>
              
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity"/>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip"/>
              </div>
              <div className="col-12">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" id="gridCheck"/>
                  <label className="form-check-label" htmlFor="gridCheck">
                    Check me out
                  </label>
                </div>
              </div>
              <div className="col-12">
                <button type="submit" className="btn btn-info">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div class="container-fluid bg-dark text-center text-white p-2 fs-4">
      Developed by Sandeep Banjara
    </div>
    </>
  )
}

export default Contact
