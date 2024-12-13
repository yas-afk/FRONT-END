// CRUD ->

// CREATE - CRIAR
// READ - LER
// UPDATE - ATUALIZAR
// DELETE - DELETAR

// site com os possiveis codigos
// https://http.cat/
document.querySelector('#logar').addEventListener('click'.logar)

function logar(){
    alert('')
    let nome_digitado = document.querySelector('#nome').value
    let nome_salvo =''
    let senha_digitada = document.querySelector('#senha').value
    let senha_salva =''
    let login = false
}

 fetch('dados.json').then((response) => {
 return response.json()
}).then((dados) => {
   dados.usuarios.map ((Informacoes) => {
        nome_salvo = Informacoes.nome
       senha_salva = Informacoes.senha
   

       if(nome_digitado == nome_salvo && senha_digitada == senha_salva){
            login = true
       }


            if(login){
                alert('Login efetuado')
                localStorage.setItem('nome',nome_digitado)
                window.location = '/home.html'

            }else{
    document.querySelector("#reposta").innerHTML = "Usuario e senha incorreto"
    }
     })
        })
        