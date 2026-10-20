const cao_anh = 52;

function anhMotSo(n){
    return '<img src="Bai13/0' + n + '.gif" alt="' + n + '" style="height:' + cao_anh + 'px">';
}

function anhHaiSo(n){
    const hangChuc = Math.floor(n/10);
    const hangDonVi = n%10;
    return anhMotSo(hangChuc) + anhMotSo(hangDonVi);
}

function taoLoiChao(gio){
    if(gio>=5 && gio<11) return 'Chào buổi sáng';
    if(gio>=11 && gio<13) return 'Chào buổi trưa';
    if(gio>=13 && gio<17) return 'Chào buổi chiều';
    if(gio>=17 && gio<21) return 'Chào buổi tối';
    return 'Chúc ngủ ngon!';
}

function capNhatDongHo(){
    const bayGio = new Date();
    const gio = bayGio.getHours();
    const phut = bayGio.getMinutes();
    const giay = bayGio.getSeconds();

    const haiCham = '<img src="Bai13/haicham.gif" alt=":" style="height:' + cao_anh +'px">';

    document.getElementById('dong-ho').innerHTML =
        anhHaiSo(gio) + haiCham + anhHaiSo(phut) + haiCham + anhHaiSo(giay);
    
        document.getElementById('loi-chao').textContent = taoLoiChao(gio);
}

capNhatDongHo();
setInterval(capNhatDongHo,1000);

