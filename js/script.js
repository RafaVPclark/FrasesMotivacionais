// Ninja Api
const ApiKey = "wC3eBkt+2ba2TShnOSo4lg==bBgBuNoD7qZ4UVxU";

async function getQuotes(value){
    try {
        const url = `https://api.api-ninjas.com/v1/quotes?category=`;
        const options = {
            method:"GET",
            headers: {
                'X-Api-Key' : ApiKey
            }
        };
        let category = "";
        if(value == 1){
            category = "courage";
        }else if(value == 2){
            category = "fitness";
        }else if(value == 3){
            category = "humor";
        }else{
            category = "inspirational";
        }
        const response = await fetch(`${url}${category}`,options);
        const data = await response.json();
        mostrarNaTelaQuotes(data);
    } catch (error) {
        console.log(error);
    }
}

function mostrarNaTelaQuotes(result){
        let frase = document.getElementById("frase-gerada");
        frase.innerHTML = result[0].quote;
}

function obterCitacaoSelecionada(){
    let categoria = document.getElementById("categoria").value;
    getQuotes(categoria);
}