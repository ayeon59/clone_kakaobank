// 1. 감지할 대상 요소
const loanSection = document.querySelector('.intro-loan');

// 2. 옵저버 옵션
const options = {
  root: null, // 뷰포트를 기준
  threshold: 0.5 // 50% 이상 보여야 실행
};

// 3. 콜백 함수
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 요소가 화면에 50% 이상 들어오면 색 바꿈
        setTimeout(() => {
          entry.target.style.backgroundColor = '#1d1f2b';
        }, 1000);
      } else {
        // 요소가 뷰포트에서 빠져나가면 색 원래대로
        entry.target.style.backgroundColor = ''; // 원래 색으로 (필요하면 직접 지정)
      }
    });
  }, options);

// 4. 요소 감시 시작
if (loanSection) {
  observer.observe(loanSection);
}

document.addEventListener('DOMContentLoaded', () => {
  const openBtn = document.getElementById('openLoginBtn');
  const closeBtn = document.getElementById('closeLoginBtn');
  const popup = document.getElementById('popup');

  if (openBtn && closeBtn && popup) {
    openBtn.addEventListener('click', () => {
      popup.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
      popup.style.display = 'none';
    });

    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.style.display = 'none';
      }
    });
  } else {
    console.warn('로그인 버튼 또는 팝업 요소를 찾을 수 없습니다.');
  }
});
