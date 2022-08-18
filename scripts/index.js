const doc = document;
const $outBox = doc.getElementById('out-box');
const $inBox = doc.getElementById('to-enc');
const $encbtn = doc.getElementById('enc-btn');
const $decbtn = doc.getElementById('dec-btn');
const $copybtn = doc.createElement('BUTTON');

$copybtn.setAttribute('type', 'button');
$copybtn.classList.add('btn', 'btn-copiar');
$copybtn.textContent = 'Copiar';

const encriptar = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',

}

const desencriptar = {
    ai: 'a',
    enter: 'e',
    imes: 'i',
    ober: 'o',
    ufat: 'u',   
}

$encbtn.addEventListener('click', () => {
    const Decrypt_MSG = encMessage($inBox.value);
    const validacion = /([A-ZáéíóúÁÉÍÓÚñ\d$@$!%*?&])/gm.test(Decrypt_MSG);
    if(!validacion && Decrypt_MSG.length > 0){
        const $p = doc.createElement('p');
        $p.textContent = Decrypt_MSG;
        $p.classList.add('output');
        $p.id = 'output';
        $outBox.classList.add('process');
        $outBox.innerHTML = '';
        $outBox.appendChild($p);
        $outBox.appendChild($copybtn);
    }
    else{
        alert('Solo se permiten minusculas y sin acentos');
    }

})

$decbtn.addEventListener('click', () => {
    const $Enc_MSG = decMSG($inBox.value);
    const $p = doc.createElement('p');
    $p.textContent = $Enc_MSG;
    $p.classList.add('output');
    $p.id = 'output';
    $outBox.classList.add('process');
    $outBox.innerHTML = '';
    $outBox.appendChild($p);
    $outBox.appendChild($copybtn);

})

$copybtn.addEventListener('click', () => copy());

function copy(){
    const $out = doc.getElementById('output');
    navigator.clipboard.writeText($out.textContent);
    alert('Texto copiado al portapapeles');
}

function encMessage(mensaje){
    let newMSG = mensaje.replace(/[aeiou]/g,(match) => encriptar[match]);
    return newMSG;
}

function decMSG(mensaje){
    let newMSG = mensaje.replace(/(ai|enter|imes|ober|ufat)/g,(match) => desencriptar[match]);
    return newMSG;
}