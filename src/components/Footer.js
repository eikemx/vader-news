const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-title">
          <h3> Welcome to the Dark Side.</h3>
          {/* <img
            src="src/bd1.jpg"
            alt="Image of Darth Vader handing you a cookie"
          /> */}
        </div>
        <div>
          <ul className="footer-list">
            <li> <a href="#">Guidelines |</a></li>
            <li><a href="#">FAQ |</a></li>
            <li><a href="#">Lists |</a></li>
            <li>
              <a href={"https://hn.algolia.com/api"}>API |</a>
            </li>
            <li><a href="#">Death Star Job Applications |</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
