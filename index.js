function jogar () {
    var cores = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","DarkOrange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","RebeccaPurple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"]
    var dezCores = []
    var corSorteada = null
    var corUsuario = null
    var vidas = 5
    //var res = document.querySelector('p#res')

    for (i = 0; i < 10 ; i++) {
        dezCores.push(cores[Math.floor(Math.random() * cores.length) +1].toLowerCase())
        dezCores.sort()
        corSorteada = dezCores[Math.floor((Math.random() * dezCores.length) + 1)]
    }
    dezCores = dezCores.join(' | ')

    do{
        corUsuario = prompt(`Eu estou pensando em uma dessas cores:\n\n${dezCores.toString()}\n\nQual cor eu estou pensando ?\n\nVidas: ${vidas}`).toLowerCase()

        if (corUsuario.length === 0 || !corUsuario.trim()) { //verifica se est?? vazio
            alert('Por favor, digite uma cor!!')
        } 
        else if (!dezCores.includes(corUsuario)) { //verificar se a cor existe
            alert('Essa cor n??o est?? entre as 10 possiveis ou n??o existe!\n\nTente novamente')
        } 
        else if (corUsuario != corSorteada) { //verifica se o usu??rio acertou o valor ou n??o
            verificar(corSorteada, corUsuario, vidas)
            vidas--
        } 
        else if (corUsuario == corSorteada){
            document.body.style.backgroundColor = corUsuario
            alert('Parab??ns, voc?? acertou!!')
            //res.innerHTML = 'Obrigado por jogar!!!'
            vidas = 0
        }
    }while (vidas != 0);

    function verificar(a,b,v) { //verificar a possi????o da cor esclhida para usu??rio para dar a dica
        if (a.charCodeAt(0) > b.charCodeAt(0)) {
            if (v == 1) {
                alert(`Desculpe, mas suas vidas acabaram!\n\nA correta era: "${a}"\n\nObrigado por jogar!!!`)
                //res.innerHTML = 'Atualize a p??gina ou d?? um F5 para jogar novamente.'
            } else {
                alert('Voc?? errou!!\n\nDica: Sua cor ?? alfab??ticamente menor que a minha\n\nPor favor, tente novamente!')
            }
        } else {
            alert('Voc?? errou!!\n\nDica: Sua cor ?? alfab??ticamente maior que a minha\n\nPor favor, tente novamente!')
        }
    }
}