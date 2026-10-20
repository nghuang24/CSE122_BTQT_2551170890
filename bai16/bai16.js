const cacViec = [
    { ten: 'Làm bài tập HTML chương 1', xong: true },
    { ten: 'Học đối tượng Date trong JS', xong: false },
    { ten: 'Quay video OBS nộp bài', xong: false },
];
const danhSach = document.getElementById('danh-sach');
const thongKe = document.getElementById('thong-ke');

function hienThi() {
    danhSach.innerHTML = '';

    cacViec.forEach(function (viec, thuTu) {
        const li = document.createElement('li');

        const oTick = document.createElement('input');
        oTick.type = 'checkbox';
        oTick.checked = viec.xong;
        oTick.addEventListener('change', function () {
            viec.xong = oTick.checked; // Sửa dấu phẩy thành dấu chấm
            hienThi();
        });

        const ten = document.createElement('span');
        ten.textContent = viec.ten;
        ten.className = 'ten-viec' + (viec.xong ? ' xong' : ''); // Xóa khoảng trắng thừa

        const nutXoa = document.createElement('button');
        nutXoa.textContent = 'Xóa';
        nutXoa.className = 'nut-xoa';
        nutXoa.addEventListener('click', function () {
            cacViec.splice(thuTu, 1);
            hienThi();
        });

        li.append(oTick, ten, nutXoa);
        danhSach.appendChild(li);
    });

    const conLai = cacViec.filter(function (v) { return !v.xong; }).length;
    thongKe.textContent = conLai === 0
        ? 'Hoàn thành tất cả! Tuyệt vời 🎉'
        : 'Còn lại ' + conLai + '/' + cacViec.length + ' việc chưa hoàn thành';
}

document.getElementById('form-them').addEventListener('submit', function (suKien) {
    suKien.preventDefault();

    const oNhap = document.getElementById('o-nhap');
    const tenViec = oNhap.value.trim();

    if (tenViec === '') {
        alert('Bạn chưa nhập tên việc!');
        return;
    }

    // Sửa Tên -> ten và = -> :
    cacViec.push({ ten: tenViec, xong: false });
    oNhap.value = '';
    hienThi();
});

hienThi();