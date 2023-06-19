function Footer() {
  return (
    <>
      <hr />

      <div className="row" style={{ marginTop: "40px" }}>
        <div className="col-sm-1"></div>
        <div className="col-sm-3">
          <a href="#" style={{ color: "black" }}>
            Privacy Policy
          </a>
        </div>
        <div className="col-sm-3 font-weight:500">
          <a href="aboutus.html" style={{ color: "black" }}>
            About Us
          </a>
        </div>
        <div className="col-sm-3 font-weight:500">
          <a href="contactUs.html" style={{ color: "black" }}>
            Contact Us
          </a>
        </div>
        <div className="col-sm-2 mb-4  font-weight:500">
          <span>&#169;2023 Xpress Xpert Inc.</span>
        </div>
      </div>
    </>
  );
}
export default Footer;
