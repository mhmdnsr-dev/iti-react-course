import artistImg from "../../assets/images/artist-image.png";
const Artist = () => {
  return (
    <section id="artist" className="section artist">
      <div className="artist-part">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ml-md-auto text-center">
              <h2 className="font-alt heading">Our Halloween's Artist</h2>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 artist-img">
                  <img src={artistImg} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 artist-info">
                  <h2>DJ Remerson Huke</h2>
                  <h3>Lead DJ On Deadpoll</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6 artist-img">
                  <img src={artistImg} className="img-fluid" alt="" />
                </div>
                <div className="col-md-6 artist-info">
                  <h2>DJ Remerson Huke</h2>
                  <h3>Lead DJ On Deadpoll</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore.
                  </p>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artist;
