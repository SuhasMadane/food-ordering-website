import { useRef, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [user, setUser] = useState({
    name: "",
    mobileno: "",
    gender: "",
    email: "",
    npassword: "",
    cpassword: "",
  });
  let handleNameAction = (e) => {
    let newUser = { ...user, name: e.target.value };
    setUser(newUser);
  };
  let handleMobileNoAction = (e) => {
    let newUser = { ...user, mobileno: e.target.value };
    setUser(newUser);
  };
  let handleGenderAction = (e) => {
    let newUser = { ...user, gender: e.target.value };
    setUser(newUser);
  };
  let handleEmailAction = (e) => {
    let newUser = { ...user, email: e.target.value };
    setUser(newUser);
  };
  let handlePasswordAction = (e) => {
    let newUser = { ...user, npassword: e.target.value };
    setUser(newUser);
  };
  let handleConfirmPasswordAction = (e) => {
    let newUser = { ...user, cpassword: e.target.value };
    setUser(newUser);
  };

  let signUpAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }
      // let uri = `http://localhost:4000/adduserrecord?name=${user.name}&&mobileno=${user.mobileno}&&gender=${user.gender}&&email=${user.email}&&npassword=${user.npassword}&&cpassword=${user.cpassword}`;

      let uri = `http://localhost:4000/adduserrecord?name=${user.name}&mobileno=${user.mobileno}&gender=${user.gender}&email=${user.email}&npassword=${user.npassword}&cpassword=${user.cpassword}`;
      let res = await fetch(uri);
      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }

      let newuser = {
        name: "",
        mobileno: "",
        gender: "",
        email: "",
        npassword: "",
        cpassword: "",
      };
      setUser(newuser);
      formRef.current.classList.remove("was-validated");

      alert("Congratulations,your account has been successfully created");
      navigate("/Login", { replace: true });
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div style={{ backgroundColor: "gold" }}>
      <Nav />
      <section className="min-vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black mb-4"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                        Sign up
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
                              placeholder="Enter username"
                              pattern="[A-Za-z]{1,32}"
                              value={user.name}
                              onChange={handleNameAction}
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              Your Name
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="tel"
                              id="form3Example1c"
                              className="form-control"
                              value={user.mobileno}
                              onChange={handleMobileNoAction}
                              placeholder="Enter mobile"
                              pattern="[0-9]{10}"
                              required
                            />
                            <label className="form-label" for="form3Example1c">
                              Mobile Number
                            </label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0 d-flex">
                            <div className="form-check me-4">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                                value="Male"
                                onChange={handleGenderAction}
                                required
                              />
                              <label
                                className="form-check-label"
                                for="flexRadioDefault1"
                              >
                                Male
                              </label>
                            </div>
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                value="Female"
                                onChange={handleGenderAction}
                                required
                              />
                              <label
                                className="form-check-label"
                                for="flexRadioDefault2"
                              >
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                        <label
                          className="form-label mb-4 ms-3"
                          for="form3Example1c"
                        >
                          Gender
                        </label>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              id="form3Example3c"
                              className="form-control"
                              value={user.email}
                              onChange={handleEmailAction}
                              placeholder="Enter Email"
                              pattern="[a-zA-Z\s.]+@[a-zA-Z]+\.[a-zA-Z]+"
                              required
                            />
                            <label className="form-label" for="form3Example3c">
                              Your Email
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
                              onChange={handlePasswordAction}
                              placeholder="Enter password"
                              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,16}$"
                              required
                            />
                            <label className="form-label" for="form3Example4c">
                              Password
                            </label>
                          </div>
                        </div>

                        {/* <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              id="form3Example4cd"
                              className="form-control"
                              value={user.cpassword}
                              onChange={handleConfirmPasswordAction}
                            />
                            <label className="form-label" for="form3Example4cd">
                              Repeat your password
                            </label>
                          </div>
                        </div> */}

                        <div className="form-check d-flex justify-content-center mb-5">
                          <input
                            className="form-check-input me-2"
                            type="checkbox"
                            value=""
                            id="form2Example3c"
                            required
                          />
                          <label
                            className="form-check-label"
                            for="form2Example3"
                          >
                            I agree all statements in{" "}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <input
                            type="button"
                            value="Sign up"
                            className="w-100 btn btn-lg btn-secondary"
                            onClick={signUpAction}
                          />
                        </div>
                      </form>

                      <p className="d-flex flex-row justify-content-center mb-4">
                        Already registered?
                        <a href="Login" style={{ color: "black" }}>
                          &nbsp; Login
                        </a>
                      </p>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="images/deliveryBoy.avif"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
export default Signup;
