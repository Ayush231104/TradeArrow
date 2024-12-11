import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row" style={{padding:"40px"}}>
        <h1 className="fs-2" style={{paddingLeft:"50px",fontWeight:"400"}}>To create a ticket, select a relevant topic</h1>
        <div className="col-4" id="ticket">
          <h4 className="">
            <i class="fa fa-plus-circle" aria-hidden="true" style={{fontSize:"20px"}}></i> Account Opening
          </h4>
          <a href="">Online Account Opening</a>
          <br />
          <a href="">Offline Account Opening</a>
          <br />
          <a href="">Company, Partnership and HUF Account</a>
          <br />
          <a href="">Opening</a>
          <br />
          <a href="">NRI Account Opening</a>
          <br />
          <a href="">Charges at Zerodha</a>
          <br />
          <a href="">Zerodha IDFC FIRST Bank 3-in-1 Account</a>
          <br />
          <a href="">Getting Started</a>
          <br />
        </div>
        <div className="col-4" id="ticket">
          <h4 className="">
          <i class="fa-solid fa-user" style={{fontSize:"20px"}}></i> Your Zerodha Account
          </h4>
          <a href="">Login credentials</a>
          <br />
          <a href="">Your Profile</a>
          <br />
          <a href="">Account modification and segment addition</a>
          <br />
          <a href="">CMR & DP ID</a>
          <br />
          <a href="">Nomination</a>
          <br />
          <a href="">Transfer and conversion of shares</a>
          <br />
        </div>
        <div className="col-4" id="ticket">
          <h4 className="">
          <i class="fa-solid fa-chart-column" style={{fontSize:"20px"}}></i> Trading and Markets
          </h4>
          <a href="">Trading FAQs</a>
          <br />
          <a href="">Kite</a>
          <br />
          <a href="">Margins</a>
          <br />
          <a href="">Product and order types</a>
          <br />
          <a href="">Corporate actions</a>
          <br />
          <a href="">Kite features</a>
          <br />
        </div>
        <div className="col-4" id="ticket">
          <h4 className="">
          <i class="fa-solid fa-wallet" style={{fontSize:"20px"}}></i> Funds
          </h4>
          <a href="">Fund withdrawal</a>
          <br />
          <a href="">Adding funds</a>
          <br />
          <a href="">Adding bank accounts</a>
          <br />
          <a href="">eMandates</a>
          <br />
        </div>
        <div className="col-4" id="ticket">
          <h4 className="">
          <i class="fa-regular fa-copyright" style={{fontSize:"20px"}}></i> Console
          </h4>
          <a href="">IPO</a>
          <br />
          <a href="">Portfolio</a>
          <br />
          <a href="">Funds statement</a>
          <br />
          <a href="">Profile</a>
          <br />
          <a href="">Reports</a>
          <br />
          <a href="">Referral program</a>
          <br />
        </div>
        <div className="col-4" id="ticket">
          <h4 className="">
          <i class="fa-solid fa-coins" style={{fontSize:"20px"}}></i> Coin
          </h4>
          <a href="">Understanding mutual funds and Coin</a>
          <br />
          <a href="">Coin app</a>
          <br />
          <a href="">Coin web</a>
          <br />
          <a href="">Transactions and reports</a>
          <br />
          <a href="">National Pension Scheme (NPS)</a>
          <br />
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
