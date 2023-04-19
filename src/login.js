import React,{useEffect,useRef} from 'react';

export default function Login(){
    const emailRef = useRef();
   


    useEffect(() => {
            const signUpButton = document.getElementById('signUp');
            const signInButton = document.getElementById('signIn');
            const container = document.getElementById('container');

            const mSignup = document.getElementById('m-signup');
            const mSignin = document.getElementById('m-signin');
            const mSignupContainer = document.getElementById('m-signup-container');
            const mSigninContainer = document.getElementById('m-signin-container');
            
            signUpButton.addEventListener('click', () => {
              container.classList.add("right-panel-active");
              mSignupContainer.classList.remove("mobile-inactive")
              mSignupContainer.classList.add("mobile-active");
              mSigninContainer.classList.remove("mobile-active")
              mSigninContainer.classList.add("mobile-inactive")
            });
            
            signInButton.addEventListener('click', () => {
              container.classList.remove("right-panel-active");
              mSigninContainer.classList.remove("mobile-inactive")
              mSigninContainer.classList.add("mobile-active");
              mSignupContainer.classList.remove("mobile-active")
              mSignupContainer.classList.add("mobile-inactive")
            });

            //mobile


            mSignup.addEventListener('click', () => {
              console.log("sign up clicked")
              mSignupContainer.classList.remove("mobile-inactive")
              mSignupContainer.classList.add("mobile-active");
              mSigninContainer.classList.remove("mobile-active")
              mSigninContainer.classList.add("mobile-inactive")
            });

            mSignin.addEventListener('click', () => {
              console.log("sign in clicked")
              mSigninContainer.classList.remove("mobile-inactive")
              mSigninContainer.classList.add("mobile-active");
              mSignupContainer.classList.remove("mobile-active")
              mSignupContainer.classList.add("mobile-inactive")
            });
            }, []);

    return (
<div>
        <title>Login - Badger</title>
        <meta property="og:title" content="Badger - Login" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
        <meta property="twitter:card" content="summary_large_image" />
        <style data-tag="reset-style-sheet" dangerouslySetInnerHTML={{__html: "\n      html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type=\"button\"]:-moz-focus,[type=\"reset\"]:-moz-focus,[type=\"submit\"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }\n    " }} />
        <style data-tag="default-style-sheet" dangerouslySetInnerHTML={{__html: "\n      html {\n        font-family: Inter;\n        font-size: 16px;\n      }\n\n      body {\n        font-weight: 400;\n        font-style:normal;\n        text-decoration: none;\n        text-transform: none;\n        letter-spacing: normal;\n        line-height: 1.15;\n        color: var(--dl-color-gray-black);\n        background-color: var(--dl-color-gray-white);\n\n      }\n    " }} />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" data-tag="font" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" data-tag="font" />
        <link rel="stylesheet" href="./style.css" />
        <script src="https://kit.fontawesome.com/8ba98e2f3e.js" crossorigin="anonymous"></script>
        <div>
          <link href="./login-signup.css" rel="stylesheet" />
          <div className="login-signup-container">
            <nav className="navbar-navbar navbar-root-class-name1">
              <span className="navbar-link nav-link">Badger</span>
              <div className="navbar-nav-content">
                <div className="navbar-nav-links">
                  <span className="navbar-link1 nav-link">Features</span>
                  <span className="navbar-link2 nav-link">
                    <span>Pricing</span>
                    <br />
                  </span>
                  <span className="nav-link">Make a Badge</span>
                  <span className="nav-link">Login</span>
                </div>
                <div className="get-started navbar-get-started">
                  <span className="navbar-text2">Get started</span>
                </div>
                <div id="open-mobile-menu" className="navbar-hamburger get-started">
                  <img alt="image" src="../public/playground_assets/hamburger-200h.png" className="navbar-image" />
                </div>
              </div>
              <div id="mobile-menu" className="navbar-mobile-menu">
                <div className="navbar-branding">
                  <img alt="image" src="../public/playground_assets/planical7012-ttpb.svg" className="navbar-image1" />
                  <div id="close-mobile-menu" className="navbar-container">
                    <svg viewBox="0 0 1024 1024" className="navbar-icon">
                      <path d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z" />
                    </svg>
                  </div>
                </div>
                <div className="nav-links-nav-links">
                  <span className="nav-link">Features</span>
                  <span className="nav-link">Make a Badge</span>
                  <span className="nav-link">Login</span>
                  <div className="get-started nav-links-get-started">
                    <span className="nav-links-text">Get started</span>
                  </div>
                </div>
              </div>
              <div>
                <dangerous-html html />
              </div>
            </nav>
            <section className="login">
              <div className="container" id="container">
                <div className="form-container sign-up-container mobile-inactive" id="m-signup-container">
                  <form action="#">
                    <h1>Create Account</h1>
                    <div className="social-container">
                      <a href="#" className="social"><i className="fab fa-facebook" /></a>
                      <a href="#" className="social"><i className="fab fa-google" /></a>
                      <a href="#" className="social"><i className="fab fa-linkedin" /></a>
                    </div>
                    <span>or use your email for registration</span>
                    {currentUser && currentUser.email}
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button className="btn">Sign Up</button>
                    <button className="mobile-signup" id="m-signin">Sign In Instead</button>
                  </form>
                </div>
                <div className="form-container sign-in-container mobile-active" id="m-signin-container">
                  <form action="#">
                    <h1>Sign in</h1>
                    <div className="social-container">
                      <a href="#" className="social"><i className="fab fa-facebook" /></a>
                      <a href="#" className="social"><i className="fab fa-google" /></a>
                      <a href="#" className="social"><i className="fab fa-linkedin" /></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button className="btn">Sign In</button>
                    <button className="mobile-signup" id="m-signup">Sign Up Instead</button>
                  </form>
                </div>
                <div className="overlay-container">
                  <div className="overlay">
                    <div className="overlay-panel overlay-left">
                      <h1>Welcome Back!</h1>
                      <p>Can't Wait To See Your Shiny New Badge!</p>
                      <button className="btn ghost" id="signIn">Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                      <h1>Hello!</h1>
                      <p>Ready To Collect Some Badges?<br />
                        Enter Your Personal Details And Start Collecting Now!
                      </p>
                      <button className="btn ghost" id="signUp">Sign Up</button>
                    </div>
                  </div>
                </div>
              </div>
              <script>
                
              </script>

            </section>
            <footer className="login-signup-footer">
              <div className="login-signup-content1">
                <main className="login-signup-main-content">
                  <div className="login-signup-content2">
                    <header className="login-signup-main1">
                      <div className="login-signup-header">
                        <span className="login-signup-text05 footer-header">
                          Badger
                        </span>
                        <span className="login-signup-text06">
                          Free Digital Badges For Everyone
                        </span>
                      </div>
                      <div className="login-signup-socials">
                        <a href="https://www.instagram.com/_dhyan99_/" target="_blank" rel="noreferrer noopener" className="login-signup-link">
                          <img alt="image" src="../public/playground_assets/instagram-200h.png" className="social" />
                        </a>
                        <a href="https://twitter.com/badger_badges" target="_blank" rel="noreferrer noopener" className="login-signup-link1">
                          <img alt="image" src="../public/playground_assets/twitter-200h.png" className="social" />
                        </a>
                      </div>
                    </header>
                    <header className="login-signup-categories">
                      <div className="login-signup-category">
                        <div className="login-signup-header1">
                          <span className="footer-header">Links</span>
                        </div>
                        <div className="login-signup-links">
                          <span className="footer-link">Features</span>
                          <span className="footer-link">Badger for Organisers</span>
                          <span className="footer-link">Login</span>
                          <span className="footer-link">Get Started</span>
                        </div>
                      </div>
                      <div className="login-signup-category1">
                        <div className="login-signup-header2">
                          <span className="footer-header">Other</span>
                        </div>
                        <div className="login-signup-links1">
                          <span className="footer-link">Open Source</span>
                          <span className="footer-link">Buildspace</span>
                          <span className="footer-link">Devs</span>
                        </div>
                      </div>
                    </header>
                  </div>
                  <section className="login-signup-copyright">
                    <span className="login-signup-text16">
                      © 2023 Badger. All Rights Reserved.
                    </span>
                  </section>
                </main>
                <main className="login-signup-subscribe">
                  <main className="login-signup-main2">
                    <h1 className="login-signup-heading1">
                      Subscribe to our newsletter
                    </h1>
                    <div className="login-signup-input-field">
                      <input type="email" placeholder="Enter your email" className="login-signup-textinput input" />
                      <div className="login-signup-buy button">
                        <span className="login-signup-text17">-&gt;</span>
                        <span className="login-signup-text18">
                          <span>Subscribe now</span>
                          <br />
                        </span>
                      </div>
                    </div>
                  </main>
                </main>
                <section className="login-signup-copyright1">
                  <span className="login-signup-text21">
                    © 2023 Badger. All Rights Reserved.
                  </span>
                </section>
              </div>
            </footer>
            <div>
              <dangerous-html html />
            </div>
          </div>
        </div>
      </div>
    )
}