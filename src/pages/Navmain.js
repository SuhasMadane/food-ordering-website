import { useNavigate } from "react-router-dom";

function Navmain() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-transparent">
        <div className="container-fluid">
          {/* <!-- <a className="navbar-brand" href="#">Navbar</a> --> */}
          <a className="navbar-brand" href="#">
            <img
              src="./images/logo.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-center"
            />
            <span style={{ fontSize: "30px", fontWeight: "500" }}>
              Xpress Xpert
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
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
              <div style={{ display: "flex", marginRight: "10px" }}>
                <button
                  id="butn"
                  type="button"
                  className="btn btn-light btn-sm"
                  style={{ marginRight: "20px" }}
                  onClick={() => {
                    navigate("/Login", { replace: true });
                  }}
                >
                  Login
                </button>
                <button
                  id="butn"
                  type="button"
                  className="btn btn-dark btn-sm"
                  onClick={() => {
                    navigate("/Signup", { replace: true });
                  }}
                >
                  SignUp
                </button>
              </div>
                  
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navmain;
