import { Outlet, Link } from 'react-router-dom';

export default function AdminRoot() {

    return (
      <>
      <header>
        <section className="navbar-content">
          <h1>Farm-To-Table</h1>
          <nav>
            <ul className="navbar-links">
                {/* <li><Link to={`/admin`}>Dashboard</Link></li> */}
                <li><Link to={`/admin/accounts`}>User Accounts</Link></li>
                <li><Link to={`/admin/products`}>Product Listings</Link></li>
                <li><Link to={`/admin/orders`}>Pending Orders</Link></li>
                <li><Link to={`/admin/sales`}>Sales Reports</Link></li>
            </ul>
          </nav>
        </section>
      </header>
      <Outlet />        {/* taas yung navbar, baba yung mga anak */}
    </>
    )
  }