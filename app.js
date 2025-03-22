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


// const abroadSection = document.querySelector('.intro-abroad');

// const options_out = {
//     root: null, // 뷰포트를 기준
//     threshold: 0.5 // 50% 이상 보여야 실행
//   };
  
//   // 3. 콜백 함수
//   const observer_ = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         // 3초 뒤 배경색 변경
//         setTimeout(() => {
//           entry.target.style.backgroundColor = '#1d1f2b';
//         }, 1500);
  
//         observer.unobserve(entry.target); // 한 번만 실행하고 멈추기
//       }
//     });
//   }, options);
  
//   // 4. 요소 감시 시작
//   if (loanSection) {
//     observer.observe

