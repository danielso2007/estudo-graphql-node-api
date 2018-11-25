<p align="center">
    <img src="https://cdn-images-1.medium.com/max/1200/1*IvCDlfi3vQfgyKO1eFv4jA.png"
        height="130">
</p>

[![Build Status](https://travis-ci.org/danielso2007/estudo-graphql-node-api.svg?branch=master)](https://travis-ci.org/danielso2007/estudo-graphql-node-api)
![version](https://img.shields.io/badge/version-1.1.0-blue.svg)
![GitHub package version](https://img.shields.io/github/package-json/v/danielso2007/estudo-graphql-node-api.svg)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/danielso2007/estudo-graphql-node-api.svg)](https://github.com/danielso2007/estudo-graphql-node-api/pulls)
[![GitHub issues](https://img.shields.io/github/issues/danielso2007/estudo-graphql-node-api.svg)](https://github.com/danielso2007/estudo-graphql-node-api/issues?q=is%3Aopen+is%3Aissue)
![GitHub last commit](https://img.shields.io/github/last-commit/danielso2007/estudo-graphql-node-api.svg)
[![GitHub issue/pull request author](https://img.shields.io/github/issues/detail/u/danielso2007/estudo-graphql-node-api/1.svg)](https://github.com/danielso2007/estudo-graphql-node-api/pulls)
![GitHub contributors](https://img.shields.io/github/contributors/danielso2007/estudo-graphql-node-api.svg)
![GitHub top language](https://img.shields.io/github/languages/top/danielso2007/estudo-graphql-node-api.svg)
[![GitHub](https://img.shields.io/github/license/danielso2007/estudo-graphql-node-api.svg)](https://github.com/danielso2007/estudo-graphql-node-api)
[![GitHub All Releases](https://img.shields.io/github/downloads/danielso2007/estudo-graphql-node-api/total.svg)](https://github.com/danielso2007/estudo-graphql-node-api/archive/master.zip)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![GitHub followers](https://img.shields.io/github/followers/danielso2007.svg?label=Follow&style=social)](https://github.com/danielso2007?tab=followers)

# Editando o README.md

[pandao.github.io/editor.md/en.html](https://pandao.github.io/editor.md/en.html "pandao.github.io/editor.md/en.html")

# Node Version Manager

Gerenciador de versionamento de instalação do Nodejs

[github.com/creationix/nvm](https://github.com/creationix/nvm "github.com/creationix/nvm")

# Verificar versão NPM

`npm ls -g --depth=0`

Atualizando npm: `npm i -g npm`

# Instalando as dependências do NPM

Utilizar: `npm i -D -E <pacote>`

`-D`: Instalar no devDependencies;

`-E`: Instalar a versão exata.

# Plugin VSCODE

Ícones no VSCode. Trocar em:* File > Preferences > File Icon Theme*

`vscode-icons`

# Automatizando tarefas com Gulp

Criar os typescripts de forma automática.

`npm i -D -E gulp gulp-typescript gulp-clean`

# Executando a aplicação

`npm run gulp`: Watch do gulp que fica observando e compilando o código no dist;

`npm run dev`: Executa o servidor nodemon atualizando a cada 5 segundos;

# Nodejs - Express

O Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.

Com uma miríade de métodos utilitários HTTP e middleware a seu dispor, criar uma API robusta é rápido e fácil.

[expressjs.com](https://expressjs.com/pt-br/ "expressjs.com")

# Definições de tipos

Definições de tipos para typescript.

`npm i -D -E @types/express @types/node`

# Instalando o GraphQl no Node

`npm i -S express-graphql graphql graphql-tools`

# Definições de tipos para GraphQl

`npm i -D -E @types/express-graphql @types/graphql`

# Corrigindo erro ao instalar os pacotes do Graphql

https://github.com/apollographql/graphql-subscriptions/issues/83

# Padrão de mensagem de commit (CHANGELOG automatizados):

O projeto terá o controle de versão e a geração do CHANGELOG automatizados com mensagens de confirmação  convencionais seguindo o padrão estabelecido por este documento.

`Lembrando: A mensagem de commit será pré-estabelecida no issue`

Para os commites do projeto, se o mensagem do commite não for definida no issue, usar o padrão definido abaixo:

_Para bugs:_

```sh
git commit -m "fix: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para os demais:_

```sh
git commit -m "feat: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para escopo opcional de um commit:_

```sh
git commit -m "feat(optional_scope): texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Algumas regras:_

1. Commits deve ser prefixado com um tipo, o qual consiste de um substantivo, `feat`, `fix`, etc, seguida de dois pontos e um espaço.
2. O tipo `feat`DEVE ser usado quando um commit adiciona um novo recurso ao seu aplicativo ou biblioteca.
3. O tipo `fix` DEVE ser usado quando um commit representa uma correção de bug para seu aplicativo.
4. Um escopo opcional pode ser fornecido após um tipo. Um escopo é uma frase que descreve uma seção da base de código entre parênteses, por exemplo, `fix(parser)`:

### Gerando o CHANGELOG do projeto

```sh
npm run release -- --release-as 1.1.0
```

### Referências:
[Standard Version](https://github.com/conventional-changelog/standard-version/blob/master/README.md)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)

# Shields para README

[Shields.io](https://shields.io/#/)

# Sequelize - ORM - NodeJs

Sequelize é um ORM baseado em promessa para o Node.js v4 e superior. Ele suporta os dialetos PostgreSQL, MySQL, SQLite e MSSQL e oferece suporte a transações sólidas, relações, replicação de leitura e muito mais.

[docs.sequelizejs.com](http://docs.sequelizejs.com/)

`npm i -S -E sequelize`

`npm i -D -E @types/sequelize`

### And one of the following:

`$ npm install -S -E pg pg-hstore`
`$ npm install --save mysql2`
`$ npm install --save sqlite3`
`$ npm install --save tedious // MSSQL`

### Sequelize Cli

`npm i -g sequelize-cli`

`sequelize init:config --config src/config/config.json`

# bcrypt.js

Bcrypt otimizado em JavaScript com dependências zero. Compatível com a ligação bcrypt do C ++ em node.js e também trabalhando no navegador.

`npm i -S -E bcryptjs`

`npm i -D -E @types/bcryptjs`

# Lodash

Uma moderna biblioteca de utilitários JavaScript que oferece modularidade, desempenho e extras.

`npm i -S -E lodash && npm i -D -E @types/lodash`

# JWT

Os JSON Web Tokens são um método RFC 7519 padrão da indústria aberto  para representar declarações com segurança entre duas partes.

O JWT.IO permite decodificar, verificar e gerar o JWT.

# jsonwebtoken

`npm i -E -S jsonwebtoken && npm i -E -D @types/jsonwebtoken`

# graphql-fields

Transforma GraphQLResolveInfo em um mapa dos campos solicitados. Flattens todos os fragmentos e campos duplicados em um objeto limpo para ver facilmente quais campos foram solicitados em qualquer nível.

`npm i -E -S graphql-fields`

# DataLoader

O DataLoader é um utilitário genérico a ser usado como parte da camada de busca de dados do aplicativo para fornecer uma API simplificada e consistente em várias fontes de dados remotas, como bancos de dados ou serviços da Web, por meio de lotes e caching.

`npm i -S -E dataloader` 

# Testes

## Mochajs

O Mocha é um framework de teste JavaScript rico em recursos, rodando em Node.js e no navegador, tornando os testes assíncronos simples e divertidos . Os testes Mocha são executados em série, permitindo relatórios flexíveis e precisos, enquanto mapeiam exceções não detectadas para os casos de teste corretos. Hospedado no GitHub .

https://mochajs.org/

## Chaijs

A API do Chai é dividida por estilo ou tarefa.

- Estilos de Asserção
  - A API Expect / Should abrange os estilos de declaração do BDD.
  - A API Assert abrange o estilo de asserção TDD.
- Plugins
  - A Plugin API será útil para qualquer pessoa interessada em construir plugins como ajudantes para DRY up seus testes, ou para o lançamento para a comunidade.
- Ferramentas
  - O Online Test Suite é um live run da suíte de testes do Chai. Use-o para garantir a compatibilidade do navegador.

https://www.chaijs.com/api/

`npm i -D -E mocha chai chai-http`

`npm i -D -E @types/mocha @types/chai @types/chai-http`

`npm i -D -E ts-node`

# nyc

`npm i nyc -D -E`

# CORS

https://www.npmjs.com/package/cors

`npm i -S -E cors && npm i -D -E @types/cors`

# Compression

https://www.npmjs.com/package/compression

`npm i -S -E compression && npm i -D -E @types/compression`

# Helmet

https://www.npmjs.com/package/helmet

`npm i -S -E helmet && npm i -S -E @types/helmet`

# PM2

O PM2 é um gerenciador de processo e tempo de execução de produção para aplicativos Node.js com um balanceador de carga integrado. Ele permite que você mantenha os aplicativos ativos para sempre, para recarregá-los sem tempo de inatividade e facilitar as tarefas comuns do Devops.

`npm i -g pm2`

https://www.npmjs.com/package/pm2