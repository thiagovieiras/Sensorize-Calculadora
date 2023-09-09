function verificar() {
    var nome = input_nome.value
    var academia = input_nome_academia.value
    var clientes = Number(input_clientes.value)
    var total_perda = (clientes * 0.25) + (clientes * 0.16) 


    caixa_resultado.style.display = "block"
    resposta.innerHTML = `
    <h2 style="color: black; font-size: 22px; margin-bottom: 7px;">Olá <b>${nome}</b>, tudo bem?</h2><span style="color: black; font-weight: 500;">Vemos que se importa com o desempenho da <b>${academia}</b>. Você sabia que <b>25%</b> dos clientes acabam desistindo da academia por falta de tempo, e outros <b>16%</b> por conta da superlotação? Ou seja você pode vir a perder dentro dos proximos meses <b>${Math.trunc((clientes * 0.25) + (clientes * 0.16))} dos clientes</b>. Com nosso mais novo projeto chamado de <b>TechGym</b>, você preservará <b>47% dos clientes</b> dos quais tendem a desistir, e captará mais clientes pela qualidade de serviço.</span>`
}