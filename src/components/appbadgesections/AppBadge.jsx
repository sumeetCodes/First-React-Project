

import DownloadStoreImg from "../DownloadStore/DownloadStoreimg";
import "./appbadge.css"

const AppBadge = () => {
    return(

        <>
{/* App BADGE */}

        <section className="bg-gradient-primary-to-secondary text-center">
        <div className="container-fluid px-5 py-3">
        <div className='row gx-5 justify-content-center'>
                        <div class="mt-5 w-75 badge_heading text-white mb-4">
                           Get the app now!
                           <div className="mt-3">
                         <DownloadStoreImg />
                           </div>
                           
                           </div>
                    </div>
        </div>
        </section>

        </>

    );
};

export default AppBadge;

