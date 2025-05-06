import ListComics from "./ListComics";

const Main = () => {
    return (
        <main>
            <div className="main-top ">
                <ListComics />
            </div>
            <div className="main-bottom">
                <ul className="Main-list">
                    <li>
                        <img className="img-size" src="src/assets/img/buy-comics-digital-comics.png" alt="digtal comics" />
                        <span>Digital comics</span>
                    </li>
                    <li>
                        <img className="img-size" src="src/assets/img/buy-comics-merchandise.png" alt="Merchandise" />
                        <span>DC Merchandise</span>
                    </li>
                    <li>
                        <img className="img-size" src="src/assets/img/buy-comics-subscriptions.png" alt="subricption" />
                        <span>Subscription</span>
                    </li>
                    <li>
                        <img className="locator-size" src="src/assets/img/buy-comics-shop-locator.png" alt="Shop locator" />
                        <span>Shop locator</span>
                    </li>
                    <li>
                        <img className="img-size" src="src/assets/img/buy-dc-power-visa.svg" alt="power visa" />
                        <span>DC power visa</span>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default Main
