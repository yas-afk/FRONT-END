 // Promise é uma promessa!
 // Resolve - Cumprimos a promessa
 // Reject - 'Rejeitamos' a promessa, ou não cumpriu!
 // PROMISESTATE - estado da promessa!
 // FULLFILLED - 'promessa cumprida!'
 // REJECTED -'promessa quebrada!'
 // PROMISERESULT - motivo do status

 const promessa = new Promise((resolve,reject) => {
    let nome = 'Yasmin'

    if (nome == 'Yasmin'){
          // resolve('Usuario é Yasmin!')
          resolve((' adm : yasmin'))
          // fuciton alerta(){
          //  alert('oi)
          // }
          // resolve(alerta())
    }else{
        reject('Porque o usuario não é Yasmin!')
    }

 })
// then - espera o resolve e retorna o que 
// o resolver tiver, caso reject acusa um
// erro
// ' THEN ESPERA QUE DÊ CERTO'
 promessa.then((dadosdoResolve) =>{
    console.log(dadosdoResolve)
 })
// catch - espera o reject e retorna o que
// o reject correspondente tiver , caso
// resolve ele não executa
// 'CATCH ESPERA QUE DÊ ERRADO!'
 promessa.catch((infoDoErro) => {
    console.log(infoDoErro)
 })

 function sujeitoDemorado(){
    return new Promise((resolve) => {
         setTimeout(() => {
            console.log('rodando')
            resolve()
         },2000)
     })
}
  
    console.log('oi')
    sujeitoDemorado()
    console.log('TERMINEI')