const Contact = () => {
  return (
    <section className="section invitation-section" id="invitation">
      <div className="invite container">
        <div className="row">
          <div className="col-md-12 ml-md-auto text-center">
            <h2 className="heading">Invite someone special</h2>
          </div>
          <div className="col-md-6">
            <form action="/action_page.php">
              <input
                type="text"
                placeholder="Guest Name"
                // onfocus="if(this.value  == 'Guest Name') { this.value = ''; } "
                // onblur="if(this.value == '') { this.value = 'Guest Name'; } "
              />
              <input
                type="tel"
                placeholder="Guest Mobile Number"
                // onfocus="if(this.value  == 'Guest Mobile Number') { this.value = ''; } "
                // onblur="if(this.value == '') { this.value = 'Guest Mobile Number'; } "
              />
              <br />
            </form>
          </div>
          <div className="col-md-6">
            <form action="/action_page.php">
              <input
                type="email"
                name="email"
                placeholder="Guest Email Address"
                // onfocus="if(this.value  == 'Guest Email Address') { this.value = ''; } "
                // onblur="if(this.value == '') { this.value = 'Guest Email Address'; } "
              />
              <select>
                <option value="Ticket Plan">Ticket Plan</option>
                <option value="Single Entry">Single Entry </option>
                <option value="Couple Entry">Couple Entry</option>
                <option value="Combine Entry">Combine Entry</option>
              </select>
              <br />
            </form>
          </div>
          <div className="col-md-12 ml-md-auto text-center">
            <div className="btn-bar text-center">
              <a href="#">Send Invitation</a>
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="section contact-section">
        <div className="container">
          <div className="row ">
            <div className="col-md-12 ml-md-auto text-center">
              <h2 className="heading">Signup For Newsletter</h2>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-md-12">
              <div className="col-md-12 text-center">
                <form action="#">
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your E-mail Address Here"
                      // onfocus="if(this.value  == 'Your E-mail Address Here') { this.value = ''; } "
                      // onblur="if(this.value == '') { this.value = 'Your E-mail Address Here'; } "
                    />
                    <span className="input-group-btn">
                      <a
                        href="#"
                        className="button btn-default"
                        data-toggle="modal"
                        data-target="#exampleModal5"
                      >
                        Subscribe
                      </a>
                    </span>
                  </div>
                </form>
                <div className="cont-icon">
                  <h6>Get Update</h6>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
