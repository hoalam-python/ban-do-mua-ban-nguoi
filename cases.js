/* ═══════════════════════════════════════════════════════════════
   DANH SÁCH VỤ ÁN — đây là file duy nhất bạn cần sửa khi thêm vụ mới.

   Mỗi vụ là một dòng, gồm 5 phần:

     tinh  : tên tỉnh, PHẢI trùng đúng một trong 34 tỉnh (xem cuối file)
     ten   : tiêu đề tóm tắt do bạn tự đặt
     ngay  : tháng/năm, dạng "MM/YYYY"
     nguon : tên cơ quan hoặc báo đã đăng
     link  : địa chỉ bài gốc, nhớ có https://

   Lưu ý khi gõ:
     · giữ nguyên dấu phẩy, dấu ngoặc và dấu nháy
     · mỗi vụ kết thúc bằng dấu phẩy, trừ vụ cuối cùng
     · nếu tiêu đề có dấu nháy kép thì dùng nháy đơn bao ngoài
   ═══════════════════════════════════════════════════════════════ */

const VU_AN = [

  /* ─── AN GIANG ──────────────────────────────────────────────── */

  {
    tinh:  "An Giang",
    ten:   "Xã Khánh Bình đẩy mạnh phòng, chống buôn người",
    ngay:  "10/2026",
    nguon: "Công an tỉnh An Giang",
    link:  "https://congan.angiang.gov.vn/cong-an-xa-khanh-binh-tang-cuong-cong-tac-phong-chong-mua-ban-nguoi"
  },
  {
    tinh:  "An Giang",
    ten:   "Quyết tâm ngăn chặn tội phạm mua bán người dưới 16 tuổi",
    ngay:  "06/2025",
    nguon: "Công an tỉnh An Giang",
    link:  "https://congan.angiang.gov.vn/cong-an-tinh-an-giang-quyet-tam-ngan-chan-day-lui-toi-pham-mua-ban-nguoi"
  },
  {
    tinh:  "An Giang",
    ten:   "Tuyên truyền pháp luật về phòng, chống mua bán người cho đoàn viên thanh niên",
    ngay:  "10/2026",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/van-phong-bo-cong-an-phoi-hop-cong-an-tinh-an-giang-tuyen-truyen-phap-luat-ve-phong-chong-mua-ban-nguoi-cho-can-bo-doan-vien-thanh-nien-1791432773"
  },

  /* ─── BẮC NINH ──────────────────────────────────────────────── */

  {
    tinh:  "Bắc Ninh",
    ten:   "Khởi tố 5 đối tượng lừa người sang Trung Quốc bán làm vợ",
    ngay:  "09/2026",
    nguon: "Công an Nhân dân",
    link:  "https://cand.vn/khoi-to-5-doi-tuong-trong-2-vu-an-mua-ban-nguoi-post824427.html"
  },
  {
    tinh:  "Bắc Ninh",
    ten:   "Phá bẫy ảo, ngăn nguy cơ mua bán người — thống kê 6 tháng đầu năm 2026",
    ngay:  "09/2026",
    nguon: "Thanh tra",
    link:  "https://thanhtra.com.vn/an-ninh-trat-tu-D718A18CA/cong-an-bac-ninh-pha-bay-ao-ngan-chan-nguy-co-mua-ban-nguoi-4c9101b78.html"
  },
  {
    tinh:  "Bắc Ninh",
    ten:   "Triệt phá đường dây buôn người, giải cứu 52 nạn nhân có cả trẻ vị thành niên",
    ngay:  "07/2025",
    nguon: "Báo Quảng Ninh",
    link:  "https://baoquangninh.vn/triet-pha-duong-day-buon-nguoi-giai-cuu-52-nan-nhan-co-ca-tre-vi-thanh-nien-post3366165.html"
  },

  /* ─── CÀ MAU ────────────────────────────────────────────────── */

  {
    tinh:  "Cà Mau",
    ten:   "Hơn 94 năm tù cho nhóm đối tượng mua bán người",
    ngay:  "09/2025",
    nguon: "VOV",
    link:  "https://vov.vn/phap-luat/hon-94-nam-tu-cho-nhom-doi-tuong-mua-ban-nguoi-o-ca-mau-post1231356.vov"
  },
  {
    tinh:  "Cà Mau",
    ten:   "Thông báo tìm bị hại trong vụ án mua bán người",
    ngay:  "01/2026",
    nguon: "Công an tỉnh Cà Mau",
    link:  "https://congan.camau.gov.vn/ch2/171-Co-quan-An-ninh-dieu-tra-Cong-an-tinh-Ca-Mau-Thong-bao-tim-bi-hai-trong-vu-an-Mua-ban-nguoi.html"
  },
  {
    tinh:  "Cà Mau",
    ten:   "Bị khởi tố vì giới thiệu 5 người thân cho nhóm buôn người sang Campuchia",
    ngay:  "08/2024",
    nguon: "VnExpress",
    link:  "https://vnexpress.net/bi-khoi-to-vi-gioi-thieu-5-nguoi-than-cho-nhom-buon-nguoi-sang-campuchia-4777583.html"
  },

  /* ─── CAO BẰNG ──────────────────────────────────────────────── */

  {
    tinh:  "Cao Bằng",
    ten:   "Triệt phá đường dây mua bán người dưới 16 tuổi sang Campuchia làm việc tại các công ty",
    ngay:  "02/2026",
    nguon: "Công an tỉnh Cao Bằng",
    link:  "https://congan.caobang.gov.vn/an-ninh-trat-tu/cao-bang-triet-pha-duong-day-mua-ban-nguoi-duoi-16-tuoi-sang-campuchia-lam-viec-tai-cac-cong-ty--1042275"
  },
  {
    tinh:  "Cao Bằng",
    ten:   "Khởi tố, bắt đối tượng lừa bán người dưới 16 tuổi sang Trung Quốc",
    ngay:  "03/2025",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/cao-bang-khoi-to-bat-doi-tuong-lua-ban-nguoi-duoi-16-tuoi-d143-t44112"
  },

  /* ─── ĐẮK LẮK ───────────────────────────────────────────────── */

  {
    tinh:  "Đắk Lắk",
    ten:   "Điều tra 13 vụ, khởi tố 41 bị can về tội phạm mua bán người",
    ngay:  "07/2025",
    nguon: "Báo Lao động",
    link:  "https://laodong.vn/phap-luat/dak-lak-dieu-tra-13-vu-khoi-to-41-bi-can-ve-toi-pham-mua-ban-nguoi-1542627.ldo"
  },
  {
    tinh:  "Đắk Lắk",
    ten:   "Cảnh giác thủ đoạn mua bán người núp bóng cơ sở kinh doanh dịch vụ giải trí",
    ngay:  "10/2025",
    nguon: "Pháp luật Plus",
    link:  "https://phapluatplus.baophapluat.vn/dak-lak-canh-giac-voi-thu-doan-mua-ban-nguoi-nup-bong-cac-co-so-kinh-doanh-dich-vu-giai-tri-227024.html"
  },
  {
    tinh:  "Đắk Lắk",
    ten:   "Xét xử 2 kẻ buôn người từ Việt Nam qua Campuchia",
    ngay:  "01/2025",
    nguon: "Viện Kiểm sát Nhân dân tỉnh Đắk Lắk",
    link:  "https://vksdaklak.gov.vn/dak-lak-xet-xu-2-ke-buon-nguoi-tu-viet-nam-qua-campuchia-3817.html"
  }

  /* ─── THÊM VỤ MỚI ────────────────────────────────────────────

     Chép đúng mẫu dưới đây, dán vào trước dòng "];".
     Nhớ: vụ phía trước phải có dấu phẩy ở cuối.

  ,{
    tinh:  "Đắk Lắk",
    ten:   "Tiêu đề bạn tự đặt",
    ngay:  "05/2026",
    nguon: "Công an tỉnh Đắk Lắk",
    link:  "https://..."
  }

     ─────────────────────────────────────────────────────────── */

];


/* ═══════════════════════════════════════════════════════════════
   34 TỈNH, THÀNH HỢP LỆ — chép đúng tên từ danh sách này.
   Gõ sai tên thì vụ đó sẽ không hiện lên bản đồ.

   Hà Nội · Huế · Lai Châu · Điện Biên · Sơn La · Lạng Sơn
   Quảng Ninh · Thanh Hóa · Nghệ An · Hà Tĩnh · Cao Bằng
   Tuyên Quang · Lào Cai · Thái Nguyên · Phú Thọ · Bắc Ninh
   Hưng Yên · Hải Phòng · Ninh Bình · Quảng Trị · Đà Nẵng
   Quảng Ngãi · Gia Lai · Khánh Hòa · Lâm Đồng · Đắk Lắk
   Thành phố Hồ Chí Minh · Đồng Nai · Tây Ninh · Cần Thơ
   Vĩnh Long · Đồng Tháp · Cà Mau · An Giang

   Một số tỉnh cũ đã nhập vào tỉnh mới, ví dụ:
     Hà Giang   → ghi "Tuyên Quang"
     Yên Bái    → ghi "Lào Cai"
     Phú Yên    → ghi "Đắk Lắk"
     Quảng Bình → ghi "Quảng Trị"
     Quảng Nam  → ghi "Đà Nẵng"
     Kiên Giang → ghi "An Giang"
     Bình Dương, Bà Rịa - Vũng Tàu → ghi "Thành phố Hồ Chí Minh"
   ═══════════════════════════════════════════════════════════════ */
