import axios from "axios";
import { useEffect, useState } from "react";
import NewsCard from "../news-card/NewsCard.jsx";

const Home = () => {
  const [countryCode, setCountryCode] = useState("eg");
  const [newsList, setNewsList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getNews = async (countryCode) => {
    setIsLoading(true);
    const res = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=934495b9b5274290821ea9a99800a712`,
    );
    setIsLoading(false);
    setNewsList(res.data.articles);
  };
  useEffect(() => {
    getNews(countryCode);
  }, [countryCode]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="navbar-collapse collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-lg-0 mb-2 me-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li onClick={() => setCountryCode("eg")}>
                    <a className="dropdown-item" href="#">
                      Egypt
                    </a>
                  </li>
                  <li onClick={() => setCountryCode("us")}>
                    <a className="dropdown-item" href="#">
                      United State
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li onClick={() => setCountryCode("ae")}>
                    <a className="dropdown-item" href="#">
                      Saudi Arabia
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled">Disabled</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      {isLoading ? (
        <>
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div class="row">
            {/* <div class="col-sm-6">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">Special title treatment</h5>
                  <p class="card-text">
                    With supporting text below as a natural lead-in to
                    additional content.
                  </p>
                  <a href="#" class="btn btn-primary">
                    Go somewhere
                  </a>
                </div>
              </div>
            </div> */}

            {newsList.map((item, i) => {
              return <NewsCard news={item} />;
            })}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
