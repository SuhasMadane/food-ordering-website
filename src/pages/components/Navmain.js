function Navmain() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-transparent" style={{ backgroundColor: "grey" ,height:"70px"}}>
        <div className="container-fluid ">
          <a className="navbar-brand" href="#">
            <img
              src="./images/logo.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-center "
            />
            <span style={{ fontSize: "30px", fontWeight: "500" }}>
              Xpress Xpert
            </span>
          </a>
          <div
            className="collapse navbar-collapse row"
            id="navbarSupportedContent"
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
              }}
            >
              {/* <div style={{ display: "flex", marginRight: "10px" }}>
                <button
                  id="butn"
                  type="button"
                  className="btn btn-light btn-sm"
                  style={{ marginRight: "20px" }}
                  onClick="location.href = '';"
                >
                  Login
                </button>
                <button
                  id="butn"
                  type="button"
                  className="btn btn-dark btn-sm"
                  onClick="location.href='newSignup.html'"
                >
                  SignUp
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navmain;
