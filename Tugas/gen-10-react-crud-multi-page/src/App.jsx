import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <div className="app">
        <nav>
          <Link to="/articles">Daftar Artikel</Link>
          &nbsp; | &nbsp;
          <Link to="/categories">Daftar Kategori</Link>
        </nav>

        <hr />

        <Outlet />
      </div>
    </>
  );
}
