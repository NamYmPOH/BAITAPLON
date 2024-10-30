document.querySelector('.logout-link').addEventListener('click', function(e) {
    e.preventDefault();
    if(confirm('Bạn có chắc chắn muốn đăng xuất?')) {
      window.location.href = 'login.html';
    }
  });