import importAll from "../../helper/importAll.js";

const gallery = importAll(
  require.context("../../assets/images", false, /gallery-i/),
);

const Gallery = () => {
  return (
    <section id="gallery" className="gallery section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ml-md-auto text-center">
            <h2 className="font-alt heading">Halloween Gallery</h2>
          </div>
          {gallery.map((img, i) => {
            return (
              <div key={i} className="col-12 col-md-3 gallery-padding">
                <div className="gallery-img">
                  <div className="gallery-overlay">
                    <img src={img} className="img-fluid" alt="" />
                    <div className="overlay">
                      <div className="gallery-icon">
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
                              <i className="fa fa-pinterest" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-behance" />
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-linkedin" />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h2>Vampire Sherk</h2>
                  <h5>Special Guest</h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
