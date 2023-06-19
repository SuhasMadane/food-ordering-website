import { useRef, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [user, setUser] = useState({ email: "", npassword: "" });
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let handleEmailAction = (e) => {
    let newUser = { ...user, email: e.target.value };
    setUser(newUser);
  };
  let handlePassAction = (e) => {
    let newUser = { ...user, npassword: e.target.value };
    setUser(newUser);
  };
  let loginUser = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }
      let url = `http://localhost:4000/findUser?email=${user.email}&npassword=${user.npassword}`;
      let res = await fetch(url);

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }
      localStorage.setItem("loginStatus", "true");
      navigate("/home", { replace: true });
    } catch (error) {
      alert(error.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };
  return (
    <div style={{ backgroundColor: "gold" }}>
      <Nav />
      <section>
        <div className="container">
          <div className="row justify-content-center align-items-center ">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div
                      className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                      style={{ marginTop: "30px" }}
                    >
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Login
                      </p>

                      <form
                        name="myForm"
                        className=" needs-validation mx-1 mx-md-4"
                        onSubmit="return validateForm()"
                        method="post"
                        ref={formRef}
                      >
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              className="form-control"
                              value={user.email}
                              onChange={handleEmailAction}
                              placeholder="Enter Email"
                              pattern="[a-zA-Z\s.]+@[a-zA-Z]+\.[a-zA-Z]+"
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              User Email
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4c"
                              className="form-control"
                              value={user.npassword}
                              onChange={handlePassAction}
                              placeholder="Enter password"
                              required
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        <p className="d-flex flex-row justify-content-center mb-4">
                          <a
                            href="resetPassword.html"
                            id="forgetpswrd"
                            className="d-flex flex-row align-items-center"
                            style={{ color: "black" }}
                          >
                            Forgot Password ?
                          </a>
                        </p>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4 border-primary">
                          <input
                            type="button"
                            value="Login"
                            className="w-100 btn btn-lg btn-secondary"
                            onClick={loginUser}
                          />
                        </div>
                      </form>
                      <p className="d-flex flex-row justify-content-center mb-4">
                        Not a member?
                        <a href="Signup" style={{ color: "black" }}>
                          {" "}
                          &nbsp;Sign Up
                        </a>
                      </p>
                    </div>
                    <div className="col-md-10 col-lg-6 col--7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="images/login1.jpg"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;
