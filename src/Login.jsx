import React from "react";
function Login() {
return (
<div className="App">
<h1>Welcome to Social Eyes</h1>
<h4>
An App created to show upcoming events around the world for full-stack developers
</h4>
<div className="button_cont" align="center">
<div class="google-btn">
<div class="google-icon-wrapper">
<img
class="google-icon"
src="https://upload.wikimedia.org/wikipedia/commons/5/53/G
oogle_%22G%22_Logo.svg"
alt="Google sign-in"
/>
</div>
<a
href="THE URL RETURNED FROM YOUR getAuth
ENDPOINT HERE"
rel="nofollow noopener"
class="btn-text"
>
<b>Sign in with google</b>
</a>
</div>
</div>
<a
href="https://glenzy.github.io/meet/privacy.html"
rel="nofollow noopener"
className="link"
>
Privacy policy
</a>
</div>
);
}
export default Login;