let result=document.getElementById("res")

function add() {
    let num1=document.getElementById("num1")
    let num2=document.getElementById("num2")
    console.log(parseFloat(num1.value)+parseFloat(num2.value))

    result.textContent=parseFloat(num1.value)+parseFloat(num2.value)
}
function sub() {
    let num1=document.getElementById("num1")
    let num2=document.getElementById("num2")
    console.log(parseFloat(num1.value)-parseFloat(num2.value))

    result.textContent=parseFloat(num1.value)+parseFloat(num2.value)
}
function mul() {
    let num1=document.getElementById("num1")
    let num2=document.getElementById("num2")
    console.log(parseFloat(num1.value)*parseFloat(num2.value))

    result.textContent=parseFloat(num1.value)+parseFloat(num2.value)
}
function div() {
    let num1=document.getElementById("num1")
    let num2=document.getElementById("num2")
    console.log(parseFloat(num1.value)/parseFloat(num2.value))

    result.textContent=parseFloat(num1.value)+parseFloat(num2.value)
}
