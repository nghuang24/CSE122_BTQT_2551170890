const BANG_HIEU_UNG = {
    gray: { filter: 'grayscale(1)' },
    xray: { filter: 'invert(1) grayscale(1) contrast(1.2)' },
    invert: { filter: 'invert(1)' },
    fliph: { transform: 'scaleX(-1)' },                      
    flipv: { transform: 'scaleY(-1)' },                       
    glow: { filter: 'drop-shadow(0 0 12px #ffd700)' },       
    shadow: { filter: 'drop-shadow(8px 8px 6px rgba(0,0,0,.8))' },
    boldshadow: { filter: 'drop-shadow(12px 12px 0 #000)' },       
    dropshadow: { filter: 'drop-shadow(6px 10px 4px rgba(0,0,0,.5))' },
    blur: { filter: 'blur(3px)' },
    wave: { filter: 'url(#wave)' },                         
    mask: { filter: 'grayscale(1) contrast(3) brightness(0.75)' }, 
    alpha: { filter: 'opacity(0.4)' }                        
};

const anh = document.getElementById('anh-hoa-hong');
const thanhNut = document.getElementById('thanh-nut');

const nutMacDinh = thanhNut.querySelector('[data-hieu-ung="gray"]');
if (nutMacDinh) {
    nutMacDinh.classList.add('chon');
  
    anh.style.filter = BANG_HIEU_UNG.gray.filter;
}

thanhNut.addEventListener('click', function (suKien) {
    const nut = suKien.target.closest('button');
    if (!nut) return;

    thanhNut.querySelectorAll('button').forEach(function (b) {
        b.classList.remove('chon');
    });
    nut.classList.add('chon');

    anh.style.filter = '';
    anh.style.transform = '';

    const hieuUng = BANG_HIEU_UNG[nut.dataset.hieuUng];
    

    if (!hieuUng) return;

    if (hieuUng.filter) {
        anh.style.filter = hieuUng.filter;
    }
    if (hieuUng.transform) {
        anh.style.transform = hieuUng.transform;
    }
});