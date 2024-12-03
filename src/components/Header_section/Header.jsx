
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="sticky-top bg-white py-2 d-flex justify-content-around align-items-center z-2">
                <h2 className="fw-bold fs-4">Start Bootstrap</h2>
                <ul className="nav">
                    <li className="nav-item px-4 nav_item_hover">Features</li>
                    <li className="nav-item nav_item_hover">Download</li>
                </ul>
                <button type="button" className="btn btn-primary rounded-pill mt-1">
                    <i className="bi bi-chat-dots-fill px-2"></i>Send Feedback
                </button>
            </div>
        </>
    );
};

export default Header;
