import classnames from "classnames/bind";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const cx = classnames.bind(styles);
function ItemNav({ item, handleDropdown, navChose }) {
  const [stateClick, setStateClick] = useState(false);
  useEffect(() => {
    if (navChose !== item.id) {
      setStateClick(false);
    }
  }, [navChose]);
  return (
    <div className={cx("wrapper_item_nav")}>
      <div className={cx("container_item_nav")}>
        {item.path ? (
          <NavLink className={cx("nav")} to={item.path}>
            {item.title}
          </NavLink>
        ) : (
          <div
            className={cx("item_drop_down")}
            onClick={() => {
              if (stateClick === false) {
                handleDropdown(item);
              } else {
                handleDropdown([]);
              }
              setStateClick(!stateClick);
            }}
          >
            <span> {item.title}</span>
            <FontAwesomeIcon
              icon={stateClick === false ? faChevronDown : faChevronUp}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default ItemNav;
