// destructuring Array
// const arr = ["Daffa", "Albari"]
// const [firstName, lastName] = arr;
// console.log(firstName); //  Daffa
// console.log(lastName); // Albari

let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);


// destructuring function

// destructuring return 
const kalkulator = (a, b) => {
    return {
        tambah: a + b,
        kurang: a - b,
        kali: a * b,
        bagi: a / b
    }
}

const {bagi, tambah, kurang, kali} = kalkulator(6, 3);
console.log(kurang)
console.log(tambah);
console.log(kali);
console.log(bagi);



// destructuring Argument

const mhs1 = {
    nama: 'Daffa Albari',
    umur: 20,
    email: 'daffaa.albari@gmail.com',
    nilai: {
        tugas: 100,
        uts: 100,
        uas: 90
    }
}


const tampilMhs1 = ({nama, email, umur, nilai:{tugas, uas, uts}}) => {
    return `Halo, nama saya ${nama}, dan saya berumur ${umur} tahun, nilai uas saya adalah ${uas}`
}


console.log(tampilMhs1(mhs1))