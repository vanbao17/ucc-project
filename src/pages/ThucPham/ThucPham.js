import classnames from "classnames/bind";
import styles from "./ThucPham.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faClose,
  faHome,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { questions } from "../../assets/datas";
import { useState } from "react";
import Popup from "../../components/Popup/Popup";
const cx = classnames.bind(styles);
function ThucPham() {
  const [qs, setQs] = useState(null);
  const [statePoup, setStatePopup] = useState(false);
  return (
    <div className={cx("wrapper_thucPham")}>
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

      <div className={cx("container_nav")}>
        <div className={cx("container_nav_left")}>
          <a href="/">
            <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
          </a>
          <span>&gt;</span>
          <a href="/dich-vu">Dịch vụ DFA</a>
          <span>&gt;</span>
          <a href="/dich-vu">Thực phẩm</a>
        </div>
        <div className={cx("container_nav_right")}>
          <div className={cx("container_right")}>
            <div className={cx("container_input")}>
              <FontAwesomeIcon icon={faSearch} />
              <input type="text" placeholder="Nhập để tìm kiếm"></input>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("container_thucpham")}>
        <div className={cx("container_content1")}>
          <div className={cx("container_content1_left")}>
            <h2>Chứng nhận FDA thực phẩm</h2>
            <span>
              UCC Việt Nam là đối tác đáng tin cậy của các doanh nghiệp Việt
              muốn chinh phục thị trường Mỹ- Một thị trường tiềm năng với giá
              trị xuất khẩu lên đến hàng tỷ USD mỗi năm. UCC cung cấp đa dạng
              các dịch vụ từ thực phẩm, mỹ phẩm, trang thiết bị y tế đến dược
              phẩm. Với hơn 15 năm kinh nghiệm, 2600+ khách hàng tin tưởng sử
              dụng dịch vụ, chúng tôi tự tin mang đến cho quý khách hàng giá trị
              dịch vụ lớn hơn so với giá trị khách hàng trao đi.
            </span>
          </div>
          <div className={cx("container_content1_right")}>
            <img
              src="https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-ucc-viet-nam.jpg"
              alt=""
            ></img>
          </div>
        </div>
        <div className={cx("container_content2")}>
          <div className={cx("container_content2_left")}>
            <img
              src="https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-ucc-viet-nam.jpg"
              alt=""
            ></img>
          </div>
          <div className={cx("container_content2_right")}>
            <h2>Chứng nhận FDA thực phẩm</h2>
            <span>
              UCC Việt Nam là đối tác đáng tin cậy của các doanh nghiệp Việt
              muốn chinh phục thị trường Mỹ- Một thị trường tiềm năng với giá
              trị xuất khẩu lên đến hàng tỷ USD mỗi năm. UCC cung cấp đa dạng
              các dịch vụ từ thực phẩm, mỹ phẩm, trang thiết bị y tế đến dược
              phẩm. Với hơn 15 năm kinh nghiệm, 2600+ khách hàng tin tưởng sử
              dụng dịch vụ, chúng tôi tự tin mang đến cho quý khách hàng giá trị
              dịch vụ lớn hơn so với giá trị khách hàng trao đi.
            </span>
            <div className={cx("button-see-more")}>
              <button>
                <span>Xem thêm</span>
              </button>
            </div>
          </div>
        </div>
        <div className={cx("container_content1")}>
          <div className={cx("container_content1_left")}>
            <h2>Chứng nhận FDA thực phẩm</h2>
            <span>
              UCC Việt Nam là đối tác đáng tin cậy của các doanh nghiệp Việt
              muốn chinh phục thị trường Mỹ- Một thị trường tiềm năng với giá
              trị xuất khẩu lên đến hàng tỷ USD mỗi năm. UCC cung cấp đa dạng
              các dịch vụ từ thực phẩm, mỹ phẩm, trang thiết bị y tế đến dược
              phẩm. Với hơn 15 năm kinh nghiệm, 2600+ khách hàng tin tưởng sử
              dụng dịch vụ, chúng tôi tự tin mang đến cho quý khách hàng giá trị
              dịch vụ lớn hơn so với giá trị khách hàng trao đi.
            </span>
            <div className={cx("button-see-more")}>
              <button>
                <span>Xem thêm</span>
              </button>
            </div>
          </div>
          <div className={cx("container_content1_right")}>
            <img
              src="https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-ucc-viet-nam.jpg"
              alt=""
            ></img>
          </div>
        </div>
        <div className={cx("container_content4")}>
          <h2>Một số câu hỏi thưởng gặp</h2>
          <div className={cx("list_question")}>
            {questions.map((question, index) => {
              return (
                <div
                  className={cx(
                    "item-question",
                    qs === question.id ? "active" : ""
                  )}
                  key={index}
                >
                  <div
                    className={cx(
                      "content_question",
                      qs === question.id ? "active" : ""
                    )}
                    onClick={() => {
                      if (qs === question.id) {
                        setQs(null);
                      } else {
                        setQs(question.id);
                      }
                    }}
                  >
                    <div className={cx("title")}>{question.question}</div>
                    <div className={cx("icon")}>
                      <FontAwesomeIcon
                        icon={qs === question.id ? faChevronUp : faChevronDown}
                      />
                    </div>
                  </div>
                  {questions.filter((q) => q.id === qs)[0] &&
                  qs === question.id ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "fit-content", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={cx("container-question-answer")}
                    >
                      <span className={cx("question-answer")}>
                        {questions.filter((q) => q.id === qs)[0].answer}
                      </span>
                    </motion.div>
                  ) : (
                    <></>
                  )}
                </div>
              );
            })}
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
  );
}

export default ThucPham;
