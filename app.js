const menuItem = document.querySelector('.nav-list-slider');  // 은행소개 항목
const menu = document.querySelector('.nav-subs');  // 메뉴 영역

// '은행소개' 항목에 마우스 올리면 메뉴 보이기
menuItem.addEventListener('mouseenter', () => {
    menu.style.display = 'block';
});

// 메뉴 박스에 마우스 올리면 메뉴가 유지되도록 설정
menu.addEventListener('mouseenter', () => {
    menu.style.display = 'block';
});

// '은행소개' 항목이나 메뉴 박스를 벗어나면 메뉴 숨기기
menuItem.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
});

menu.addEventListener('mouseleave', () => {
    menu.style.display = 'none';
});
