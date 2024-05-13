// navigation component for rendering navigation menu - hindi ko pa to nalalagay sa mismong website
const Navigation = ({ menus }) => {
    return (
      // navigation contents container
      <nav className="navigation-container">
        {/* list for menu items */}
        <ul className="menu-list">
          {menus.map(menu => (
            // unique key based on menu.id
            <li key={menu.id}>
              <a href={menu.url}>{menu.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  // export navigation
  export default Navigation;