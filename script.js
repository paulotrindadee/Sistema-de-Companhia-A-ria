document
  .getElementById('combinaVoosButton')
  .addEventListener('click', combinaVoos)

function combinaVoos() {
  const voosTextArea = document.getElementById('voos')
  const aeronavesTextArea = document.getElementById('aeronaves')
  const resultadosDiv = document.getElementById('resultados')
  const relatorioDiv = document.getElementById('relatorio')

  const voosList = voosTextArea.value.split('\n')
  const aeronavesList = aeronavesTextArea.value.split('\n')

  const combinacoes = []
  const aeronavesRelatorio = {}

  for (let i = 0; i < voosList.length; i++) {
    const vooInfo = voosList[i].split(';')
    const origemDestino = vooInfo[0]
    const tempoDuracao = parseInt(vooInfo[1])

    const aeronaveAleatoria =
      aeronavesList[Math.floor(Math.random() * aeronavesList.length)]

    combinacoes.push(
      `${origemDestino} - ${tempoDuracao} minutos de duração - ${aeronaveAleatoria}`
    )

    if (!aeronavesRelatorio[aeronaveAleatoria]) {
      aeronavesRelatorio[aeronaveAleatoria] = {
        voos: 0,
        duracaoTotal: 0
      }
    }
    aeronavesRelatorio[aeronaveAleatoria].voos++
    aeronavesRelatorio[aeronaveAleatoria].duracaoTotal += tempoDuracao
  }

  resultadosDiv.innerHTML = combinacoes.join('<br>')

  relatorioDiv.innerHTML = 'Relatório:<br>'
  for (const aeronave in aeronavesRelatorio) {
    relatorioDiv.innerHTML += `${aeronave} - ${aeronavesRelatorio[aeronave].voos} voos - tempo total: ${aeronavesRelatorio[aeronave].duracaoTotal} minutos<br>`
  }
}
