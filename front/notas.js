document.querySelectorAll('.tri').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.tri').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
