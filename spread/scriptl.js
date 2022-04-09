const nama = document.querySelector('.nama');
const words = [...nama.textContent].map(word => `<span>${word.toUpperCase()}</span>`).join('');
console.log(words)
nama.innerHTML = words;