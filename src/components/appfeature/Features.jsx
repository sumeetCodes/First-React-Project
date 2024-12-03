

import './features.css'
import Mobileimgs from './MobileImages/Mobileimage.js';


const Features = () => {
  return (
    <>

      <div className="container mt-5">
        <div className="row">
          <div className="d-flex align-items-center justify-content-between flex-wrap">

            {/* left side */}
            <div className="col-lg-5">
              <Mobileimgs />
            </div>

            {/* right side */}
            <div className="col-lg-7">
              <div className="d-flex justify-content-between align-items-center flex-wrap">

                {/* top side */}
                <div className="d-flex justify-content-between align-items-center flex-wrap">

                  {/* first feature */}
                  <div className="w-50 text-center mb-3">
                    <i class="bi-phone text-gradient gradient_color mb-3 fs-1 d-block"></i>
                    <h3 className="fw-bold">Device Mockups</h3>
                    <p>Ready to use HTML/CSS device mockups, no Photoshop required!</p>
                  </div>

                  {/* second feature */}
                  <div className="w-50 text-center mb-3">
                  <i class="bi bi-camera text-gradient mb-3 fs-1 d-block gradient_color"></i>
                    <h3 className="fw-bold">Flexible Use</h3>
                    <p>Put an image, video, animation, or anything else in the screen!</p>
                  </div>

                </div>

                {/* below side */}
                <div className="d-flex justify-content-between align-items-center flex-wrap">

                  {/* third feature */}
                  <div className="w-50 text-center mb-3">
                  <i class="bi bi-gift text-gradient mb-3 fs-1 d-block"></i>
                    <h3 className="fw-bold">Free to Use</h3>
                    <p>As always, this theme is free to download and use for any purpose!</p>
                  </div>

                  {/* fourth feature */}
                  <div className="w-50 text-center mb-3">
                  <i class="bi bi-patch-check text-gradient mb-3 fs-1 d-block"></i>
                    <h3 className="fw-bold">Open Source</h3>
                    <p>Since this theme is MIT licensed, you can use it commercially!</p>
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
