function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: <strong>${idade}</strong>`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Crianca
                img.setAttribute('src', 'foto1.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto2.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto3.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto4.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Crianca
                img.setAttribute('src', 'foto5.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto6.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto7.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto8.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos</strong>.`
        res.appendChild(img)
    }
}
