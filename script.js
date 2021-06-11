function verificar() {
  var data = new Date ()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || Number(fano.value) > ano){
    window.alert("ERRO Verifique os dados e tente novamente !")
} else { 
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img') // carregando imagem pelo js 
      img.setAttribute('id', 'foto') // criando id pelo js 
      if (fsex[0].checked) { 
        genero = 'Homem'
        if (idade >=0 && idade <10){
          //crianca
          img.setAttribute('src', 'foto-bebe-m.png')
        } else if ( idade <21){
          //jovem
          img.setAttribute('src', 'foto-jovem-m.png')
        } else if (idade<50){
          //Adulto
          img.setAttribute('src', 'foto-adulto-m.png')
        } else {
          //idoso
          img.setAttribute('src', 'foto-idoso-m.png')
        }
      }else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >=0 && idade < 16){
          //crianca
          img.setAttribute('src', 'foto-bebe-f.png')
        } else if ( idade <21){
          //jovem
          img.setAttribute('src', 'foto-jovem-f.png')
        } else if (idade<50){
          //Adulto
          img.setAttribute('src', 'foto-adulto-f.png')
        } else {
          //idoso
          img.setAttribute('src', 'foto-idoso-f.png')
        }
      }
      res.style.margin = '10px'
      res.innerHTML = ` Dectectamos um(a) ${genero} com ${idade} anos.`
      res.appendChild(img) //adicionar um elemento
}
}