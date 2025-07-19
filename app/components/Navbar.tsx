import {Link} from "react-router";

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold">CVision</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                <div className="font-bold">
                    Subir CV
                </div>
            </Link>
        </nav>
    )
}
export default Navbar
