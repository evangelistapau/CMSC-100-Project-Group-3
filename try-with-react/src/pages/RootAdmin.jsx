import { Outlet, Link } from 'react-router-dom';
import logo from '../images/logo.png';

export default function RootAdmin() {
    return (
      <>
      <header>
        <section className="admin-navbar-container">
        <div className="logo-container">
              <img src={logo} className="logo-img"/>
              <p className="logo-title">Farm-To-Table</p>
              </div>
          <nav>
            <ul className="navbar-links">
                <li><Link to={'/admin-dashboard'}>Dashboard</Link></li>
                <li><Link to={`/root-admin/users`}>Users</Link></li>
                <li><Link to={`/root-admin/listings`}>Listings</Link></li>
                <li><Link to={`/root-admin/fulfillment`}>Fulfillment</Link></li>
                <li><Link to={`/root-admin/sales`}>Sales</Link></li>
            </ul>
          </nav>
        </section>
      </header>
      <Outlet />        {/* taas yung navbar, baba yung mga anak */}
    </>
    )
  }
