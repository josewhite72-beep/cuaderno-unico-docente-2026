// Ejemplo: guardar notas al escribir
document.querySelectorAll('textarea').forEach(textarea => {
  const key = textarea.id;
  textarea.value = localStorage.getItem(key) || '';
  textarea.addEventListener('input', () => {
    localStorage.setItem(key, textarea.value);
  });
});