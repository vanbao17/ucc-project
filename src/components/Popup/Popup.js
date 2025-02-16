import classnames from "classnames/bind";
import styles from "./Popup.module.scss";
const cx = classnames.bind(styles);
function Popup({
  children,
  width = "",
  height = "",
  maxHeight = "",
  top = "",
}) {
  return (
    <div className={cx("wrapper_popup")}>
      <div
        className={cx("container_popup")}
        style={{ width: width, height: height, maxHeight: maxHeight, top: top }}
      >
        <div className={cx("form")}>{children}</div>
      </div>
      <div className={cx("black")}></div>
    </div>
  );
}

export default Popup;
