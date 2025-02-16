export const navigations = [
  {
    id: 1,
    title: "Về chúng tôi",
    path: "/about-us",
  },
  {
    id: 2,
    title: "Dịch vụ FDA",
    childrens: [
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Thực phẩm",
        path: "/dich-vu/thuc-pham",
        list_nav: [
          {
            text: "Đăng ký cơ sở thực phẩm",
            path: "/",
          },
          {
            text: "Đăng ký FCE& SID",
            path: "/",
          },
          {
            text: "Đại diện FSVP",
            path: "/",
          },
          {
            text: "Tư vấn nhãn thực phẩm",
            path: "/",
          },
          {
            text: "Thông báo Prior notice",
            path: "/",
          },
        ],
      },
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Mỹ phẩm",
        list_nav: [
          {
            text: "Đăng ký cơ sở mỹ phẩm",
            path: "/",
          },
          {
            text: "Tư vấn nhãn mỹ phẩm",
            path: "/",
          },
          {
            text: "Listing sản phẩm mỹ phẩm",
            path: "/",
          },
        ],
      },
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Thiết bị y tế",
        list_nav: [
          {
            text: "Đăng ký cơ sở thiết bị y tế",
            path: "/",
          },
          {
            text: "Tư vấn nhãn thiết bị y tế",
            path: "/",
          },
          {
            text: "Listing sản phẩm",
            path: "/",
          },
          {
            text: "Đệ trình 510k",
            path: "/",
          },
          {
            text: "Đệ trình IDE",
            path: "/",
          },
        ],
      },
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Dược phẩm",
        list_nav: [
          {
            text: "Đăng ký cơ sở  dược phẩm",
            path: "/",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: "Dịch vụ khác",
    childrens: [
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Châu âu",
        list_nav: [
          {
            text: "Đại diện châu âu",
            path: "/",
          },
          {
            text: "Chứng nhận CE",
            path: "/",
          },
        ],
      },
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Châu úc",
        list_nav: [
          {
            text: "Đại diện châu úc",
            path: "/",
          },
        ],
      },
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Hàn quốc",
        list_nav: [
          {
            text: "Đăng ký KFDA",
            path: "/",
          },
          {
            text: "Tư vấn nhãn thực phẩm",
            path: "/",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Tin tức",
    childrens: [
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Về UCC",
      },
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Dự án",
      },
      {
        thumb:
          "https://ucc.com.vn/wp-content/uploads/2024/09/chung-nhan-cruelty-free.jpg",
        title_children: "Tin tổng hợp",
      },
    ],
  },
  {
    id: 5,
    title: "Liên hệ",
    path: "/lien-he",
  },
];
export const flags = [
  {
    id: "vi",
    title: "Việt nam",
    image: require("../flags/flag-vietnam.png"),
  },
  {
    id: "en",
    title: "Anh",
    image: require("../flags/flag-england.png"),
  },
  {
    id: "th",
    title: "Thái lan",
    image: require("../flags/flag-thailand.png"),
  },
  {
    id: "ko",
    title: "Hàn quốc",
    image: require("../flags/flag-korean.png"),
  },
];
export const questions = [
  {
    id: 1,
    question: "Cloud Server là gì?",
    answer:
      "Cloud Server là hệ thống máy chủ hiệu năng cao được ảo hóa trên nền tảng điện toán đám mây. Việc ảo hóa trên các cụm máy chủ vật lý mạnh mẽ giúp hệ thống của doanh nghiệp luôn ổn định, sẵn sàng cao và không bị tắc nghẽn khi có lượng truy cập lớn. Với lượng tài nguyên dự phòng lớn, máy chủ ảo Cloud Server cho phép doanh nghiệp mở rộng tài nguyên gần như ngay lập tức bất cứ khi nào có nhu cầu, giúp khách hàng yên tâm tập trung vào hoạt động kinh doanh với nền tảng đám mây bảo mật cùng khả năng xử lý vượt trội hơn rất nhiều so với Shared Hosting thông thường. CLoud Server hỗ trợ đầy đủ các hệ điều hành Windows, Linux và các ứng dụng được cài đặt sẵn.",
  },
  {
    id: 2,
    question: "Khi nào tôi nên sử dụng dịch vụ Cloud Server?",
    answer:
      "Cloud Server là hệ thống máy chủ hiệu năng cao được ảo hóa trên nền tảng điện toán đám mây. Việc ảo hóa trên các cụm máy chủ vật lý mạnh mẽ giúp hệ thống của doanh nghiệp luôn ổn định, sẵn sàng cao và không bị tắc nghẽn khi có lượng truy cập lớn. Với lượng tài nguyên dự phòng lớn, máy chủ ảo Cloud Server cho phép doanh nghiệp mở rộng tài nguyên gần như ngay lập tức bất cứ khi nào có nhu cầu, giúp khách hàng yên tâm tập trung vào hoạt động kinh doanh với nền tảng đám mây bảo mật cùng khả năng xử lý vượt trội hơn rất nhiều so với Shared Hosting thông thường. CLoud Server hỗ trợ đầy đủ các hệ điều hành Windows, Linux và các ứng dụng được cài đặt sẵn.",
  },
  {
    id: 3,
    question: "iNET có hỗ trợ cài đặt và chuyển dữ liệu không?",
    answer:
      "Cloud Server là hệ thống máy chủ hiệu năng cao được ảo hóa trên nền tảng điện toán đám mây. Việc ảo hóa trên các cụm máy chủ vật lý mạnh mẽ giúp hệ thống của doanh nghiệp luôn ổn định, sẵn sàng cao và không bị tắc nghẽn khi có lượng truy cập lớn. Với lượng tài nguyên dự phòng lớn, máy chủ ảo Cloud Server cho phép doanh nghiệp mở rộng tài nguyên gần như ngay lập tức bất cứ khi nào có nhu cầu, giúp khách hàng yên tâm tập trung vào hoạt động kinh doanh với nền tảng đám mây bảo mật cùng khả năng xử lý vượt trội hơn rất nhiều so với Shared Hosting thông thường. CLoud Server hỗ trợ đầy đủ các hệ điều hành Windows, Linux và các ứng dụng được cài đặt sẵn.",
  },
  {
    id: 4,
    question:
      "Tôi có thể dùng thử dịch vụ Cloud Server trước khi đăng ký không?",
    answer:
      "Cloud Server là hệ thống máy chủ hiệu năng cao được ảo hóa trên nền tảng điện toán đám mây. Việc ảo hóa trên các cụm máy chủ vật lý mạnh mẽ giúp hệ thống của doanh nghiệp luôn ổn định, sẵn sàng cao và không bị tắc nghẽn khi có lượng truy cập lớn. Với lượng tài nguyên dự phòng lớn, máy chủ ảo Cloud Server cho phép doanh nghiệp mở rộng tài nguyên gần như ngay lập tức bất cứ khi nào có nhu cầu, giúp khách hàng yên tâm tập trung vào hoạt động kinh doanh với nền tảng đám mây bảo mật cùng khả năng xử lý vượt trội hơn rất nhiều so với Shared Hosting thông thường. CLoud Server hỗ trợ đầy đủ các hệ điều hành Windows, Linux và các ứng dụng được cài đặt sẵn.",
  },
];
