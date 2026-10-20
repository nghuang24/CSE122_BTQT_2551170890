document.getElementById('printBtn').addEventListener('click', function () {
    const d = parseInt(document.getElementById('inputDate').value);
    const m = parseInt(document.getElementById('inputMonth').value)-1;
    const y = parseInt(document.getElementById('inputYear').value);
    const dateObj = new Date(y, m, d);

    document.getElementById('displayYear').textContent = dateObj.getFullYear();
    document.getElementById('displayMonth').textContent = 'Tháng ' + (dateObj.getMonth() + 1);
    document.getElementById('displayDate').textContent = dateObj.getDate();

    const days = ['Chủ nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
    document.getElementById('displayDay').textContent = days[dateObj.getDay()];
    const currentHour = new Date().getHours();
    let greeting = "";
    if (currentHour < 12) {
        greeting = 'Chào buổi sáng!';
    }
    else if (currentHour < 18) {
        greeting = 'Chào buổi chiều!';
    }
    else {
        greeting = 'Chào buổi tối!';
    }
    document.getElementById('greetingMessage').textContent = greeting;
});
document.getElementById('printBtn').click();