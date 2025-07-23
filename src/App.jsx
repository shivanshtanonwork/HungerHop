import "./index.css";

/**
 * * Header
 * - Logo
 * - Nav Item
 * * Body
 * - Search
 * - RestaurantContainer
 *  - RestaurantCard
 *   - Img
 *   - Restaurant Name
 *   - star rating , cuisines, delivery time
 * * Footer
 * - Copyright
 * - links
 * - Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="/HungerHop-logo.png" alt="logo" />
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
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2024/4/8/3424de92-9520-481b-8fc6-14ab8855d9e4_0f25daa0-0978-4638-9a94-dcd3d54b4789.JPG"
        alt="res-logo"
      />
      <h3>Bun in a Million</h3>
      <h4>Burgers, Fast Food, Snacks</h4>
      <h4>4.4 stars</h4>
      <h4>25 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

export default AppLayout;
