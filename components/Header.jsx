import { NavLink } from "react-router-dom";

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <i className="bi bi-film"></i> Moviehunt
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies/top" className="nav-link">Top Rated</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies/popular" className="nav-link">Popular</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movies/upcoming" className="nav-link">Upcoming</NavLink>
                        </li>
                    </ul>
                    <form>
                        <input type="search" className="form-control form-control-sm" placeholder="Search" />
                    </form>
                </div>
            </div>
        </nav>
    );
};
