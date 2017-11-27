## Consulta Remedios Frontend Test

O teste consiste em construir a interface de um pseudo ecommerce de games,
conforme as telas a seguir.

### Carrinho vazio
![mock](https://i.imgur.com/LOaPTGm.png)

### Com produtos no carrinho
![mock](https://i.imgur.com/iNHg9EK.png)

### Sobre o estilo
* A família de fonte usada no layout foi a OpenSans
* Faça o download dos assets (ícones e imagens) do teste [aqui](https://we.tl/GGwECSjU3d)

## Comportamentos esperados:
* Os produtos devem ser renderizados dinâmicamente através de um mock json presente neste readme
* Os valores exibidos no checkout (frete, subtotal e total) devem ser calculados dinâmicamente 
* O usuário poderá adicionar e remover produtos do carrinho
* O botão de adicionar ao carrinho será exibido no over do respectivo produto da listagem
* O botão de remover o item do carrinho será exibido no over de seu respectivo item no carrinho
* O usuário poderá filtrar os produtos por preço, popularidade (score) e ordem alfabética.

## Regra do cálculo de frete
A regra para o cálculo de frete é simples.
* A cada produto adicionado, deve-se somar R$ 10,00 ao frete.
* O frete é grátis para compras acima de R$ 250,00.

## O que iremos avaliar
Não é por acaso que não criamos uma estrutura pronta para você codar. 
Queremos saber como você organiza seu código, que ferramentas e tecnologias prefere usar,
e como soluciona os problemas descritos no teste.Por isso, você está livre para fazer o setup
de sua preferência, apenas se certifique que com estas escolhas você pode mostrar o seu melhor.
O único ponto obrigatório é usar nosso mock json como estrutura de dados.

**Importante:**
* Não esqueça de criar um readme explicando como rodar o projeto
* É importante que você utilize o git para versionamento e que faça commits pequenos, isso nos ajudará a acompanhar a
sua linha de raciocínio.

## Prazo e forma de entrega
Não estipulamos um prazo para a entrega do teste, apenas pedimos que antes de iniciá-lo,
faça uma estimativa do tempo que irá levar baseado na sua disponibilidade e nos encaminhe por email.

Levando em consideração que este teste será aplicado a outros desenvolvedores, pedimos que para a entrega, você publique o código em um repositório privado (bitbucket ou gitlab são boas alternativas).

### Mock JSON - Obrigatório
Renderize a página a partir dessa estrutura de dados

```js
[
  { 
    id: 312,
    name: "Super Mario Odyssey",
    price: 197.88,
    score: 100,
    image: "super-mario-odyssey.png"
  },
  { 
    id: 201,
    name: "Call Of Duty Infinite Warfare",
    price: 49.99,
    score: 80,
    image: "call-of-duty-infinite-warfare.png"
  },
  { 
    id: 102,
    name: "The Witcher III Wild Hunt",
    price: 119.5,
    score: 250,
    image: "the-witcher-iii-wild-hunt.png"
  },
  { 
    id: 99,
    name: "Call Of Duty WWII",
    price: 249.99,
    score: 205,
    image: "call-of-duty-wwii.png"
  },
  { 
    id: 12,
    name: "Mortal Kombat XL",
    price: 69.99,
    score: 150,
    image: "mortal-kombat-xl.png"
  },
  { 
    id: 74,
    name: "Shards of Darkness",
    price: 71.94,
    score: 400,
    image: "shards-of-darkness.png"
  },
  { 
    id: 31,
    name: "Terra Média: Sombras de Mordor",
    price: 79.99,
    score: 50,
    image: "terra-media-sombras-de-mordor.png"
  },
  { 
    id: 420,
    name: "FIFA 18",
    price: 195.39,
    score: 325,
    image: "fifa-18.png"
  },
  { 
    id: 501,
    name: "Horizon Zero Dawn",
    price: 115.8,
    score: 290,
    image: "horizon-zero-dawn.png"
  }
]
```

