// ==================== 1. 导航栏吸顶（滚动固定在顶部） ====================
window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.style.position = 'fixed';
    header.style.top = '0';
    header.style.width = '100%';
    header.style.zIndex = '999';
    header.style.backgroundColor = '#9ee1ff';
  } else {
    header.style.position = 'static';
    header.style.backgroundColor = '';
  }
});

// ==================== 2. 回到顶部按钮 ====================
const goTopBtn = document.getElementById('goTop');

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    goTopBtn.style.display = 'block';
  } else {
    goTopBtn.style.display = 'none';
  }
});

goTopBtn.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// ==================== 3. 图片点击放大预览 ====================
const imgs = document.querySelectorAll('.imfeiyi img, .xinwen img');
imgs.forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', function () {
    const mask = document.createElement('div');
    mask.style.cssText = `
      position: fixed; top:0; left:0; width:100vw; height:100vh;
      background: rgba(0,0,0,0.9); z-index:9999;
      display: flex; align-items:center; justify-content:center;
    `;

    const bigImg = document.createElement('img');
    bigImg.src = this.src;
    bigImg.style.maxWidth = '90%';
    bigImg.style.maxHeight = '90%';
    bigImg.style.objectFit = 'contain';

    mask.appendChild(bigImg);
    document.body.appendChild(mask);

    mask.onclick = () => mask.remove();
  });
});

// ==================== 4. 下拉菜单优化 ====================
const menuItems = document.querySelectorAll('#menu li');
menuItems.forEach(item => {
  const dropdown = item.querySelector('.dropdown-content');
  if (!dropdown) return;

  item.addEventListener('mouseenter', () => {
    dropdown.style.display = 'block';
  });
  item.addEventListener('mouseleave', () => {
    dropdown.style.display = 'none';
  });
});

// ==================== 5. 页面加载完成提示 ====================
window.addEventListener('load', () => {
  console.log('✅ 泸州首页加载完成！所有JS已生效');
});