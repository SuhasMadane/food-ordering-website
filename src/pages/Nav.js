function Nav() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-transparent "
        style={{ backgroundColor: "gray" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="front.html">
            <img
              src="images/logo.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-center "
            />
            <span style={{ fontSize: "30px", fontWeight: "500" }}>
              Xpress Xpert
            </span>
          </a>
        </div>
      </nav>
    </div>
  );
}
export default Nav;
