const find_minute= document.querySelector("#minute");
const find_second= document.querySelector("#second");


let time = 10; // 예: 2분 40초 = 160초

const countdown = setInterval(() => {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  find_minute.textContent = minutes;
  find_second.textContent = seconds < 10 ? `0${seconds}` : seconds;

  time--;

  if (time < 0) {
    time=10;
    
  }
}, 1000);
