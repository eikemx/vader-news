const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-title">
          <h3> Welcome to the Dark Side</h3>
          {/* <img
            src="src/bd1.jpg"
            alt="Image of Darth Vader handing you a cookie"
          /> */}
        </div>
        <div>
          <ul className="footer-list">
            <a href="/guidelines">Guidelines |</a>
            <a href="/faq">FAQ |</a>
            <a href="/lists">Lists |</a>
              <a href={"https://hn.algolia.com/api"}>API |</a>
            <a href="/job">Death Star Job Applications</a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
