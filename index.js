function copyright() {
    const date = new Date()
    const year = date.getFullYear()

    const p = document.getElementById('copyright')

    p.textContent = `${year} © CaioDev - Todos os direitos reservados`
}

copyright()