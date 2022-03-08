var d = new Date();

var listDayOfMonth = [];

const startDay = 16;
const startMonth = 9;
const startYear = 2021;

const thisDay = d.getDate();
const thisMonth = d.getMonth() + 1;
const thisYear = d.getFullYear();

var isInfo = true;
const twich = document.getElementById('twich');
const dateContainer = document.getElementById('dateContainer');
const dateContent = document.getElementById('dateContent');
const pictureContent = document.getElementById('pictureContent');

const dayOfMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
};

for (let i = 9; i <= 12; i++) {
    listDayOfMonth.push(dayOfMonth(2021, i))
}

for (let i = 1; i <= thisMonth; i++) {
    listDayOfMonth.push(dayOfMonth(2022, i))
}


console.log(listDayOfMonth)
for(let i = 0; i < 9; i++) {
    var randy = Math.floor(Math.random()*9)*10;
    var randx = Math.floor(Math.random()*9)*10;
    var randlink = Math.floor(Math.random()*8);

var a = 0;
for (let i = 0; i < listDayOfMonth.length; i++) {
    a = a + listDayOfMonth[i]
}

a = a - dayOfMonth(2022, 2) - 16 + thisDay;

var countOfMonth = a / 30;
var today = thisDay + '/' + thisMonth + '/' + thisYear;
var start = startDay + '/' + startMonth + '/' + startYear;

document.getElementById('day').innerText = startDay + "/" + startMonth + "/" + startYear + " - " + today;
document.getElementById('countDay').innerText = a + " ngày";

if (countOfMonth.toFixed(1) == 12) {
    document.getElementById('countMonth').innerText = "1 năm";
} else {
    document.getElementById('countMonth').innerText = countOfMonth.toFixed(1) + " tháng";
}


const twichClick = () => {
    isInfo = !isInfo;
    if (isInfo == true) {
        twich.src = './image/info.jpg';
        dateContainer.style.height = '25%';
        dateContent.style.display = 'inline-block';
        pictureContent.style.display = 'none';
    } else {
        twich.src = './image/picture.png';
        dateContainer.style.height = '60%';
        dateContent.style.display = 'none';
        pictureContent.style.display = 'block';
    }
}
    createDot(mousex, mousey);
});
