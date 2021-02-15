import React from "react";

function Login() {
return (
<div className="App">
  <h1>Welcome to Social Eyes</h1>
    <h4>
      An App created to show upcoming events around the world for full-stack developers
    </h4>
      <div className="button_cont" align="center">
        <div className="google-btn">
          <div className="google-icon-wrapper">
            <img
                className="google-icon"
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="Google sign-in"
              />
          </div>
          <a
            href="https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fcalendar.readonly&response_type=code&client_id=1062261054092-ca3p92e04sbr32ee062lmm093p5s7qta.apps.googleusercontent.com&redirect_uri=https%3A%2F%2FMcCotter36.github.io%2Fsocial-eyes"
            rel="nofollow noopener"
            className="btn-text"
          >
            <b>Sign in with google</b>
          </a>
        </div>
      </div>
      <a
      href="https://McCotter36.github.io/social-eyes/privacy.html"
      rel="nofollow noopener"
      className="link"
      >
        Privacy policy
      </a>
    </div>
  );
}
export default Login;