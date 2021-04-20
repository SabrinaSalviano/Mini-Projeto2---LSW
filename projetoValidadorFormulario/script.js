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

function isEmail(input){

   let value = input.value

   const FormatoEmail = /^\w+([\.-_]?\w+)*@\w+([\.-_]?\w+)*(\.\w{2,3})+$/;

   let teste = FormatoEmail.test(value)

   if(value.length==0){

       let divMensagem = document.getElementById("MensagemEmail")
       divMensagem.innerHTML="Este campo precisa ser preenchido."
       divMensagem.style.color="red"

   }
   if(value.match(FormatoEmail)){

       let divMensagem = document.getElementById("MensagemEmail")
       divMensagem.innerHTML="Email válido."
       divMensagem.style.color="green"

   }

   if(!value.match(FormatoEmail) && value.length!=0){

       let divMensagem =  document.getElementById("MensagemEmail")
       divMensagem.innerHTML = "Email inválido."
       divMensagem.style.color = "red"

  }
}

function senha(input){
    let valor = input.value
    let senhaFormato = /[A-Z\d!|@|#|$|%|^|&|*|(|)|-|_]/gi
    let teste = senhaFormato.test(valor)
    if(valor.length==0){
       let divMensagem = document.getElementById("msgSenha") 
       divMensagem.innerHTML="Este campo não pode ser vazio" 
       divMensagem.style.color="red"                          
   }
    if(valor.length<4&&valor.length!=0){
       let divMensagem = document.getElementById("msgSenha")  
       divMensagem.innerHTML="A senha precisa de no mínimo 4 dígitos"
       divMensagem.style.color="red"
    }
    else{
       if(teste==true){                                        
       let divMensagem =  document.getElementById("msgSenha") 
       divMensagem.innerHTML = "Senha Válida"             
       divMensagem.style.color = "green"
    }
       if(teste==false&&valor.length!=0){
       let divMensagem =  document.getElementById("msgSenha")
       divMensagem.innerHTML = "Senha inválida"
       divMensagem.style.color = "red"
    }
   }
}

