# O que é React

- Biblioteca para construção de interfaces
- Utilizado para a construção de _Single-Page Applications_ (SPAs)
- Podemos chamar React de framework?
  - O React em si, a blioteca, não!
  - No entanto há um conjunto de bibliotecas React, como o React Native, por exemplo, que traz um ecossitema de desenvolvimento que podemos sim chamar de framework
- Tudo fica dentro do JavaScript
- React / ReactJS / React Native

---

```js
/**
 * Exemplo de código React
 */

import React from 'react';

import './button.css';
import icon from './button.png';

function Button() {
  // Retorna um conteúdo HTML
  return (
    <button>
      <img src={icon} />
    </button>
  );
}

export default Button;
```

---

## Vantagens

- Organização de código
  - Componentização
- Separação de responsabilidades
  - **Back-end**: regras de negócio
  - **Front-ends**: interfaces
- Uma API, vários clientes

## Criar um projeto React

- Criar um projeto sem TypeScript `$ npx create-react-app web`
- Criar um projeto com template TypeScript `$ npx create-react-app web --template typescript`

---

> Sempre consulte a [documentação](http://reactjs.org) do ReactJS
