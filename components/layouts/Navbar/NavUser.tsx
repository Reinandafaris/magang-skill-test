import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="navbar  fixed-top navbar-expand-lg position-fixed">
      <div className="container">
        <Link
          className="navbar-brand"
          href="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                href="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                href="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/admin/home">
                <button className="btn btn-primary mt-1 ms-3">Admin</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
