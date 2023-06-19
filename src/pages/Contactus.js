import { useRef, useState } from "react";
import Footer from "./Footer";
import Nav from "./Nav";
import Navmain from "./Navmain";

function Contactus() {
  let formRef = useRef();
  let [contactusdata, setContactUsData] = useState({
    name: "",
    email: "",
    msg: "",
  });

  let handleNameAction = (e) => {
    let newcontactusdata = { ...contactusdata, name: e.target.value };
    setContactUsData(newcontactusdata);
  };
  let handleEmailAction = (e) => {
    let newcontactusdata = { ...contactusdata, email: e.target.value };
    setContactUsData(newcontactusdata);
  };
  let handleMsgAction = (e) => {
    let newcontactusdata = { ...contactusdata, msg: e.target.value };
    setContactUsData(newcontactusdata);
  };
  let addData = () => {
    formRef.current.classList.add("was-validated");
    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }
    let uri = `http://localhost:4000/addContactUsData?name=${contactusdata.name}&email=${contactusdata.email}&msg=${contactusdata.msg}`;

    let res = fetch(uri);
    alert(
      "Thank you! We've received your message and will respond within 24 hours"
    );
    let newcontactusdata = { name: "", email: "", msg: "" };
    setContactUsData(newcontactusdata);
    formRef.current.classList.remove("was-validated");
  };

  return (
    <div
      style={{
        backgroundColor: "gold",
      }}
    >
      <Nav />
      <section style={{ backgroundColor: "gold" }}>
        <div className="container" style={{ backgroundColor: "gold" }}>
          <div className="row">
            <div className="col-lg-12 col-xl-11">
              <div
                className="card text-black mb-4"
                style={{ borderRadius: "25px" }}
              >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div
                      className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1"
                      style={{ marginTop: "10px" }}
                    >
                      <p className="text-center h1 fw-bold mb-0 mx-1 mx-md-4 mt-4">
                        Contact us
                      </p>

                      <form
                        name="myForm"
                        className="mx-1 mx-md-4"
                        onsubmit="return validateForm()"
                        method="post"
                        ref={formRef}
                      >
                        <div className="d-flex flex-row  mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label for="form_name">Name *</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="Please enter your name"
                              required="required"
                              data-error="Name is required."
                              value={contactusdata.name}
                              onChange={handleNameAction}
                            />
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label for="form_email">Email *</label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control"
                              placeholder="Please enter your email"
                              required="required"
                              data-error="Valid email is required."
                              value={contactusdata.email}
                              onChange={handleEmailAction}
                            />
                          </div>
                        </div>

                        {/* <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label for="form_need">
                              Please specify your need *
                            </label>
                            <select
                              id="form_need"
                              name="need"
                              className="form-control"
                              required="required"
                              data-error="Please specify your need."
                            >
                              <option value="" selected disabled>
                                --Select Your Issue--
                              </option>
                              <option>Request Invoice for order</option>
                              <option>Request order status</option>
                              <option>Haven't received cashback yet</option>
                              <option>Other</option>
                            </select>
                          </div>
                        </div> */}

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <label for="form_message">Message *</label>
                            <textarea
                              id="form_message"
                              name="message"
                              className="form-control"
                              placeholder="Write your message here."
                              rows="4"
                              required="required"
                              data-error="Please, leave us a message."
                              value={contactusdata.msg}
                              onChange={handleMsgAction}
                            ></textarea>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button
                            type="submit"
                            className="btn btn-outline-success btn-lg"
                            onClick={addData}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-7 d-flex align-items-center order-1 order-lg-2 mt-0">
                      <img
                        src="images/contactus.png"
                        className="img-fluid"
                        alt="Sample image"
                        sty
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
export default Contactus;
