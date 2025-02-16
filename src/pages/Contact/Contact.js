import classnames from "classnames/bind";
import styles from "./Contact.module.scss";
import { useState } from "react";
import Popup from "../../components/Popup/Popup";
const cx = classnames.bind(styles);
function Contact() {
  const [statePoup, setStatePopup] = useState(false);
  return (
    <div className={cx("wrapper_contact")}>
      {statePoup === true ? (
        <Popup>
          <div className={cx("wrapper_notification")}>
            <div className={cx("title")}>
              <h3>Thông báo</h3>
            </div>
            <div className={cx("content_noti")}>
              <p>
                Cảm ơn bạn đã điền thông tin, chúng tôi sẽ liên hệ bạn sớm nhất
                có thể
              </p>
            </div>
            <div className={cx("button-close")}>
              <button
                onClick={() => {
                  setStatePopup(false);
                }}
              >
                <span>Đóng</span>
              </button>
            </div>
          </div>
        </Popup>
      ) : (
        <></>
      )}
      <div className={cx("content_background")}>
        {/* <img
          src="https://ucc.com.vn/wp-content/uploads/2024/07/anh-lien-he-ucc-1.jpg"
          alt=""
        ></img> */}
        <div className={cx("bg-fill")}></div>
        <div className={cx("text_content")}>
          <h2>LIÊN HỆ</h2>
          <span>
            Nếu bạn có bất kỳ câu hỏi về chúng tôi. Đừng ngần ngại hãy để lại
            thông tin, chúng tôi luôn sẵn sàng hỗ trợ mọi thắc mắc.
          </span>
        </div>
      </div>
      <div className={cx("container_contact")}>
        <div className={cx("content")}>
          <div className={cx("cols")}>
            <div className={cx("col1")}>
              <img
                src="https://ucc.com.vn/wp-content/uploads/2024/01/contact-page-for-flatsome-wordpress-theme-pointed-icon-phone-300x300.png"
                alt=""
              ></img>
              <h3>Liên hệ </h3>
              <p>Bộ phận Kinh doanh</p>
              <div className={cx("button")}>
                <button>
                  <a href="tel:036 790 8639">036 790 8639</a>
                </button>
              </div>
            </div>
            <div className={cx("col2")}>
              <img
                src="https://ucc.com.vn/wp-content/uploads/2024/01/contact-page-for-flatsome-wordpress-theme-pointed-icon-phone-300x300.png"
                alt=""
              ></img>
              <h3>Liên hệ </h3>
              <p>Bộ phận Kinh doanh</p>
              <div className={cx("button")}>
                <button>
                  <a href="mailto:admin@ucc.com.vn">Kỹ thuật viên</a>
                </button>
              </div>
            </div>
          </div>
          <div className={cx("container_content5")}>
            <h2>Bạn quan tâm đến chứng nhận FDA thực phẩm???</h2>
            <p>Hãy liên hệ ngay và nhận tư vấn miễn phí</p>
            <div className={cx("form")}>
              <div className={cx("container_form")}>
                <div className={cx("form-left")}>
                  <h2>Đăng ký ngay</h2>
                  <input
                    name="name"
                    id="name"
                    className={cx("name")}
                    type="text"
                    placeholder="Nhập tên của bạn"
                  ></input>
                  <input
                    name="name"
                    id="name"
                    className={cx("name")}
                    type="text"
                    placeholder="Nhập email của bạn"
                  ></input>
                  <input
                    name="name"
                    id="name"
                    className={cx("name")}
                    type="text"
                    placeholder="Số điện thoại"
                  ></input>
                  <textarea
                    name="name"
                    id="name"
                    className={cx("name")}
                    type="text"
                    placeholder="Nội dung cần tư vấn"
                  ></textarea>
                  <div className={cx("btn-submit")}>
                    <button
                      onClick={() => {
                        setStatePopup(true);
                      }}
                    >
                      <span>Nhận tư vấn ngay</span>
                    </button>
                  </div>
                </div>
                <div className={cx("form-right")}>
                  <img src={require("../../assets/image1.png")} alt="123"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
