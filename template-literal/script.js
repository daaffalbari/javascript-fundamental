// 5.1 Template Literal 
// Awal 5.1 
// ----------------------------------------------------------------
// const mhs = [
//     {
//         nama : 'Daffa Albari',
//         email: 'daffa.10120212@mahasiswa.unikom.ac.id'
//     },
//     {
//         nama : 'Ir Soekarno',
//         email: 'soekarno.10120212@mahasiswa.unikom.ac.id'
//     },
//     {
//         nama : 'Mohammad Hatta',
//         email: 'hatta.10120212@mahasiswa.unikom.ac.id'
//     },
// ]

// const el = `<div class="mhs" >
//     ${mhs.map(m => `<ul>
//         <li>${m.nama}</li>
//         <li>${m.email}</li>
//     </ul>`).join('')}
// </div>`

// document.body.innerHTML = el;

// ----------------------------------------------------------------


// ----------------------------------------------------------------

// const lagu = {
//     judul: 'Kau adalah',
//     penyanyi: 'Isyana Saraswati',
//     feat: 'Ryan Putra'
// }


// const el = `<div class="lagu">
//     <ul class="">
//         <li>${lagu.penyanyi}</li>
//         <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ''}</li>
//     </ul>
// </div>`;


// document.body.innerHTML = el;

// --------------------------------------

// ----------------------------------------------------------------

// Ternary 

// const mhs = {
//     nama: 'Daffa Albari',
//     semester: 5,
//     mataKuliah: [
//         'Sistem Informasi',
//         'Basis Data 1',
//         'Pemrograman Visual',
//         'Rekayasa Perangkat Lunak'
//     ]
// };

// const cetakMatakuliah = (mataKuliah) => {
//     return ` 
//     <ol>
//         ${mataKuliah.map(mk => `<li>${mk}</li> `).join('')}
//     </ol>`
// } 


// const el = `<div class="mhs">
//     <h2>${mhs.nama}</h2>
//     <span>Semester: ${mhs.semester}</span>
//     <h4>Mata Kuliah:</h4>
//     ${cetakMatakuliah(mhs.mataKuliah)}
// </div>`

// document.body.innerHTML = el;

// ----------------------------------------------------------------


// 5.2 Tagged Template Literals
const nama = 'Daffa Albari';
const umur = 19;

const highlight = (strings, ...values) => {
    let result = '';
    strings.forEach((str, i) => {
        result += `${str}${values[i] || '' }`
    })
    return result;
}

const str = highlight`Halo, nama saya ${nama} dan saya berusia ${umur} tahun`;

console.log(str)