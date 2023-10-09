import ticketImg from "../../assets/images/ticket-image-1.jpg";
const Ticket = () => {
  return (
    <section id="ticket" className="section ticket">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ml-md-auto text-center">
            <h2 className="font-alt heading">Get the Ticket</h2>
          </div>
          <div className="offset-lg-2 col-lg-8 col-md-12 col-12">
            <div className="row">
              <div className="col-12 col-md-4">
                <div className="ticket-img">
                  <img src={ticketImg} className="img-fluid" alt="" />
                  <div className="ticket-inner text-center">
                    <h2>Single Entry</h2>
                    <h5>$99.00</h5>
                    <ul>
                      <li>Single Entry</li>
                      <li>only one person</li>
                      <li>2 hours Limitation</li>
                    </ul>
                    <div className="btn-ticket text-center">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal2"
                      >
                        Get Ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="ticket-img">
                  <img src={ticketImg} className="img-fluid" alt="" />
                  <div className="ticket-inner text-center">
                    <h2>Couple Entry</h2>
                    <h5>$199.00</h5>
                    <ul>
                      <li>Single Entry</li>
                      <li>only one person</li>
                      <li>2 hours Limitation</li>
                    </ul>
                    <div className="btn-ticket text-center">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal2"
                      >
                        Get Ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="ticket-img gallery-1">
                  <img src={ticketImg} className="img-fluid" alt="" />
                  <div className="ticket-inner text-center">
                    <h2>Combine Entry</h2>
                    <h5>$299.00</h5>
                    <ul>
                      <li>Single Entry</li>
                      <li>only one person</li>
                      <li>2 hours Limitation</li>
                    </ul>
                    <div className="btn-ticket text-center">
                      <a
                        href="#"
                        data-toggle="modal"
                        data-target="#exampleModal2"
                      >
                        Get Ticket
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ticket;
