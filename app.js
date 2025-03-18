// 모든 .nav-list-items 항목을 선택
const navListItems = document.querySelectorAll('.nav-list-items');

// 각 항목에 대해 마우스 hover 이벤트 처리
navListItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // hover가 들어오면 nav-list_1~4에 border-bottom 추가
        const navListItemsToHover = item.querySelectorAll('.nav-list_1, .nav-list_2, .nav-list_3, .nav-list_4');
        navListItemsToHover.forEach(nav => {
            nav.style.borderBottom = '3px solid black';
        });
    });

    item.addEventListener('mouseleave', () => {
        // hover가 빠져나가면 nav-list_1~4의 border-bottom을 제거
        const navListItemsToHover = item.querySelectorAll('.nav-list_1, .nav-list_2, .nav-list_3, .nav-list_4');
        navListItemsToHover.forEach(nav => {
            nav.style.borderBottom = '';  // border-bottom 초기화
        });
    });
});
