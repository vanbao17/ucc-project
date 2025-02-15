import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Slides.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

const Slides = ({ children, items }) => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 6; // Số item hiển thị

  const nextSlide = () => {
    if (startIndex + visibleItems < items.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className={cx("slider-container")}>
      <div
        className={cx("slider-wrapper")}
        style={{
          transform: `translateX(-${startIndex * (100 / visibleItems)}%)`,
        }}
      >
        {items.map((item, index) => (
          <div key={index} className={cx("slide-item")}>
            {children(item)}
          </div>
        ))}
      </div>

      {/* Nút điều hướng */}
      <button
        className={cx("slider-button", "prev")}
        onClick={prevSlide}
        disabled={startIndex === 0}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        className={cx("slider-button", "next")}
        onClick={nextSlide}
        disabled={startIndex + visibleItems >= items.length}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </div>
  );
};

export default Slides;
