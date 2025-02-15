import classnames from "classnames/bind";

import styles from "./Header.module.scss";
import { flags, navigations } from "../../../assets/datas";
import ItemNav from "./ItemNav";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faClose,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import Footer from "../Footer/Footer";

const cx = classnames.bind(styles);
function Header() {
  const [flagChose, setFlagChose] = useState(flags[0]);
  const [childrens, setChildrens] = useState([]);
  const [navChose, setNavChose] = useState();
  const [showSideBar, setShowSideBar] = useState(false);
  const [stateDropdownLanguage, setStateDropdownLanguage] = useState(false);
  const [stateDropdown, setStateDropdown] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  return (
    <div className={cx("wrapper_header")}>
      <div
        className={cx(
          "wrapper-sidebar-mobile",
          showSideBar === false ? "show" : "hide"
        )}
      >
        <div className={cx("title-mobile")}>
          <FontAwesomeIcon
            icon={faClose}
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          />
        </div>
        <div className={cx("list-nav-mobile")}>
          {navigations.map((nav, index) => {
            return (
              <ItemNav
                navChose={navChose}
                handleDropdown={(data) => {
                  if (data.length !== 0) {
                    setStateDropdown(true);
                    setChildrens(data.childrens);
                    setNavChose(data.id);
                  } else {
                    setStateDropdown(false);
                  }
                }}
                key={index}
                item={nav}
              />
            );
          })}
        </div>
      </div>
      <div className={cx("side")}>
        <Footer />
      </div>
      <div className={cx("container_header")}>
        {isMobile === true ? (
          <div
            className={cx("sidebar-mobile")}
            onClick={() => {
              setShowSideBar(!showSideBar);
            }}
          >
            <FontAwesomeIcon icon={faList} />
          </div>
        ) : (
          <></>
        )}
        <div className={cx("thumb")}>
          <NavLink to={"/"}>
            <img
              src="https://ucc.com.vn/wp-content/uploads/2024/01/logo.png"
              alt=""
            ></img>
          </NavLink>
        </div>
        <div className={cx("list-nav")}>
          {navigations.map((nav, index) => {
            return (
              <ItemNav
                navChose={navChose}
                handleDropdown={(data) => {
                  if (data.length !== 0) {
                    setStateDropdown(true);
                    setChildrens(data.childrens);
                    setNavChose(data.id);
                  } else {
                    setStateDropdown(false);
                  }
                }}
                key={index}
                item={nav}
              />
            );
          })}
        </div>
        <div className={cx("choose-language")}>
          <div className={cx("show-language")}>
            <div
              onClick={() => {
                setStateDropdownLanguage(!stateDropdownLanguage);
              }}
            >
              <img src={flagChose.image} alt={flagChose.title}></img>
              <span>|</span>
              <p>{flagChose.title}</p>
              <FontAwesomeIcon
                icon={
                  stateDropdownLanguage !== true ? faChevronDown : faChevronUp
                }
              />
            </div>
            {stateDropdownLanguage === true ? (
              <ul className={cx("drop-down-language")}>
                {flags.map((flag) => {
                  return (
                    <li
                      onClick={() => {
                        setFlagChose(flag);
                      }}
                      key={flag.id}
                    >
                      <img src={flag.image} alt={flag.title}></img>
                      <span>{flag.title}</span>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div
        className={cx(
          "drop_down_header",
          stateDropdown === true ? "open" : "close"
        )}
      >
        <div className={cx("container_drop_down_header")}>
          {childrens.map((child, index) => {
            return (
              <div
                className={cx("item_children", !child.list_nav ? "active" : "")}
                style={{ width: `calc(100% / ${childrens.length})` }}
                key={index}
              >
                <div
                  className={cx("item-left")}
                  style={{
                    width: `${!child.list_nav ? "70%" : "45%"}`,
                  }}
                >
                  <img src={child.thumb} alt={child.text}></img>
                  {!child.list_nav ? <h3>{child.title_children}</h3> : <></>}
                </div>
                {child.list_nav ? (
                  <div className={cx("item-right")}>
                    {child.list_nav ? <h3>{child.title_children}</h3> : <></>}
                    <div className={cx("list_nav_child")}>
                      {child.list_nav ? (
                        child.list_nav.map((nav, index) => {
                          return (
                            <NavLink key={index} to={nav.path}>
                              {nav.text}
                            </NavLink>
                          );
                        })
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
