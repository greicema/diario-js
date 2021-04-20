(function() {
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');
    const buttons = document.querySelectorAll('.btn');
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(img, name, text) {

        let fullImg = `./img/icone${img}.png`
        let customer = new Customer(fullImg, name, text)

        customers.push(customer)
    }

    createCustomer(0, 'Renata Vitória', 'Lixo queria da um soco no cara que inventou essa jogo')
    createCustomer(1, 'Valter Vencesclau', 'quem desenvolveu esse jogo deveria ser preso ... o cara faz de tudo pra dar errado ..nem abaixem pra não passar raiva')
    createCustomer(2, 'Taua Franca', 'Mano quebrei meu celular jogando esse jogo maldito eu tô escrevendo no celular do meu irmão')
    createCustomer(3, 'Gou Linniker', 'jogo bom e jogabilidade tmb e tals mais n poderia ser offline? Um monte de gente pulando e morrendo porai te atrapalha muito a jogar mas tirando isso recomento mt bom')

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }
        })
    })

})()