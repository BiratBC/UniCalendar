import React, { act, useState } from "react";
import {Link} from "react-router-dom";

export default function Dashboard(props) {
    const [active, setActive] = useState(null);

    const handleButtonClick = (id, event) => {
      setActive(id);
      // event.preventDefault();
    };

  return (
    <>
      <div>
        <header>
          <nav
            id="sidebarMenu"
            className="collapse d-lg-block sidebar collapse bg-white"
            // style={{position : "fixed"}}
          >
            <div className="position-sticky">
              <div className="list-group list-group-flush mx-3 mt-4">
                <a
                  href="/profile"
                  className="list-group-item list-group-item-action py-2 ripple"
                  onClick={(event) => {event.preventDefault()}}
                  aria-current="true"
                  style={{fontSize : 35, fontFamily : 'Ubuntu'}}
                >
                  <span>Profile</span>
                  {/* <span><img className= "mx-5" src="down-arrow.png" alt="img" style={{width :30, height: 30}}/></span> */}
                </a>
                <a
                  href="/profile"
                  className={`list-group-item list-group-item-action py-2 ripple ${
                    active === "userDetails" ? "active" : ""
                  }`}
                  onClick={(event) => handleButtonClick("userDetails",event)}
                >
                  <i className="fa fa-user fa-fw me-3"></i>
                  <span>User Details</span>
                </a>
                <Link
                  to="/host"
                  className={`list-group-item list-group-item-action py-2 ripple ${
                    active === "hostEvent" ? "active" : ""
                  }`}
                  onClick={(event) => handleButtonClick("hostEvent", event)}
                >
                  <i className="fa fa-calendar fa-fw me-3"></i>
                  <span>Host Event</span>
                </Link> 
                <a
                  href="/profile"
                  className={`list-group-item list-group-item-action py-2 ripple ${
                    active === "eventHistory" ? "active" : ""
                  }`}

                  onClick={(event) => handleButtonClick("eventHistory",event)}
                >
                  <i className="fa fa-history fa-fw me-3"></i>
                  <span>Event History</span>
                </a>
                <a
                  href="/profile"
                  className={`list-group-item list-group-item-action py-2 ripple ${
                    active === "changePassword" ? "active" : ""
                  }`}

                  onClick={(event) => handleButtonClick("changePassword", event)}
                >
                  <i className="fa fa-lock fa-fw me-3"></i>
                  <span>Change Password</span>
                </a>
                <a
                  href="/profile"
                  className={`list-group-item list-group-item-action py-2 ripple ${
                    active === "deleteAccount" ? "active" : ""
                  }`}

                  onClick={(event) => handleButtonClick("deleteAccount", event)}
                >
                  <i className="fa fa-user-times fa-fw me-3"></i>
                  <span>Delete Account</span>
                </a>
              </div>
            </div>
          </nav>
        </header>

        <main style={{ marginTop: 58 }}>
          <div className="container pt-4"></div>
        </main>
      </div>
    </>
  );
}