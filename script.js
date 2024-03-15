// 獲取圖片容器、計數器和音效
const imageContainer = document.getElementById('image-container');
const counter = document.getElementById('counter');
const audio = document.getElementById('audio');

let clickCount = 0; // 初始化計數器

// 監聽圖片容器的點擊事件
imageContainer.addEventListener('click', () => {
    clickCount++;
    counter.textContent = `功德 + ${clickCount}`;
    audio.play();
    hideImage();
    setTimeout(showImage, 20);
});

// 隱藏圖片
function hideImage() {
    const image = document.getElementById('green-image');
    image.style.display = 'none';
}

// 顯示圖片
function showImage() {
    const image = document.getElementById('green-image');
    image.style.display = 'block';
}