import headerImg from "../../assets/images/header-logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      {/* HEADER */}
      <header>
        <nav
          id="nav-part"
          className="navbar header-nav other-nav sticky-top navbar-expand-md"
        >
          <div className="menu-nav container">
            <a className="navbar-brand" href="#">
              <img src={headerImg} className="img-fluid" alt="logo" />
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span />
              <span />
              <span />
            </button>
            <div
              className="navbar-collapse collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav m-auto">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link " to="about">
                    About Party
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="artist">
                    Artist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="gallery">
                    Gallery
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="testimonial">
                    Testimonial
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="contact">
                    contact
                  </Link>
                </li>
              </ul>
              <ul className="navbar-right nav-sign">
                <li>
                  <Link
                    className="nav-link"
                    to="ticket"
                    data-toggle="modal"
                    data-target="#exampleModal2"
                  >
                    Get a Ticket
                  </Link>
                </li>
              </ul>
            </div>
            {/* Sound */}
            {/* <audio
              id="jingle_bell"
              src="music/creepy-background-daniel_simon.mp3"
              hidden
              controls
              autoPlay
              loop
            >
              <p>Audio is not supported in your browser.</p>
            </audio>
            <div className="switch">
              <div className="sound_toggle_btn">
                <span className="fa fa-pause" />
              </div>
            </div> */}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
