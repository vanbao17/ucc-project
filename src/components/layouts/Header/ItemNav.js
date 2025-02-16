import classnames from "classnames/bind";
import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
const cx = classnames.bind(styles);
function ItemNav({ item, handleDropdown, navChose, isMobile = false }) {
  const [stateClick, setStateClick] = useState(false);
  useEffect(() => {
    if (navChose !== item.id) {
      setStateClick(false);
    }
  }, [navChose]);
  return (
    <div
      className={cx("wrapper_item_nav", isMobile === true ? "isMobile" : "")}
    >
      <div className={cx("container_item_nav")}>
        {item.path ? (
          <NavLink className={cx("nav")} to={item.path}>
            {item.title}
          </NavLink>
        ) : (
          <div
            className={cx("item_drop_down")}
            onClick={() => {
              if (stateClick === false && isMobile === false) {
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
      {isMobile === true && stateClick === true ? (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "fit-content", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={cx(
            "dropdown_mobile",
            stateClick === true ? "show" : "hide"
          )}
        >
          {item.childrens.map((navItem, index) => {
            return (
              <div className={cx("nav1")}>
                <div className={cx("nav_title")}>
                  <strong key={index}>{navItem.title_children}</strong>
                </div>
                <ul className={cx("list_nav_children")}>
                  {navItem.list_nav ? (
                    navItem.list_nav.map((child, index) => {
                      return (
                        <li key={index}>
                          <a href={child.path}>{child.text}</a>
                        </li>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </ul>
              </div>
            );
          })}
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ItemNav;
