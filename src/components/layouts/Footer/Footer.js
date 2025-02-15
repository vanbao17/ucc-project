import classnames from "classnames/bind";
import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const cx = classnames.bind(styles);
function Footer() {
  return (
    <div className={cx("wrapper_footer")}>
      <div className={cx("container_footer")}>
        <div className={cx("list-col")}>
          <div className={cx("col1")}>
            <div className={cx("thumb")}>
              <img
                src="https://ucc.com.vn/wp-content/uploads/2024/01/logo.png"
                alt="ucc"
              />
            </div>
          </div>
          <div className={cx("col2")}>
            <div className={cx("item")}>
              <div className={cx("icon")}>
                <FontAwesomeIcon icon={faLocation} />
              </div>
              <div className={cx("list-address")}>
                <a
                  href="https://www.google.com/maps/search/?q=401/30+Bình+Lợi,+phường+13,+quận+Bình+Thạnh,+tp+Hồ+Chí+Minh"
                  target="_blank"
                >
                  401/30 Bình Lợi, phường 13, quận Bình Thạnh, TP. Hồ Chí Minh
                </a>
                <a
                  href="https://www.google.com/maps/search/?q=188+Nguyễn+Tri+Phương,+phường+Chính+Gián,+quận+Thanh+Khê,+Đà+Nẵng"
                  target="_blank"
                >
                  188 Nguyễn Tri Phương, phường Chính Gián, quận Thanh Khê, Đà
                  Nẵng
                </a>
              </div>
            </div>
          </div>
          <div className={cx("col3")}>
            <div className={cx("item")}>
              <div className={cx("icon")}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className={cx("content")}>
                <a href="tel:+8436 790 8639">036 790 8639</a>
              </div>
            </div>
          </div>
          <div className={cx("col4")}>
            <div className={cx("item")}>
              <div className={cx("icon")}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className={cx("content")}>
                <a href="admin@ucc.com.vn">admin@ucc.com.vn</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
