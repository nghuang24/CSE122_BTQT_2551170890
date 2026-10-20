const form = document.getElementById('form-dang-ki');
const oHoTen = document.getElementById('ho-ten');
const oEmail = document.getElementById('email');
const oMatKhau = document.getElementById('mat-khau');
const oXacNhan = document.getElementById('xac-nhan');
const thongBao = document.getElementById('thong-bao');

const KIEM_TRA_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function datTrangThai(oNhap, oBaoLoi, chuoiLoi) {
    if (chuoiLoi) {
        oNhap.className = 'loi';
        oBaoLoi.textContent = chuoiLoi;
        return false;
    }
    oNhap.className = 'hop-le';
    oBaoLoi.textContent = '';
    return true;
}

function kiemTra() {
    const hopLeHoTen = datTrangThai(
        oHoTen,
        document.getElementById('loi-ho-ten'),
        oHoTen.value.trim() === '' ? 'Vui lòng nhập họ tên.' : ''
    );

    const hopLeEmail = datTrangThai(
        oEmail,
        document.getElementById('loi-email'),
        !KIEM_TRA_EMAIL.test(oEmail.value.trim()) ? 'Email không đúng định dạng.' : ''
    );

    const hopLeMatKhau = datTrangThai(
        oMatKhau,
        document.getElementById('loi-mat-khau'),
        oMatKhau.value.length < 6 ? 'Mật khẩu phải tối thiểu 6 ký tự.' : ''
    );

    const hopLeXacNhan = datTrangThai(
        oXacNhan,
        document.getElementById('loi-xac-nhan'),
        oXacNhan.value !== oMatKhau.value ? 'Mật khẩu xác nhận không khớp.' : ''
    );

    return hopLeHoTen && hopLeEmail && hopLeMatKhau && hopLeXacNhan;
}

form.addEventListener('submit', function (suKien) {
  suKien.preventDefault(); 

  thongBao.textContent = '';
  thongBao.classList.remove('thanh-cong');

  if (kiemTra()) {
    thongBao.textContent = '✓ Đăng ký thành công!';
    thongBao.classList.add('thanh-cong');
    form.reset();
    
    // Xóa sạch trạng thái class sau khi gửi thành công
    [oHoTen, oEmail, oMatKhau, oXacNhan].forEach(function (o) { 
        o.className = ''; 
    });
  } else {
    thongBao.textContent = 'Vui lòng kiểm tra lại các ô đánh dấu đỏ.';
  }
});