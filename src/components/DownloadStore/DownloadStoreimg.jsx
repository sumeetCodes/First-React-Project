import appStore from "../../imgs/app-store-badge.png";
import googlePlay from "../../imgs/google-play-badge.png";
// ../../imgs/app-store-badge.png path means: 
// .. (one level up) from the Herosection folder to the components folder,
// another .. (one more level up) to the src folder, where the imgs folder is located.

const DownloadStoreImg = () => {
    return (

        <>
            <img className="mt-2 me-1" src={appStore} alt="" />
            <img className="mt-2 ms-1" src={googlePlay} alt="" />

        </>

    );
};

export default DownloadStoreImg;