// 分类按钮点击切换样式
document.querySelectorAll('.category button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelector('.category button.active')?.classList.remove('active');
    btn.classList.add('active');
  });
});

// 底部导航切换高亮
document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelector('.bottom-nav .nav-item.active')?.classList.remove('active');
    item.classList.add('active');
  });
});