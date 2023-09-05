function verificar() {
    var nome = input_nome.value
    var clientes = Number(input_clientes.value)
    var total_perda = (clientes * 0.25) + (clientes * 0.16) 
    var equip = input_equipamentos.value


    caixa_resultado.style.display = "block"
    resposta.innerHTML = `
    <span style="color: black; font-weight: 600;">Olá ${nome}, tudo bem? Você sabia que 25% dos clientes acabam desistindo da academia por falta de tempo, e outros 16% por conta da superlotação? Ou seja você pode vir a perder dentro dos proximos meses ${Math.trunc((clientes * 0.25) + (clientes * 0.16))}% dos clientes. Com nosso metodo TechGym você preservará 47% dos clientes dos quais tendem a desistir, e captará mais clientes pela qualidade de serviço.</span>`
}