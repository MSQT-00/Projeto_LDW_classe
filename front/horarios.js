document.querySelectorAll('.dia').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dia').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});
