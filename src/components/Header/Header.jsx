const Header = () => {
    return (
<>
<div className="sticky-top bg-white py-2 d-flex justify-content-around align-items-center z-2">
    <h2 className="fw-bold fs-4">Start Bootstrap</h2>
    <ul class="nav">
  <li class="nav-item px-4">Features</li>
  <li class="nav-item">Download</li>
  </ul>
<button type="button" class="btn btn-primary rounded-pill mt-1"><i class="bi bi-chat-dots-fill px-2"></i>Send Feedback</button>
</div>

</>

    ); 
};

export default Header;