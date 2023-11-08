import Link from 'next/link';

const NavAdmin = () => {
  return (
    <nav className="nav-admin">
      <div>
        <Link href="/">
          <div className="mb-4">User</div>
        </Link>
        <Link href="/admin/home">
          <div className="mb-2">Home</div>
        </Link>
        <Link href="/admin/gallery">
          <div className="mb-2">Gallery</div>
        </Link>
        <Link href="/admin/contact">
          <div>Contact</div>
        </Link>
      </div>
      {/* <button onClick={handleButtonNav}>tombol</button> */}
    </nav>
  );
};

export default NavAdmin;
