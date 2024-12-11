import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="pt-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row m-3" id="supportInner">
        <div className="col-6 py-3">
          <h1 className="fs-4" style={{fontWeight:"400"}}>
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg. how do I activate F&O, Why is my oreder is geting rejected..."
          />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a><br /><br />
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col-6 p-5">
          <h1 className="fs-4" style={{fontWeight:"400"}}>Featured</h1>
          <ol>
            <li className="py-3">
              <a href="" style={{textUnderlineOffset:"1px"}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{textUnderlineOffset:"1px"}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
