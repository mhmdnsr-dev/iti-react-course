import banner from "../../assets/images/Banner.png";
const Home = () => {
  return (
    <>
      {/* HEADER */}
      <section id="home" className="home-banner pb-2">
        <div className="container">
          <div className="row full-screen ">
            <div className="col-md-7 banner-img d-none d-md-block">
              <img src={banner} className="img-fluid" alt="" />
            </div>
            <div className="col-12 col-md-5">
              <div className="home-text-center">
                <h2>31th octobar {new Date().getFullYear()}</h2>
                <h5 className="font-alt ban-txt">Halloween Party</h5>
                <p className="text-center">
                  Halloween or Hallowe'en (a contraction of All Hallows'
                  Evening) also known as Allhalloween, All Hallows' Eve or All
                  Saints' Eve is a celebration observed in a number of countries
                  on 31 October.
                </p>
                <div className="btn-bar text-center">
                  <a href="#">Explore More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
