![](./assets/hd-header.png)

## Front-End | Introdução a Programação

<details>
  <summary>1. JavaScript</summary>
  
  ### O que é o JavaScript?
  - É uma linguagem de programação interpretada
  - Permite criar aplicativo mobile, desktop, web, etc.
  - É usado no front-end e no back-end
  
  ### ECMAScript + JavaScript
  - [ECMAScript](https://www.ecma-international.org) é uma versão da linguagem JavaScript
  - ECMAScript 2021 é a versão mais recente da linguagem
  - Desde 2015, é lançado uma versão todo ano  
</details>

<details>
  <summary>2. Variáveis</summary>
  
  ### O que são variáveis?
  > As variáveis armazenam dados que podem ser definidos, atualizados e recuperados. Os valores atribuidos a uma variável têm um tipo. 

  ### Tipos básicos variáveis
  - String: texto
  > EX: 
  ![fetch](./assets/01_variaveis.png)
  - Number: números
  > EX: 
  ![fetch](./assets/02_variaveis.png)
  - Boolean: verdadeiro ou falso
  > EX: 
  ![fetch](./assets/03_variaveis.png)
  - Object: objeto
  > EX: 
  ![fetch](./assets/04_variaveis.png)
  - Array: lista
  > EX: 
  ![fetch](./assets/05_variaveis.png)
  - Function: função
  > EX: 
  ![fetch](./assets/06_variaveis.png)
  - Undefined: indefinido
  > EX: 
  ![fetch](./assets/07_variaveis.png)
  - Null: nulo
  > EX: 
  ![fetch](./assets/08_variaveis.png)

  ### Declaração de variáveis, var, let ou const?
  - var: variável global
  > EX: 
  ![fetch](./assets/09_variaveis.png)
  - const: constante de escopo local
  > EX: 
  ![fetch](./assets/10_variaveis.png)
  - let: variável de escopo local
  > EX: 
  ![fetch](./assets/11_variaveis.png)
</details>

<details>
  <summary>3. Assincronismo </summary>
  
  - O que é assincronismo?
  - É a capacidade da execução de um código, esperar o processamento de uma requisição realizada para uma API ou função, antes de continuar sua execução.

  > EX:
  Sync:
  ![async](./assets/async_01.png)
  Resultado:
  ![async](./assets/async_01_result.png)

  -----------------------------------------
  Async:
  ![async](./assets/async_02.png)
  Resultado:
  ![async](./assets/async_02_result.png)
    
</details>

<details>
  <summary>4. Fetch </summary>
  
  - O que é o fetch?
  - O fetch provê ao navegador uma interface para a execução de requisições HTTP através de Promises.

  > EX:
  API via CEP pelo navegador:
  ![fetch](./assets/fetch_01.png)
  API via CEP pelo POSTMAN:
  ![fetch](./assets/fetch_02.png)
  -----------------------------------
  Utilizando o fetch para obter dados de uma API:
  ![fetch](./assets/fetch_03.png)
  Resultado:
  ![fetch](./assets/fetch_03_result.png)
  ![Propagation](./assets/propagacao_5.png) 
  Resultado: 
  ![Propagation](./assets/propagacao_resultado_1.png)
  ![Propagation](./assets/propagacao_resultado_2.png)
    
</details>

<details>
  <summary>5. Tratando erros </summary>
  
  - O que é um erro?
  > É um evento que ocorre quando uma requisição é realizada e o servidor retorna um código de erro.

  > EX: 
  Coloquei um CEP errado e o servidor retornou um erro não tratado.
  ![erro](./assets/fetch_04.png)
  ------------------------------
  Tratando o error:
  ![erro](./assets/fetch_05.png)
  Resultado:
  ![erro](./assets/fetch_05_result.png)
</details>

###### tags: `Frontend` `nodeJS` `JavaScript`