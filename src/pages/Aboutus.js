import Navmain from "./Navmain";
import "./Aboutus.css";
import Footer from "./Footer";
import Nav from "./Nav";

function Aboutus() {
  return (
    <div style={{ backgroundColor: "gold" }}>
      <Nav />
      <h1 className="text-dark d-flex justify-content-center">Our Team</h1>
      <div className="row ms-1" style={{ width: "97%" }}>
        <div className="col-sm-12 d-inline ms-0 mb-4 p-md-2 justify-content-between">
          <div
            className="card d-inline-block col-sm-8 ms-5 me-3 mb-3 justify-content-between"
            style={{ width: "20rem" }}
          >
            <img
              src="images/sagar.jpg"
              className="card-img-top"
              alt="Maximum Order"
            />
            <div className="card-body">
              <h2 className="card-title">Sagar Verma</h2>
              <p className="title">CEO & Co-Founder</p>
              <p className="card-text">
                Sagar Verma has a deep understanding of website and application.
                He has played a pivotal role in the deployement of the website
                so user and smoothly intract with merchants, shaping the.
              </p>
              <p>sagarverma1702@gmail.com</p>
            </div>
          </div>
          <div
            className="card d-inline-block col-sm-8 ms-5 me-3 mb-3 justify-content-"
            style={{ width: "20rem" }}
          >
            <img
              src="images/suhas.jpg"
              className="card-img-top"
              alt="Maximum Order"
            />
            <div className="card-body">
              <h2 className="card-title">Suhas Madane</h2>
              <p className="title">Founder</p>
              <p className="card-text">
                Suhas Madane is the visionary leader and driving force behind
                our company. With a passion for industry, He has built a
                successful organization that strives to deliver the food in a
                commited time and reasonable price.
              </p>
              <p>madanesuhas9@gmail.com</p>
            </div>
          </div>
          <div
            className="card d-inline-block col-sm-12 ms-5 mb-3"
            style={{ width: "20rem" }}
          >
            <img
              src="images/pooja.jpg"
              className="card-img-top"
              alt="Best Customer Service"
            />
            <div className="card-body">
              <h2 className="card-title">Pooja Kadam</h2>
              <p className="title">Founder</p>
              <p className="card-text">
                As a founder, Pooja Kadam brings a unique blend of/z innovation,
                strategic thinking, and relentless determination. She possesses
                a track record of successes and is known for leadership traits,
                such as being.
              </p>
              <p>kadampooja683@gmail.com</p>
            </div>
          </div>
        </div>
        <hr />

        <div
          className="row pb-4"
          style={{ marginTop: "30xp", fontWeight: "500" }}
        >
          <div
            className="col-sm-12 d-inline ms-4 mb-4"
            style={{ width: "97%" }}
          >
            <h1 className="text-dark">Objective</h1>
            <br />
            <div className="col-sm-12">
              <p>
                1. Convenient Food Ordering: The primary objective of a food
                delivering app is to provide users with a convenient and
                user-friendly platform to order food from a variety of
                restaurants or food establishments. The app aims to simplify the
                process of browsing menus, selecting dishes, customizing orders,
                and placing them with just a few taps on a smartphone.
              </p>
            </div>
            <div className="col-sm-12">
              <p>
                2. Efficient Delivery System: The app focuses on establishing an
                efficient and reliable delivery system to ensure that customers
                receive their orders in a timely manner. This involves
                optimizing the logistics of order dispatch, assigning delivery
                personnel, and tracking orders in real-time to provide accurate
                estimated delivery times.
              </p>
            </div>
            <div className="col-sm-12">
              <p>
                3. Partner Support and Revenue Generation: The app may also
                focus on supporting partner restaurants or food vendors by
                providing them with a reliable platform to receive and manage
                orders efficiently. Additionally, the app generates revenue
                through commission fees, advertising, or subscription models,
                creating a mutually beneficial relationship with its partners.
              </p>
            </div>
            <div className="col-sm-12">
              <p>
                4. Continuous Improvement: Another objective of food delivering
                apps is to gather user feedback and data to continuously improve
                the app's functionality, features, and overall service. Regular
                updates and enhancements are made to address user needs,
                optimize performance, and stay competitive in the market.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default Aboutus;
