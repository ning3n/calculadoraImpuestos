const ageInputEl = document.getElementById("age");
const incomeInputEl = document.getElementById("income");
const calculateButtonEl = document.getElementById("calculate");
const resultEl = document.getElementById("result");

function calculate(){

    if((ageInputEl.value === "") || (incomeInputEl.value === "")){
        alert("Debe llenar el formulario");
    }else{
        const age = ageInputEl.value;
        const income = incomeInputEl.value; 
        if(age < 21){
            resultEl.innerText = "No eres mayor de edad.";
        }else if(age > 100){
            resultEl.innerText = "ERROR: La edad es incorrecta";
        }else{
            if(income < 1000){
                resultEl.innerText = "No debe pagar impuestos"
            }else{
                const tax = (income * 0.40);
                resultEl.innerText = `Su total a pagar es de ${tax}`;
            }
        }
    }
}

calculateButtonEl.addEventListener("click", calculate);