
var trangchu = document.querySelector('.trangchu');
var sanpham = document.querySelector('.sanpham');
var khuyenmai = document.querySelector('.khuyenmai');
var sanphammoive = document.querySelector('.sanphammoive');
var lienhechungtoi = document.querySelector('.lienhechungtoi');


function showSanpham() {
    sanpham.style.display = 'block';
}
function hideSanpham() {
    sanpham.style.display = 'none';
}

function showTrangchu() {
    trangchu.style.display = 'block';
}

function hideTrangchu() {
    trangchu.style.display = 'none';
}

function showKhuyenmai() {
    khuyenmai.style.display = 'block';
}
function hideKhuyenmai() {
    khuyenmai.style.display = 'none';
}

function showSPmoive() {
    sanphammoive.style.display = 'block';
}
function hideSPmoive() {
    sanphammoive.style.display = 'none';
}

function showLienhechungtoi() {
    lienhechungtoi.style.display = 'block';
}
function hideLienhechungtoi() {
    lienhechungtoi.style.display = 'none';
}

// contact

var contactName = document.getElementById('contact-input-name');
var contactEmail = document.getElementById('contact-input-email');
var contactMessenger = document.getElementById('contact-input-mess');

function showContactInfo() {
    alert('Họ tên: ' + contactName.value + '\n' +
          'Email: ' + contactEmail.value + '\n' +
          'Messenger: '+ contactMessenger.value + '\n')
}