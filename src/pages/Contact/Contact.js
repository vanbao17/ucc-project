import classnames from "classnames/bind";
import styles from "./Contact.module.scss";
const cx = classnames.bind(styles);
function Contact() {
  return (
    <div className={cx("wrapper_contact")}>
      <div className={cx("container_contact")}>Contact</div>
    </div>
  );
}

export default Contact;
