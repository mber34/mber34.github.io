var isPlaying = false;
var idSongReady = 0;

const playButton = document.getElementById('playButton');
const backButton = document.getElementById('backButton');
const nextButton = document.getElementById('nextButton');
const audioMain = document.getElementById('audioMain');
const audioName = document.getElementById('audioName');
const audioDes = document.getElementById('audioDes');
const audioThumb = document.getElementById('thumb');

const listAudio = [
    {url:'./audio/100yearslove.mp3', name:'100 Years Love', des:'NamDuc', thumb:'./image/background_1.jpg'},
    {url:'./audio/ketheoduoianhsang.mp3', name:'Kẻ Theo Đuổi Ánh Sáng', des:'Huy Vạc x Tiến Nguyễn x Freak D', thumb:'./image/background_2.jpg'},
    {url:'./audio/neungayay.mp3', name:'Nếu Ngày Ấy', des:'Soobin Hoàng Sơn', thumb:'./image/background_3.jpg'},
    {url:'./audio/rangkhon.mp3', name:'Răng Khôn', des:'Phí Phương Anh ft. RIN9', thumb:'./image/background_4.jpg'}
]

function playing() {
    if(isPlaying == false) {
        audioMain.play();
        playButton.style.backgroundImage = "url('./image/pause.png')";
    } else {
        audioMain.pause();
        playButton.style.backgroundImage = "url('./image/play.png')";
    }
    isPlaying = !isPlaying;
}

const nextEvent = () => {
    if (idSongReady <= 2) {
        idSongReady ++;
        audioName.innerText = listAudio[idSongReady].name;
        audioDes.innerText = listAudio[idSongReady].des;
        audioThumb.src = listAudio[idSongReady].thumb;
        if (isPlaying == true) {
            audioMain.pause();
            audioMain.src = listAudio[idSongReady].url;
            audioMain.play();
        } else {
            audioMain.src = listAudio[idSongReady].url;
        }
    } else {
        idSongReady = 0;
        audioName.innerText = listAudio[idSongReady].name;
        audioDes.innerText = listAudio[idSongReady].des;
        audioThumb.src = listAudio[idSongReady].thumb;
        if (isPlaying == true) {
            audioMain.pause();
            audioMain.src = listAudio[idSongReady].url;
            audioMain.play();
        } else {
            audioMain.src = listAudio[idSongReady].url;
        }
    }
}

const backEvent = () => {
    if (idSongReady >= 1) {
        idSongReady --;
        audioName.innerText = listAudio[idSongReady].name;
        audioDes.innerText = listAudio[idSongReady].des;
        audioThumb.src = listAudio[idSongReady].thumb;
        if (isPlaying == true) {
            audioMain.pause();
            audioMain.src = listAudio[idSongReady].url;
            audioMain.play();
        } else {
            audioMain.src = listAudio[idSongReady].url;
        }
    } else {
        idSongReady = 3;
        audioName.innerText = listAudio[idSongReady].name;
        audioDes.innerText = listAudio[idSongReady].des;
        audioThumb.src = listAudio[idSongReady].thumb;
        if (isPlaying == true) {
            audioMain.pause();
            audioMain.src = listAudio[idSongReady].url;
            audioMain.play();
        } else {
            audioMain.src = listAudio[idSongReady].url;
        }
    }
}