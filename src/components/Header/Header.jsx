const Header = () => {
  return(
    <>
    <div className="d-flex justify-space-between align-items-center">
     <h2>Start Bootstrap</h2>
     <ul className="list-style-none px-2">
        <li>Features</li>
        <li>Download</li>
     </ul>
     <button type="button" class="btn btn-primary">Send <Feedback></Feedback></button>
</div>
    </>
  );  

};

export default Header;