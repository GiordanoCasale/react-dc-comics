const Header = () => {
    return (
        <header>
            <div>
                <figure>
                    <img src="dc-logo.png" alt="DC comics" />
                </figure>
            </div>
            <div>
                <ul className="lista-header">
                    <li>Characters</li>
                    <li className="highlight"><span className="blue-underline">Comics</span></li>
                    <li>Movies</li>
                    <li>TV</li>
                    <li>Games</li>
                    <li>Collectibles</li>
                    <li>Videos</li>
                    <li>Fans</li>
                    <li>News</li>
                    <li>Shop</li>
                </ul>
            </div>
        </header>
    );
};

export default Header
