let soHienTai = '0';
let soLuuTru = null;
let phepTinh = null;
let daTinh = false;

const dongPhepTinh = document.getElementById('phep-tinh');
const dongKetQua = document.getElementById('ket-qua');

function tinh(a, b, op) {
    switch (op) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return b === 0 ? NaN : a / b;
        case '%': return a * b / 100;
        default: return b;
    }
}

function lamTron(so) {
    return Number(so.toFixed(10));
}

function capNhatManHinh() {
    dongKetQua.textContent = soHienTai;
    dongPhepTinh.textContent = soLuuTru !== null ? soLuuTru + ' ' + (phepTinh || '') : '';
}

function nhapSo(chuSo) {
    if (daTinh) {
        soHienTai = chuSo;
        daTinh = false;
    }
    else if (soHienTai === '0') {
        soHienTai = chuSo;
    }
    else {
        soHienTai += chuSo;
    }
}

// BỔ SUNG: Hàm nhập dấu phẩy thập phân
function nhapCham() {
    if (daTinh) {
        soHienTai = '0.';
        daTinh = false;
    } else if (!soHienTai.includes('.')) {
        soHienTai += '.';
    }
}

// BỔ SUNG: Hàm chọn phép tính
function chonPhepTinh(op) {
    if (phepTinh !== null && !daTinh) {
        tinhKetQua();
    }
    soLuuTru = soHienTai;
    phepTinh = op;
    daTinh = true;
}

function tinhKetQua() {
    if (soLuuTru === null || !phepTinh) return;
    const kq = tinh(lamTron(Number(soLuuTru)), Number(soHienTai), phepTinh);
    if (isNaN(kq)) {
        soHienTai = 'Không thể chia cho 0';
    }
    else {
        soHienTai = String(lamTron(kq));
    }
    soLuuTru = null;
    phepTinh = null;
    daTinh = true;
}

function xoaHet() {
    soHienTai = '0';
    soLuuTru = null;
    phepTinh = null;
    daTinh = false;
}

document.getElementById('ban-phim').addEventListener('click', function (suKien) {
    const nut = suKien.target.closest('button');
    if (!nut) return; // SỬA LỖI: Sai chính tả 'inut' thành 'nut'

    const giaTri = nut.dataset.giaTri; // SỬA LỖI: Thiếu dấu chấm phẩy

    if (giaTri >= '0' && giaTri <= '9') {
        nhapSo(giaTri);
    }
    else if (giaTri === '.') {
        nhapCham();
    }
    else if (giaTri === 'C') {
        xoaHet();
    }
    else if (giaTri === '=') {
        tinhKetQua();
    }
    else {
        chonPhepTinh(giaTri);
    }

    capNhatManHinh();
});

capNhatManHinh();