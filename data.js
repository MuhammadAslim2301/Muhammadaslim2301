const namaSaya = "Muhammad Aslim";
let usia = 23;

function generateBiodata() {
    if (usia > 10 && usia < 20 ) {
        console.log ('anda dewasa')
    } else {
        console.log ('mohon maaf belum cukup umur')
    }
    //console.log(`Nama saya adalah ${namaSaya} dan Usia adalah ${usia} tahun`)
}

console.log(namaSaya);
console.log(usia);

generateBiodata ();