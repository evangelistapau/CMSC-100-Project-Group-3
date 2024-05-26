
import { Outlet, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';


export default function Root() {
  const navigate = useNavigate();

  const Logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

    return (
      <>
      <div className="customer-view">
        <header>
          <section className="navbar-container">
            <div className="logo-container">
              <img src={logo} className="logo-img"/>
              <p className="logo-title">Farm-To-Table</p>
            </div>
            <nav>
              <ul className="navbar-links">
                  <li><Link to={`/root/shop`} className="navbar-link">Shop</Link></li>
                  <li><Link to={`/root/orders`} className="navbar-link">Your Orders</Link></li>
                  <li><Link to={`/root/profile`} className="navbar-link">Your Profile</Link></li>
                  <li><button onClick={Logout} className='signoutBTN'>Log out</button></li>
              </ul>
            </nav>
          </section>
        </header>
        <Outlet />
      </div>
    </>
    )
  }
