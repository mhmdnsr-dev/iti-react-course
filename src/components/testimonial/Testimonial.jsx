import importAll from "../../helper/importAll.js";

const gallery = importAll(
  require.context("../../assets/images", false, /feedback/),
);

const Testimonial = () => {
  return (
    <section className="section testimonial-section" id="testimonial">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ml-md-auto text-center">
            <h2 className="heading">Halloween testimonial</h2>
          </div>
          {gallery.map((img, i) => {
            return (
              <div key={i} className="col-md-6 testimonial-overlay">
                <div className="row">
                  <div className="col-lg-4 testimonial-img">
                    <img src={img} className="img-fluid" alt="" />
                  </div>
                  <div className="col-lg-8 testimonial-info">
                    <h2>Tukang Shihir</h2>
                    <h3>Man Eater</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
