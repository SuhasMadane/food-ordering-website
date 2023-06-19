import Footer from "./Footer";
import Navmain from "./Navmain";
import "./front.css";

function Home() {
  return (
    <div style={{ backgroundColor: "gold" }}>
      <Navmain />
      <div className="container ms-4 ">
        <span id="bigName" className="text-dark" style={{ fontWeight: "500" }}>
          <h1>Order food to your door</h1>
        </span>
        <br />
        <div className="form-outline w-50 d-flex">
          <input
            role="text"
            id="search"
            type="text"
            placeholder="Enter delivery location"
            className="form-control input-sm"
            style={{ font: "100px", height: "55px", border: "0" }}
          />

          {/*<span><button
        className="btn btn-dark ms-3 "
          type="submit"
          id="findFood"
          style={{
            border-radius: 7px;
            color: white;">
          <b>Find Meal for me</b></button></span>*/}
          <span>
            <button type="button" className="btn btn-dark ms-3 w-100 p-2 h-100">
              Find Food
            </button>
          </span>
        </div>
        <br />
        <a
          href="signin.html"
          id="signin"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
            fontWeight: "500",
          }}
          className="ms-0 mb-5"
        >
          SignIn
        </a>
        <span style={{ color: "black", fontSize: "15px", fontWeight: "500" }}>
          for your recent Address
        </span>
      </div>

      <div style={{ height: "300px" }}></div>

      {/* <!-- review section start --> */}

      <div className="row ms-4" style={{ width: "97%" }}>
        <div className="col-sm-12 d-inline ms-3 mb-4">
          <h2>Awards</h2>
          <div
            className="card d-inline-block me-5 mb-4"
            style={{ width: "20rem", marginTop: "20px" }}
          >
            <img
              src="images/award0.jpg"
              className="card-img-top"
              alt="Fastest Delivery Award"
            />
            <div className="card-body">
              <h5 className="card-title">Fastest Delivery Award</h5>
              <p className="card-text">
                Recognizing the fastest delivery app that goes above and beyond,
                ensuring lightning-fast delivery times.
              </p>
            </div>
          </div>
          <div
            className="card d-inline-block me-5 mb-4"
            style={{ width: "20rem" }}
          >
            <img
              src="images/award2.jpg"
              className="card-img-top"
              alt="Maximum Order"
            />
            <div className="card-body">
              <h5 className="card-title">Maximum Order Award</h5>
              <p className="card-text">
                Maximum Order Award: Excelling in handling high-volume orders
                with precision and excellence.
              </p>
            </div>
          </div>
          <div
            className="card d-inline-block me-5 mb-4"
            style={{ width: "20rem" }}
          >
            <img
              src="images/award3.jpeg"
              className="card-img-top"
              alt="Best Customer Service"
            />
            <div className="card-body">
              <h5 className="card-title">Best Customer Service Award</h5>
              <p className="card-text">
                Recognizing outstanding dedication to customer satisfaction and
                setting a new standard in exceptional service.
              </p>
            </div>
          </div>

          <div className="card d-inline-block mb-4" style={{ width: "20rem" }}>
            <img
              src="images/award1.jpg"
              className="card-img-top"
              alt="Fastest Growing Startup"
            />
            <div className="card-body">
              <h5 className="card-title">Fastest Growing Startup Award</h5>
              <p className="card-text">
                Maximum Order Award: Excelling in handling high-volume orders
                with precision and excellence.
              </p>
            </div>
          </div>
        </div>
        <hr />

        <div className="col-sm-12 d-inline-block ms-3 mb-4">
          <h2>Customer Reviews</h2>
          <div
            className="card d-inline-block ms-4 mb-4"
            style={{ width: "16rem", marginTop: "20px" }}
          >
            <img
              src="images/mukesh.jpg"
              className="card-img-top"
              alt="Mukesh Ambani"
            />
            <div className="card-body">
              <h5 className="card-title">Mukesh Ambani</h5>
              <p className="card-text">
                User-friendly website with easy navigation. Seamless ordering
                experience.
              </p>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>

          <div
            className="card d-inline-block ms-4 mb-4"
            style={{ width: "16rem" }}
          >
            <img
              src="images/elon1.jpg"
              className="card-img-top"
              alt="Elon Musk"
            />
            <div className="card-body">
              <h5 className="card-title">Elon Musk</h5>
              <p className="card-text">
                Outstanding food quality, fresh ingredients, and impressive
                presentation.
              </p>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>

          <div
            className="card d-inline-block ms-4 mb-4"
            style={{ width: "16rem" }}
          >
            <img
              src="images/ratan.jpg"
              className="card-img-top"
              alt="Ratan Tata"
            />
            <div className="card-body">
              <h5 className="card-title">Ratan Tata</h5>
              <p className="card-text">
                Transparent nutritional information, great for dietary
                restrictions.
              </p>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>

          <div
            className="card d-inline-block ms-4 mb-4"
            style={{ width: "16rem" }}
          >
            <img
              src="images/shirley1.jpg"
              className="card-img-top"
              alt="Shirley Setia"
            />
            <div className="card-body">
              <h5 className="card-title">Shirley Setia</h5>
              <p className="card-text">
                Impressed by the speedy delivery and fresh, hot food. Great
                service!
              </p>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
            </div>
          </div>

          <div
            className="card d-inline-block ms-4 mb-4"
            style={{ width: "16rem" }}
          >
            <img
              src="images/samantha.jpg"
              className="card-img-top"
              alt="Shirley Setia"
            />
            <div className="card-body">
              <h5 className="card-title">Samantha Prabhu</h5>
              <p className="card-text">
                Excellent customer service, prompt and professional responses.
              </p>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star checked"></span>
              <span className="fa fa-star"></span>
              <span className="fa fa-star"></span>
            </div>
          </div>
          <hr />
          <div className="ms-3 mb-4">
            <h2>Operational City</h2>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-sm-3">Amritsar</div>
              <div className="col-sm-3 font-weight:500">Chandigarh</div>
              <div className="col-sm-3 font-weight:500">Gurgaon</div>
              <div className="col-sm-3 font-weight:500">Mumbai</div>
            </div>
            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-sm-3">Ahmedabad</div>
              <div className="col-sm-3 font-weight:500">Chennai</div>
              <div className="col-sm-3 font-weight:500">Indore</div>
              <div className="col-sm-3 font-weight:500">Nagpur</div>
            </div>

            <div className="row" style={{ marginTop: "20px" }}>
              <div className="col-sm-3">Bangalore</div>
              <div className="col-sm-3 font-weight:500">Dehradhun</div>
              <div className="col-sm-3 font-weight:500">Jaipur</div>
              <div className="col-sm-3 font-weight:500">Pune</div>
            </div>

            <div className="row mb-4" style={{ marginTop: "20px" }}>
              <div className="col-sm-3">Chennai</div>
              <div className="col-sm-3 font-weight:500">Delhi</div>
              <div className="col-sm-3 font-weight:500">Kolkata</div>
              <div className="col-sm-3 font-weight:500">Udaipur</div>
            </div>

            <Footer />
            {/* <hr />

            <div className="row" style={{ marginTop: "40px" }}>
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
              <div className="col-sm-3 font-weight:500">
                <span>&#169;2023 Xpress Xpert Inc.</span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
