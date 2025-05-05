const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-column">
                    <h5 className="h5-color">DC COMICS</h5>
                    <ul className="ul-settings">
                        <li>Characters</li>
                        <li>Comics</li>
                        <li>Movies</li>
                        <li>TV</li>
                        <li>Games</li>
                        <li>Videos</li>
                        <li>News</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5 className="h5-color">SHOP</h5>
                    <ul className="ul-settings">
                        <li>Shop DC</li>
                        <li>Shop DC Collectibles</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5 className="h5-color">DC</h5>
                    <ul className="ul-settings">
                        <li>Terms Of Use</li>
                        <li>Privacy Policy (New)</li>
                        <li>Ad Choices</li>
                        <li>Advertising</li>
                        <li>Jobs</li>
                        <li>Subscriptions</li>
                        <li>Talent Workshops</li>
                        <li>CPSC Certificates</li>
                        <li>Ratings</li>
                        <li>Shop Help</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h5 className="h5-color">SITES</h5>
                    <ul className="ul-settings">
                        <li>DC</li>
                        <li>MAD Magazine</li>
                        <li>DC Kids</li>
                        <li>DC Universe</li>
                        <li>DC Power Visa</li>
                    </ul>
                </div>
                <div className="container-logo">
                    <img className="Logo-bg" src="src/assets/img/dc-logo-bg.png" alt="dc logo bg" />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="left">
                    <h2 className="footer-text">Sign-Up Now!</h2>
                </div>
                <div className="right">
                    <ul className="list-footer-bottom">
                        <li><h2 className="h2">FOLLOW US</h2></li>
                        <li><img src="src/assets/img/footer-facebook.png" alt="facebook" /></li>
                        <li><img src="src/assets/img/footer-twitter.png" alt="twitter" /></li>
                        <li><img src="src/assets/img/footer-youtube.png" alt="youtube" /></li>
                        <li><img src="src/assets/img/footer-pinterest.png" alt="pinterest" /></li>
                        <li><img src="src/assets/img/footer-periscope.png" alt="periscope" /></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
