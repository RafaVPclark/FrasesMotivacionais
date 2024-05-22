// Ninja Api
const ApiKey = "wC3eBkt+2ba2TShnOSo4lg==bBgBuNoD7qZ4UVxU";

// Função para recuperar as frases dependendo do campo selecionado pelo usuário

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
        getImage(value);
        mostrarNaTelaQuotes(data);
    } catch (error) {
        console.log(error);
    }
}
// Função para mostrar na tela as quotes
function mostrarNaTelaQuotes(result){
        let frase = document.getElementById("frase-gerada");
        frase.innerHTML = result[0].quote;
}
// Função para recuperar o valor selecionado
function obterCitacaoSelecionada(){
    let categoria = document.getElementById("categoria").value;
    getQuotes(categoria);
}

// Função para gerar uma imagem baseada no input
async function getImage(value){
        try {
            const url = `https://api.api-ninjas.com/v1/randomimage?category=`;
            const options = {
                method:"GET",
                headers: {
                    'X-Api-Key' : ApiKey,
                    'Accept' : 'image/jpg'
                }
            };
            let category = "";
            if(value == 1){
                category = "wildlife";
            }else if(value == 2){
                category = "food";
            }else if(value == 3){
                category = "abstract";
            }else{
                category = "technology";
            }
            const response = await fetch(`${url}${category}`, options);
            const blob = await response.blob();
            const imgUrl = URL.createObjectURL(blob);
            console.log(imgUrl)
            monstrarNaTelaImagem(imgUrl);
        } catch (error) {
            alert("Erro em gerar imagem")
        }
}

function monstrarNaTelaImagem(imgUrl){
    let img = document.getElementById("img-blob");
    img.src = imgUrl;
}