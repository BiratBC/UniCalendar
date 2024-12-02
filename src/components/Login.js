import React, { useState } from "react";

export default function Login({onLogin}) {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null)

  const handleLogin = () => {
    if (username.trim() === "") {
      setError("Please enter a username");
    }
    else{
    const user = {
      name: username,
      additionalInfo: "Some extra info about the user",
    };
    onLogin(user);
    setError("");
  }
  };
  return (
    <>
      <section className="">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-0 ms-xl-4">
                <span className="h1 fw-bold mb-0">
                  <a className="navbar-brand" href="/">
                    <img
                      className=""
                      src="/unical-removebg-preview.png"
                      alt=""
                      style={{ width: 170, height: 120, marginTop: 5 }}
                    />
                  </a>
                </span>
              </div>

              <div className="d-flex h-custom-2 px-5 ms-xl-4 mt-0 pt-5 pt-xl-0 mt-xl-n5">
                <form style={{ width: "23rem" }}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={{ letterSpacing: 1 }}
                  >
                    Log in
                  </h3>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      // type="email"
                      type="text"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      placeholder="Enter your username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}

                    />
                    <p>{error}</p>
                    <label className="form-label" htmlFor="form2Example18">
                      Email address
                    </label>
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                    />
                    <label className="form-label" htmlFor="form2Example28">
                      Password
                    </label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-info btn-lg btn-block"
                      type="button"
                      onClick={handleLogin}
                    >
                      Login
                    </button>
                  </div>

                  <p className="small mb-5 pb-lg-2">
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </p>
                  <p>
                    Don't have an account?{" "}
                    <a href="#!" className="link-info">
                      Register here
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt=""
                className="w-100 vh-100"
                style={{ objectFit: "cover", objectPostion: "left" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
