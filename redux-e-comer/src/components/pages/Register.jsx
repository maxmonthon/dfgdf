import React from "react";

function Register() {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <h1>Register Page</h1>
            <form>
              <div className="form-group">
                <label>Username</label>
                <input className="form-control" type="text" name="username" />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password"
                />
              </div>

              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  className="form-control"
                  type="password"
                  name="password1"
                />
              </div>

              <br />
              <button
                className="btn btn-success"
                // disabled={value.password.length < 6}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
