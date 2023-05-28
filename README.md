![Gif DNC Kawaii Store](./images/dnc kawaii store.gif)


### Bem-vindo(a) à documentação da Lojinha DNC! :heart:

Este projeto faz parte do quinto módulo do curso da DNC, onde são abordados conceitos avançados de **JavaScript**, **Bootstrap**, **CSS** e **API**. No curso, a loja é focada em artigos de tecnologia, como robôs. No entanto, decidi personalizar o projeto1 e transformá-lo em uma loja fictícia de artigos fofinhos, algo que adoro muuuuito!

Eu me desafiei a adicionar funcionalidades extras e personalizar a estilização da landing page. No início, confesso que fiquei um pouco assustada com a magnitude do projeto, mas estou muito satisfeita com o resultado final. Tenho consciência de que ainda tenho muito a melhorar, tanto neste projeto quanto em futuros desafios, mas esse é apenas o começo!

Sites das referências utilizadas para personalizar o projeto:
# Fotos:
- Png Wing
- Fav Png
- Tumblr Sweet Roll
- Pngaaa.com
- Deviantart (Fieryunikitty)
- Shopify
- Nepal Ubuy
- Amazon
- [Projeto DNCStore](https://github.com/silasvergilio/dnc-store-advanced): O projeto original que foi feito no módulo.

Nesta documentação, você encontrará informações sobre o funcionamento da DNC Kawaii, instruções para baixar e instalar o projeto em seu dispositivo e detalhes sobre as funcionalidades adicionais que foram implementadas.

Sinta-se à vontade para explorar a loja, experimentar as funcionalidades e, se tiver alguma dúvida ou sugestão, entre em contato.

Espero que você goste tanto quanto eu do resultado final!

Para instalar a DNC Kawaii em sua máquina local, siga as etapas abaixo:

1. Faça o **download** do código-fonte da Loja DNC em um formato compactado, como um arquivo **ZIP**.

2. Extraia o conteúdo do arquivo ZIP para uma pasta de sua escolha em seu dispositivo.

3. Certifique-se de ter um navegador da web instalado em sua máquina, como o **Google Chrome**, **Mozilla Firefox**, /**Microsoft Edge**, entre outros. Caso não tenha um navegador instalado, faça o download e instale um de sua preferência.

4. Abra o navegador da web e acesse a pasta onde você extraiu o projeto.

5. Localize o arquivo `index.html` na pasta principal da loja.

6. Clique duas vezes no arquivo `index.html` para abri-lo no navegador. A página inicial da loja será exibida.

Agora você tem a Loja DNC instalada em sua máquina local e pode explorar suas funcionalidades no navegador.

Observação: A Loja DNC é uma loja virtual estática, ou seja, não requer instalação de bancos de dados ou configurações de servidor. Ela pode ser executada diretamente no navegador da web sem a necessidade de um servidor web específico.


## Estrutura do Projeto
O projeto da Loja DNC possui a seguinte estrutura de diretórios:

- `css/`: Contém os arquivos CSS utilizados no projeto.
- `images/`: Armazena as imagens utilizadas na loja.
- `js/`: Contém os arquivos JavaScript utilizados no projeto.
- `index.html`: Página inicial da loja.

## HTML
O arquivo `index.html` contém o código HTML da página inicial da loja. Ele é dividido em várias seções:

- **Header**: Contém o cabeçalho da página com o logo da loja e o menu de navegação.
- **Slider**: Exibe um carrossel com imagens e informações sobre os produtos em destaque.
- **Produtos**: Apresenta uma seção com os produtos disponíveis na loja, exibindo suas imagens, nomes, preços e botões para adicionar ao carrinho.
- **Sobre Nós**: Descreve informações sobre a loja, sua história e sua missão.
- **Depoimentos**: Exibe depoimentos de clientes fictícios, satisfeitos com os produtos e serviços da loja.
- **Contato**: Permite aos usuários entrar em contato com a loja através de um formulário.

## CSS
O diretório `css/` contém os arquivos CSS utilizados no projeto. Alguns dos arquivos CSS relevantes incluem:

- `bootstrap.min.css`: Arquivo CSS do framework Bootstrap, responsável pela estilização básica da página.
- `style.css`: Arquivo CSS personalizado que define estilos específicos da loja, como cores, tipografia e layout.

## JavaScript
O diretório `js/` contém os arquivos JavaScript utilizados no projeto. Alguns dos arquivos JavaScript relevantes incluem:

- `jquery.min.js`: Biblioteca jQuery, utilizada para simplificar a manipulação do DOM e adicionar interatividade à página.
- `popper.min.js`: Biblioteca Popper.js, utilizada pelo Bootstrap para gerenciar popovers e tooltips.
- `bootstrap.bundle.min.js`: Arquivo JavaScript do Bootstrap, que inclui o jQuery, o Popper.js e os plugins JavaScript do Bootstrap.
- `custom.js`: Arquivo JavaScript personalizado com funções específicas da loja, como a manipulação do carrossel de produtos em destaque e o envio de formulário de contato.

## Dependências Externas
A loja utiliza algumas bibliotecas externas para estilização e funcionalidades:

- Bootstrap: Framework CSS utilizado para a criação de layouts responsivos e componentes reutilizáveis.
- Owl Carousel: Biblioteca JavaScript utilizada para criar carrosséis de imagens, como o utilizado na exibição dos produtos em destaque.
- jQuery: Biblioteca JavaScript utilizada para simplificar a manipulação do DOM e a interação com elementos da página.
- FancyBox: Biblioteca JavaScript utilizada para exibir imagens em um lightbox, caso haja necessidade de exibição ampliada de produtos.


## Funcionalidade de Compra

A funcionalidade de compra da loja permite que os usuários adicionem produtos ao carrinho de compras e visualizem o total da compra. Além disso, ao clicar no botão "Comprar", o usuário é redirecionado para uma página de agradecimento, onde é exibido o valor total da compra.

### Adicionando produtos ao carrinho

Quando um usuário clica no botão "Adicionar ao Carrinho" em um produto, o JavaScript é acionado para adicionar o produto ao carrinho de compras. A função `exibirCarrinho()` é chamada para atualizar a exibição do carrinho na página.

### Atualizando o carrinho de compras

A função `exibirCarrinho()` é responsável por atualizar a exibição do carrinho de compras na página. Ela itera sobre os itens no carrinho e cria elementos `<li>` para cada item, exibindo o nome do produto e o preço correspondente. Além disso, a função calcula o valor total da compra somando os preços de todos os itens.

### Finalizando a compra

Ao clicar no botão "Comprar", a função `btnComprar.addEventListener('click', function() {...})` é acionada. Essa função obtém o valor total da compra a partir do elemento HTML `totalCarrinho`, que exibe o total atualizado. Em seguida, ela constrói uma mensagem de agradecimento contendo o valor total da compra. Por fim, redireciona o usuário para uma página de agradecimento, passando os parâmetros `total` e `mensagem` na URL.


```javascript
const btnAdicionarAoCarrinho = document.getElementsByClassName('adicionar-ao-carrinho');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');
const btnComprar = document.getElementById('btn-comprar');
let carrinho = [];

// Adicionar produtos ao carrinho
for (let i = 0; i < btnAdicionarAoCarrinho.length; i++) {
   btnAdicionarAoCarrinho[i].addEventListener('click', function() {
      const nome = this.getAttribute('data-nome');
      const preco = parseFloat(this.getAttribute('data-preco'));

      carrinho.push({ nome, preco });
      exibirCarrinho();
   });
}

// Atualizar exibição do carrinho de compras
function exibirCarrinho() {
   itensCarrinho.innerHTML = '';
   let total = 0;

   for (let i = 0; i < carrinho.length; i++) {
      const item = document.createElement('li');
      item.innerText = carrinho[i].nome + ' - R$' + carrinho[i].preco.toFixed(2);
      itensCarrinho.appendChild(item);

      total += carrinho[i].preco;
   }

   totalCarrinho.innerText = 'Total: R$' + total.toFixed(2);
}

// Finalizar compra
btnComprar.addEventListener('click', function() {
   const valorTotal = totalCarrinho.innerText.substring(7);
   const mensagem = 'Obrigado pela sua compra!\nValor total da compra: R$' + valorTotal

;

   // Redirecionar para a página de agradecimento e passar os parâmetros
   window.location.href = 'total.html?total=' + encodeURIComponent(valorTotal) + '&mensagem=' + encodeURIComponent(mensagem);
});
```

## Conexão com "Banco de dados"

A função `getProducts()` é responsável por fazer uma requisição GET para a URL 'http://localhost:3000/produtos' e obter os dados dos produtos em formato JSON. Em seguida, ela itera sobre os dados recebidos e cria elementos HTML dinamicamente para exibir os produtos na página.

```javascript
function getProducts() {
   fetch('http://localhost:3000/produtos')
      .then((response) => response.json())
      .then((dados) => {
         var list = document.getElementById('product-list');
         for (let i = 0; i < dados.length; i++) {
            list.innerHTML =
               list.innerHTML +
               `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div class="sport_product card-produto">
                     <figure><img src=${dados[i].urlImagem} alt="img" /></figure>
                     <h3>R$<strong class="price_text">${dados[i].preco}</strong></h3>
                     <h4>${dados[i].nomeProduto}</h4>
                  </div>
               </div>`;
         }
      });
}

getProducts();
```

Nesse trecho de código, a função `getProducts()` é chamada para buscar os produtos e exibi-los na página. Os produtos são exibidos em um elemento com o ID "product-list". Cada produto é representado por um elemento `<div>` com a classe "sport_product card-produto" (optei por não alterar essa classe, deixando como veio). A imagem do produto é definida com o atributo `src` sendo preenchido com o valor da propriedade `urlImagem` do objeto de produto, o preço é exibido dentro de uma tag `<strong>` com a classe "price_text", e o nome do produto é exibido dentro de uma tag `<h4>`.

Por fim, a função `setInterval(alternarDestaque, 1500)` é usada para chamar a função `alternarDestaque()` a cada 1500 ms. Ela é responsável por alternar o destaque dos cards dos produtos automaticamente.


## Considerações Finais
Esta documentação fornece uma visão geral da estrutura e dos componentes principais da Loja DNC Kawaii. A loja oferece uma experiência de compra agradável aos usuários, exibindo produtos em destaque, permitindo a navegação pelos diferentes produtos disponíveis e oferecendo um meio de contato para eventuais dúvidas ou solicitações.
Possui uma vasta variedade de produtos fofinhos para quem gosta de pelúcias e afins.
Quanto à responsividade, não sei se deixei bem estruturada por ter feito algumas alterações na página, tentei ajustar, não sei se vai se adequar certinho em todas as telas, mas qualquer dúvida ou sugestão, só entrar em contato comigo! :smile:
