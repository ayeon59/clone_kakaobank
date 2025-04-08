// 모든 스크립트를 DOMContentLoaded 내부로 감싸 오류 방지

document.addEventListener('DOMContentLoaded', () => {
  // 1. 인터섹션 옵저버 (스크롤 시 색상 변경)
  const loanSection = document.querySelector('.intro-loan');

  if (loanSection) {
    const options = {
      root: null,
      threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.backgroundColor = '#1d1f2b';
          }, 1000);
        } else {
          entry.target.style.backgroundColor = '';
        }
      });
    }, options);

    observer.observe(loanSection);
  }

  // 2. 로그인 타이머 관련 변수
  const minuteSet = document.querySelector("#protect-time_minute");
  const secondSet = document.querySelector("#protect-time_second");
  const startBtn = document.querySelector("#openLoginBtn");
  const restartBtn = document.querySelector(".protect__time-limit-box");

  let time = 300;
  let intervalId;

  function setTimer() {
    if (!minuteSet || !secondSet) return;

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    minuteSet.textContent = minutes;
    secondSet.textContent = seconds < 10 ? `0${seconds}` : seconds;

    time--;
    if (time < 0) time = 300;
  }

  if (startBtn) {
    startBtn.addEventListener("click", () => {
      if (!intervalId) {
        intervalId = setInterval(setTimer, 1000);
      }
    });
  }

  if (restartBtn) {
    restartBtn.addEventListener("click", () => {
      time = 300;
      clearInterval(intervalId);
      setTimer();
      intervalId = setInterval(setTimer, 1000);
    });
  }

  // 3. 팝업 열기/닫기
  const popup = document.getElementById("popup");
  const openBtn = document.getElementById("openLoginBtn");
  const closeBtn = document.getElementById("closeLoginBtn");

  if (openBtn && popup) {
    openBtn.addEventListener("click", () => {
      popup.style.display = "flex";
      setTimeout(() => popup.classList.add("show"), 10);
    });
  }

  if (closeBtn && popup) {
    closeBtn.addEventListener("click", () => {
      popup.classList.remove("show");
      setTimeout(() => popup.style.display = "none", 400);
      clearInterval(intervalId);
      intervalId = null;
      time = 300;
      setTimer();
    });
  }

  // 4. 네비게이션 호버 시 배경 변경
  const parent = document.querySelector('.nav-bar');
  const menuItems = document.querySelectorAll('.category_menu');
  const children = document.querySelectorAll('.nav-list-items');
  
  if (parent && children.length) {
    children.forEach((child) => {
      child.addEventListener('mouseenter', () => {
        parent.classList.add('nav-bar--hovered');
  
        // 각각의 a 태그(.category_menu)에 class 추가
        menuItems.forEach((item) => {
          item.classList.add('nav-bar--hovered');
        });
      });
  
      child.addEventListener('mouseleave', () => {
        parent.classList.remove('nav-bar--hovered');
  
        // 각각의 a 태그(.category_menu)에 class 제거
        menuItems.forEach((item) => {
          item.classList.remove('nav-bar--hovered');
        });
      });
    });
  }
  


  // 5. 슬라이더 관련 요소 (추후 사용을 위해 선언)
  const firstSlider = document.querySelector("#account-group__slide_1");
  const secondSlider = document.querySelector("#account-group__slide_2");
});