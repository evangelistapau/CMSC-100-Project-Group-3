import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function RootAdmin() {
    return (
      <>
      <header>
        <section className="admin-navbar-container">
          <div className="admin-logo-container">
            <img src={logo} className="logo-img"/>
            <p className="logo-title">F-2-T Admin</p>
          </div>
          <nav>
            <ul className="navbar-links">
                <li><Link to={'/admin-dashboard'} className="navbar-link">Dashboard</Link></li>
                <li><Link to={`/root-admin/users`} className="navbar-link">Users</Link></li>
                <li><Link to={`/root-admin/listings`} className="navbar-link">Listings</Link></li>
                <li><Link to={`/root-admin/fulfillment`} className="navbar-link">Fulfillment</Link></li>
                <li><Link to={`/root-admin/sales`} className="navbar-link">Sales</Link></li>
            </ul>
          </nav>
        </section>
      </header>
      <Outlet />        {/* taas yung navbar, baba yung mga anak */}
    </>
    )
  }
