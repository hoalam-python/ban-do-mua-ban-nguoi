/* ═══════════════════════════════════════════════════════════════
   DANH SÁCH VỤ ÁN — đây là file duy nhất bạn cần sửa khi thêm vụ mới.

   Mỗi vụ gồm 5 phần:

     tinh  : tên tỉnh, PHẢI trùng đúng một trong 34 tỉnh (xem cuối file)
     ten   : tiêu đề tóm tắt
     ngay  : tháng/năm, dạng "MM/YYYY"
     nguon : tên cơ quan hoặc báo đã đăng
     link  : địa chỉ bài gốc, nhớ có https://

   Lưu ý khi gõ:
     · giữ nguyên dấu phẩy, dấu ngoặc và dấu nháy
     · mỗi vụ kết thúc bằng dấu phẩy, trừ vụ cuối cùng
     · nếu tiêu đề có dấu nháy kép thì dùng nháy đơn bao ngoài

   Sắp xếp: theo tỉnh (thứ tự bản đồ từ Bắc vào Nam), vụ mới nhất lên trước.
   ═══════════════════════════════════════════════════════════════ */

const VU_AN = [

  /* ─── HÀ NỘI ─── */
  {
    tinh:  "Hà Nội",
    ten:   "Hoàn cảnh một em bị lừa vào karaoke",
    ngay:  "10/2026",
    nguon: "VTV",
    link:  "https://vtv.vn/giai-cuu-34-nan-nhan-khoi-o-nhom-mua-ban-nguoi-trong-do-co-12-tre-duoi-16-tuoi-100261009085022287.htm"
  },
  {
    tinh:  "Hà Nội",
    ten:   "Mua bán nội tạng",
    ngay:  "06/2025",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/thong-tin-ve-vu-an-mua-ban-bo-phan-co-the-nguoi-1758265918"
  },

  /* ─── HUẾ ─── */
  {
    tinh:  "Huế",
    ten:   "Mua bán người dưới 16 tuổi",
    ngay:  "07/2025",
    nguon: "Báo Bảo vệ Pháp luật",
    link:  "https://baovephapluat.vn/phap-dinh/toa-tuyen-an/tuyen-an-273-thang-tu-voi-4-bi-cao-lua-dua-nguoi-sang-campuchia-180325.html"
  },

  /* ─── LAI CHÂU ─── */
  {
    tinh:  "Lai Châu",
    ten:   "Hợp tác Bộ Công an Lào bắt tội phạm buôn người",
    ngay:  "07/2026",
    nguon: "VietnamNet",
    link:  "https://vietnamnet.vn/cong-an-lai-chau-dot-kich-sao-huyet-lua-dao-o-lao-40-nguoi-bi-bat-giu-2537747.html"
  },
  {
    tinh:  "Lai Châu",
    ten:   "Tìm chồng nước ngoài",
    ngay:  "05/2026",
    nguon: "Bộ Công an",
    link:  "https://www.bocongan.gov.vn/bai-viet/kip-thoi-ngan-chan-vu-mua-ban-nguoi-duoi-vo-boc-tim-chong-nuoc-ngoai-1778038161"
  },

  /* ─── ĐIỆN BIÊN ─── */
  {
    tinh:  "Điện Biên",
    ten:   "Việc nhẹ lương cao",
    ngay:  "08/2025",
    nguon: "Công an tỉnh Điện Biên",
    link:  "https://congan.dienbien.gov.vn/danh-muc-tin-tuc/bat-05-doi-tuong-mua-ban-nguoi-11980.html"
  },
  {
    tinh:  "Điện Biên",
    ten:   "Ép làm công ty lừa đảo qua mạng",
    ngay:  "07/2025",
    nguon: "ANTV",
    link:  "https://antv.gov.vn/phap-luat-3/dien-bien-khoi-to-bat-tam-giam-3-bi-can-ve-hanh-vi-mua-ban-nguoi-681157355.html"
  },

  /* ─── SƠN LA ─── */
  {
    tinh:  "Sơn La",
    ten:   "Vận chuyển và bán người sang Trung Quốc",
    ngay:  "09/2026",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/son-la-bat-giu-thanh-cong-doi-tuong-mua-ban-nguoi-sau-8-nam-lan-tron-1790137071"
  },
  {
    tinh:  "Sơn La",
    ten:   "Vì tiền bán cả người thân",
    ngay:  "08/2025",
    nguon: "VOV",
    link:  "https://vov.vn/phap-luat/mua-ban-nguoi-o-vung-cao-son-la-vi-tien-ban-ca-nguoi-than-post1225948.vov"
  },

  /* ─── LẠNG SƠN ─── */
  {
    tinh:  "Lạng Sơn",
    ten:   "Bắt 2 đối tượng buôn người",
    ngay:  "10/2025",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/lang-son-khoi-to-02-doi-tuong-ve-hanh-vi-mua-ban-nguoi-1760418769"
  },
  {
    tinh:  "Lạng Sơn",
    ten:   "Đưa phụ nữ sang Trung Quốc với số lượng lớn",
    ngay:  "01/2025",
    nguon: "Báo Quân đội Nhân dân",
    link:  "https://sknc.qdnd.vn/tren-mat-tran-tham-lang/pha-duong-day-buon-nguoi-503703"
  },
  {
    tinh:  "Lạng Sơn",
    ten:   "Buôn người dưới 16 tuổi vào karaoke",
    ngay:  "10/2023",
    nguon: "Cổng TTĐT tỉnh Lạng Sơn",
    link:  "https://langson.gov.vn/thong-tin-tuyen-truen/tuyen-truyen-thuc-hien-chinh-sach-phap-luat-bhxh-tuyen-truyen-mua-ban-nguoi-tu-yen-truyen-phong-chong-phao-tuyen-truyen-/khoi-to-2-doi-tuong-mua-ban-nguoi-va-mua-ban-nguoi-duoi-16-tuoi.html"
  },

  /* ─── QUẢNG NINH ─── */
  {
    tinh:  "Quảng Ninh",
    ten:   "Tiếp cận các cháu gái qua mạng bán vào karaoke",
    ngay:  "01/2026",
    nguon: "Công an Thành phố Quảng Ninh",
    link:  "https://congan.quangninh.gov.vn/tin-antt-va-canh-bao-toi-pham/phong-canh-sat-hinh-su-cong-an-tinh-quang-ninh-khoi-to-vu-an-mua-ban-nguoi-va-danh-bac-tren-dia-ban-tinh-43061.html"
  },

  /* ─── THANH HÓA ─── */
  {
    tinh:  "Thanh Hóa",
    ten:   "Mua bán người dưới 16 tuổi",
    ngay:  "10/2026",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/thanh-hoa-khoi-to-vu-an-mua-ban-nguoi-duoi-16-tuoi-giam-nguoi-trai-phap-luat-tai-co-so-karaoke-1791339323"
  },
  {
    tinh:  "Thanh Hóa",
    ten:   "Mua bán người dưới 16 tuổi",
    ngay:  "11/2024",
    nguon: "Báo Lao động",
    link:  "https://laodong.vn/phap-luat/thanh-hoa-bat-4-doi-tuong-mua-ban-nguoi-duoi-16-tuoi-1416948.ldo"
  },

  /* ─── NGHỆ AN ─── */
  {
    tinh:  "Nghệ An",
    ten:   "Bán phụ nữ ra nước ngoài làm vợ",
    ngay:  "07/2026",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/cong-an-tinh-nghe-an-triet-xoa-02-duong-day-mua-ban-nguoi-qua-bien-gioi-bat-giu-06-doi-tuong-1784623632"
  },
  {
    tinh:  "Nghệ An",
    ten:   "Bán 2 người phụ nữ cùng xã hưởng 40 triệu",
    ngay:  "01/2026",
    nguon: "Công an tỉnh Nghệ An",
    link:  "https://congan.nghean.gov.vn/tin-tuc-su-kien/an-ninh-trat-tu/202601/bat-giu-doi-tuong-mua-ban-nguoi-1053705/"
  },

  /* ─── HÀ TĨNH ─── */
  {
    tinh:  "Hà Tĩnh",
    ten:   "Đối tượng cầm đầu đường dây 155 người tham gia buôn người",
    ngay:  "08/2026",
    nguon: "VTV",
    link:  "https://vtv.vn/bat-nu-quai-28-tuoi-cam-dau-duong-day-lua-dao-mua-ban-nguoi-xuyen-quoc-gia-100260826220826612.htm"
  },
  {
    tinh:  "Hà Tĩnh",
    ten:   "Giải cứu 36 người, bắt 4 đối tượng",
    ngay:  "06/2024",
    nguon: "Báo Nhân Dân",
    link:  "https://nhandan.vn/cong-an-ha-tinh-bat-4-doi-tuong-ve-hanh-vi-mua-ban-nguoi-post812977.html"
  },

  /* ─── CAO BẰNG ─── */
  {
    tinh:  "Cao Bằng",
    ten:   "Buôn người dưới 16 tuổi sang Campuchia",
    ngay:  "02/2026",
    nguon: "Công an tỉnh Cao Bằng",
    link:  "https://congan.caobang.gov.vn/an-ninh-trat-tu/cao-bang-triet-pha-duong-day-mua-ban-nguoi-duoi-16-tuoi-sang-campuchia-lam-viec-tai-cac-cong-ty--1042275"
  },
  {
    tinh:  "Cao Bằng",
    ten:   "Lừa bán người dưới 16 tuổi sang Trung Quốc",
    ngay:  "03/2025",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/cao-bang-khoi-to-bat-doi-tuong-lua-ban-nguoi-duoi-16-tuoi-d143-t44112"
  },

  /* ─── TUYÊN QUANG ─── */
  {
    tinh:  "Tuyên Quang",
    ten:   "Mua bán người dưới 16 tuổi vào karaoke",
    ngay:  "09/2022",
    nguon: "Báo Thanh tra",
    link:  "https://thanhtra.com.vn/phap-luat/an-ninh-trat-tu/cong-an-tuyen-quang-bat-giam-2-doi-tuong-triet-pha-duong-day-mua-ban-nguoi-201907.html"
  },

  /* ─── LÀO CAI ─── */
  {
    tinh:  "Lào Cai",
    ten:   "Lợi dụng hôn nhân mua bán người",
    ngay:  "10/2026",
    nguon: "Thông tấn xã Việt Nam",
    link:  "https://www.vietnamplus.vn/lao-cai-day-lui-toi-pham-mua-ban-nguoi-tren-bien-gioi-post1141666.vnp"
  },
  {
    tinh:  "Lào Cai",
    ten:   "Lừa đảo người sang Campuchia",
    ngay:  "09/2025",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/cong-an-tinh-lao-cai-khoi-to-03-doi-tuong-ve-toi-mua-ban-nguoi-1757909436"
  },

  /* ─── PHÚ THỌ ─── */
  {
    tinh:  "Phú Thọ",
    ten:   "Mua bán người dưới 16 tuổi vào karaoke",
    ngay:  "08/2026",
    nguon: "Công an Phú Thọ",
    link:  "https://congan.phutho.gov.vn/article/Khoi-to-3-bi-can-ve-toi-mua-ban-nguoi-duoi-16-tuoi-31092-9"
  },
  {
    tinh:  "Phú Thọ",
    ten:   "Mua bán người dưới 16 tuổi",
    ngay:  "02/2026",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/khoi-to-vu-an-mua-ban-nguoi-duoi-16-tuoi-tai-xa-binh-nguyen-1770524131"
  },

  /* ─── BẮC NINH ─── */
  {
    tinh:  "Bắc Ninh",
    ten:   "Lừa người sang Trung Quốc bán làm vợ",
    ngay:  "09/2026",
    nguon: "Báo Công an Nhân dân",
    link:  "https://cand.vn/khoi-to-5-doi-tuong-trong-2-vu-an-mua-ban-nguoi-post824427.html"
  },
  {
    tinh:  "Bắc Ninh",
    ten:   "Thống kê 3 tháng, 6 tháng đầu năm 2026",
    ngay:  "09/2026",
    nguon: "Báo Thanh tra",
    link:  "https://thanhtra.com.vn/an-ninh-trat-tu-D718A18CA/cong-an-bac-ninh-pha-bay-ao-ngan-chan-nguy-co-mua-ban-nguoi-4c9101b78.html"
  },
  {
    tinh:  "Bắc Ninh",
    ten:   "Đại án giải cứu 52 người",
    ngay:  "07/2025",
    nguon: "Báo Quảng Ninh",
    link:  "https://baoquangninh.vn/triet-pha-duong-day-buon-nguoi-giai-cuu-52-nan-nhan-co-ca-tre-vi-thanh-nien-post3366165.html"
  },

  /* ─── HƯNG YÊN ─── */
  {
    tinh:  "Hưng Yên",
    ten:   "Buôn người dưới 16 tuổi vào quán karaoke",
    ngay:  "09/2026",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/co-quan-canh-sat-dieu-tra-cong-an-tinh-dieu-tra-lam-ro-06-doi-tuong-co-hanh-vi-mua-ban-nguoi-va-mua-ban-nguoi-duoi-16-tuoi-1789628919"
  },
  {
    tinh:  "Hưng Yên",
    ten:   "Mua bán người vào dịch vụ karaoke",
    ngay:  "08/2026",
    nguon: "Báo Lao động",
    link:  "https://laodong.vn/phap-luat/khoi-to-nhom-doi-tuong-ve-toi-mua-ban-nguoi-tai-hung-yen-1751201.ldo"
  },

  /* ─── HẢI PHÒNG ─── */
  {
    tinh:  "Hải Phòng",
    ten:   "Họ hàng lập đường dây buôn người",
    ngay:  "09/2025",
    nguon: "Báo Hải Phòng",
    link:  "https://baohaiphong.vn/pha-chuyen-an-mua-ban-nguoi-giai-cuu-thanh-cong-13-nan-nhan-520895.html"
  },
  {
    tinh:  "Hải Phòng",
    ten:   "Mua bán người dưới 16 tuổi liên tỉnh đưa về Hải Phòng",
    ngay:  "11/2023",
    nguon: "Báo Dân trí",
    link:  "https://dantri.com.vn/phap-luat/bat-giu-4-doi-tuong-mua-ban-nguoi-lien-tinh-ve-dia-ban-hai-phong-20231105071956840.htm"
  },

  /* ─── NINH BÌNH ─── */
  {
    tinh:  "Ninh Bình",
    ten:   "Một số phương thức lừa đảo của bọn buôn người",
    ngay:  "07/2026",
    nguon: "Công an Ninh Bình",
    link:  "https://congan.ninhbinh.gov.vn/canh-bao-thu-doan-mua-ban-nguoi-nang-cao-canh-giac-de-bao-ve-ban-than-va-gia-dinh"
  },
  {
    tinh:  "Ninh Bình",
    ten:   "Mua bán người dưới 16 tuổi (tìm việc làm, bị lừa vào karaoke)",
    ngay:  "01/2026",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/van-phong-co-quan-canh-sat-dieu-tra-phoi-hop-voi-phong-canh-sat-hinh-su-cong-an-xa-dai-hoang-va-cong-an-xa-gia-vien-tinh-ninh-binh-bat-giu-3-doi-tuong-mua-ban-nguoi-duoi-16-tuoi-1768785704"
  },

  /* ─── QUẢNG TRỊ ─── */
  {
    tinh:  "Quảng Trị",
    ten:   "Lừa đảo người sang Campuchia",
    ngay:  "02/2025",
    nguon: "Viet Nam News",
    link:  "https://vietnamnews.vn/society/1692396/four-charged-with-human-trafficking-after-allegedly-luring-victims-to-cambodia.html"
  },
  {
    tinh:  "Quảng Trị",
    ten:   "Lừa người quen bán sang Trung Quốc",
    ngay:  "10/2024",
    nguon: "VietnamNet",
    link:  "https://vietnamnet.vn/quang-tri-canh-bao-nan-mua-ban-nguoi-tu-bay-viec-nhe-luong-cao-2335300.html"
  },

  /* ─── ĐÀ NẴNG ─── */
  {
    tinh:  "Đà Nẵng",
    ten:   "Buôn người dưới 16 tuổi",
    ngay:  "05/2026",
    nguon: "Báo Thanh tra",
    link:  "https://thanhtra.com.vn/an-ninh-trat-tu-D718A18CA/da-nang-triet-pha-duong-day-buon-ban-nguoi-49ad31714.html"
  },
  {
    tinh:  "Đà Nẵng",
    ten:   "Bắt tội phạm mua bán người",
    ngay:  "08/2025",
    nguon: "Báo Tuyên Quang",
    link:  "https://baotuyenquang.com.vn/phap-luat/202508/da-nang-bat-giu-nghi-pham-chinh-trong-chuyen-an-mua-ban-nguoi-ec67a14/"
  },

  /* ─── QUẢNG NGÃI ─── */
  {
    tinh:  "Quảng Ngãi",
    ten:   "Giải cứu nhiều bé gái dưới 16 tuổi khỏi karaoke",
    ngay:  "10/2026",
    nguon: "Báo Điện tử Chính phủ",
    link:  "https://baochinhphu.vn/pha-chuyen-an-mua-ban-nguoi-duoi-16-tuoi-giai-cuu-8-be-gai-102261002154716364.htm"
  },
  {
    tinh:  "Quảng Ngãi",
    ten:   "Việc nhẹ lương cao - bán sang Campuchia",
    ngay:  "05/2026",
    nguon: "Bộ Công an",
    link:  "https://www.mps.gov.vn/bai-viet/canh-bao-thu-doan-lua-dao-viec-nhe-luong-cao-de-dua-nguoi-xuat-canh-trai-phep-tren-dia-ban-tinh-quang-ngai-1778745514"
  },

  /* ─── GIA LAI ─── */
  {
    tinh:  "Gia Lai",
    ten:   "Mua bán người dưới 16 tuổi",
    ngay:  "09/2026",
    nguon: "Công an Gia Lai",
    link:  "https://congan.gialai.gov.vn/vi/news/antt-trong-tinh/gia-lai-xet-xu-10-doi-tuong-trong-vu-an-mua-ban-nguoi-duoi-16-tuoi-14900.html"
  },
  {
    tinh:  "Gia Lai",
    ten:   "Mua bán người dưới 16 tuổi",
    ngay:  "08/2026",
    nguon: "Công an Gia Lai",
    link:  "https://congan.gialai.gov.vn/vi/news/antt-trong-tinh/gia-lai-xet-xu-cac-bi-cao-chua-thanh-nien-pham-toi-mua-ban-nguoi-duoi-16-tuoi-va-cuong-doat-tai-san-13673.html"
  },
  {
    tinh:  "Gia Lai",
    ten:   "Dụ dỗ cho vay, ép làm tiếp viên để trả nợ",
    ngay:  "08/2025",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/giai-cuu-thanh-cong-nan-nhan-trong-vu-mua-ban-nguoi-cuong-doat-tai-san-1756091600"
  },

  /* ─── KHÁNH HÒA ─── */
  {
    tinh:  "Khánh Hòa",
    ten:   "14 bị cáo trong đường dây buôn người",
    ngay:  "09/2026",
    nguon: "Báo Thanh Niên",
    link:  "https://thanhnien.vn/14-bi-cao-trong-duong-day-mua-ban-nguoi-sang-campuchia-lanh-an-18526091213283066.htm"
  },
  {
    tinh:  "Khánh Hòa",
    ten:   "Lừa đảo tình cảm qua mạng",
    ngay:  "11/2025",
    nguon: "Báo Lao động",
    link:  "https://laodong.vn/phap-luat/ong-trum-duong-day-lua-tinh-buon-nguoi-o-campuchia-bi-truy-na-do-sa-luoi-tai-khanh-hoa-1616059.ldo"
  },

  /* ─── LÂM ĐỒNG ─── */
  {
    tinh:  "Lâm Đồng",
    ten:   "Một vài chiêu trò tuyển dụng việc nhẹ lương cao",
    ngay:  "04/2026",
    nguon: "Công an tỉnh Lâm Đồng",
    link:  "https://congan.lamdong.gov.vn/cong-an-tinh-lam-dong-tiep-nhan-cong-dan-dia-phuong-bi-lua-sang-campuchia-voi-chieu-tro-viec-nhe-luong-cao-N5759.aspx"
  },
  {
    tinh:  "Lâm Đồng",
    ten:   "Chuyên án buôn người: thanh niên, lao động tự do vùng sâu vùng xa",
    ngay:  "01/2026",
    nguon: "Báo Lâm Đồng",
    link:  "https://baolamdong.vn/triet-pha-chuyen-an-mua-ban-nguoi-dau-an-cua-bo-doi-bien-phong-lam-dong-420908.html"
  },

  /* ─── ĐẮK LẮK ─── */
  {
    tinh:  "Đắk Lắk",
    ten:   "Mua bán người núp bóng dịch vụ giải trí",
    ngay:  "10/2025",
    nguon: "Pháp luật Plus",
    link:  "https://phapluatplus.baophapluat.vn/dak-lak-canh-giac-voi-thu-doan-mua-ban-nguoi-nup-bong-cac-co-so-kinh-doanh-dich-vu-giai-tri-227024.html"
  },
  {
    tinh:  "Đắk Lắk",
    ten:   "13 vụ, 41 bị can tội buôn người",
    ngay:  "07/2025",
    nguon: "Báo Lao động",
    link:  "https://laodong.vn/phap-luat/dak-lak-dieu-tra-13-vu-khoi-to-41-bi-can-ve-toi-pham-mua-ban-nguoi-1542627.ldo"
  },
  {
    tinh:  "Đắk Lắk",
    ten:   "Xét xử 2 kẻ buôn người sang Campuchia",
    ngay:  "01/2025",
    nguon: "Viện Kiểm sát Nhân dân tỉnh Đắk Lắk",
    link:  "https://vksdaklak.gov.vn/dak-lak-xet-xu-2-ke-buon-nguoi-tu-viet-nam-qua-campuchia-3817.html"
  },

  /* ─── THÀNH PHỐ HỒ CHÍ MINH ─── */
  {
    tinh:  "Thành phố Hồ Chí Minh",
    ten:   "Mua bán người sang Campuchia",
    ngay:  "07/2026",
    nguon: "Báo Tiền Phong",
    link:  "https://tienphong.vn/hai-bi-cao-cam-dau-duong-day-mua-ban-nguoi-xuyen-bien-gioi-linh-38-nam-tu-post1858022.tpo"
  },
  {
    tinh:  "Thành phố Hồ Chí Minh",
    ten:   "Buôn người sang Campuchia",
    ngay:  "01/2025",
    nguon: "Báo Tuổi Trẻ",
    link:  "https://tuoitre.vn/cong-an-tp-hcm-triet-pha-duong-day-ban-nguoi-cho-trung-tam-lua-dao-truc-tuyen-o-campuchia-20250107115109926.htm"
  },

  /* ─── ĐỒNG NAI ─── */
  {
    tinh:  "Đồng Nai",
    ten:   "Mua bán người dưới 16 tuổi làm tiếp viên",
    ngay:  "01/2026",
    nguon: "Công an thành phố Đồng Nai",
    link:  "https://congan.dongnai.gov.vn/pages/newsdetail.aspx?NewsId=24677&CatId=109"
  },
  {
    tinh:  "Đồng Nai",
    ten:   "Mua bán người dưới 16 tuổi làm quán karaoke",
    ngay:  "08/2024",
    nguon: "Báo Đồng Nai",
    link:  "https://baodongnai.com.vn/tin-moi/202408/cong-an-dong-nai-triet-pha-duong-day-mua-ban-nguoi-su-dung-nguoi-duoi-16-tuoi-vao-cac-hoat-dong-khieu-dam-tai-cac-co-so-massage-0b83a17/"
  },
  {
    tinh:  "Đồng Nai",
    ten:   "Khởi tố 11 đối tượng mua bán người sang Campuchia",
    ngay:  "09/2022",
    nguon: "Báo Nhân Dân",
    link:  "https://nhandan.vn/khoi-to-11-doi-tuong-mua-ban-nguoi-dua-nguoi-xuat-canh-trai-phep-sang-campuchia-post716140.html"
  },

  /* ─── TÂY NINH ─── */
  {
    tinh:  "Tây Ninh",
    ten:   "Lừa đảo việc nhẹ lương cao - bán sang Campuchia",
    ngay:  "07/2026",
    nguon: "Báo Công an TP.HCM",
    link:  "https://congan.com.vn/vu-an/nhom-bi-cao-trong-vu-ban-nguoi-sang-campuchia-lam-viec-cho-cong-ty-lua-dao-lanh-an_195240.html"
  },
  {
    tinh:  "Tây Ninh",
    ten:   "Chặn xe, bắt người bán sang Campuchia",
    ngay:  "02/2026",
    nguon: "Báo Lao động",
    link:  "https://laodong.vn/phap-luat/bat-nhom-doi-tuong-chan-xe-bat-giu-nguoi-phu-nu-de-ban-sang-campuchia-1661251.ldo"
  },

  /* ─── CẦN THƠ ─── */
  {
    tinh:  "Cần Thơ",
    ten:   "Mua bán người dưới 16 tuổi",
    ngay:  "07/2023",
    nguon: "VOV",
    link:  "https://vov.vn/phap-luat/tin-nong/cong-an-can-tho-triet-pha-vu-mua-ban-nguoi-duoi-16-tuoi-post1036035.vov"
  },

  /* ─── VĨNH LONG ─── */
  {
    tinh:  "Vĩnh Long",
    ten:   "Tuyển dụng làm việc tàu cá để lừa đảo buôn người",
    ngay:  "01/2026",
    nguon: "Báo Biên phòng",
    link:  "https://www.bienphong.com.vn/trao-thuong-thanh-tich-dau-tranh-thang-loi-chuyen-an-vl825p-triet-pha-duong-day-mua-ban-nguoi-post499364.html"
  },

  /* ─── CÀ MAU ─── */
  {
    tinh:  "Cà Mau",
    ten:   "Tìm bị hại mua bán người",
    ngay:  "01/2026",
    nguon: "Công an Cà Mau",
    link:  "https://congan.camau.gov.vn/ch2/171-Co-quan-An-ninh-dieu-tra-Cong-an-tinh-Ca-Mau-Thong-bao-tim-bi-hai-trong-vu-an-Mua-ban-nguoi.html"
  },
  {
    tinh:  "Cà Mau",
    ten:   "94 năm tù cho nhóm đối tượng buôn người",
    ngay:  "09/2025",
    nguon: "VOV",
    link:  "https://vov.vn/phap-luat/hon-94-nam-tu-cho-nhom-doi-tuong-mua-ban-nguoi-o-ca-mau-post1231356.vov"
  },
  {
    tinh:  "Cà Mau",
    ten:   "Giới thiệu 5 người thân cho nhóm buôn người",
    ngay:  "08/2024",
    nguon: "VnExpress",
    link:  "https://vnexpress.net/bi-khoi-to-vi-gioi-thieu-5-nguoi-than-cho-nhom-buon-nguoi-sang-campuchia-4777583.html"
  },

  /* ─── AN GIANG ─── */
  {
    tinh:  "An Giang",
    ten:   "Xã Khánh Bình đẩy mạnh phòng, chống buôn người",
    ngay:  "10/2026",
    nguon: "Công an tỉnh An Giang",
    link:  "https://congan.angiang.gov.vn/cong-an-xa-khanh-binh-tang-cuong-cong-tac-phong-chong-mua-ban-nguoi"
  },
  {
    tinh:  "An Giang",
    ten:   "Tuyên truyền về nạn buôn người",
    ngay:  "10/2026",
    nguon: "Bộ Công an",
    link:  "https://bocongan.gov.vn/bai-viet/van-phong-bo-cong-an-phoi-hop-cong-an-tinh-an-giang-tuyen-truyen-phap-luat-ve-phong-chong-mua-ban-nguoi-cho-can-bo-doan-vien-thanh-nien-1791432773"
  },
  {
    tinh:  "An Giang",
    ten:   "Mua bán người dưới 16 tuổi",
    ngay:  "06/2025",
    nguon: "Công an tỉnh An Giang",
    link:  "https://congan.angiang.gov.vn/cong-an-tinh-an-giang-quyet-tam-ngan-chan-day-lui-toi-pham-mua-ban-nguoi"
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
