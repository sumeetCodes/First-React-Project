import './Herosection.css';
import DownloadStoreImg from "../DownloadStore/DownloadStoreimg.jsx"
import Mobileimgs from '../MobileImages/Mobileimage.jsx';


const Herosection = () => {
    return (
        <>
            <div className="container mt-5 mb-5">
                <div className="row">

                    {/* Left side */}
                    <div className="col-sm-12 col-lg-7 col-md-7 col-12 mb-3">
                        <h1 className="fw-bold f-15">Showcase your app beautifully.</h1>
                        <p className="text-secondary w-75">Launch your mobile app landing page faster with this free, open source theme from Start Bootstrap!</p>
                        <DownloadStoreImg />
                    </div>

                    {/* right side */}

                    <div className="col-12 col-lg-5 col-sm-12 col-md-5">
                        <Mobileimgs />
                    </div>

                </div>
            </div>

        </>
    );
}

export default Herosection;