
const thongtins = document.getElementById("idlog-thongtin");
const baiviets = document.getElementById("idlog-baiviet");
const dichvus = document.querySelector(".dichvu");
const donanets = document.querySelector(".donnanet");

function thongtin() {
    thongtins.style.display = "block";
    baiviets.style.display = "none";
    dichvus.style.display = "none";
    donanets.style.display = "none";
}

function baiviet() {
    thongtins.style.display = "none";
    baiviets.style.display = "block";
    dichvus.style.display = "none";
    donanets.style.display = "none";
}

function dichvu() {
    thongtins.style.display = "none";
    baiviets.style.display = "none";
    dichvus.style.display = "block";
    donanets.style.display = "none";
}

function donanet() {
    thongtins.style.display = "none";
    baiviets.style.display = "none";
    dichvus.style.display = "none";
    donanets.style.display = "block";
}