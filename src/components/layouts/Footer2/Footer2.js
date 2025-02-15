import classnames from "classnames/bind";
import styles from "./Footer2.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const cx = classnames.bind(styles);
function Footer2() {
  return (
    <div className={cx("wrapper_footer2")}>
      <div className={cx("container_footer2")}>
        <div className={cx("container_up")}>
          <div className={cx("container_up_left")}>
            <img
              src="https://ucc.com.vn/wp-content/uploads/2024/01/logo.png"
              alt="ucc"
            ></img>
            <div className={cx("item")}>
              <FontAwesomeIcon icon={faLocation} />
              <span>
                401/30 Bình Lợi, phường 13, quận Bình Thạnh, tp Hồ Chí Minh
              </span>
            </div>
            <div className={cx("item")}>
              <FontAwesomeIcon icon={faLocation} />
              <span>
                188 Nguyễn Tri Phương, phường Chính Gián, quận Thanh Khê, Đà
                Nẵng
              </span>
            </div>
            <div className={cx("item")}>
              <FontAwesomeIcon icon={faPhone} />
              <span>036 790 8639</span>
            </div>
            <div className={cx("item")}>
              <FontAwesomeIcon icon={faEnvelope} />
              <span>admin@ucc.com.vn</span>
            </div>
          </div>
          <div className={cx("container_up_line")}></div>
          <div className={cx("container_up_right")}>
            <div className={cx("item")}>
              <p>Facebook</p>
              <a href="/">
                <img
                  src="https://ucc.com.vn/wp-content/uploads/2024/01/logo.png"
                  alt=""
                />
              </a>{" "}
            </div>
            <div className={cx("item")}>
              <p>GG map</p>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.787991601354!2d106.6990177748058!3d10.835701189316685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752860f46fb29d%3A0x4e9a0d5bd54e3f4d!2zNDAxIELDrG5oIEzhu6NpLCBzdHJlZXQsIELDrG5oIFRo4bqhbmgsIEjhu5MgQ2jDrSBNaW5oIDcwMDAwMCwgVmnhu4d0IE5hbQ!5e1!3m2!1svi!2s!4v1739638273593!5m2!1svi!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className={cx("ceff")}>
              <img
                src="https://ucc.com.vn/wp-content/uploads/2024/01/logo.png"
                alt=""
              />
              <img
                src="https://ucc.com.vn/wp-content/uploads/2024/01/logo.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={cx("container_down")}>
          <p>
            CÔNG TY TNHH UCC VỆT NAM. Giấy phép kinh doanh: 0316640648 - do sở
            KH & ĐT TP. HCM cấp ngày: 15/12/2020.
          </p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer2;
