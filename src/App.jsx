import "./index.css";

/**
 * * Header
 * - Logo
 * - Nav Item
 * * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 * * Footer
 * - Copyright
 * - links
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="/HungerHop-logo-transparent.png"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return <div></div>;
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container"></div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

export default AppLayout;
