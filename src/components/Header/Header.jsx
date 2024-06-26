import React from "react";
import "./Header.css"; // Import header styles

// Header component
const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Let us satisfy your cravings.</h2>
        <p>
          We offer Pinoy and Fusion Silogs, Beverages, <br />
          Sandwiches, Pastas, Cakes, Pastries & Custom Cakes.
        </p>
        <a href="#explore-menu">
          {" "}
          {/* Link to menu section */}
          <button>View Menu</button>
        </a>
      </div>
    </div>
  );
};

export default Header; //Export Header component
