import React from "react";
import Dashboard from "./Dashboard.js";

export default function Eventhost() {
  return (
    <>
    <Dashboard/>
      <div className="mainContainer">
        <div className="hostContainer">
          <h1>Host Details</h1>
          <form>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label for="inputFirstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputFirstName"
                  placeholder="Ram"
                />
              </div>
              <div className="form-group col-md-8">
                <label for="inputLastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputLastName"
                  placeholder="Shrestha"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="ram1@gmail.com"
                />
              </div>
              <div className="form-group col-md-8">
                <label for="inputPassword4">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="*********"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label for="inputContact">Contact Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="inputContact"
                  placeholder="9800000000"
                />
              </div>
              <div className="form-group col-md-8">
                <label for="inputClubName">
                  Name of Club/Organization/Company
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="inputClubName"
                  placeholder="KUCC"
                />
              </div>
            </div>
            <h1>Event Details</h1>
            <div className="form-row">
              <div className="form-group col-md-12">
                <label for="inputTitle">Event Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="inputTitle"
                  placeholder="IT Meet 2025"
                />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">Event Type</label>
                <select id="inputState" className="form-control">
                  <option selected>Club</option>
                  <option>Seminar</option>
                  <option>Sports</option>
                  <option>Webinar</option>
                  <option>Cultural/Festival</option>
                  <option>Workshop</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <label for="inputState">Date and Time</label>
              <div class="input-group mb-1 mr-sm-2">
                <div class="input-group-prepend">
                  <div class="input-group-text">Date : </div>
                </div>
                <input
                  type="date"
                  class="form-control"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Username"
                />
                <div class="input-group-prepend">
                  <div class="input-group-text">Time : </div>
                </div>
                <input
                  type="time"
                  class="form-control"
                  id="inlineFormInputGroupUsername2"
                  placeholder="Username"
                />
              </div>
            <div className="form-row">
              <div className="form-group col-md-8">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
