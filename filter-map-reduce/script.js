// ambil semua elemen video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

// pilih yang berjudul "JAVASCRIPT LANJUTAN"
let jsLanjut = videos.filter(judul => judul.textContent.includes("JAVASCRIPT LANJUTAN"))

// ambil durasi masing-masing video
    .map(item => item.dataset.duration)

// ubah durasi menjadi integer, ubah menit menjadi detik
    .map(waktu => {
        const parts = waktu.split(':').map(part => parseFloat(part))
        return (parts[0] * 60) + parts[1];
    })
// jumlahkan semua detik
    .reduce((total, currentValue) => {
        return total + currentValue;
    })

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

const durasi = document.querySelector('.total-durasi').textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;
const jmlVideo = document.querySelector('.jumlah-video');
jmlVideo.textContent = videos.filter(judul => judul.textContent.includes("JAVASCRIPT LANJUTAN")).length + " Video";
