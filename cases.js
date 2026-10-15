/* ═══════════════════════════════════════════════════════════════
   DANH SÁCH VỤ ÁN — đây là file duy nhất bạn cần sửa khi thêm vụ mới.

   Mỗi vụ là một dòng, gồm 6 phần:

     tinh  : tên tỉnh, PHẢI trùng đúng một trong 34 tỉnh (xem cuối file)
     ten   : tiêu đề tóm tắt do bạn tự đặt
     ngay  : tháng/năm, dạng "MM/YYYY"
     nguon : tên cơ quan hoặc báo đã đăng
     link  : địa chỉ bài gốc, nhớ có https://
     demo  : chỉ dùng cho dữ liệu mẫu — vụ thật KHÔNG cần dòng này

   Lưu ý khi gõ:
     · giữ nguyên dấu phẩy, dấu ngoặc và dấu nháy
     · mỗi vụ kết thúc bằng dấu phẩy, trừ vụ cuối cùng
     · nếu tiêu đề có dấu nháy kép thì dùng nháy đơn bao ngoài
   ═══════════════════════════════════════════════════════════════ */

const VU_AN = [

  /* ───────────────────────────────────────────────────────────
     DỮ LIỆU MẪU — chỉ để bạn xem trang chạy thế nào.
     Đây KHÔNG phải vụ án có thật, link cũng không dẫn tới bài nào.
     Hãy xoá toàn bộ phần này trước khi chia sẻ trang cho người khác.
     Khi còn dòng mẫu, trang sẽ tự hiện dải cảnh báo màu vàng.
     ─────────────────────────────────────────────────────────── */

  {
    tinh:  "Đắk Lắk",
    ten:   "Triệt phá đường dây đưa người sang Campuchia làm việc cưỡng bức",
    ngay:  "03/2024",
    nguon: "Công an tỉnh Đắk Lắk",
    link:  "https://bocongan.gov.vn",
    demo:  true
  },
  {
    tinh:  "Lào Cai",
    ten:   "Bắt đối tượng dụ dỗ phụ nữ sang Trung Quốc bằng chiêu việc lương cao",
    ngay:  "01/2024",
    nguon: "Công an tỉnh Lào Cai",
    link:  "https://bocongan.gov.vn",
    demo:  true
  },
  {
    tinh:  "Nghệ An",
    ten:   "Giải cứu 4 nạn nhân bị mua bán qua đường mòn biên giới",
    ngay:  "11/2023",
    nguon: "Công an tỉnh Nghệ An",
    link:  "https://bocongan.gov.vn",
    demo:  true
  }

  /* ─── HẾT PHẦN DỮ LIỆU MẪU ───────────────────────────────────

     Thêm vụ thật theo đúng mẫu dưới đây.
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
