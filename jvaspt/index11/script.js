document.querySelector('.search-box i').addEventListener('click', function() {
  this.parentElement.classList.toggle('active');
  this.style.left = this.parentElement.classList.contains('active') ? 'calc(100% - 40px)' : '16px';
});
