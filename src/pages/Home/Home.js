import classnames from "classnames/bind";
import styles from "./Home.module.scss";
import Slides from "../../components/Slides/Slides";
const cx = classnames.bind(styles);
function Home() {
  const data = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
  ];
  return (
    <div className={cx("wrapper_home")}>
      <div className={cx("container_home")}>
        <div className={cx("content1")}>
          <div className={cx("content1-left")}>
            <h2>UCC VIỆT NAM - ĐỐI TÁC ĐÁNG TIN CẬY</h2>
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
          <div className={cx("content1-right")}>
            <img
              src="https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-ucc-viet-nam.jpg"
              alt="123"
            ></img>
          </div>
        </div>
        <div className={cx("content2")}>
          <h2>ĐẠI DIỆN MỸ ĐĂNG KÝ FDA</h2>
          <div className={cx("content2-desctiption")}>
            <span>
              Để đưa sản phẩm vào thị trường Mỹ, tất cả các sản phẩm được quản
              lý bởi FDA đều cần đăng ký cơ sở và tuân thủ các yêu cầu quản lý
              của cơ quan này. Tùy vào từng lĩnh vực và sản phẩm mà sẽ có những
              yêu cầu đặt thù riêng. UCC Việt Nam là đối tác đáng tin cậy giúp
              doanh nghiệp của bạn tuân thủ đầy đủ và chính xác các yêu cầu của
              FDA.
            </span>
          </div>
          <div className={cx("container_content2")}>
            <div className={cx("content2-listcard")}>
              <div className={cx("card")}>
                <div className={cx("card-left")}>
                  <img
                    src="https://ucc.com.vn/wp-content/uploads/2025/01/tieu-chuan-globap-gap.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={cx("card-right")}>
                  <h3>Thực phẩm</h3>
                  <div className={cx("description-card")}>
                    Đạo luật Hiện đại hóa An toàn Thực phẩm (FSMA) được ban hàng
                    ngày 4/1/2011, đã có những thay đổi to lớn về việc đăng ký
                    cơ sở cũng như quyền hạn quản lý của FDA đối với các sản
                    phẩm thực phẩm được nhập khẩu vào Mỹ.
                  </div>
                  <div className={cx("button-see-more")}>
                    <button>
                      <span>Xem thêm</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("card")}>
                <div className={cx("card-left")}>
                  <img
                    src="https://ucc.com.vn/wp-content/uploads/2025/01/tieu-chuan-globap-gap.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={cx("card-right")}>
                  <h3>Thực phẩm</h3>
                  <div className={cx("description-card")}>
                    Đạo luật Hiện đại hóa An toàn Thực phẩm (FSMA) được ban hàng
                    ngày 4/1/2011, đã có những thay đổi to lớn về việc đăng ký
                    cơ sở cũng như quyền hạn quản lý của FDA đối với các sản
                    phẩm thực phẩm được nhập khẩu vào Mỹ.
                  </div>
                  <div className={cx("button-see-more")}>
                    <button>
                      <span>Xem thêm</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("card")}>
                <div className={cx("card-left")}>
                  <img
                    src="https://ucc.com.vn/wp-content/uploads/2025/01/tieu-chuan-globap-gap.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={cx("card-right")}>
                  <h3>Thực phẩm</h3>
                  <div className={cx("description-card")}>
                    Đạo luật Hiện đại hóa An toàn Thực phẩm (FSMA) được ban hàng
                    ngày 4/1/2011, đã có những thay đổi to lớn về việc đăng ký
                    cơ sở cũng như quyền hạn quản lý của FDA đối với các sản
                    phẩm thực phẩm được nhập khẩu vào Mỹ.
                  </div>
                  <div className={cx("button-see-more")}>
                    <button>
                      <span>Xem thêm</span>
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("card")}>
                <div className={cx("card-left")}>
                  <img
                    src="https://ucc.com.vn/wp-content/uploads/2025/01/tieu-chuan-globap-gap.jpg"
                    alt=""
                  ></img>
                </div>
                <div className={cx("card-right")}>
                  <h3>Thực phẩm</h3>
                  <div className={cx("description-card")}>
                    Đạo luật Hiện đại hóa An toàn Thực phẩm (FSMA) được ban hàng
                    ngày 4/1/2011, đã có những thay đổi to lớn về việc đăng ký
                    cơ sở cũng như quyền hạn quản lý của FDA đối với các sản
                    phẩm thực phẩm được nhập khẩu vào Mỹ.
                  </div>
                  <div className={cx("button-see-more")}>
                    <button>
                      <span>Xem thêm</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("content3")}>
          <h2>TẠI SAO NÊN CHỌN UCC VIỆT NAM</h2>
          <div className={cx("container_content3")}>
            <div className={cx("list-card-content3")}>
              <div className={cx("item")}>
                <img src={require("../../assets/image.png")} alt="123"></img>
                <h3>Đội ngũ chuyên gia</h3>
                <span>
                  Đội ngũ chuyên gia giàu kinh nghiệm, hỗ trợ tư vấn tận tâm,
                  chuyên nghiệp
                </span>
              </div>
              <div className={cx("item")}>
                <img src={require("../../assets/image.png")} alt="123"></img>
                <h3>Dịch vụ đa dạng, trọn gói</h3>
                <span>
                  Đội ngũ chuyên gia giàu kinh nghiệm, hỗ trợ tư vấn tận tâm,
                  chuyên nghiệp
                </span>
              </div>
              <div className={cx("item")}>
                <img src={require("../../assets/image.png")} alt="123"></img>
                <h3>Kinh nghiệm</h3>
                <span>
                  Đội ngũ chuyên gia giàu kinh nghiệm, hỗ trợ tư vấn tận tâm,
                  chuyên nghiệp
                </span>
              </div>
              <div className={cx("item")}>
                <img src={require("../../assets/image.png")} alt="123"></img>
                <h3>Chi phí tối ưu, không phát sinh</h3>
                <span>
                  Đội ngũ chuyên gia giàu kinh nghiệm, hỗ trợ tư vấn tận tâm,
                  chuyên nghiệp
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("content4")}>
          <h2>ĐỐI TÁC CỦA CHÚNG TÔI</h2>
          <div className={cx("list-partner")}>
            <img
              src="http://localhost:3000/static/media/image.22c5aeca60b448b50c31.png"
              alt=""
            ></img>
            <img
              src="http://localhost:3000/static/media/image.22c5aeca60b448b50c31.png"
              alt=""
            ></img>
            <img
              src="http://localhost:3000/static/media/image.22c5aeca60b448b50c31.png"
              alt=""
            ></img>
            <img
              src="http://localhost:3000/static/media/image.22c5aeca60b448b50c31.png"
              alt=""
            ></img>
            <img
              src="http://localhost:3000/static/media/image.22c5aeca60b448b50c31.png"
              alt=""
            ></img>
            <img
              src="http://localhost:3000/static/media/image.22c5aeca60b448b50c31.png"
              alt=""
            ></img>
          </div>
        </div>
        <div className={cx("content5")}>
          <h2>KHÁCH HÀNG CỦA CHÚNG TÔI</h2>
          <Slides items={data}>
            {(item) => (
              <div className={cx("item-content5")}>
                <img
                  src="https://ucc.com.vn/wp-content/uploads/2025/01/tieu-chuan-globap-gap.jpg"
                  alt="123"
                ></img>
              </div>
            )}
          </Slides>
        </div>
        <div className={cx("content6")}>
          <h2>TIN TỨC MỚI NHẤT</h2>
          <Slides items={data}>
            {(item) => (
              <div className={cx("item-content6")}>
                <img
                  src="https://ucc.com.vn/wp-content/uploads/2025/01/tieu-chuan-globap-gap.jpg"
                  alt="123"
                ></img>
                <h3>Tiêu đề</h3>
                <span>Đây là mô tả</span>
              </div>
            )}
          </Slides>
        </div>
      </div>
    </div>
  );
}

export default Home;
