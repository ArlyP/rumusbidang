// luas persegi
let submit = document.getElementById('submit')

submit.addEventListener('click', function(){
    let panjang = document.getElementById('panjang');
    let hasil = document.getElementById('hasil');
    hasil.innerText = Number (panjang.value * panjang.value)
});


// keliling persegi
let submitK = document.getElementById('submitK')

submitK.addEventListener('click', function(){
    let panjangK = document.getElementById('panjangK');
    let hasilK = document.getElementById('hasilK');
    hasilK.innerText = Number (panjangK.value * 4);
});

// Luas persegi panjang
let submitPL = document.getElementById('submitPL')

submitPL.addEventListener('click', function(){
    let panjangPL = document.getElementById('panjangPL');
    let lebarPL = document.getElementById('lebarPL');
    let hasilPL = document.getElementById('hasilPL');
    hasilPL.innerText = Number (panjangPL.value * lebarPL.value);
});

// Keliling persegi panjang
let submitPK = document.getElementById('submitPK')

submitPK.addEventListener('click', function(){
    let panjangPK = document.getElementById('panjangPK');
    let lebarPK = document.getElementById('lebarPK');
    let hasilPK = document.getElementById('hasilPK');
    hasilPK.innerText = Number ( (2 * panjangPK.value) + (2 * lebarPK.value) );
});

// luas segitiga
let submitLS = document.getElementById('submitLS')

submitLS.addEventListener('click', function(){
    let alasLS = document.getElementById('alasLS');
    let tinggiLS = document.getElementById('tinggiLS');
    let hasilLS = document.getElementById('hasilLS');
    hasilLS.innerText = Number ( 1/2 * alasLS.value * tinggiLS.value );
});
// keliling segitiga
let submitKS = document.getElementById('submitKS')

submitKS.addEventListener('click', function(){
    let aKS = document.getElementById('aKS');
    let bKS = document.getElementById('bKS');
    let cKS = document.getElementById('cKS');
    let hasilKS = document.getElementById('hasilKS');
    hasilKS.innerText = Number(aKS.value) + Number(bKS.value) + Number(cKS.value);
});