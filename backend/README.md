# Configure o TypeScript no Node.js

- Instale o TypeScript no projeto como dependência de desenvolvimento
  - `$ npm install typescript -D`
- Instale a biblioteca para o Node.js entender o código TypeScript como dependência de desenvolvimento
  - `$ npm install ts-node -D`
- Crie o arquivo `tsconfig.json`, arquivo de configuração do TypeScript
  - `$ npx tsc --init`
- Comando para iniciar o servidor
  - `$ npx ts-node src/server.ts`
  - Instale o pacote para assistir às alterações no projeto e autoreiniciar o servidor
    - `$ npm install ts-node-dev -D`
    - Execute o comando `$ npx ts-node-dev src/server.ts` para iniciar

---

Crie um _script_ no `package.json` para iniciar o servidor de forma mais prática.

```json
{
  // ...
  "scripts": {
    // ...
    "dev": "ts-node-dev src/server.ts"
  }
  // ...
}
```

Execute o _script_ com o comando `$ npm run dev`.
