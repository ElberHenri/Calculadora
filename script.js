    function calcular(tipo,valor) {
        if (tipo === 'acao') {
            if (valor === 'c') {
                //limpar o visor (id resultado)
                document.getElementById('resultado').value = ''
            }

            if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
                document.getElementById('resultado').value += valor
            }

            if (valor === '=') {
                //eval serve para que o javascript 'some' strings, ex: 44+55, resultado sem eval = 4455, com eval: 99
                var valor_campo = eval(document.getElementById('resultado').value)
                document.getElementById('resultado').value = valor_campo
            }
         } else if (tipo === 'valor') {
             if (valor > 0) {
                document.getElementById('resultado').value += valor
             }else {
                document.getElementById('resultado').value += '0.'
             }
        } else if (document.getElementById('resultado').value > 0) {
            document.getElementById('resultado').value === '0'
        }
    }