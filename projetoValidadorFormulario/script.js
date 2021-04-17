function isName(input){
    let valor = input.value
    let nomeFormato = /([A-Zç]+ [A-Zç]+)[ A-Zç]+/i
    let teste = nomeFormato.test(valor)
    if(valor.length==0){
        let divMensagem = document.getElementById("msgNome")
        divMensagem.innerHTML="Este campo não pode ser vazio"
        divMensagem.style.color="red"
    }
    if(teste==true){
        let divMensagem = document.getElementById("msgNome")
        divMensagem.innerHTML="Nome válido"
        divMensagem.style.color="green"
     }
      if(teste==false&&valor.length!=0){
        let divMensagem =  document.getElementById("msgNome")
        divMensagem.innerHTML = "Nome inválido"
        divMensagem.style.color = "red"
   }
}
