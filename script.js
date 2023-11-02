var peso = document.getElementById("peso")
var res = document.getElementById("res")
peso.focus()

function evento(event){
    if(event.key === 'Enter'){
        verificar()
    }
}


function verificar(){
    if(peso.value.length == 0){
        res.innerHTML = '<p>Digite o seu peso no campo acima</p>'
    } else if(peso.value < 0){
        res.innerHTML = '<p>Eu acho que não existe peso negativo</p>'
    } else {
        calcular()
    }
}

function calcular() {
    var ml = peso.value * 35
    var litro = ml / 1000
    res.innerHTML = `<p>Se uma pessoa tem <strong>${peso.value}Kg</strong> ela precisaria beber <strong>${ml} mililitros</strong> ou <strong>${litro} litros</strong> de água.</p>`
}
