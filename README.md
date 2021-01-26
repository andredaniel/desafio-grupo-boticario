

# Revendedor O Boticário
https://cashback-boti.netlify.app/

Aplicação desenvolvida como desafio do Grupo Boticário

[![Netlify Status](https://api.netlify.com/api/v1/badges/91d065bb-a9d4-4deb-9b11-d8664bae44af/deploy-status)](https://app.netlify.com/sites/cashback-boti/deploys)

## Configuração local do projeto
A aplicação foi desenvolvida utilizando `create-react-app`, e pode ser executada através do comando `npm run start` ou `yarn start`, porém, como o projeto também utiliza cloud functions da Netlify, para ter acesso às funções, seria necessário utilizar o comando `netlify dev` que disponibiliza a aplicação em `localhost:8888`.

### 1. Dependências globais
Para executar o projeto em ambiente local é necessário instalar o netlify-cli:

>**NPM**: `npm install netlify-cli -g`

ou

>**Yarn**: `yarn global add netlify-cli`

### 2. Dependências locais
Na raiz do projeto execute o seguinte comando:
> **NPM**: `npm install`

ou

> **Yarn**: `yarn`

### 3. Executando a aplicação
Ainda na raiz do projeto execute o seguinte comando:

> **NPM**: `npm run dev`

ou

> **Yarn**: `yarn dev`

Neste caso o script `yarn dev` é apenas um alias para `netlify dev`

### 4. Executando testes
Testes:
`yarn test`

Coverage:
`yarn test:coverage`

## Principais tecnologias utilizadas

- [x] Typescript
- [x] React
- [x] React Hooks
- [x] React Context
- [x] React Testing Library
- [x] Styled Components
- [x] Netlify

## Regras de negócio
As regras de negócio do projeto foram centralizadas na pasta `functions`, que é utilizada pelo `netlify` como `lambda-functions`.

### Cashback
A função fica responsável por gerar um status aleatório para o pedido.

```js
const  statuses  = ['APPROVED',  'DISAPPROVED',  'IN_VALIDATION'];

const  randomStatus  =  ()  =>  {
	const  key  =  Math.floor(Math.random() *  3);
	return statuses[key];
}
```

Da mesma forma, o valor aplicado para cashback é um número aleatório.

## Decisões de arquitetura
O desenvolvimento de um novo produto ou funcionalidade dentro de um produto já existente geralmente exige que as entregas sejam feitas de forma eficiente para evitar altos custos que possam inviabilizar o projeto. Sendo assim, na escolha das ferramentas para o desenvolvimento de uma aplicação, é preciso considerar questões como custo de infraestrutura, curva de aprendizagem, disponibilidade de profissionais no mercado, dentre outras coisas.

**Typescript**

A utilização do Typescript, além de muitas outras vantagens, permite que erros sejam descobertos ainda durante a implementação, uma vez que é possível utilizar o Intellisense da IDE, permitindo visualizar pontos de melhoria e problemas de compilação.

**React**

O desenvolvimento utilizando bibliotecas como o React, permite a criação de componentes que podem ser reutilizado em novas partes da aplicação, evitando redundâncias, de forma a contribuir que a aplicação fique organizada, escalável e manutenível.

**React Context**

No ecossistema React existem soluções robustas que permitem o gerenciamento avançado do estado da aplicação, porém como o projeto desenvolvido tem características mais simples, que se assimilam a um MVP, a utilização do React Context se torna mais viável, uma vez que também proporciona um fácil controle de estados que pode ser compartilhado entre componentes distantes.

**Lazy Load/Code-Splitting**

_Code Splitting_

Essa função permite que você divida seu código em diversos bundles qual eles também poderão ser carregados por demanda ou em paralelo. Pode ser usado para manter pacotes menores. Se usado corretamente, você poderá ter um grande impacto no tempo de carregamento.

_Lazy Loading_

É uma das formas de otimizar seu site ou aplicação. Essa prática essencialmente envolve a separação do seu código em pontos lógicos, e então carregar isso quando o usuário necessita ou quando irá exigir um novo bloco do código. Isso acelera a parte inicial da aplicação e reduz seu peso geral, pois alguns blocos podem nunca ser utilizados.

**Styled Components**

Utilizar o método _CSS-in-JS_ para estilizar os componentes proporciona diversas vantagens, dentre elas: o estilo se aplica apenas no escopo do componente, o número de requisições HTTP é reduzido, uma vez que não são necessários carregar arquivos CSS, os estilos ficam disponíveis sob demanda.

**Framework CSS**

Na estilização da aplicação não foi utilizado nenhum framework CSS com o propósito de demonstrar meus conhecimentos, porém em certos casos isso também pode ser uma grande vantagem dependendo da complexidade do framework ou da quantidade de recursos oferecidos que pode tornar a aplicação mais pesada.

**Backend**

A comunicação da aplicação é feita através de API Rest disponibilizada na Netlify, através das cloud functions.

Para a autenticação dos usuários, foi utilizado o Netlify Identity, que valida o usuário e em seguida retorna os dados de compras que estão hospedados em um serviço de mock.

Como a aplicação busca dados apenas na _cloud function_ o usuário final não tem acesso à origem.

**_Mock API_** 👉 https://5fffb468cb21e10017af7e99.mockapi.io/api/orders

## Pontos de melhoria
Durante a construção da aplicação foram observadas possibilidades de melhoria que não foram aplicadas mas que seriam pertinentes em uma aplicação real.

 - [ ] Implementar um loader que não bloqueie a navegação do usuário
 - [ ] Abstrair o componente de Status para um Badge genérico que possa ser utilizado em novas implementações
 - [ ] Não utilizar tabelas pois existem melhores abordagens para exibição de lista em dispositivos móveis
 - [ ] Aplicar regras de validação de data e CPF
 - [ ] Incluir um seletor de data
 - [ ] Melhorar a largura dos inputs nos forms em telas largas
 - [ ] Traduzir mensagens de erro da aplicação
