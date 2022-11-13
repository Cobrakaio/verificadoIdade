function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked) {
            genero ='Homem'
            if(idade >= 0 && idade < 10){
                //CRIANÇA
                img.setAttribute('src', 'fotoBabyM.png')
            } else if(idade < 18){
                //JOVEM
                img.setAttribute('src', 'fotoJovemM.png')
            } else if(idade < 50 ){
                //ADULTO
                img.setAttribute('src', 'fotoAdultoM.png')
            } else{
                //IDOSO
                img.setAttribute('src', 'fotoIdosoM.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >= 0 && idade < 11){
                //Criança
                img.setAttribute('src', 'fotoBabyF.png')
            } else if (idade < 18){
                //JOVEM
                img.setAttribute('src', 'fotoJovemF.png')
            } else if (idade < 50){
                //ADULTO
                img.setAttribute('src', 'fotoAdultoF.png')
            } else {
                //IDOSO
                img.setAttribute('src', 'fotoIdosoF.png')
            }
        }
        res.style.textAlign = 'center';//ALINHANDO A DIV
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`//ESCREVENDO NA DIV
        res.appendChild(img)//ADICIONANDO IMAGEM NA DIV
    }

}

