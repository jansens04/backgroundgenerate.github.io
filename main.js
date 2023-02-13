const tUbahWarna = document.getElementById('tUbahWarna');

tUbahWarna.onclick = function () {
  document.body.classList.toggle('biru-muda');
};

// Membuat tombol button tanpa menyentuh HTML
const tAcakWarna = document.createElement('button');
const teksTombol = document.createTextNode('Acak Warna');

tAcakWarna.setAttribute('type', 'button');
tAcakWarna.appendChild(teksTombol);
tUbahWarna.after(tAcakWarna);
// Akhir membuat button

tAcakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ' , ' + g + ' , ' + b + ')';
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('change', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ' , ' + g + ' , ' + b + ')';
});

sHijau.addEventListener('change', function () {
  const g = sHijau.value;
  const r = sMerah.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + g + ' ,' + r + ' ,' + b + ')';
});

sBiru.addEventListener('change', function () {
  const b = sBiru.value;
  const g = sHijau.value;
  const r = sMerah.value;
  document.body.style.backgroundColor = 'rgb(' + b + ' , ' + g + ', ' + r + ')';
});

document.body.addEventListener('mousemove', function (event) {
  // posisi mouse
  //   console.log(event.clientX);
  // ukuran browser
  //   console.log(window.innerWidth);
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);

  document.body.style.backgroundColor = 'rgb(' + xPos + ' , ' + yPos + ' ,100 )';
});
