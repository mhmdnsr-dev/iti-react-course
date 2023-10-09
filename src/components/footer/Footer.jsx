const Footer = () => {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="footer_text">
              <p>
                Copyright © {new Date().getFullYear()}. All rights reserved by
                Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
