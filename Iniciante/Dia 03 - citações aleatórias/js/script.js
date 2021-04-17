(function() {
    const quotes = [{
            quote: ' Tô fazendo amor com a favela toda.',
            author: 'Mc Jessica'
        },

        {
            quote: ' Não acho que quem ganhar ou quem perder, nem quem ganhar nem perder, vai ganhar ou perder. Vai todo mundo perder.',
            author: 'Dilma Rousseff'
        },

        {
            quote: ' BRASIIIIIIIIIILLLLLLL',
            author: 'Gil do Vigor'
        },

        {
            quote: ' O verde é esperança, né? O amarelo, sei lá, desespero. O azul não sei.',
            author: 'Benedita da Conceição'
        },

        {
            quote: ' Uuuuuuuuuuuuuuur. Ahhhhhhhhhrrrrrrr Uhrrrr. Ahhhhrrrrrr. Aaaarhg.',
            author: 'Chewbacca'
        },

        {
            quote: ' Qualquer coisa me bota no paredawn.',
            author: 'Karol Conká'
        },

        {
            quote: ' À esquerda, à esquerda.',
            author: 'Beyoncé'
        },

        {
            quote: ' Quando o grave bater eu vou quicar.',
            author: 'Pabllo Vittar'
        },

        {
            quote: ' Olha aqui menino, quantos anos você tem? Sei que cê tá lindo e merece parabéns.',
            author: 'Pabllo Vittar'
        },

        {
            quote: ' Soy el fuego que.',
            author: 'Alok',
        },
    ];
    const btn = document.getElementById("generate-btn");



    btn.addEventListener("click", function() {
        const random = Math.floor(Math.random() * quotes.length);
        console.log(random);

        document.getElementById("quote").textContent = quotes[random].quote;
        document.querySelector(".author").textContent = quotes[random].author;
    });

})();