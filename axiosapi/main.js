

// URL DA API 
const url="http://localhost:5500/api"

//passando o coropo de novo usuário
const newUser = {
    name: "Bruno",
    avatar:"http://lorempixel.com.br/400/200",
    city:"Campo Grande"
}
const atualizaUser = {
    name: "Mike",
    avatar:"http://lorempixel.com.br/400/200",
    city:"São Carlos"
}
// pegar o usuário 
function getUser(){
    axios.get(url)
    //usando promisse 
    //caso de certo entra no then
    .then(response => {
        //response é um objeto cheio de outras informações e o que queremos ficar somente dentro do "data"
        const data = response.data
        //acessando o conteudo de texto da div pelo id
        //JSON.stringfy() converte o texto de json para string renderizável 
        renderResults.textContent = JSON.stringify(data)
    })
    //caso de erro entra no catch 
    .catch(error => console.log(error))
}
getUser()
//INSERINDO dados para a API (CREATE)
function addNewUser(){
    //primeiro parâmetro é a url da api, segundo parâmetro são os dados que vamos enviar para a API.
    axios.post(url, newUser)
    //no post também recebemos uma resposta ou erro
    .then(response =>{
        alert(JSON.stringify(response.dataS))
    })
    .catch(error => console.log(error))
}
//addNewUser()

//ATUALIZANDO dados da API (UPDATE)
function updateUser(){
    axios.put(`${url}/2`, atualizaUser)
    .then(response => {
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}
//updateUser()

//DELETANDO dados da API (DELETE)
function deleteUser(){
    axios.delete(`${url}/12`)
    .then(response =>{
        alert(JSON.stringify(response.data))
    })
    .catch(error => console.log(error))
}

//deleteUser()

function getOneUser(){
    axios.get(`${url}/8`)
    .then(response =>  {
        const data = response.data
        renderResults.textContent = JSON.stringify(data)
    })
    .catch(error => console.log(error))
}

getOneUser()
