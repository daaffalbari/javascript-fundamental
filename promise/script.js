// contoh 1
let isTrue = false;
const janji1 = new Promise((resolve, reject) => {
  if (isTrue) {
    resolve(`Janji ditepati`);
  } else {
    reject(`Inkar janji`);
  }
});

janji1.then((response) => console.log('OK : ' + response)).catch((response) => console.log('NOT OK: ' + response));
