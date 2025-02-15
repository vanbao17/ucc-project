import classnames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Header from "../Header/Header";
import Footer2 from "../Footer2/Footer2";
const cx = classnames.bind(styles);
function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper_app")}>
      <div className={cx("container_app")}>
        <Header />
        <div className={cx("container_content")}>{children}</div>
        <Footer2 />
      </div>
    </div>
  );
}

export default DefaultLayout;
