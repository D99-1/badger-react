import './home.css';

function Home() {
  return (
    <div>
    <title>Badger</title>
    <meta property="og:title" content="Badger" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charSet="utf-8" />
    <meta property="twitter:card" content="summary_large_image" />
    <style data-tag="reset-style-sheet" dangerouslySetInnerHTML={{__html: "\n      html {  line-height: 1.15;}body {  margin: 0;}* {  box-sizing: border-box;  border-width: 0;  border-style: solid;}p,li,ul,pre,div,h1,h2,h3,h4,h5,h6,figure,blockquote,figcaption {  margin: 0;  padding: 0;}button {  background-color: transparent;}button,input,optgroup,select,textarea {  font-family: inherit;  font-size: 100%;  line-height: 1.15;  margin: 0;}button,select {  text-transform: none;}button,[type=\"button\"],[type=\"reset\"],[type=\"submit\"] {  -webkit-appearance: button;}button::-moz-focus-inner,[type=\"button\"]::-moz-focus-inner,[type=\"reset\"]::-moz-focus-inner,[type=\"submit\"]::-moz-focus-inner {  border-style: none;  padding: 0;}button:-moz-focus,[type=\"button\"]:-moz-focus,[type=\"reset\"]:-moz-focus,[type=\"submit\"]:-moz-focus {  outline: 1px dotted ButtonText;}a {  color: inherit;  text-decoration: inherit;}input {  padding: 2px 4px;}img {  display: block;}html { scroll-behavior: smooth  }\n    " }} />
    <style data-tag="default-style-sheet" dangerouslySetInnerHTML={{__html: "\n      html {\n        font-family: Inter;\n        font-size: 16px;\n      }\n\n      body {\n        font-weight: 400;\n        font-style:normal;\n        text-decoration: none;\n        text-transform: none;\n        letter-spacing: normal;\n        line-height: 1.15;\n        color: var(--dl-color-gray-black);\n        background-color: var(--dl-color-gray-white);\n\n      }\n    " }} />  
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" data-tag="font" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" data-tag="font" />
    <link href="./style.css" rel="stylesheet" />
    <link href="./home.css" rel="stylesheet" />

    <div>
      <div className="home-container">
        <nav className="navbar-navbar navbar-root-class-name">
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
        <section className="home-section">
          <div className="home-hero">
            <main className="home-main">
              <h1 className="home-heading">
                <span>Get </span>
                <span className="text-grad">Badges </span>
                <span>To Certify Your Experience</span>
              </h1>
              <span className="home-caption">
                Badger Can Help Your Resume Stand Out!&nbsp;
              </span>
              <div className="home-buttons">
                <div className="home-get-started button">
                  <span className="home-text03">Get started</span>
                </div>
                <div className="home-get-started1 button">
                  <span className="home-text04">Learn More</span>
                </div>
              </div>
              <div className="home-content">
              <div className="home-highlight">
                <div className="home-avatars">
                  <img alt="image" src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&ixlib=rb-4.0.3&w=200" className="home-image avatar" />
                  <img alt="image" src="https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBvdHJhaXR8ZW58MHx8fHwxNjY3MjQ0ODcx&ixlib=rb-4.0.3&w=200" className="home-image1 avatar" />
                  <img alt="image" src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY2NzI0NDg3MQ&ixlib=rb-4.0.3&w=200" className="home-image2 avatar" />
                </div>
                <label className="home-caption1">
                  Over 500 Badges Claimed Today
                </label>
              </div>
            </div>
            </main>
          </div>
        </section>
        <footer className="home-footer">
          <div className="home-content1">
            <main className="home-main-content">
              <div className="home-content2">
                <header className="home-main1">
                  <div className="home-header">
                    <span className="home-text05 footer-header">Badger</span>
                    <span className="home-text06">
                      Free Digital Badges For Everyone
                    </span>
                  </div>
                  <div className="home-socials">
                    <a href="https://www.instagram.com/_dhyan99_/" target="_blank" rel="noreferrer noopener" className="home-link">
                      <img alt="image" src="../public/playground_assets/instagram-200h.png" className="social" />
                    </a>
                    <a href="https://twitter.com/badger_badges" target="_blank" rel="noreferrer noopener" className="home-link1">
                      <img alt="image" src="../public/playground_assets/twitter-200h.png" className="social" />
                    </a>
                  </div>
                </header>
                <header className="home-categories">
                  <div className="home-category">
                    <div className="home-header1">
                      <span className="footer-header">Links</span>
                    </div>
                    <div className="home-links">
                      <span className="footer-link">Features</span>
                      <span className="footer-link">Badger for Organisers</span>
                      <span className="footer-link">Login</span>
                      <span className="footer-link">Get Started</span>
                    </div>
                  </div>
                  <div className="home-category1">
                    <div className="home-header2">
                      <span className="footer-header">Other</span>
                    </div>
                    <div className="home-links1">
                      <span className="footer-link">Open Source</span>
                      <span className="footer-link">Buildspace</span>
                      <span className="footer-link">Devs</span>
                    </div>
                  </div>
                </header>
              </div>
              <section className="home-copyright">
                <span className="home-text16">
                  © 2023 Badger. All Rights Reserved.
                </span>
              </section>
            </main>
            <main className="home-subscribe">
              <main className="home-main2">
                <h1 className="home-heading1">Subscribe to our newsletter</h1>
                <div className="home-input-field">
                  <input type="email" placeholder="Enter your email" className="home-textinput input" />
                  <div className="home-buy button">
                    <span className="home-text17">-&gt;</span>
                    <span className="home-text18">
                      <span>Subscribe now</span>
                      <br />
                    </span>
                  </div>
                </div>
              </main>
            </main>
            <section className="home-copyright1">
              <span className="home-text21">
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
  );
}

export default Home;
