import { useState } from "react";
import { Link } from "react-router-dom";

export const Menus = (props) => {
  const { name, children, id } = props;
  const [state, setStete] = useState(false);
  const clickHandler = (e) => {
    console.log(e);
    setStete((prev) => !prev);
  };
  return (
    <div key={id}>
      <button className="dropdown-btn" onClick={(e) => clickHandler(e)}>
        {name}
        <i className="fa fa-caret-down"></i>
      </button>
      <div className={`dropdown-container ${state ? "active" : ""}`}>
        {children &&
          children.map((child, index) => (
            <Link to={child.url} key={child.id}>
              {child.name}
            </Link>
          ))}
      </div>
    </div>
  );
};
