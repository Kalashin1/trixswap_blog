const links = ['Home', 'Post', 'About', "Categories"];

function Navbar() {
  return (
    <nav className="topnav navbar navbar-expand-lg navbar-light bg-white fixed-top">
      <div className="container">
        <a className="navbar-brand" href="./index.html"><strong>Mundana</strong></a>
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarColor02">
          <ul className="navbar-nav mr-auto d-flex align-items-center">
            {links.map(link => (
              <li className="nav-item">
                <a className="nav-link" href="./index.html">
                  {link}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ml-auto d-flex align-items-center">
            <li className="nav-item highlight">
              <a className="nav-link" href="https://www.wowthemes.net/mundana-free-html-bootstrap-template/">Get this Theme</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;