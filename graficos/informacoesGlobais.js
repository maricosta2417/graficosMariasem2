const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    console.log(dados);
    const paragrafo = document.createElement("p")
    paragrafo.classList.add("graficos-conteiner__texto")

    paragrafo.innerHTML = `Você sabia que no mundo tem <span> ${dados.total_pessoas_mundo}</span> de pessoas 
    e que aproximadamente <span> ${dados.total_pessoas_conectadas}</span> pessoas estao conectadas em alguma 
    rede social e passam em media <span> ${dados.tempo_medio}</span> horas conectadas.`
    console.log(paragrafo)
    const conteiner = document.getElementById("graficos-conteiner")
    conteiner.appendChild(paragrafo)
  }
  
  vizualizarInformacoesGlobais()
  