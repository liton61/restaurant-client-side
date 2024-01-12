

const Footer = () => {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content">
            <nav>
                <header className="footer-title">Services</header>
                <a className="link link-hover">Reservation</a>
                <a className="link link-hover">Online Order</a>
                <a className="link link-hover">Pre-Order</a>
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
            </nav>
            <nav>
                <header className="footer-title">Legal</header>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;