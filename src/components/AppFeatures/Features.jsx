import Mobileimg from "../MobileImg/Mobileimg";

const Features = () => {
    return(
<>

  <div className="container mt-5 border border-success">
  <div className="row">
    <div className="border border-primary w-100">

       {/* left side */}
      <div className="col-lg-5">
        <Mobileimg />
      </div>

      {/* right side */}
      <div className="col-lg-7">
        <div className="d-flex flex-wrap">

          {/* top side */}
          <div>

            {/* first feature */}
            <div className="border border-danger">
              <h3 className="fw-bold">Device Mockups</h3>
              <p>Ready to use HTML/CSS device mockups, no Photoshop required!</p>
            </div>

            {/* second feature */}
            <div className="border border-danger">
              <h3 className="fw-bold">Flexible Use</h3>
              <p>Put an image, video, animation, or anything else in the screen!</p>
            </div>

          </div>

          {/* below side */}
          <div>

            {/* third feature */}
            <div className="border border-danger">
              <h3 className="fw-bold">Device Mockups</h3>
              <p>Ready to use HTML/CSS device mockups, no Photoshop required!</p>
            </div>

            {/* fourth feature */}
            <div className="border border-danger">
              <h3 className="fw-bold">Flexible Use</h3>
              <p>Put an image, video, animation, or anything else in the screen!</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  </div>
</div>



</>

    );
};


export default Features;
