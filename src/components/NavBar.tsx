const NavLinks = () =>
    [
        { label: "Store", href: "/store" },
        { label: "Mac", href: "/mac" },
        { label: "iPhone", href: "/iphone" },
        { label: "Vision", href: "/vision" },
        { label: "AirPods", href: "/airpods" },
    ] as const;

const NavBar = () => {
    const links = NavLinks();

    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />

                <ul>
                    {links.map(({href, label}) => (
                        <li key={href}>
                            <a href={href}>{label}</a>
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search"/>
                    </button>
                    <button>
                        <img src="/cart.svg" alt="cart"/>
                    </button>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
