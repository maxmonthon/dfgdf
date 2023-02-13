import React, { useState } from "react";

function Login() {
  const [loading, setLoading] = useState(false);
  return (
    <div>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            {loading ? <h1>Loading ...</h1> : <h1>Login Page</h1>}

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
              <br />
              <button className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
