const express = require('express')
const app = express()
const port = 3000

const cors = require('cors');

app.use((req, res, next) => {
	//Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexão
    res.header("Access-Control-Allow-Origin", "*");
	//Quais são os métodos que a conexão pode realizar na API
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});

app.get('/produtos', (req, res) => {

    const produtos = [
        {
            urlImagem: "https://cdn.shopify.com/s/files/1/0416/8083/0620/products/769011-Zoom.1_800x.jpg?v=1642042955",
            nomeProduto: "Pelúcia Hello Kitty",
            preco: "R$150,00"
        },
        {
            urlImagem:"https://m.media-amazon.com/images/I/71UhesRU0EL._AC_SL1500_.jpg",
            nomeProduto: "Pelúcia Cinamonroll",
            preco: "R$150,00"
        },
        {
            urlImagem:"https://i5.walmartimages.com/asr/8e66d0a1-2194-46fa-87b1-f9e78046b81c.10056888c21b7b3b252f0fbd1fb7eb97.jpeg",
            nomeProduto: "Pelúcia My Melody",
            preco: "R$150,00"
        },
        {
            urlImagem:"https://m.media-amazon.com/images/I/619CrdfVMYL._AC_SL1500_.jpg",
            nomeProduto: "Mochila My Melody",
            preco: "R$200,00"
        },
        {
            urlImagem:"https://i.pinimg.com/564x/f7/14/b5/f714b5b086ce25224746671cd4d03052.jpg",
            nomeProduto: "Colar Hello Kitty",
            preco: "R$15,00"
        },
        {
            urlImagem:"https://i.pinimg.com/564x/fd/52/f7/fd52f745ac82e0477826a678a352aeb2.jpg",
            nomeProduto: "Pelúcia Kuromi",
            preco: "R$150,00"
        },


    ]

    res.send(produtos)
})

app.listen(port, () => {
    console.log(`Servidor escutando na porta ${port}`)
})
