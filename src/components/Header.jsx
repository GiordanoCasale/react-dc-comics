const Header = () => {
    return (
        <header>
            <div>
                <figure>
                    <img className="logo-header" src="dc-logo.png" alt="DC comics" />
                </figure>
            </div>
            <div>
                <ul className="lista-header">
                    {links.map((link) => (
                        <li key={`link-${link.id}`}>
                            <a href={link.href}>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};

export default Header

const links = [
    {
        id: 1,
        href: "#",
        label: "Characters",
        current: false,
    },
    {
        id: 2,
        href: "#",
        label: "Comics",
        current: true,
    },
    {
        id: 3,
        href: "#",
        label: "Movies",
        current: false,
    },
    {
        id: 4,
        href: "#",
        label: "TV",
        current: false,
    },
    {
        id: 5,
        href: "#",
        label: "Games",
        current: false,
    },
    {
        id: 6,
        href: "#",
        label: "Collectibles",
        current: false,
    },
    {
        id: 7,
        href: "#",
        label: "Videos",
        current: false,
    },
    {
        id: 8,
        href: "#",
        label: "Fans",
        current: false,
    },
    {
        id: 9,
        href: "#",
        label: "News",
        current: false,
    },
    {
        id: 10,
        href: "#",
        label: "Shop",
        current: false,
    }
];
