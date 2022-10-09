function capValue1(valor) {
    valor = document.getElementById('btnValue').value;
    console.log(valor);
    sessionStorage.setItem('btnValue', valor);
    
  document.getElementById('btnSubmit').addEventListener('click', function(ev) {
        const valor = sessionStorage.getItem('btnValue');
        console.log(valor);
    })
}

function capValue2(valor) {
    valor = document.getElementById('btnValue2').value;
    console.log(valor);
    sessionStorage.setItem('btnValue', valor);
    
   document.getElementById('btnSubmit').addEventListener('click', function(ev) {
        const valor = sessionStorage.getItem('btnValue');
        console.log(valor);
    })
}

function capValue3(valor) {
    valor = document.getElementById('btnValue3').value;
    console.log(valor);
    sessionStorage.setItem('btnValue', valor);
    
document.getElementById('btnSubmit').addEventListener('click', function(ev) {
        const valor = sessionStorage.getItem('btnValue');
        console.log(valor);
    })
}

function capValue4(valor) {
    valor = document.getElementById('btnValue4').value;
    console.log(valor);
    sessionStorage.setItem('btnValue', valor);
    
   document.getElementById('btnSubmit').addEventListener('click', function(ev) {
        const valor = sessionStorage.getItem('btnValue');
        console.log(valor);
    })
}

function capValue5(valor) {
    valor = document.getElementById('btnValue5').value;
    console.log(valor);
    sessionStorage.setItem('btnValue', valor);
    
    document.getElementById('btnSubmit').addEventListener('click', function(ev) {
        const valor = sessionStorage.getItem('btnValue');
        console.log(valor);
    })
}





